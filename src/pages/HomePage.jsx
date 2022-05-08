import { useState } from "react";
import { TiGroup } from "react-icons/ti";
import { AiOutlineSchedule, AiFillWechat } from "react-icons/ai";
import LoginForm from "../components/LoginForm/LoginForm";
import SignupForm from "../components/SignupForm/SignupForm";

export default function HomePage() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  return (
    <div className="min-h-screen bg-gray-800 overflow-auto">
      <div className=" max-w-7xl px-5 min-h-screen mx-auto flex flex-col lg:flex-row lg:items-center">
        <div className="flex flex-col justify-center min-w-full md:min-w-min flex-grow md:flex-1 text-center lg:text-left">
          <h1 className="font-bold text-white text-3xl lg:text-6xl whitespace-nowrap">
            Welcome to Teams
            <br />
            <span className="font-bold text-indigo-400 text-3xl lg:text-6xl">
              we make it easy...
            </span>
          </h1>
          <p className="text-gray-100 text-lg lg:text-lg">
            to manage your teams and projects.
          </p>
        </div>
        <div className="min-w-full md:min-w-min flex-grow md:flex-2">
          {isLoginForm ? (
            <LoginForm setIsLoginForm={setIsLoginForm} />
          ) : (
            <SignupForm setIsLoginForm={setIsLoginForm} />
          )}
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto lg:flex lg:justify-between lg:py-2">
          <div className="border-b-2 border-gray-200 lg:border-y-0 lg:pr-4 lg:py-3 lg:w-1/3 lg:border-r-2">
            <div className="py-3 lg:py-0 max-w-xs mx-auto flex items-center  lg:pr-5">
              <AiOutlineSchedule className="mr-3 text-3xl text-indigo-500"></AiOutlineSchedule>
              <div className="flex flex-col">
                <p className="text-gray-500">
                  Track tasks, progress and deadlines.
                </p>
                <p className="text-black font-medium">Manage your projects</p>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-gray-200 lg:border-y-0 lg:pr-4 lg:py-3 lg:w-1/3 lg:border-r-2">
            <div className="py-3 lg:py-0 max-w-xs mx-auto flex items-center  lg:pr-5">
              <AiFillWechat className="mr-3 text-3xl text-indigo-500"></AiFillWechat>
              <div className="flex flex-col">
                <p className="text-gray-500">Chat, comment and email.</p>
                <p className="text-black font-medium">Stay in touch</p>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-gray-200 lg:border-y-0 lg:pr-4 lg:py-3 lg:w-1/3">
            <div className="py-3 lg:py-0 max-w-xs mx-auto flex items-center  lg:pr-5">
              <TiGroup className="mr-3 text-3xl text-indigo-500"></TiGroup>
              <div className="flex flex-col">
                <p className="text-gray-500">Easily manage team and members.</p>
                <p className="text-black font-medium">Build a team</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col">
          <div className="max-w-md mx-auto flex">
            <TiGroup className="mr-3 text-3xl text-indigo-500"></TiGroup>
            <div>
              <p className="text-gray-500">Chat, comment and eamil.</p>
              <p className="text-black font-medium">Stay in touch</p>
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="max-w-sm flex w-full">
              <TiGroup className="mr-3 text-3xl text-indigo-500"></TiGroup>
              <div>
                <p className="text-gray-500">
                  Track tasks, progress and deadlines.
                </p>
                <p className="text-black font-medium">Manage your projects</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="flex w-full">
              <TiGroup className="mr-3 text-3xl text-indigo-500"></TiGroup>
              <div>
                <p className="text-gray-500">dfsdfsfsdfsdfs.</p>
                <p className="text-black font-medium">Manage your projects</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
