import { log } from 'console';
import loginSvg from  '../../../public/Group 37297.svg'
import GoogleSvg from '../../../public/google.svg'
import Image from "next/image";
export default function Page() {
  return (
    <div className="grid h-screen grid-cols-2 bg-white">
      <div className="mx-32 mt-12 text-center">
        <h1 className="text-2xl font-black text-black"> Sign in to your account</h1>
        <h2 className="mt-5 text-sm text-slate-400">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
        <form className="p-8 mt-10 shadow-lg rounded-xl">
          <div className="mb-8">
            <label className="block mb-4 text-sm font-normal text-left text-gray-700 " htmlFor="email">
              Email address
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none placeholder:text-sm rounded-xl"
              id="Email"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="mb-8">
            <label className="block mb-4 text-sm font-bold text-left text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-gray-700 shadow appearance-none placeholder:text-sm rounded-xl"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col">
            <button

              className="px-8 py-4 text-sm font-bold text-white bg-blue-500 shadow-xl rounded-xl hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log in
            </button>
            <a
              className="mt-4 text-sm font-light text-slate-400"
              href="#"
            >
              Forgot Password?
            </a>
            <a className="mt-6 text-sm text-slate-400"> or </a>
            <button

              className="px-8 py-4 text-sm font-light shadow-sm text-slate-400 rounded-xl focus:outline-none focus:shadow-outline"
              type="button"
            >
                    
              Log in with Google
            </button>
            <button

              className="px-8 py-4 mt-2 text-sm font-light shadow-sm text-slate-400 rounded-xl focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log in with Facebook
            </button>
          </div>
          
        </form>
      </div>
      <div className="bg-violet-100">
       <Image src={loginSvg} height={100} width={1000} alt="woman looking at stats"/>
      </div>
    </div>

  )
}