import Image from "next/image";

function HeroPicture() {
  const imgWidth = 1200;
  const imgHeight = 1184;
  return (
    <div className="col-auto text-center lg:text-left">
      <Image
        src="/img/hero.webp"
        alt="Woman enjoying food, meals in storage container, and food bowls on a table"
        width={imgWidth}
        height={imgHeight}
      />
    </div>
  );
}

export default HeroPicture;
