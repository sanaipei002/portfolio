import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Contact Me</h1>
        <p className="mt-3">Feel free to reach out via the following:</p>
        <ul>
          <li>Email: myemail@example.com</li>
          <li>Phone: +1234567890</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
