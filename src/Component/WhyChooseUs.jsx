const reasons = [
  {
    id: 1,
    title: "ডায়নামিক স্টাডিজ",
    desc: "আপনার বাজার গবেষণা, সম্ভাব্যতা সমীক্ষা বা ব্যবসায়িক পরিকল্পনার জন্য SME Cube ডায়নামিক স্টাডিজ প্রদান করে। আমরা ডকুমেন্ট সরবরাহ করি।",
  },
  {
    id: 2,
    title: "স্টাডি রেফারেন্সেস",
    desc: "SME Cube ইন্ডাস্ট্রি ডেলিভারির সাথে সমৃদ্ধ রিসোর্স সরবরাহ করে। আমাদের মতামত অপরিহার্য উৎসের উপর নির্ভর করে নয়, বরং ফিল্ড সার্ভে, ডিজিটাল বিশ্লেষণ, পূর্ব প্রস্তুতকৃত স্টাডি এবং অন্যান্য অনেক নির্ভরযোগ্য ডাটার উপর ভিত্তি করে গঠন করা হয়।",
  },
  {
    id: 3,
    title: "আফটার সেলস সার্ভিস",
    desc: "আমরা শুধু স্টাডি সরবরাহ করি না, বরং আপনার ব্যবসায়িক কার্যক্রমের বাস্তবায়ন ও কনসালটিং-এ পরামর্শমূলক কার্যক্রম করতেও সময়মতো সহায়তা করি।",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          কেন আমাদের{" "}
          <span className="text-red-600">বিজনেস কনসালটিং সার্ভিস</span> বেছে
          নেবেন?
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="border-2 border-red-600 rounded-lg shadow-md hover:shadow-xl transition bg-white flex flex-col justify-between"
            >
              <div className="bg-red-600 text-white font-bold text-xl p-4 rounded-t-md">
                {item.title}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-700 text-sm mb-6">{item.desc}</p>
                <button className="mt-auto bg-red-600 hover:bg-black text-white px-5 py-2 rounded font-semibold transition">
                  অর্ডার করুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
