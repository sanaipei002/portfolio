import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Welcome to My Portfolio</h1>
        <p className="text-center mt-3">
          Explore my skills, projects, and get in touch with me!
        </p>
      </div>
      <Footer />
    </>
  );
}
