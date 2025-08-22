import React, { useState } from 'react';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import { useParams, Link } from 'react-router-dom';
import { Container, Button, Modal } from 'react-bootstrap';
import { products } from '../data/productsData';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));  // ✅ FIXED

  const [mainImg, setMainImg] = useState(product?.img);
  const [zoomStyle, setZoomStyle] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  if (!product) {
    return <h2 className="text-center mt-5">❌ Product Not Found</h2>;
  }

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(1.8)"
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1)", transformOrigin: "center" });
  };

  return (
    <>
      <AppNavbar />
      <Container className="product-detail">
        <div className="detail-card">
          {/* 🔹 Left Side: Image */}
          <div className="detail-img-wrapper">
            <img
              src={mainImg}
              alt={product.name}
              className="detail-img zoom-img"
              style={zoomStyle}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </div>

          {/* 🔹 Right Side Info */}
          <div className="detail-info">
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-short">{product.desc}</p>
            <h3 className="detail-price">{product.price}</h3>

            <ul className="detail-highlights">
              <li>✅ Genuine License & Trusted Vendor</li>
              <li>✅ Instant Digital Delivery</li>
              <li>✅ One-time Payment — No Hidden Charges</li>
              <li>✅ Works Across Supported Platforms</li>
              <li>✅ 24/7 Technical Support</li>
            </ul>

            <Button
              variant="primary"
              size="lg"
              className="buy-btn"
              onClick={() => setShowPopup(true)}
            >
              📞 Check Now
            </Button>
            <br />

            {/* ✅ Dynamic Back to Store */}
            <Link 
              to={product.id <= 10 ? "/microsoft-store" : "/internet-security"} 
              className="back-link"
            >
              ⬅ Back to Store
            </Link>
          </div>
        </div>

        {/* 🔹 Extra Section */}
        <div className="detail-extra">
          <h2>📖 About {product.name}</h2>
          <p>{product.longDesc}</p>
        </div>
      </Container>

      {/* 🔹 Popup Modal */}
      <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>📞 Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>For purchasing <strong>{product.name}</strong></h4>
          <p>
            Please contact our sales team directly at:
            <br />
            <strong style={{ fontSize: "1.4rem", color: "#2563eb" }}>
              +1 844-313-4987
            </strong>
          </p>
          <p>Our experts are available 24/7 to help you with installation and support.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPopup(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <AllSection />
    </>
  );
};

export default ProductDetail;
