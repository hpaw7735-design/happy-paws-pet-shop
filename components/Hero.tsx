export default function Hero() {
  return (
    <section className="bg-white py-4 md:py-8">
      <div className="section-container text-center animate-fadeIn">
        <p className="text-lg md:text-xl text-gray-600 mb-sm">
          Where tails wag, and hearts smile
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-1">
          Happy Tails
        </h2>
        <h1 className="text-[13rem] md:text-[18rem] font-black text-gray-400 mb-0 tracking-wider bg-gradient-to-b from-gray-400 to-transparent bg-clip-text text-transparent">
          DOGS
        </h1>
        <div className="-mt-40 md:-mt-56">
          <img
            src="/doggy.png"
            alt="Happy dog"
            className="mx-auto max-w-full h-auto w-[80%]"
          />
        </div>
      </div>
    </section>
  );
}
