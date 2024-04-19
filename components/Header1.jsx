"use client";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  let first = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.95603 5.4489C1.84279 5.19704 1.54682 5.08467 1.29497 5.1979C1.04311 5.31114 0.930736 5.60711 1.04397 5.85896L1.95603 5.4489ZM8.0625 20.2501L7.60647 20.4551C7.68914 20.639 7.87413 20.7552 8.07565 20.7499C8.27717 20.7446 8.45579 20.6188 8.52868 20.4309L8.0625 20.2501ZM12.4662 10.277C12.566 10.0196 12.4382 9.7299 12.1808 9.63006C11.9233 9.53022 11.6337 9.658 11.5338 9.91546L12.4662 10.277ZM1.04397 5.85896L7.60647 20.4551L8.51853 20.0451L1.95603 5.4489L1.04397 5.85896ZM8.52868 20.4309L12.4662 10.277L11.5338 9.91546L7.59632 20.0693L8.52868 20.4309Z" fill="#212121"></path> <path d="M22.044 5.4489C22.1572 5.19704 22.4532 5.08467 22.705 5.1979C22.9569 5.31114 23.0693 5.60711 22.956 5.85896L22.044 5.4489ZM15.9375 20.2501L16.3935 20.4551C16.3094 20.6421 16.1197 20.7589 15.9149 20.7496C15.71 20.7403 15.5316 20.6069 15.4648 20.413L15.9375 20.2501ZM12.8398 12.7976C12.7498 12.5366 12.8885 12.252 13.1496 12.162C13.4106 12.072 13.6952 12.2107 13.7852 12.4718L12.8398 12.7976ZM22.956 5.85896L16.3935 20.4551L15.4815 20.0451L22.044 5.4489L22.956 5.85896ZM15.4648 20.413L12.8398 12.7976L13.7852 12.4718L16.4102 20.0871L15.4648 20.413Z" fill="#212121"></path> <path d="M8.0625 13.9038L12 3.75L15.9375 13.7055L19.875 5.01923M4.125 5.01923L6.75 11.3654" stroke="#212121" stroke-linecap="round" stroke-linejoin="round"></path> </svg>;

  let second = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"> <g fill="none" fill-rule="evenodd"> <path d="M-2-4h24v24H-2z"></path> <path fill="black" fill-rule="nonzero" d="M9.943 0c-1.9 0-3.55.237-3.82 1.818H3.181C1.41 1.818 0 3.345 0 5.192v7.791c0 1.846 1.41 3.38 3.182 3.38h13.636c1.772 0 3.182-1.534 3.182-3.38V5.192c0-1.847-1.41-3.374-3.182-3.374h-3.054C13.494.237 11.844 0 9.944 0zM10 .911c1.385 0 2.47-.093 2.727.907H7.273C7.53.818 8.615.911 10 .911zM3.182 2.727h13.636c1.25 0 2.273 1.004 2.273 2.306v.996c-1.926 1.136-4.512 1.925-7.415 2.153-.23-.694-.919-1.203-1.733-1.203-.814 0-1.503.509-1.733 1.203-2.846-.224-5.387-.986-7.3-2.086V5.033c0-1.302 1.022-2.306 2.272-2.306zM19.09 7.19v5.781c0 1.398-1.023 2.485-2.273 2.485H3.182c-1.25 0-2.273-1.087-2.273-2.485V7.273c1.996 1.125 4.442 1.734 7.205 1.962l.073.287a1.83 1.83 0 0 0 1.756 1.363 1.83 1.83 0 0 0 1.745-1.322c.012-.04.077-.288.086-.328 2.815-.232 5.304-.887 7.317-2.046zM10 8c.558 0 1 .442 1 1s-.442 1-1 1-1-.442-1-1 .442-1 1-1z" opacity=".7"></path> </g> </svg>

  let third = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 6H5" stroke="#6F787C" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19 12H17" stroke="#6F787C" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 8H22V22H14M14 22V2H2V22H14ZM6 16H10V22H6V16Z" stroke="#6F787C" stroke-linecap="round" stroke-linejoin="round"></path> </svg>

  let fourth = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.9994 16.92V19.92C22.0006 20.1985 21.9435 20.4742 21.832 20.7294C21.7204 20.9845 21.5567 21.2136 21.3515 21.4019C21.1463 21.5901 20.904 21.7335 20.6402 21.8227C20.3764 21.9119 20.0968 21.9451 19.8194 21.92C16.7423 21.5856 13.7864 20.5342 11.1894 18.85C8.77327 17.3147 6.72478 15.2662 5.18945 12.85C3.49942 10.2412 2.44769 7.271 2.11944 4.18001C2.09446 3.90347 2.12732 3.62477 2.21595 3.36163C2.30457 3.09849 2.44702 2.85669 2.63421 2.65163C2.82141 2.44656 3.04925 2.28271 3.30324 2.17053C3.55722 2.05834 3.83179 2.00027 4.10945 2.00001H7.10945C7.59475 1.99523 8.06524 2.16708 8.43321 2.48354C8.80118 2.79999 9.04152 3.23945 9.10944 3.72001C9.23607 4.68007 9.47089 5.62273 9.80945 6.53001C9.94399 6.88793 9.97311 7.27692 9.89335 7.65089C9.8136 8.02485 9.62831 8.36812 9.35944 8.64001L8.08945 9.91001C9.513 12.4136 11.5859 14.4865 14.0894 15.91L15.3594 14.64C15.6313 14.3711 15.9746 14.1859 16.3486 14.1061C16.7225 14.0263 17.1115 14.0555 17.4694 14.19C18.3767 14.5286 19.3194 14.7634 20.2794 14.89C20.7652 14.9585 21.2088 15.2032 21.526 15.5775C21.8431 15.9518 22.0116 16.4296 21.9994 16.92Z" stroke="#212121" stroke-linecap="round" stroke-linejoin="round"></path> </svg>

  useEffect(() => {
    const key = Cookies.get("user");
    if(key){
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [auth]);
  
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    toast.success('Logout successfull')
    router.push("/");
  };
  return (
    <div className=" flex justify-between border-b border-gray-300 items-center h-24 px-10 max-sm:px-4">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className=" w-28 h-28 "
      />
      <div className=" h-full flex">
        <div className=" block1 cursor-default">
        <Block title={"Become a member"} para={"Additional 0% off on stays."} imageSvg = {first} />
        </div>
        <div className=" block2 cursor-default">
        <Block 
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
          imageSvg = {second}
        />
        </div>
        <div className=" block3 cursor-default">
        <Block title={"List your property"} para={"Start earning in 30 min."} imageSvg = {third}/>
        </div>
        <div className=" block4 cursor-default">
        <Block title={"987654321"} para={"Call us to book now."} imageSvg = {fourth}/>
        </div>
        <div className="flex items-center px-3 max-sm:px-0 ">
          <img
            src={"https://cdn.iconscout.com/icon/free/png-512/free-account-circle-1781338-1513659.png?f=webp&w=256"}
            alt="demo"
            width={200}
            height={200}
            className=" w-10 h-10 max-sm:w-6 max-sm:h-6 rounded-full mr-5 opacity-60"
          />
          {auth ? (
            <h3
              className=" font-bold cursor-pointer max-sm:text-sm"
              onClick={handleLogout}
            >
              Logout
            </h3>
          ) : (
            <Link href={"/login"} className=" font-bold max-sm:text-sm">
              Login / Signup
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;