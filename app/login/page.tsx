"use client"

import bg from "../../assets/login/1_T6Y8YG03wie8W1fQ22AmmQ 1.png";
import Form from "./form";
// import googleLogin from "../../assets/login/google.png";
import BottomBar from "./bottom-bar";
import { GoogleOAuthProvider,GoogleLogin } from "@react-oauth/google";
import Image from "next/image";

const onFailure = () => {
  console.log("Fail");
};

const onSuccess = (res : any) => {
  console.log(res);
};


export default function Page() {
  return (
    <>
      <section className='flex mt-6 gap-5'>
        <div>
          <Image src={bg} alt='' className='' />
        </div>
        <div className='grow'>
          <p className='text-2xl font-bold text-center'>
            <span className='text-secondary w-full mx-auto'>
              Welcome to your
            </span>{" "}
            <br />
            <span className='text-primary w-full mx-auto'>
              Social community
            </span>
          </p>
          <p className='text-gray-600 mt-6 text-center'>
            Grow, engage and monetise your community <br />
            with your own social platform
          </p>
          {/* google login button */}
          {/* <button className='block mx-auto'>
          <Image src={googleLogin} alt='' className='' />
        </button> */}

        <GoogleOAuthProvider clientId="560792620190-sjlv061l3hrev4cpm7fhh7t5n16mbo4f.apps.googleusercontent.com" >
        <button className='flex text-secondary gap-3 py-3 px-10 shadow-md rounded-md mx-auto mt-16 items-center hover:shadow-lg'>
          <GoogleLogin onSuccess={onSuccess} onError={onFailure}/>
          </button>
        </GoogleOAuthProvider>

          <p className='text-xs text-center text-gray-600 my-5'>Or</p>
          <Form />
        </div>
      </section>
      <BottomBar />
    </>
  );
}
