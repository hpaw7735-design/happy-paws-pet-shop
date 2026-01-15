export default function Intro() {
  return (
    <section className="section-container py-xl md:py-2xl">
      <div className="max-w-3xl mx-auto">
        <h2 className="heading-2 mb-lg text-center animate-slideUp">
          Why Choose Happy Paws?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {[
            {
              title: "Quality Products",
              description:
                "Carefully selected items from trusted brands for your pet's wellbeing.",
            },
            {
              title: "Expert Selection",
              description:
                "Our team knows pets. Every product is chosen with care and expertise.",
            },
            {
              title: "Fast Delivery",
              description:
                "Quick and reliable shipping to get your pet's favorites to you fast.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="card animate-slideUp"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <h3 className="heading-3 mb-md text-primary">{item.title}</h3>
              <p className="text-body text-opacity-75">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
