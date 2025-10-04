import businessBanner from "../../assets/fbboost-banner/fbboost-banner.png";

const FbBoostBanner = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-8">
      <div className="mx-auto w-full overflow-hidden mt-16">
        <div className="grid lg:grid-cols-2 justify-between items-center">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center space-y-6 p-2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              প্রোফেশনাল
              <br />
              এডভাইজের মাধ্যমে
            </h1>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-pink-600 leading-tight">
              সাফল্যা অর্জন
            </h2>

            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-md">
              আপনার ব্যবসা যত বড় বা ছোট হোক, কিংবা যে শিল্পেই থাকুন না কেন,
              আমরা আপনাকে সহায়তা করব।
            </p>

            <div className="pt-4">
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                আজেই মিটিং বুক করুন
              </button>
            </div>
          </div>

          {/* Right Illustration Section */}
          <div className="flex justify-end">
            <img
              src={businessBanner}
              alt="Facebook Ads Illustration"
              className="text-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FbBoostBanner;
