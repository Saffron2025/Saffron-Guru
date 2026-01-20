export const articles = [
  // =========================
  // 1️⃣ Bank Account Freeze Alert Scam
  // =========================
     {
    id: "bank-account-freeze-scam",
    title: "Fake Bank Account Freeze Warnings Are Being Used to Trap Customers",
    highlight: "Bank Account Freeze Alert Scam",
    author: "Craig Hale",
    date: "Jan 20, 2026",
    category: "Online Banking Fraud",
    image: "/Hero/bank-scam.webp",
    lead:
      "Cybercriminals are circulating fake bank alerts that falsely claim accounts have been frozen, pushing users into hurried decisions that lead to financial loss.",
    content: [
      {
        type: "p",
        text:
          "Security analysts have observed a steady increase in scam messages posing as official bank notifications. These messages inform recipients that their accounts have been restricted due to alleged suspicious activity."
      },
      {
        type: "p",
        text:
          "By creating a sense of urgency, attackers encourage victims to respond immediately rather than verify the alert through legitimate banking channels."
      },
      {
        type: "blockquote",
        text:
          "Fear-driven messages are often more effective than technical exploits."
      },
      {
        type: "h2",
        text: "How the Fraud Is Carried Out"
      },
      {
        type: "p",
        text:
          "The scam typically arrives via SMS or email that closely imitates official bank language, branding, and formatting."
      },
      {
        type: "ul",
        items: [
          "Alert claims an account has been temporarily frozen",
          "User is urged to confirm identity immediately",
          "Fake links or phone numbers are provided",
          "Sensitive details such as OTPs are requested",
          "Funds are accessed without authorization"
        ]
      },
      {
        type: "info",
        text:
          "Banks do not request passwords, PINs, or one-time codes through unsolicited messages."
      }
    ],
    footer:
      "Verifying alerts directly through official banking apps remains the safest defense against such scams."
  },
  // =========================
  // 2️⃣ QR Code Payment Redirection Scam
  // =========================
   {
    id: "fake-qr-code-scam",
    title: "Fraudsters Are Using Malicious QR Codes to Hijack Digital Payments",
    highlight: "QR Code Payment Redirection Scam",
    author: "Craig Hale",
    date: "Jan 19, 2026",
    category: "Digital Payment Fraud",
    image: "/Hero/qr-scam.webp",
    lead:
      "Fake QR codes are being used to redirect unsuspecting users to fraudulent payment pages, resulting in instant monetary losses.",
    content: [
      {
        type: "p",
        text:
          "As QR code payments become part of daily transactions, scammers are exploiting the trust users place in these quick-scan systems."
      },
      {
        type: "p",
        text:
          "These codes often appear legitimate and are placed in locations where users expect to make routine payments."
      },
      {
        type: "blockquote",
        text:
          "Scanning without verification can be as risky as clicking an unknown link."
      },
      {
        type: "h2",
        text: "Common Locations for Fake QR Codes"
      },
      {
        type: "ul",
        items: [
          "Restaurant payment counters",
          "Parking fee signboards",
          "Fake order or delivery messages",
          "Public display notices",
          "Shared links on messaging platforms"
        ]
      },
      {
        type: "info",
        text:
          "Users should avoid scanning QR codes that prompt urgent payments or request personal information."
      }
    ],
    footer:
      "Using trusted apps and verifying merchants before scanning can significantly reduce risk."
  },

  // =========================
  // 3️⃣ Fake Delivery Notification Scam
  // =========================
   {
    id: "fake-delivery-scam",
    title: "Fake Courier Alerts Are Being Used to Exploit Online Shoppers",
    highlight: "Fake Delivery Notification Scam",
    author: "Craig Hale",
    date: "Jan 18, 2026",
    category: "E-commerce Fraud",
    image: "/Hero/delivery-scam.webp",
    lead:
      "Scammers are impersonating delivery companies and sending misleading notifications to steal money and sensitive details.",
    content: [
      {
        type: "p",
        text:
          "With millions of parcels moving daily, attackers are taking advantage of consumers expecting deliveries."
      },
      {
        type: "p",
        text:
          "These messages often claim that a shipment could not be delivered and require immediate action to resolve the issue."
      },
      {
        type: "blockquote",
        text:
          "Anticipation makes delivery-related scams particularly convincing."
      },
      {
        type: "h2",
        text: "Techniques Used by Scammers"
      },
      {
        type: "ul",
        items: [
          "Fake tracking pages",
          "Requests for small processing fees",
          "Lookalike courier websites",
          "Time-sensitive delivery warnings"
        ]
      },
      {
        type: "info",
        text:
          "Legitimate courier services do not request payments via random links or messages."
      }
    ],
    footer:
      "Checking delivery status only through official courier platforms is strongly advised."
  },

  // =========================
  // 4️⃣ Tech Support Phone Injection Scam
  // =========================
{
    id: "tech-support-scam",
    title: "Tech Support Scammers Are Forcing Fake Phone Numbers Into Legitimate Websites",
    highlight: "Tech Support Phone Injection Scam",
    author: "Craig Hale",
    date: "Jan 17, 2026",
    category: "Tech Support Scams",
    image: "/Hero/tech-support-scam.webp",
    lead:
      "Cybersecurity experts are warning users about a growing scam in which fraudsters inject fake tech support phone numbers directly into real company websites, making the threat far harder to detect.",
    content: [
      {
        type: "p",
        text:
          "Fake tech support scams are evolving, with attackers now exploiting legitimate websites to display their own malicious phone numbers. Security researchers say this new approach allows scammers to bypass traditional warning signs that cautious users usually rely on."
      },
      {
        type: "p",
        text:
          "Unlike classic phishing attempts that rely on fake domains, this technique abuses genuine websites belonging to well-known brands. As a result, users see a correct web address in their browser, giving the page an appearance of legitimacy."
      },
      {
        type: "blockquote",
        text:
          "Seeing a trusted domain no longer guarantees that the information displayed on the page is genuine."
      },
      {
        type: "h2",
        text: "How the Scam Is Being Carried Out"
      },
      {
        type: "p",
        text:
          "According to researchers, attackers are using a method known as search parameter injection, also referred to as a reflected input vulnerability. This allows scammers to manipulate how content appears on a webpage by adding malicious parameters to a legitimate URL."
      },
      {
        type: "p",
        text:
          "In many cases, scammers purchase online advertisements that impersonate major brands. Clicking on these ads may lead users to the official website, but with altered URL parameters that inject fake tech support numbers into support or help sections."
      },
      {
        type: "ul",
        items: [
          "Scammer creates a malicious URL using search parameters",
          "The URL points to a real, trusted website",
          "Injected parameters modify page content",
          "Fake support phone number is displayed",
          "User calls the number believing it is legitimate"
        ]
      },
      {
        type: "blockquote",
        text:
          "Because the browser shows a legitimate domain, users are far less likely to question what they see."
      },
      {
        type: "h2",
        text: "What Happens When the Number Is Called"
      },
      {
        type: "p",
        text:
          "Once a victim calls the fake support number, the scammer poses as a representative of the brand. Their goal is to convince the caller to share personal information, payment card details, or even grant remote access to their device."
      },
      {
        type: "p",
        text:
          "In more advanced cases, victims may be guided into installing remote access software, allowing attackers to fully control their system and extract sensitive data."
      },
      {
        type: "info",
        text:
          "Legitimate tech support teams do not ask for remote access, passwords, or payment details during unsolicited calls."
      },
      {
        type: "h2",
        text: "Major Brands Affected"
      },
      {
        type: "p",
        text:
          "Researchers report that this attack technique has been observed affecting a wide range of high-profile organizations, including technology companies, financial institutions, and online services."
      },
      {
        type: "p",
        text:
          "Brands reportedly impacted include Apple, PayPal, Netflix, Microsoft, HP, Facebook, and major banking institutions. The widespread nature of the campaign increases the risk for everyday users."
      },
      {
        type: "h2",
        text: "How Users Can Protect Themselves"
      },
      {
        type: "p",
        text:
          "Security experts recommend exercising caution when encountering tech support phone numbers through search results or advertisements. One key warning sign is when a phone number appears embedded within the URL itself."
      },
      {
        type: "ul",
        items: [
          "Avoid clicking sponsored ads for tech support",
          "Check URLs for unusual parameters or encoded characters",
          "Be cautious of phrases like 'Call Now' or 'Immediate Support'",
          "Navigate directly to the company’s homepage",
          "Locate support options manually from the official site"
        ]
      },
      {
        type: "info",
        text:
          "Major companies typically do not advertise tech support phone numbers through online ads."
      }
    ],
    footer:
      "Navigating directly to official websites and avoiding sponsored support links remains the most effective way to stay protected from these increasingly deceptive scams."
  },

  // =========================
  // 5️⃣ Fake Refund Manipulation Scam
  // =========================
    {
    id: "fake-refund-scam",
    title: "Fake Refund Claims Are Being Used to Pressure Digital Payment Users",
    highlight: "Fake Refund Manipulation Scam",
    author: "Craig Hale",
    date: "Jan 16, 2026",
    category: "Payment App Fraud",
    image: "/Hero/refund-scam.webp",
    lead:
      "Fraudsters are exploiting refund misunderstandings to convince users to transfer real money voluntarily.",
    content: [
      {
        type: "p",
        text:
          "These scams typically involve false claims that a payment was sent by mistake and must be returned immediately."
      },
      {
        type: "p",
        text:
          "Victims are often threatened with account suspension or legal consequences if they fail to comply."
      },
      {
        type: "blockquote",
        text:
          "Refunds should never be processed outside official app systems."
      },
      {
        type: "h2",
        text: "How the Scam Progresses"
      },
      {
        type: "ul",
        items: [
          "Fake payment confirmation is sent",
          "Urgent refund request follows",
          "Psychological pressure is applied",
          "User sends money manually",
          "Scammer cuts all contact"
        ]
      },
      {
        type: "info",
        text:
          "Payment platforms handle refunds internally and do not require direct transfers."
      }
    ],
    footer:
      "Confirming transactions within the app before acting can prevent unnecessary losses."
  }
];
