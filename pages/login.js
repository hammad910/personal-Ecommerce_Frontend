import Link from "next/link";
import React from "react";

const LoginComponent = () => {
  return (
    <div className="bg-white min-h-screen flex">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col justify-between bg-yellow-300 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
        <div className="space-y-5">
          <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
            Enter your account and discover new experiences
          </h1>
          <p className="text-lg ">You do not have an account?</p>
          <Link href={'register'}>
            <button className="inline-block mt-8 flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              Create account here
            </button>
          </Link>
        </div>
        <p className="font-medium">© 2022 Company</p>
      </div>

      {/* Login */}
      <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
        <div className="flex lg:hidden justify-between items-center w-full py-4">
          <div className="flex items-center justify-start space-x-3">
            <span className="bg-black rounded-full w-6 h-6"></span>
            <a href="#" className="font-medium text-lg">
              Brand
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span>Not a member? </span>
            <a href="#" className="underline font-medium text-blue-600">
              Sign up now
            </a>
          </div>
        </div>
        {/* Login box */}
        <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Sign in to account
            </h2>
            <p className="text-md md:text-xl">
              Sign up or log in to place the order, no password required!
            </p>
          </div>
          <div className="flex flex-col max-w-md space-y-5">
            <input
              type="text"
              placeholder="Username"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder-normal"
            />
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              Confirm with email
            </button>
            <div className="flex justify-center items-center">
              <span className="w-full border border-black"></span>
              <span className="px-4">Or</span>
              <span className="w-full border border-black"></span>
            </div>
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
              <span className="absolute left-4">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    fill="#EA4335"
                    d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.83636364,19.0909091 6.10909091,17.0717537 5.26620003,14.2354706 L1.23999023,17.3499756 C3.1977497,21.3017021 7.27006974,24 12,24 C15.1636364,24 17.8909091,22.0024797 18.7338,18.9267695 L16.0407269,18.0125889 Z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M1.23999023,17.3499756 L5.26620003,14.2354706 C4.70859517,12.9666942 4.45454545,11.5421403 4.45454545,10 C4.45454545,8.45785974 4.70859517,7.03330584 5.26620003,5.76452941 L1.23999023,2.65002441 C-0.760662499,6.07329597 -0.760662499,9.92670403 1.23999023,13.3499756 L1.23999023,17.3499756 Z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M12,19.0909091 C10.7818182,19.0909091 9.67272727,18.6909091 8.85444915,17.9545455 L5.26620003,20.7645294 C6.10909091,22.9282463 8.83636364,24.9090909 12,24.9090909 C15.0545455,24.9090909 17.7818182,23.7636364 19.9090909,21.9090909 L16.4181818,18.4181818 C15.2181818,19.4 13.6909091,19.0909091 12,19.0909091 Z"
                  ></path>
                </svg>
              </span>
              <span className="font-medium">Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
