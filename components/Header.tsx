import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="section-container flex items-center justify-between py-md">
        <Link href="/" className="flex items-center gap-sm">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">🐾</span>
          </div>
          <span className="font-bold text-lg text-text hidden sm:inline">
            Happy Paws
          </span>
        </Link>

        <nav className="flex items-center gap-lg">
          <Link
            href="/"
            className="text-text hover:text-primary transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-text hover:text-primary transition-colors duration-200 font-medium"
          >
            Products
          </Link>
          <a
            href="#contact"
            className="text-text hover:text-primary transition-colors duration-200 font-medium"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
