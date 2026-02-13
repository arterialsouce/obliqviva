const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm font-bold tracking-tight">
        OBLIQ <span className="text-primary">VIVA</span>
      </p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} OBLIQ VIVA. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
