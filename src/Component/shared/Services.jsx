import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    { icon: "📱", title: "ফেসবুক বুস্টিং", color: "bg-blue-100", delay: 0 },
    { icon: "🛒", title: "ই-কমার্স সলিউশন", color: "bg-green-100", delay: 100 },
    {
      icon: "💻",
      title: "ডেভেলপ ওয়েবসাইট",
      color: "bg-indigo-100",
      delay: 200,
    },
    { icon: "📊", title: "ডোমেইন হোস্টিং", color: "bg-purple-100", delay: 300 },
    { icon: "📚", title: "ল্যান্ডিং পেজ", color: "bg-orange-100", delay: 400 },
    {
      icon: "🎨",
      title: "ব্র্যান্ড এসপ্রেসন",
      color: "bg-teal-100",
      delay: 500,
    },
    {
      icon: "✅",
      title: "বিজনেস কনসালটিং",
      color: "bg-yellow-100",
      delay: 600,
    },
    {
      icon: "📱",
      title: "ব্রান্ড পেইজ মেটোয়াপ",
      color: "bg-cyan-100",
      delay: 700,
    },
    { icon: "🔥", title: "গ্রাফিক ডিজাইন", color: "bg-pink-100", delay: 800 },
    {
      icon: "🎯",
      title: "টার্গেট মেটোয়াপ",
      color: "bg-emerald-100",
      delay: 900,
    },
    { icon: "🎁", title: "ইমু ফিচার", color: "bg-rose-100", delay: 1000 },
    {
      icon: "💼",
      title: "বিজনেস ট্রেইনিং",
      color: "bg-violet-100",
      delay: 1100,
    },
  ];
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
        নিচ থেকে{" "}
        <span className="text-red-500 relative">
          সার্ভিস
          <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded"></span>
        </span>{" "}
        সিলেক্ট করুন
      </h2>
      <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in">
        আপনার প্রয়োজন অনুযায়ী সেরা ডিজিটাল সার্ভিস বেছে নিন
      </p>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              color={service.color}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
