import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">About Me</h1>
        <p className="mt-3">
          Hello! I am a passionate developer with skills in Next.js, Bootstrap, and more.
        </p>
      </div>
      <Footer />
    </>
  );
}
