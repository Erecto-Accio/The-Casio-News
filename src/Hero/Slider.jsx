import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="bg-base-200 mt-5 mb-5">
      <div className="flex p-2">
        <div>
          <button className="btn btn-secondary text-white">
            Breaking News
          </button>
        </div>
        <Marquee>
          <Link className="bangla-font">
            বর্জ্য ঘেঁটে মাংস-চুল-হাড় উদ্ধার, এমপির কি না জানা যাবে ফরেনসিক
            পরীক্ষায় |
          </Link>
          <Link className="mx-1 bangla-font">
            ফিলিস্তিনকে রাষ্ট্র হিসাবে স্বীকৃতি দিলো ইউরোপের তিন দেশ |
          </Link>
          <Link className="mx-1 bangla-font">
            যে কারণে এতটা দীর্ঘস্থায়ী হলো ঘূর্ণিঝড় রিমাল |
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;
