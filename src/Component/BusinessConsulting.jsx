import { Briefcase, BarChart2, CheckSquare, Map } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Briefcase className="w-10 h-10 text-red-600" />,
    title: "বিজনেস ম্যানেজমেন্ট",
    desc: "SME Cube আপনার ব্যবসার জন্য উন্নত মডেল তৈরি এবং বর্তমান পরিস্থিতি (SWOT) বিশ্লেষণ করবে। আমরা আপনাকে ব্যবসায়িক ও কৌশলগত পরিকল্পনা প্রস্তুত করতে সাহায্য করবো।",
  },
  {
    id: 2,
    icon: <BarChart2 className="w-10 h-10 text-red-600" />,
    title: "মার্কেটিং সার্ভিসেস",
    desc: "বাজার গবেষণা, প্রতিযোগিতা বিশ্লেষণ এবং মার্কেটিং পরিকল্পনা প্রস্তুত করবে। এভাবে আপনার ব্যবসার প্রকল্পের কৌশল তৈরি করবে।",
  },
  {
    id: 3,
    icon: <CheckSquare className="w-10 h-10 text-red-600" />,
    title: "ফিজিবিলিটি স্টাডি",
    desc: "SME Cube নতুন ধারণা, প্রকল্প বা ছোট ব্যবসার viability মূল্যায়নের জন্য প্রয়োজনীয় ফিজিবিলিটি স্টাডি সাপোর্ট প্রদান করবে। এটি আপনার সময়, অর্থ ও সম্পদ বাঁচাবে।",
  },
  {
    id: 4,
    icon: <Map className="w-10 h-10 text-red-600" />,
    title: "স্ট্রাটেজিক প্ল্যানিং",
    desc: "আমরা আপনার লক্ষ্য পূরণের জন্য কৌশলগত পরিকল্পনা তৈরি করবো এবং অপারেশন প্ল্যান ও মানব সম্পদ ব্যবস্থাপনা দেখবো।",
  },
];

const BusinessConsulting = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4">
          <h3 className="text-4xl text-red-600 font-semibold mb-2">
            একজন <span className="text-black">ফার্স্ট-ক্লাস</span> বিজনেস
            কনসালটেন্ট খুঁজছেন?
          </h3>
          <button className="bg-red-600 hover:bg-black text-white px-5 py-2 rounded-full font-medium transition">
            আজই মিটিং বুক করুন
          </button>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-black mt-20">
          বিজনেস ম্যানেজমেন্ট কনসালটিং{" "}
          <span className="text-red-600">সার্ভিসেস</span>
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition border border-gray-200 text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessConsulting;
