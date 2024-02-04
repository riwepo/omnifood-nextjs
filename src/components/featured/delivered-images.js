import DeliveredImage from "./delivered-image";

function DeliveredImages({ src, alt }) {
  return (
    <div className="flex">
      <DeliveredImage src="/img/customers/customer-1.jpg" alt="customer" />
      <DeliveredImage src="/img/customers/customer-2.jpg" alt="customer" />
      <DeliveredImage src="/img/customers/customer-3.jpg" alt="customer" />
      <DeliveredImage src="/img/customers/customer-4.jpg" alt="customer" />
      <DeliveredImage src="/img/customers/customer-5.jpg" alt="customer" />
      <DeliveredImage src="/img/customers/customer-6.jpg" alt="customer" />
    </div>
  );
  s;
}

export default DeliveredImages;
