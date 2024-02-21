import Image from "next/image";

import techCrunchLogo from "@/public/img/logos/techcrunch.png";
import businessInsiderLogo from "@/public/img/logos/business-insider.png";
import theNewYorkTimesLogo from "@/public/img/logos/the-new-york-times.png";
import forbesLogo from "@/public/img/logos/forbes.png";
import usaTodayLogo from "@/public/img/logos/usa-today.png";

function FeaturedLogos() {
  const logoData = [
    { key: 1, logo: techCrunchLogo, name: "techcrunch" },
    {
      key: 2,
      logo: businessInsiderLogo,
      name: "business-insider",
    },
    {
      key: 3,
      logo: theNewYorkTimesLogo,
      name: "the-new-york-times",
    },
    { key: 4, logo: forbesLogo, name: "forbes" },
    { key: 5, logo: usaTodayLogo, name: "usa-today" },
  ];
  return (
    <ul className="flex justify-around">
      {logoData.map((img) => {
        return (
          <li key={img.key}>
            <Image
              src={img.logo}
              alt={`${img.name} logo`}
              className="h-[0.75rem] w-auto opacity-50 brightness-0 md:h-[1.5rem] lg:h-[2rem]"
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FeaturedLogos;
