import LandingPageBar from "../components/LandingPageBar";
import Footer from "../components/Footer";

function Contacts() {
  return (
    <div>
      <LandingPageBar />
      <div className="container fs-4 w-75 border shadow">
        <h1 className="display-3 text-dark fw-bolder text-center">
          Contact Us
        </h1>
        <hr />
        <div className="intro fs-4 ">
          <p>
            Thank you for your interest in Irri-Tech. For inquiries, support, or
            to learn more about our irrigation technology solutions, please
            reach out to us using the contact information below:
          </p>
        </div>
        <div className="address m-4 fst-italic fw-bold p-4">
          <p>Address:Kigali-Rwanda</p>
          <p>Email:irritech@gmail.com</p>
          <p>Tel:0783144722</p>
          <p>Website:irritech.com</p>
        </div>
        <div>
          <p>
            <section className="mb-5">
              Our dedicated team is ready to assist you with any questions or
              requirements you may have. Feel free to get in touch, and let's
              work together to transform your irrigation practices with smart,
              sustainable solutions.
            </section>
            <section className="">we look forward to hearing from you.</section>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
