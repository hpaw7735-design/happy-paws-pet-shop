export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-2xl" id="contact">
      <div className="section-container py-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl mb-2xl">
          {/* Company Info */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-bold text-lg mb-md">Happy Paws Pet Shop</h3>
            <p className="text-white text-opacity-90 text-small">
              Quality pet products for your beloved companions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold mb-md">Contact</h4>
            <ul className="space-y-sm text-small">
              <li>
                <a
                  href="mailto:hello@happypawspetshop.test"
                  className="text-white text-opacity-90 hover:text-opacity-100 transition-opacity duration-200"
                >
                  hello@happypawspetshop.test
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@happypawspetshop.test"
                  className="text-white text-opacity-90 hover:text-opacity-100 transition-opacity duration-200"
                >
                  support@happypawspetshop.test
                </a>
              </li>
              <li>
                <a
                  href="tel:+31612345678"
                  className="text-white text-opacity-90 hover:text-opacity-100 transition-opacity duration-200"
                >
                  +31 6 1234 5678
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold mb-md">Hours</h4>
            <ul className="space-y-sm text-small">
              <li className="text-white text-opacity-90">
                Monday - Friday: 9am - 6pm
              </li>
              <li className="text-white text-opacity-90">
                Saturday: 10am - 4pm
              </li>
              <li className="text-white text-opacity-90">Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-lg text-center text-small text-white text-opacity-75">
          <p>&copy; 2024 Happy Paws Pet Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
