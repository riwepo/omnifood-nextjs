import Image from "next/image";

import customer1 from "@/public/img/customers/customer-1.jpg";
import customer2 from "@/public/img/customers/customer-2.jpg";
import customer3 from "@/public/img/customers/customer-3.jpg";
import customer4 from "@/public/img/customers/customer-4.jpg";
import customer5 from "@/public/img/customers/customer-5.jpg";

const imageData = [
  { key: 1, img: customer1 },
  { key: 2, img: customer2 },
  { key: 3, img: customer3 },
  { key: 4, img: customer4 },
  { key: 5, img: customer5 },
];
function DeliveredImages() {
  return (
    <ul className="flex list-none">
      {imageData.map((img) => {
        return (
          <li key={img.key} className="-mr-4 last:mr-0">
            <Image
              src={img.img}
              alt="customer"
              className="h-12 w-12 rounded-full border-2 border-whites-100"
            ></Image>
          </li>
        );
      })}
    </ul>
  );
}

export default DeliveredImages;
