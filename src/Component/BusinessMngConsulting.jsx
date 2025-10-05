import { Briefcase, BarChart2, CheckSquare, Map } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Briefcase className="w-10 h-10 text-white" />,
    title: "বিজনেস ম্যানেজমেন্ট",
    desc: "SME Cube আপনার ব্যবসার জন্য উন্নত মডেল তৈরি এবং বর্তমান পরিস্থিতি (SWOT) বিশ্লেষণ করবে। আমরা আপনাকে ব্যবসায়িক ও কৌশলগত পরিকল্পনা প্রস্তুত করতে সাহায্য করবো।",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    icon: <BarChart2 className="w-10 h-10 text-white" />,
    title: "মার্কেটিং সার্ভিসেস",
    desc: "বাজার গবেষণা, প্রতিযোগিতা বিশ্লেষণ এবং মার্কেটিং পরিকল্পনা প্রস্তুত করবে। এভাবে আপনার ব্যবসার প্রকল্পের কৌশল তৈরি করবে।",
    gradient: "from-teal-400 to-emerald-500",
  },
  {
    id: 3,
    icon: <CheckSquare className="w-10 h-10 text-white" />,
    title: "ফিজিবিলিটি স্টাডি",
    desc: "SME Cube নতুন ধারণা, প্রকল্প বা ছোট ব্যবসার viability মূল্যায়নের জন্য প্রয়োজনীয় ফিজিবিলিটি স্টাডি সাপোর্ট প্রদান করবে। এটি আপনার সময়, অর্থ ও সম্পদ বাঁচাবে।",
    gradient: "from-indigo-500 to-cyan-500",
  },
  {
    id: 4,
    icon: <Map className="w-10 h-10 text-white" />,
    title: "স্ট্রাটেজিক প্ল্যানিং",
    desc: "আমরা আপনার লক্ষ্য পূরণের জন্য কৌশলগত পরিকল্পনা তৈরি করবো এবং অপারেশন প্ল্যান ও মানব সম্পদ ব্যবস্থাপনা দেখবো।",
    gradient: "from-orange-500 to-pink-500",
  },
];

const BusinessMngConsulting = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
            একজন{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              ফার্স্ট-ক্লাস
            </span>{" "}
            বিজনেস কনসালটেন্ট খুঁজছেন?
          </h3>
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-orange-500 hover:to-pink-500 text-white px-6 py-3 rounded-full font-medium transition shadow-lg">
            আজই মিটিং বুক করুন
          </button>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-16">
          বিজনেস ম্যানেজমেন্ট কনসালটিং{" "}
          <span className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">
            সার্ভিসেস
          </span>
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl p-6 text-center text-white shadow-lg transform hover:scale-105 transition bg-gradient-to-r ${service.gradient}`}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed opacity-90">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessMngConsulting;
