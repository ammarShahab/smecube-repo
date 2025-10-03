import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-around gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center transform rotate-45">
                <span className="text-white font-bold transform -rotate-45">
                  !
                </span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-red-500">sme</span>
                <span className="text-gray-800">cube</span>
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              SME CUBE — আপনার ব্যবসার ডিজিটাল সংস্থায়! আমরা (ছোট ও মাঝারি
              উদ্যোগতাদের জন্য আধুনিক, সাশ্রয়ী এবং কার্যকর মধ্যস্থ সমাধান। এক
              প্ল্যাটফর্মে আপনার ব্যবসার গ্রোথ, মার্কেটিং, অটোমেশন এবং
              ম্যানেজমেন্ট।
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services List */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              সার্ভিস সমূহ
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                ফেসবুক মার্কেটিং
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                ই-কমার্স সলিউশন
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                ওয়েবসাইট ডেভেলপমেন্ট
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                ডোমেইন হোস্টিং
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                ল্যান্ডিং পেজ ডিজাইন
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                ব্র্যান্ড, এসপ্রেসন
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                ব্রান্ড পেইজ মেটোয়াপ
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                বিজনেস কনসালটিং
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                গ্রাফিক্স ডিজাইন
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                টার্গেট অনুমেশন
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                ইমু ফিচার
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                বিজনেস ট্রেইনিং
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              গুরুত্বপূর্ণ লিংকসমূহ
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm mb-6">
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                কোম্পানি
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                এক্স ও কিছু
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                যোগাযোগ
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                টার্মস এন্ড কন্ডিশনস
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                প্রাইভেসি পলিসি
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                রুটিট্যান
              </li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                টিউটোরিয়াল
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            ©2025 All Rights Reserved By{" "}
            <span className="font-bold text-red-500">SME CUBE LTD</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
