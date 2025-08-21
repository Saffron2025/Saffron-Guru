import React from 'react'
import './TopBanner.css'
import { Container, Row, Col } from 'react-bootstrap';


const TopBanner = () => {
  return (
    <div>

        <section className="top-banner">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          {/* Left Nav */}
          <Col xs="auto" className="d-flex gap-3 banner-left">
            <span className="tab active">For You</span>
            <span className="tab">For Businesses</span>
          </Col>

          {/* Center Message */}
          <Col className="text-center banner-message">
            Were you a victim of the latest breach?{' '}
            <a href="/" className="highlight-link">
              Save up to 60%
            </a>{' '}
            and get protection now!
          </Col>

          {/* Right Link */}
          <Col xs="auto" className="banner-right">
            <a href="/" className="get-help-link">Get Help</a>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default TopBanner