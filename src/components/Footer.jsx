import '../css/footer.scss';

function Footer() {
  return (
    <footer>
      <a
        id="copyright"
        href="https://github.com/KeadonM/13-odin-cv-application"
        target="_blank">
        Copyright&nbsp;<span id="copyright-logo">©</span>&nbsp;
        <span>{new Date().getFullYear()}</span>&nbsp;KeadonM&nbsp;
        <i className="fab fa-github"></i>
      </a>
    </footer>
  );
}

export default Footer;
