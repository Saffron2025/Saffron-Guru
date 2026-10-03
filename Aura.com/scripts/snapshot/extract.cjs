const { chromium } = require('playwright'); const fs = require('fs');
(async () => {
  const raw = JSON.parse(fs.readFileSync('/tmp/sg-snapshot/raw.json','utf8'));
  const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium'}).catch(()=>chromium.launch());
  const p = await b.newPage(); await p.route('**/*', r => r.abort());
  const out = {};
  for (const [route, {html, meta}] of Object.entries(raw)) {
    await p.setContent('<div id="root">'+html+'</div>');
    const body = await p.evaluate(() => {
      const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
      const root = document.querySelector('#root');
      const skip = el => el.closest('nav, .aura-navbar, footer, .aura-footer, script, style, button, form, iframe, svg, .fixed-protection-button');
      const parts = []; let chars = 0; const seenI = new Set(), seenT = new Set();
      const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT); let el;
      while ((el = w.nextNode())) {
        if (chars > 15000) break; if (skip(el)) continue;
        const tag = el.tagName.toLowerCase();
        const txt = () => el.textContent.replace(/\s+/g,' ').trim();
        if (/^h[1-4]$/.test(tag)) { const t = txt(); if (t && !seenT.has(t)) { seenT.add(t); parts.push(`<${tag}>${esc(t)}</${tag}>`); chars += t.length; } }
        else if (tag === 'p' || (tag === 'li' && !el.querySelector('p,li'))) { if (tag==='p' && el.closest('li')) continue; const t = txt(); if (t.length > 2 && !seenT.has(t)) { seenT.add(t); parts.push(tag==='li' ? `<p>• ${esc(t)}</p>` : `<p>${esc(t)}</p>`); chars += t.length; } }
        else if (tag === 'div' && el.children.length === 0) { const t = txt(); if (t.length > 40 && !seenT.has(t)) { seenT.add(t); t.split(/\n{2,}|(?<=\.)\s+(?=[A-Z#*-])/).forEach(x=>{x=x.replace(/^[#*\-\s]+/,'').replace(/\*\*/g,'').trim(); if(x) parts.push(`<p>${esc(x)}</p>`)}); chars += t.length; } }
        else if (tag === 'img') { const s = el.getAttribute('src')||''; if (!s.startsWith('/') || seenI.has(s)) continue; seenI.add(s); parts.push(`<img src="${esc(s)}" alt="${esc(el.getAttribute('alt')||'Saffron Guru')}" loading="lazy" decoding="async">`); }
      }
      const links = [...new Set([...root.querySelectorAll('a[href^="/"]')].filter(a=>!skip(a)).map(a => a.getAttribute('href')).filter(h => !/^\/(login|signup|userdashboard|verify-otp|AccountIn)/.test(h)))].slice(0, 40);
      return { body: parts.join('\n'), links, h1: (root.querySelector('h1')||{}).textContent || '', words: parts.join(' ').replace(/<[^>]+>/g,' ').split(/\s+/).filter(Boolean).length, imgs: seenI.size };
    });
    out[route] = { meta, ...body };
  }
  fs.writeFileSync(require('path').join(__dirname,'../prerender-data.json'), JSON.stringify(out));
  for (const [r, v] of Object.entries(out)) console.log(r.padEnd(42), 'words', String(v.words).padStart(5), 'imgs', String(v.imgs).padStart(3), '|', (v.meta.title||'(home)').slice(0,40), '| h1:', v.h1.replace(/\s+/g,' ').slice(0,40));
  await b.close();
})();
