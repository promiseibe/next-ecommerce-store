"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "./hooks/useWixClient";
import Cookies from "js-cookie";
import { useCartStore } from "./hooks/useCartStore";

// Navbar Separate components for Icons
function NavbarIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  //TEMPORARY
  
 const wixClient = useWixClient();
 const isLoggedIn = wixClient.auth.loggedIn();

const handleLogout = async() => {
  setIsLoading(true)
  Cookies.remove("refreshToken")
  const { logoutUrl } = await wixClient.auth.logout(window.location.href);


  setIsProfileOpen(false) 
   setIsLoading(false)
    router.push(logoutUrl)

}

  const handleProfile = () => {

    if (!isLoggedIn) {
      router.push("/login");
    } else {
        setIsProfileOpen((prev) => !prev);
    }

 
  };

  // AUTH WITH WIX-MANAGED AUTH


  // const login = async() => {
  //   const loginRequestData = wixClient.auth.generateOAuthData("http://localhost:3000");
  
  //   // Store OAuth data in localStorage (optional but useful for maintaining state)
  //   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
  
  //   // Get the authorization URL

  
  //   const {authUrl} = await wixClient.auth.getAuthUrl(loginRequestData)

  //   //   // Redirect the user to the authorization URL
  //   window.location.href = authUrl;
  //   // Log the OAuth data and auth URL (for debugging purposes)
  //   console.log(loginRequestData);
 
  
  

  // };
  
  
//  Handle Logout

const {cart,counter, getCart} = useCartStore();
useEffect(() => {
  getCart(wixClient)
}, [wixClient])

console.log(cart)



  return (
    <div className=" flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className=" cursor-pointer "
        onClick={handleProfile}
        // onClick={login}
      />
      {isProfileOpen && (
        <div className=" absolute p-4 bg-white  rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/"  className="rounded-lg ">Profile</Link>
          <div className=" mt-2 cursor-pointer  rounded-l " onClick={handleLogout}>{isLoading?"Logging out" : "Logout"}</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className=" cursor-pointer "
        onClick={handleProfile}
      />

      <div className=" relative cursor-pointer"   onClick={() => setIsCartOpen((prev) => !prev)}>
        <Image
         unoptimized
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className=" cursor-pointer "
        
        />
        <div className=" absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center" >{counter}</div>
        </div>

        {isCartOpen && (
          <div>
            <CartModal />
          </div>
        )}
      </div>
    
  );
}

export default NavbarIcons;
