import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {/* Page Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Contact Me</h1>
          <p className="lead text-muted">Feel free to reach out through any of the channels below.</p>
        </div>

        {/* Contact Information */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="p-4 border rounded shadow-sm">
              <h5 className="fw-bold">
                <i className="bi bi-envelope-fill text-primary me-2"></i>Email
              </h5>
              <p>
                <a href="mailto:lenapunyasanaipei@gmail.com" className="text-decoration-none text-dark">
                  lenapunyasanaipei@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="p-4 border rounded shadow-sm">
              <h5 className="fw-bold">
                <i className="bi bi-telephone-fill text-primary me-2"></i>Phone
              </h5>
              <p>
                <a href="tel:+254742932504" className="text-decoration-none text-dark">
                  +254 742 932 504
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="p-4 border rounded shadow-sm">
              <h5 className="fw-bold">
                <i className="bi bi-github text-primary me-2"></i>GitHub
              </h5>
              <p>
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                  github.com/your-github-profile
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="p-4 border rounded shadow-sm">
              <h5 className="fw-bold">
                <i className="bi bi-linkedin text-primary me-2"></i>LinkedIn
              </h5>
              <p>
                <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                  linkedin.com/in/your-linkedin-profile
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-5">
          <p className="text-muted">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a href="mailto:lenapunyasanaipei@gmail.com" className="btn btn-primary btn-lg">
            Send Me an Email
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
