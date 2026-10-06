import React, { useState } from 'react';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import { useParams, Link } from 'react-router-dom';
import { Container, Button, Modal } from 'react-bootstrap';
import { products } from '../data/productsData';
import ReactMarkdown from 'react-markdown';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  const [zoomStyle, setZoomStyle] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  if (!product) {
    return <h2 className="text-center mt-5">❌ Product Not Found</h2>;
  }

  /* Microsoft products vs. security products, so the "more products" row and the back link stay in the right store */
  const SECURITY_IDS = [11, 12, 13, 14, 15, 16, 17, 19, 20, 21];
  const isSecurity = (pid) => SECURITY_IDS.includes(pid);
  const inSecurity = isSecurity(product.id);
  const storePath = inSecurity ? "/internet-security" : "/microsoft-store";
  const related = products.filter((p) => p.id !== product.id && isSecurity(p.id) === inSecurity);

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
          {/* 🔹 Left Side Image */}
          <div className="detail-img-wrapper">
            <img
              src={product.img}
              alt={`${product.name} from Saffron Guru`}
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
              <li>✅ {inSecurity ? "Yearly Subscription — Prices Set by the Software Company" : product.subscription ? "Yearly Subscription — Microsoft's Official Price" : "One-time Payment — No Hidden Charges"}</li>
              <li>✅ Works Across Supported Platforms</li>
              <li>✅ Technical Support for Saffron Guru Clients, 7 Days a Week</li>
            </ul>

            <Button
              variant="primary"
              size="lg"
              className="buy-btn"
              onClick={() => setShowPopup(true)}
            >
              📞 Check Now
            </Button>

            <div className="store-note" role="note">
              <p>
                <strong>About this store:</strong> This store is made for Saffron Guru clients, whose plans
                include technical support 7 days a week. Not a client yet? You're still welcome to buy.
                We'll install and activate your software for you. Ongoing technical support is included
                only with a Saffron Guru plan.
              </p>
              <p className="store-note-small">
                Saffron Guru is an independent company, not affiliated with{" "}
                {inSecurity ? "the companies whose products are listed in this store" : "Microsoft"}.
              </p>
            </div>

            <Link 
              to={storePath}
              className="back-link"
            >
              ⬅ Back to Store
            </Link>
          </div>
        </div>

        {/* 🔹 Long Description Section */}
        <div className="detail-extra">
          <h2>📖 About {product.name}</h2>
          <div className="markdown-body">
            <ReactMarkdown components={{
              h2: ({node, ...props}) => <h2 className="md-heading" {...props} />,
              h3: ({node, ...props}) => <h3 className="md-subheading" {...props} />,
              ul: ({node, ...props}) => <ul className="md-list" {...props} />,
              li: ({node, ...props}) => <li className="md-list-item" {...props} />,
              p: ({node, ...props}) => <p className="md-paragraph" {...props} />
            }}>
              {product.longDesc}
            </ReactMarkdown>
          </div>
        </div>

        {/* 🔹 More products row */}
        {related.length > 0 && (
          <section className="related-products" aria-labelledby="related-heading">
            <div className="related-head">
              <h2 id="related-heading">{inSecurity ? "More Security Software" : "More from the Microsoft Store"}</h2>
              <Link to={storePath} className="related-all">View all →</Link>
            </div>
            <div className="related-row">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="related-card">
                  <div className="related-img">
                    <img src={p.img} alt={`${p.name} from Saffron Guru`} width="160" height="160" loading="lazy" decoding="async" />
                  </div>
                  <p className="related-name">{p.name}</p>
                  <p className="related-price">{p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>

      {/* 🔹 Contact Modal */}
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
          <p>Our experts are available 7 days a week, Monday to Sunday, to help you with installation and support.</p>
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
