import CheckmarkIcon from "../../../public/icons/meals/checkmark-outline.svg";

function Feature({ text }) {
  return (
    <li className="list-itemxxx flex items-center gap-4 text-lg leading-tight">
      <CheckmarkIcon
        className="list-icon h-8 w-8 text-burnt-orange-100"
        name="checkmark-outline"
      />
      <span>{text}</span>
    </li>
  );
}

export default Feature;
