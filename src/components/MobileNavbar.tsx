import { XMarkIcon } from "@heroicons/react/20/solid";

interface Props {
  isNavbar: boolean;
  closeNavbar: () => void;
}
export default function MobileNavbar({ closeNavbar, isNavbar }: Props) {
  const navAnimation = isNavbar ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={` fixed transform ${navAnimation}  transition-all duration-200  top-0 left-0 right-0 bottom-0 z-[1000] bg-[#09101a]`}
    >
      <div className=" w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile ">HOME</div>
        <div className="nav-link-mobile">SERVICES</div>
        <div className="nav-link-mobile">ABOUT</div>
        <div className="nav-link-mobile">PROJECT</div>
        <div className="nav-link-mobile">CONTECT</div>
        <div className="nav-link-mobile">BLOG</div>
      </div>
      <div
        onClick={closeNavbar}
        className="text-yellow-400 cursor-pointer absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem]"
      >
        <XMarkIcon />
      </div>
    </div>
  );
}
