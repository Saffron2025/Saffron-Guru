import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import blogs from "./blogData";
import { shortDescription } from "../../utils/pageMeta";

// Every blog post is shown as a real link, so visitors and Google can find all of them.
const BlogHome = () => {
  const entries = Object.entries(blogs);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-3">Knowledge Center – Blog</h1>
      <p className="text-center text-muted mb-4">
        Easy-to-read guides to help you and your family stay safe online.
        Looking for the latest scam alerts? Visit our{" "}
        <Link to="/article">Online Safety Hub</Link>.
      </p>

      <Row xs={1} md={2} lg={3} className="g-4">
        {entries.map(([slug, blog]) => (
          <Col key={slug}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title as="h2" className="h5">
                  <Link to={`/blog/${slug}`} className="stretched-link text-decoration-none">
                    {blog.title}
                  </Link>
                </Card.Title>
                <Card.Text className="text-muted">
                  {shortDescription(blog.description || blog.content, 140)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogHome;
