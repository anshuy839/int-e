import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>About Us</h3>
            <p>Nykaa is an Indian e-commerce company, founded by Falguni Nayar in 2012 and headquartered in Mumbai. It sells beauty, wellness and fashion products across websites, mobile apps and 100+ offline stores. In 2020, it became the first Indian unicorn startup headed by a woman</p>
          </div>
          <div className="col-12 col-md-6">
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>123 Main St, New York, NY</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr />
            <p className="text-muted text-center">Copyright © 2023 
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
