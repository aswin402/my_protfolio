import Image from "next/image";
import logo from "@/public/logo.png"
export const Logo = () => (
  <>
    <Image
      src={logo}
      alt="logo"
      width={40}
      height={40}
      className="rounded-2xl"
    />
</>
);
