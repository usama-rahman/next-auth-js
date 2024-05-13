import { auth } from "@/auth";
import Image from "next/image";
import Signin from "./Signin";
import Signout from "./Signout";

const Header = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      {session?.user ? (
        <div className="flex">
          <p className="px-2"> {session?.user?.name} </p> |
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={32}
            height={32}
            className="mx-2 rounded-full "
          />
          <Signout />
        </div>
      ) : (
        <Signin />
      )}
    </>
  );
};
export default Header;
