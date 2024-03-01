import Link from "next/link";
import React from "react";

const RegisterComponent = () => {
  return (
    <div className="bg-white min-h-screen flex">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col justify-between bg-yellow-300 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
        {/* <div className="flex items-center justify-start space-x-3">
          <span className="bg-black rounded-full w-8 h-8"></span>
          <a href="#" className="font-medium text-xl">Brand</a>
        </div> */}
        <div className="space-y-5">
          <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
            Join us now and explore new possibilities
          </h1>
          <p className="text-lg">Already have an account?</p>
          <Link href={'login'}>
            <button className="inline-block mt-8 flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              Log in here
            </button>
          </Link>
        </div>
        <p className="font-medium">© 2022 Company</p>
      </div>

      {/* Registration */}
      <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
        <div className="flex lg:hidden justify-between items-center w-full py-4">
          {/* <div className="flex items-center justify-start space-x-3">
            <span className="bg-black rounded-full w-6 h-6"></span>
            <a href="#" className="font-medium text-lg">Brand</a>
          </div> */}
          <div className="flex items-center space-x-2">
            <span>Already a member? </span>
            <a href="#" className="underline font-medium text-blue-600">
              Log in now
            </a>
          </div>
        </div>
        {/* Registration box */}
        <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Create your account
            </h2>
            <p className="text-md md:text-xl">
              Sign up now and start your journey with us!
            </p>
          </div>
          <div className="flex flex-col max-w-md space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder-normal"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder-normal"
            />
            <input
              type="password"
              placeholder="Password"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder-normal"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder-normal"
            />
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
