import Image from "next/image";

import techCrunchLogo from "@/public/img/logos/techcrunch.png";
import businessInsiderLogo from "@/public/img/logos/business-insider.png";
import theNewYorkTimesLogo from "@/public/img/logos/the-new-york-times.png";
import forbesLogo from "@/public/img/logos/forbes.png";
import usaTodayLogo from "@/public/img/logos/usa-today.png";

function FeaturedLogos() {
  const logoData = [
    { index: 1, logo: techCrunchLogo, name: "techcrunch" },
    {
      index: 2,
      logo: businessInsiderLogo,
      name: "business-insider",
    },
    {
      index: 3,
      logo: theNewYorkTimesLogo,
      name: "the-new-york-times",
    },
    { index: 4, logo: forbesLogo, name: "forbes" },
    { index: 5, logo: usaTodayLogo, name: "usa-today" },
  ];
  return (
    <ul className="flex justify-around">
      {logoData.map((img) => {
        return (
          <li key={img.index}>
            <Image
              src={img.logo}
              alt={`${img.name} logo`}
              className="h-3 w-full opacity-50 brightness-0 md:h-6 lg:h-8"
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FeaturedLogos;
