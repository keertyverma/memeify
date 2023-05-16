export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {currentYear} by Keerty Verma 👩‍💻💖</p>
    </footer>
  );
}
