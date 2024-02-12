import CheckmarkIcon from "../../../public/icons/meals/checkmark-outline.svg";
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

// .list-item {
//   font-size: 1.8rem;
//   display: flex;
//   align-items: center;
//   gap: 1.6rem;
//   line-height: 1.2;
// }

// .list-icon {
//   width: 3rem;
//   height: 3rem;
//   color: #e67e22;
// }
