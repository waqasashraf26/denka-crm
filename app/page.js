'use client'
import Image from "next/image";
import logo from '@/public/assets/images/denkaLogo.svg'
import Button from "@/components/shared/Button";
import shade from '@/public/assets/images/loginShade.svg'
import img from '@/public/assets/images/loginImg.png'
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Home() {

  const router = useRouter();

  const handleSubmit = () => {
    router.push('/dashboard')
  }


  return (
    <div className="max-w-[1700px] mx-auto w-full flex min-h-screen sm:p-8 p-6 h-screen justify-between items-center gap-8" >

      {/* Left Form */}
      <div className="lg:w-1/2 w-full h-full flex  flex-col items-center justify-center" >
        <div className="bg-white w-full  sm:p-8 p-4  rounded-lg flex flex-col gap-6 items-center" >

          <div className="w-full flex justify-center">
            <Image alt="logo" src={logo} />
          </div>

          <div className="text-center mt-3">
            <h1 className="font-bold md:text-2xl text-xl">Sign In</h1>
            <p className="text-secondary">Please enter your information to continue.</p>
          </div>

          <form className="w-full mt-5">

            <div className="w-full mb-4">
              <p className="text-secondary mb-2">Email Address</p>
              <input name="" id="" placeholder="Enter Your Email Address" className="w-full border border-lightGray rounded-lg px-3 py-2 placeholder:text-black" />
            </div>

            <div className="w-full">
              <p className="text-secondary mb-2">Password</p>
              <input name="" id="" placeholder="•••••••••••" className="w-full border border-lightGray rounded-lg px-3 py-2 placeholder:text-black" />
            </div>

            <div className="flex items-center flex-wrap justify-between px-1 mt-2 gap-2 w-full">
              <div className="text-secondary flex items-center gap-2">
                <input type="checkbox" className="h-5 w-5" />
                <p>Remember me!</p>
              </div>
              <Link href={''} className="text-mainBlue">Forgot Password?</Link>
            </div>
          </form>

          <Button onClick={handleSubmit} label={'Sign In'} />

        </div>
      </div>

      {/* Right Photo */}
      <div className="w-1/2 h-full lg:block hidden" >
        <div className="flex flex-col items-center xl:pb-[20%] lg:pb-[30%] pb-[60%] justify-between   gap-10 relative px-6 py-12 rounded-xl w-full h-full bg-gradient-to-b from-[#8979FF] to-[#6186CC]">

          <div className="text-white xl:text-[40px] lg:text-3xl  font-bold w-[90%] text-center">
            <h1>Welcome Back! </h1>
            <h1>Please sign in to your Denka Account</h1>
          </div>

          <div className="w-full relative  flex justify-center">
            <div className="w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <Image alt="" src={shade} className="w-full h-full" />
            </div>
            <Image alt="" src={img} className="w-[85%] h-auto " unoptimized />
          </div>
        </div>
      </div>
    </div>
  );
}
