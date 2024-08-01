import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className="container mt-5 flex justify-center">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="">About Our Bookstore</h2>
          <p className="lead">Welcome to our Bookstore!</p>
          <p>At our bookstore, we believe in the power of stories and the magic of books. Our mission is to provide a wide variety of books that cater to all kinds of readers, from avid bookworms to occasional readers. We are passionate about creating a community where literature lovers can come together to discover, share, and enjoy books.</p>
          <p>Our collection includes bestsellers, classics, and hidden gems across various genres such as fiction, non-fiction, fantasy, science fiction, romance, mystery, and many more. Whether you're looking for the latest releases or timeless masterpieces, we have something for everyone.</p>
          <p>We pride ourselves on offering a welcoming and friendly environment both online and in-store. Our knowledgeable staff is always here to help you find your next great read or assist you with any questions you may have.</p>
          <p>Join us on this literary journey and explore the world through books. Happy reading!</p>
        </div>
      </div>
    </div>

    </>
  );
};

export default About;