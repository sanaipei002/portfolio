import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
  {/* Hero Section */}
  <div className="text-center">
    <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
    <p className="lead text-muted mt-3">
      Discover my expertise, explore my projects, and feel free to connect!
    </p>
    <a href="#contact" className="btn btn-primary btn-lg mt-4">
      Get in Touch
    </a>
  </div>

  {/* About Section */}
  <div className="row mt-5">
    <div className="col-md-6 d-flex align-items-center">
      <img
        src="https://via.placeholder.com/500x300"
        className="img-fluid rounded shadow"
        alt="Professional"
      />
    </div>
    <div className="col-md-6">
      <h2 className="fw-bold">About Me</h2>
      <p>
        I am a passionate developer with a strong background in web
        development and data analytics. I specialize in building scalable,
        user-friendly applications using modern technologies like Django,
        React, and Next.js. I thrive on solving challenging problems and
        delivering impactful solutions.
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">📊 Data Analytics</li>
        <li className="list-group-item">💻 Backend Development</li>
        <li className="list-group-item">🌍 Environmental and Social Impact Projects</li>
        <li className="list-group-item">📚 Continuous Learning and Mentorship</li>
      </ul>
    </div>
  </div>

  {/* Skills Section */}
  <div className="mt-5">
    <h2 className="text-center fw-bold">My Skills</h2>
    <div className="row mt-4">
      <div className="col-md-4 text-center">
        <i className="bi bi-code-slash fs-1 text-primary"></i>
        <h5 className="mt-2">Web Development</h5>
        <p className="text-muted">
          Proficient in modern frameworks like React, Django, and Next.js.
        </p>
      </div>
      <div className="col-md-4 text-center">
        <i className="bi bi-bar-chart-line fs-1 text-primary"></i>
        <h5 className="mt-2">Data Analytics</h5>
        <p className="text-muted">
          Skilled in Python, Power BI, and SQL for actionable insights.
        </p>
      </div>
      <div className="col-md-4 text-center">
        <i className="bi bi-people-fill fs-1 text-primary"></i>
        <h5 className="mt-2">Team Collaboration</h5>
        <p className="text-muted">
          Experienced in team projects using Agile and Scrum methodologies.
        </p>
      </div>
    </div>
  </div>

  {/* Projects Section */}
  <div className="mt-5">
    <h2 className="text-center fw-bold">Featured Projects</h2>
    <div className="row mt-4">
      <div className="col-md-6">
        <div className="card shadow-sm">
          <img
            src="https://via.placeholder.com/600x300"
            className="card-img-top"
            alt="Project 1"
          />
          <div className="card-body">
            <h5 className="card-title">Plant Disease Detection</h5>
            <p className="card-text">
              An AI-powered system to identify and provide remedies for plant
              diseases. Tailored for local farmers.
            </p>
            <a href="#" className="btn btn-outline-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card shadow-sm">
          <img
            src="https://via.placeholder.com/600x300"
            className="card-img-top"
            alt="Project 2"
          />
          <div className="card-body">
            <h5 className="card-title">Swahilipot Asset Management System</h5>
            <p className="card-text">
              A streamlined system for managing and tracking assets efficiently
              at Swahilipot Hub.
            </p>
            <a href="#" className="btn btn-outline-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
}
