import '../css/footer.css';

function Footer() {
  return (
    <footer>
      <a id="copyright" href="https://github.com/keadonm" target="_blank">
        Copyright ©<script>document.write(new Date().getFullYear());</script>
        KeadonM
        <i className="fab fa-github"></i>
      </a>
    </footer>
  );
}

export default Footer;
