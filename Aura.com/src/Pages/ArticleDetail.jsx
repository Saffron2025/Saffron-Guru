import React from "react";
import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";
import AppNavbar from "../Components/AppNavbar";
import AllSection from "../Components/AllSection";
import "./ArticleLayout.css";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) return <h2>Article not found</h2>;

  // ✅ RELATED ARTICLES (same category, exclude current)
  // ✅ RELATED ARTICLES (exclude current article only)
const relatedArticles = articles
  .filter((a) => a.id !== article.id)
  .slice(0, 3);


  return (
    <>
      <AppNavbar />

      <div className="article-wrapper">
        <article className="article-card">

          <h1 className="article-title">
            {article.title.replace(article.highlight, "")}
            <span>{article.highlight}</span>
          </h1>

          <div className="article-meta">
            By {article.author} • {article.date} • {article.category}
          </div>

          <p className="article-lead">{article.lead}</p>

          <div className="article-body">
            {article.content.map((block, i) => {
              if (block.type === "p") return <p key={i}>{block.text}</p>;
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "blockquote")
                return <blockquote key={i}>{block.text}</blockquote>;
              if (block.type === "ul")
                return (
                  <ul key={i}>
                    {block.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
              if (block.type === "info")
                return (
                  <div key={i} className="info-box">
                    {block.text}
                  </div>
                );
              return null;
            })}
          </div>

          <div className="article-footer">{article.footer}</div>

          {/* ✅ RELATED ARTICLES SECTION */}
          {/* ✅ RELATED ARTICLES SECTION */}
{relatedArticles.length > 0 && (
  <div className="related-articles">
    <h3>Related Articles</h3>
    <ul>
      {relatedArticles.map((ra) => (
        <li key={ra.id}>
          <Link to={`/article/${ra.id}`}>{ra.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)}


        </article>
      </div>

      <AllSection />
    </>
  );
};

export default ArticleDetail;
