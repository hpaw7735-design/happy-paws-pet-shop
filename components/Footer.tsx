export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🐾</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">Happy Paws</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Quality pet products for your beloved companions. We're dedicated to providing the best for your furry friends.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-all duration-300 hover:scale-110">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-all duration-300 hover:scale-110">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-all duration-300 hover:scale-110">
                <span className="text-lg">🐦</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@happypawspetshop.test"
                  className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">✉️</span>
                  <span>hello@happypaws.test</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@happypawspetshop.test"
                  className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">💬</span>
                  <span>support@happypaws.test</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+31612345678"
                  className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">📞</span>
                  <span>+31 6 1234 5678</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">Hours</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white font-medium">9am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-medium">10am - 4pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2025 Happy Paws Pet Shop. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
