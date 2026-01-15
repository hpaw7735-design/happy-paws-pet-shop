import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-primary text-white py-2xl md:py-4xl">
      <div className="section-container text-center animate-fadeIn">
        <h1 className="heading-1 mb-md text-white">Welcome to Happy Paws</h1>
        <p className="text-lg md:text-xl text-white text-opacity-90 mb-lg max-w-2xl mx-auto">
          Premium pet food, toys, and accessories for your beloved companions.
          Everything your pet needs to be happy and healthy.
        </p>
        <Link href="/products" className="btn-primary inline-block">
          Shop Now
        </Link>
      </div>
    </section>
  );
}
