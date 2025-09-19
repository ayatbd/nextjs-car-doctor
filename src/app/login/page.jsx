import React from "react";
import LogInForm from "./components/LogInForm";
import SocialLogin from "./components/SocialLogin";

const LogIn = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        {/* Left Side */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-6 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Log in</h1>
            <div className="w-full flex-1 mt-8">
              <SocialLogin></SocialLogin>
              {/* Divider */}
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>

              {/* Email & Password Form */}
              <LogInForm></LogInForm>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
