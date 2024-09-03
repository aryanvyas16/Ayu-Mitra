import React from "react";
import { useStateContext } from "../context";

const Profile = () => {
  const { currentUser } = useStateContext();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#0f0f14] to-[#13131a] text-white">
      <div className="flex w-full max-w-3xl rounded-lg bg-[#1c1c24] shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Left Section - User Info */}
        <div className="w-1/3 p-8 bg-gradient-to-b from-[#1c1c24] to-[#13131a] rounded-l-lg flex flex-col items-center justify-between">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="h-20 w-20 rounded-full bg-[#1dc071] flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-white">
                {currentUser?.username?.charAt(0).toUpperCase()}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-bold text-white">{currentUser?.username || "Username"}</h2>
            <p className="text-sm text-gray-400 mt-1">{currentUser?.location || "Location"}</p>
          </div>
          <div className="text-lg text-gray-300 mt-auto mb-6">
            <p className="font-semibold">Age: {currentUser?.age || "N/A"}</p>
          </div>
        </div>

        {/* Right Section - Detailed Info */}
        <div className="w-2/3 p-8">
          <h3 className="mb-6 text-2xl font-bold border-b border-gray-700 pb-2">
            Profile Details
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-700 pb-2">
              <span className="text-base font-semibold">Username:</span>
              <span className="text-lg">{currentUser?.username || "Not provided"}</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-700 pb-2">
              <span className="text-base font-semibold">Age:</span>
              <span className="text-lg">{currentUser?.age || "Not provided"}</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-700 pb-2">
              <span className="text-base font-semibold">Location:</span>
              <span className="text-lg">{currentUser?.location || "Not provided"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
