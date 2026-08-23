import React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Container } from "react-bootstrap";

const BlogHome = () => {
  const navigate = useNavigate();

  const handleSelect = (eventKey) => {
    navigate(`/blog/${eventKey}`);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Knowledge Center – Blog</h1>

      <Dropdown onSelect={handleSelect} className="mb-4">
        <Dropdown.Toggle variant="primary" id="blog-dropdown">
          Select a Blog
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="online-scam-guide">🛡️ Online Scam Guide</Dropdown.Item>
          <Dropdown.Item eventKey="romance-scam">❤️ Romance Scam Warning</Dropdown.Item>
          <Dropdown.Item eventKey="tech-support-scam">🖥️ Fake Tech Support Scams</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <p className="text-muted">
        Please select a blog from the dropdown above to read detailed articles on
        online protection.
      </p>
    </Container>
  );
};

export default BlogHome;