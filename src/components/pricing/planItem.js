import CheckmarkIcon from "../../../public/icons/checkmark-outline.svg";
import CloseIcon from "../../../public/icons/close-outline.svg";

function PlanItem({ isChecked, markup }) {
  return (
    <li className="list-itemxxx flex items-center gap-4 text-lg leading-tight">
      {isChecked && (
        <CheckmarkIcon
          className="list-icon h-8 w-8 text-burnt-orange-100"
          name="checkmark-outline"
        />
      )}
      {!isChecked && (
        <CloseIcon
          className="list-icon h-8 w-8 text-burnt-orange-100"
          name="checkmark-outline"
        />
      )}

      {markup}
    </li>
  );
}

export default PlanItem;
