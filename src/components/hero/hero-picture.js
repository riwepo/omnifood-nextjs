import Image from "next/image";

import heroImage from "@/public/img/hero.webp";

function HeroPicture() {
  return (
    <div className="col-auto text-center lg:text-left">
      <Image
        src={heroImage}
        alt="Woman enjoying food, meals in storage container, and food bowls on a table"
        className="w-[80%] md:w-[60%] lg:w-[100%]"
      />
    </div>
  );
}

export default HeroPicture;
