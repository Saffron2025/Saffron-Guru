import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import AppNavbar from "../Components/AppNavbar";
import AllSection from "../Components/AllSection";
import "./ArticleLayout.css";

const ArticlesList = () => {
  return (
    <>
      <AppNavbar />

      <div className="article-wrapper">

        <div className="article-card article-list-card">

          {/* HEADER */}
          <div className="articles-list-header">
            <span className="articles-list-eyebrow">
              SAFFRON GURU INSIGHTS
            </span>

            <h1 className="article-title">
              Latest <span>Articles</span>
            </h1>

            <p className="articles-list-subtitle">
              Stay informed with the latest insights, security updates,
              scam awareness and digital protection guidance.
            </p>
          </div>


          {/* ARTICLES */}
          <div className="articles-list-container">

            {articles.map((a) => (
              <article
                key={a.id}
                className="article-list-item"
              >

                {/* IMAGE */}
                <Link
                  to={`/articles/${a.id}`}
                  className="article-list-image-link"
                >
                  <div className="article-list-image-wrap">

                    <img
                      src={a.image}
                      alt={a.title}
                      className="article-list-image"
                      loading="lazy"
                    />

                    <div className="article-image-overlay"></div>

                    <span className="article-category-badge">
                      {a.category}
                    </span>

                  </div>
                </Link>


                {/* CONTENT */}
                <div className="article-list-content">

                  {/* META */}
                  <div className="article-list-meta">

                    <span className="article-author">
                      {a.author}
                    </span>

                    <span className="article-meta-dot">
                      •
                    </span>

                    <span>
                      {a.date}
                    </span>

                  </div>


                  {/* TITLE */}
                  <h2 className="article-list-heading">
                    <Link to={`/articles/${a.id}`}>
                      {a.title}
                    </Link>
                  </h2>


                  {/* LEAD */}
                  <p className="article-list-lead">
                    {a.lead}
                  </p>


                  {/* BUTTON */}
                  <Link
                    to={`/articles/${a.id}`}
                    className="article-read-btn"
                  >
                    <span>
                      Read Full Article
                    </span>

                    <span className="article-read-arrow">
                      →
                    </span>
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </div>

      <AllSection />
    </>
  );
};

export default ArticlesList;