import "../componentStyle/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-row-one">
        <p className="footer-text">
          Copyright © 2023 Vidly Inc. All rights reserved.
        </p>
        <p className="footer-badge">India</p>
      </div>

      <div className="footer-row-two">
        <p>Vidly</p>
        <p>Support</p>
      </div>
    </footer>
  );
}

export default Footer;
