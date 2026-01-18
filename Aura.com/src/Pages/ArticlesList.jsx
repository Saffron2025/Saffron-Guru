import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import AppNavbar from "../Components/AppNavbar";
import AllSection from "../Components/AllSection";
import './ArticleLayout.css'

const ArticlesList = () => {
  return (
    <>
      <AppNavbar />

      <div className="article-wrapper">
        <div className="article-card article-list-card">
          <h1 className="article-title">Latest Articles</h1>

          {articles.map((a) => (
            <div key={a.id} className="article-list-item">
              <h2>
                <Link to={`/article/${a.id}`}>{a.title}</Link>
              </h2>

              <p className="article-list-meta">
                {a.author} • {a.date} • {a.category}
              </p>

              <p className="article-list-lead">{a.lead}</p>
            </div>
          ))}
        </div>
      </div>

      <AllSection />
    </>
  );
};

export default ArticlesList;
