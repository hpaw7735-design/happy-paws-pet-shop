export default function Intro() {
  const features = [
    {
      icon: "✨",
      title: "Quality Products",
      description: "Carefully selected items from trusted brands for your pet's wellbeing.",
    },
    {
      icon: "🎯",
      title: "Expert Selection",
      description: "Our team knows pets. Every product is chosen with care and expertise.",
    },
    {
      icon: "🚀",
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get your pet's favorites to you fast.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight animate-slideUp">
            Why Choose Happy Paws?
          </h2>
          <p className="text-xl text-slate-600 animate-slideUp" style={{ animationDelay: "0.1s" }}>
            We're committed to your pet's happiness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-3xl p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-4 border border-slate-100 animate-slideUp"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="text-5xl mb-6 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
