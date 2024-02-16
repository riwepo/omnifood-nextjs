import Image from "next/image";

import customer1 from "@/public/img/customers/customer-1.jpg";
import customer2 from "@/public/img/customers/customer-2.jpg";
import customer3 from "@/public/img/customers/customer-3.jpg";
import customer4 from "@/public/img/customers/customer-4.jpg";
import customer5 from "@/public/img/customers/customer-5.jpg";

const imageData = [
  { key: 1, src: customer1 },
  { key: 2, src: customer2 },
  { key: 3, src: customer3 },
  { key: 4, src: customer4 },
  { key: 5, src: customer5 },
];
function DeliveredImages() {
  return (
    <ul className="flex list-none">
      {imageData.map((img) => {
        return (
          <li key={img.key}>
            <Image
              src={img.src}
              alt="customer"
              className="-mr-4 h-12 w-12 rounded-full border-2 border-whites-100 last:mr-0"
            ></Image>
          </li>
        );
      })}
    </ul>
  );
}

export default DeliveredImages;
