import React from "react";

function Footer() {
  return (
    <footer className="cntr-footer">
      If you have any questions, feel free to contact me at{" "}
      <a href="mailto:mic0@mic0.me">mic0@mic0.me</a>
      <br />
      <small>&copy; mic0 2022 - {new Date().getFullYear()}</small>
    </footer>
  );
}

export default Footer;
