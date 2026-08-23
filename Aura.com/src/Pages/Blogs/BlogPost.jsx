import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import blogs from "./blogData";
import AppNavbar from "../../Components/AppNavbar";
import AllSection from "../../Components/AllSection";
import "./BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogs[slug];

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
            {/* <img src={blog.image} alt={blog.title} /> */}
          </div>
        )}

        {/* Content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </Container>

      <AllSection />
    </>
  );
};

export default BlogPost;