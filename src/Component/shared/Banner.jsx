import React from "react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 animate-pulse"></div>
        <div
          className="absolute w-64 h-64 bg-white/10 rounded-full top-40 right-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-white/10 rounded-full -bottom-20 right-1/3 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              আপনার ব্যবসাকে নিয়ে যান
              <span className="block text-yellow-300">ডিজিটাল যুগে</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              SME CUBE এর সাথে পান সম্পূর্ণ ডিজিটাল সমাধান। ছোট ও মাঝারি ব্যবসার
              জন্য সাশ্রয়ী মূল্যে প্রফেশনাল সার্ভিস।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-red-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-gray-800 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                শুরু করুন
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-500 transform hover:scale-105 transition-all duration-300">
                আরো জানুন
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-left ">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                  500+
                </div>
                <div className="text-sm md:text-base text-white/80 ">
                  সন্তুষ্ট ক্লায়েন্ট
                </div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                  ১২+
                </div>
                <div className="text-sm md:text-base text-white/80">
                  সার্ভিস সমূহ
                </div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                  24/7
                </div>
                <div className="text-sm md:text-base text-white/80">
                  সাপোর্ট
                </div>
              </div>
            </div>
          </div>

          <div
            className="hidden md:flex justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-2xl transform rotate-12 animate-float opacity-80"></div>
              <div
                className="absolute bottom-10 left-0 w-24 h-24 bg-white rounded-2xl transform -rotate-12 animate-float opacity-80"
                style={{ animationDelay: "1s" }}
              ></div>

              <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="flex gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/90 rounded-xl p-4 text-center text-3xl animate-bounce">
                      💻
                    </div>
                    <div
                      className="bg-white/90 rounded-xl p-4 text-center text-3xl animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    >
                      📱
                    </div>
                    <div
                      className="bg-white/90 rounded-xl p-4 text-center text-3xl animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    >
                      🚀
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
