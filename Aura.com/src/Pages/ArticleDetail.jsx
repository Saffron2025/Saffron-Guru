import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../data/articles";
import AppNavbar from "../Components/AppNavbar";
import AllSection from '../Components/AllSection'
import "./ArticleLayout.css";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) return <h2>Article not found</h2>;

  return (
    <>
    <AppNavbar/>
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
              return <div key={i} className="info-box">{block.text}</div>;
            return null;
          })}
        </div>

        <div className="article-footer">{article.footer}</div>
      </article>
    </div>
    <AllSection/>
    </>

  );
};

export default ArticleDetail;
