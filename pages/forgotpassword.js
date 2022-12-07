import React from "react";
import { SiProgress } from "react-icons/si";
import Link from "next/link";

const Login = () => {
  let handleForgot = (e) => {
    e.preventDefault();
  };
  return (
    <div class='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div class='max-w-md w-full space-y-8'>
        <div>
          <div className='logo flex  text-center items-center justify-center text-2xl'>
            <h1 className='logo ml-10  font-sans md:ml-10 font-extrabold text-xl md:text-2xl pr-3 text-blue-700'>
              CODE OGRE
            </h1>
            <SiProgress className='text-blue-700 ' />
          </div>
          <h2 class='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Forgot Your Password?
          </h2>
          <p class='mt-2 text-center text-sm text-gray-600'>
            Or
            <a class='font-medium text-indigo-600 hover:text-indigo-500'>
              <Link href={"/login"}> Login </Link>
            </a>
          </p>
        </div>
        <form class='mt-8 space-y-6' action='#' method='POST'>
          <input type='hidden' name='remember' value='true' />
          <div class='rounded-md shadow-sm space-y-5'>
            <div>
              <label for='email-address' class='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autocomplete='email'
                required
                class='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleForgot}
              type='submit'
              class='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <span class='absolute left-0 inset-y-0 flex items-center pl-3'>
                <svg
                  class='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clip-rule='evenodd'
                  />
                </svg>
              </span>
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
