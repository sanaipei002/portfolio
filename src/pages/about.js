import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {/* About Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">About Me</h1>
          <p className="lead text-muted mt-3">
            I am a passionate developer specializing in modern web technologies and creating impactful solutions.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500x300"
              className="img-fluid rounded shadow"
              alt="About Me"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">Who I Am</h2>
            <p>
              I am a dedicated software developer with a passion for building user-centric solutions. My expertise lies in 
              <strong> Next.js, Bootstrap, Django, and Data Analytics</strong>. Whether it’s crafting a responsive web app or diving into data to uncover insights, I strive for excellence in every project.
            </p>
            <p>
              Beyond coding, I’m deeply interested in leveraging technology to solve real-world problems and empower communities.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Skills</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="p-4 border rounded shadow-sm">
                <i className="bi bi-code-slash fs-1 text-primary"></i>
                <h5 className="mt-3">Web Development</h5>
                <p className="text-muted">
                  Proficient in frameworks like React, Next.js, and Django for modern web solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded shadow-sm">
                <i className="bi bi-bar-chart-line fs-1 text-primary"></i>
                <h5 className="mt-3">Data Analytics</h5>
                <p className="text-muted">
                  Skilled in Python, Power BI, and SQL to extract and present actionable insights.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded shadow-sm">
                <i className="bi bi-people-fill fs-1 text-primary"></i>
                <h5 className="mt-3">Team Collaboration</h5>
                <p className="text-muted">
                  Experienced in working within teams using Agile methodologies and collaborative tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="fw-bold">My Goals</h2>
            <p>
              My mission is to create software solutions that positively impact people's lives and businesses. 
              I aim to combine <strong>technical expertise</strong> with a focus on <strong>social responsibility</strong> to address modern challenges.
            </p>
            <p>
              Whether working on community-based projects or cutting-edge applications, I aspire to push boundaries and inspire others in the tech space.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500x300"
              className="img-fluid rounded shadow"
              alt="Goals"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center my-5">
          <h2 className="fw-bold">Let's Work Together!</h2>
          <p className="text-muted">
            Interested in collaborating or learning more about my work? Get in touch today!
          </p>
          <a href="#contact" className="btn btn-primary btn-lg">
            Contact Me
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
