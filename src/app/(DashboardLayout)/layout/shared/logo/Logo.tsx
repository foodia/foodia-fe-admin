import logo from "@/utils/logo.png";
import Image from "next/legacy/image";

const Logo = () => {
  return (
    <Image
      src={logo}
      alt="NotFound"
      width={150} // Set the desired width
      height={32.927} // Set the desired height
    />
  );
};

export default Logo;
