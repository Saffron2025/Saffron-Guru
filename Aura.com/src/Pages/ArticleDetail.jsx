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

  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <AppNavbar />

      <div className="article-wrapper">
        <article className="article-card">

          <h1 className="article-title">
            {article.title.replace(article.highlight, "").trim()}{" "}
            <span>{article.highlight}</span>
          </h1>

          <div className="article-meta">
            By {article.author} • {article.date} • {article.category}
          </div>

          {/* ARTICLE IMAGE */}
          <div className="article-image-wrap">
            <img
              src={article.image}
              alt={article.title}
              className="article-image"
              loading="lazy"
            />
          </div>

          <p className="article-lead">{article.lead}</p>

          <div className="article-body">

            {article.content.map((block, i) => {

              /* =========================
                 PARAGRAPH
              ========================= */
              if (block.type === "p") {
                return (
                  <p
                    key={i}
                    className={`
                      ${block.bold ? "article-bold" : ""}
                      ${block.blue ? "article-blue" : ""}
                      ${block.footerBrand ? "footer-brand" : ""}
                      ${block.footerTagline ? "footer-tagline" : ""}
                    `}
                  >
                    {block.text}
                  </p>
                );
              }

              /* =========================
                 HEADING
              ========================= */
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className={`
                      ${block.bold ? "article-bold" : ""}
                      ${block.blue ? "article-blue" : ""}
                    `}
                  >
                    {block.text}
                  </h2>
                );
              }

              /* =========================
                 BLOCKQUOTE
              ========================= */
              if (block.type === "blockquote") {
                return (
                  <blockquote key={i}>
                    {block.text}
                  </blockquote>
                );
              }

              /* =========================
                 LIST
              ========================= */
              if (block.type === "ul") {
                return (
                  <ul key={i}>
                    {block.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
              }

              /* =========================
                 INFO BOX
              ========================= */
              if (block.type === "info") {
                return (
                  <div key={i} className="info-box">
                    {block.text}
                  </div>
                );
              }

              return null;
            })}

          </div>

          {/* ARTICLE FOOTER */}
          <div className="article-footer">
            {article.footer}
          </div>

          {/* RELATED ARTICLES */}
          <div className="related-articles">
            <h3>Related Articles</h3>

            <ul>
              {relatedArticles.map((ra) => (
                <li key={ra.id}>
                  <Link to={`/article/${ra.id}`}>
                    {ra.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </article>
      </div>

      <AllSection />
    </>
  );
};

export default ArticleDetail;