import CloseIcon from "@/public/icons/close-outline.svg";
import MenuIcon from "@/public/icons/menu-outline.svg";

function MobileMenuButton({ isNavOpen, onClick }) {
  return (
    <button className="z-50 inline-block md:hidden" onClick={onClick}>
      {isNavOpen && <CloseIcon className="w-12" />}
      {!isNavOpen && <MenuIcon className="w-12" />}
    </button>
  );
}

export default MobileMenuButton;
