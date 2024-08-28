import '@fortawesome/fontawesome-free/css/all.min.css';

import './Footer.css';
function Footer(){
    return(
      <footer className="footer bg-dark text-white mt-5">
      <div className="container text-center">
          <p>&copy; 2024 Pizza Store. All rights reserved.</p>
          <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
              </a>
          </div>
      </div>
  </footer>

    )
}
export default Footer;