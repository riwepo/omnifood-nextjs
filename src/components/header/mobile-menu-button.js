import CloseIcon from "@/public/icons/close-outline.svg";
import MenuIcon from "@/public/icons/menu-outline.svg";

function MobileMenuButton() {
  return (
    <button className="z-50 inline-block md:hidden">
      <CloseIcon className="w-12" />
      <MenuIcon className="w-12" />
    </button>
  );
}

export default MobileMenuButton;
