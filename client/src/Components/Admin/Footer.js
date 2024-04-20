import "./admin.css";

function Footer() {
  return (
    <footer className="text-center text-white fixed-bottom admin-footer">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          LAMA.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
