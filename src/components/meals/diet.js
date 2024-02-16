import CheckmarkIcon from "@/public/icons/checkmark-outline.svg";
function Diet({ text }) {
  return (
    <li className="list-itemxx flex items-center gap-4 text-lg leading-tight">
      <CheckmarkIcon
        className="list-icon h-8 w-8 text-burnt-orange-100"
        name="checkmark-outline"
      />
      <span>{text}</span>
    </li>
  );
}

export default Diet;
