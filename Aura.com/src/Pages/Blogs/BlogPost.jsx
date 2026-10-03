import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import blogs from "./blogData";
import AppNavbar from "../../Components/AppNavbar";
import AllSection from "../../Components/AllSection";
import "./BlogPost.css";
import { usePageMeta, cleanTitle, shortDescription } from "../../utils/pageMeta";

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogs[slug];

  usePageMeta(
    blog
      ? {
          title: cleanTitle(blog.title),
          description: shortDescription(blog.description || blog.content),
          path: `/blog/${slug}`,
          image: blog.image,
          type: "article",
        }
      : { title: "Blog Not Found", path: `/blog/${slug}`, noindex: true },
    [slug]
  );

  if (!blog) {
    return (
      <>
        <AppNavbar />
        <Container className="blog-wrapper">
          <h2 className="text-center">Blog not found</h2>
        </Container>
        <AllSection />
      </>
    );
  }

  return (
    <>
      <AppNavbar />

      {/* ✅ Blog Wrapper */}
      <Container className="blog-wrapper">
        {/* Title */}
        <h1 className="blog-title">{blog.title}</h1>

        {/* Banner image (optional) */}
        {blog.image && (
          <div className="blog-banner">
            {/* <img src={blog.image} alt={`${blog.title} | Saffron Guru`} /> */}
          </div>
        )}

        {/* Content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* More guides - helps readers (and Google) find related articles */}
        <nav className="blog-more" aria-label="More safety guides">
          <h2>More Safety Guides</h2>
          <ul>
            {(() => {
              // the next 4 guides after this one, so every guide gets linked
              const all = Object.entries(blogs);
              const at = all.findIndex(([s]) => s === slug);
              return [1, 2, 3, 4].map((n) => all[(at + n) % all.length]);
            })()
              .map(([s, b]) => (
                <li key={s}>
                  <Link to={`/blog/${s}`}>{b.title}</Link>
                </li>
              ))}
            <li>
              <Link to="/article">Latest scam alerts in our Online Safety Hub</Link>
            </li>
          </ul>
          <p>
            Worried about a call, pop-up or message?{" "}
            <Link to="/contact">Contact Saffron Guru</Link> or call 844-313-4987.
          </p>
        </nav>
      </Container>

      <AllSection />
    </>
  );
};

export default BlogPost;