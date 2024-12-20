import { FaCoffee } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} className="h-12" alt="Aromax" />
    </div>
  );
}

export default Logo;
