import Marquee from "react-fast-marquee";
import actOne from "../assets/client_logo/act-one-canada-01.png";
import apollo from "../assets/client_logo/apolloshoes-01-1.png";
import c2 from "../assets/client_logo/c2-01.png";
import kelly from "../assets/client_logo/kelly-01.png";
import maco from "../assets/client_logo/maco-b-01.png";
import metco from "../assets/client_logo/metco-01.png";
import omar from "../assets/client_logo/omar-01.png";
import redex from "../assets/client_logo/redex-dx-01.png";
import wayFast from "../assets/client_logo/way-fast-01.png";
import webworld from "../assets/client_logo/web-world-01.png";

const ClientMarquee = () => {
  const clientLogos = [
    actOne,
    apollo,
    c2,
    kelly,
    maco,
    metco,
    omar,
    redex,
    wayFast,
    webworld,
  ];
  return (
    <div className="mx-auto my-16 px-4 text-center text-4xl">
      <h3>
        আমাদের<span className="text-red-600"> সম্মানিত</span> ক্লায়েন্টগণ
      </h3>
      <Marquee pauseOnHover={true} speed={50} gradient={false} loop={0}>
        <div className="flex items-center space-x-12 py-4 mt-6">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="h-16 md:h-10 object-contain"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ClientMarquee;
