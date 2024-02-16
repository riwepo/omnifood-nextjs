import Image from "next/image";

import customer1 from "@/public/img/customers/customer-1.jpg";
import customer2 from "@/public/img/customers/customer-2.jpg";
import customer3 from "@/public/img/customers/customer-3.jpg";
import customer4 from "@/public/img/customers/customer-4.jpg";
import customer5 from "@/public/img/customers/customer-5.jpg";

const imageData = [
  { index: 1, src: customer1 },
  { index: 2, src: customer2 },
  { index: 3, src: customer3 },
  { index: 4, src: customer4 },
  { index: 5, src: customer5 },
];
console.log(imageData);
function DeliveredImages() {
  return (
    <div className="flex">
      {imageData.map((img) => {
        return (
          <Image
            key={img.index}
            src={img.src}
            alt="customer"
            className="-mr-4 h-12 w-12 rounded-full border-2 border-whites-100 last:mr-0"
          ></Image>
        );
      })}
    </div>
  );
}

export default DeliveredImages;
