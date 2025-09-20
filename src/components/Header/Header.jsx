{/* import React from "react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const Header = ({ user }) => {
  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-6 py-4 shadow-md">
    
      <div className="text-2xl font-bold">
        Mental Health Management
      </div>

     
      <div className="flex items-center space-x-4">
     
        <button className="relative p-2 rounded-full hover:bg-gray-700">
          <BellIcon className="h-6 w-6" />
 
          <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
        </button>

 
        <button className="p-2 rounded-full hover:bg-gray-700">
          <Cog6ToothIcon className="h-6 w-6" />
        </button>

       
        <div className="flex items-center space-x-2">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover border-2 border-gray-400"
          />
          <div className="text-sm">
            <p className="font-medium">{user.name}</p>
            <p className="text-gray-300 text-xs">{user.role}</p>
          </div>
        </div>
      </div> */}
//     </header>
//   );
// };

// export default Header;
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <h1 className="text-2xl font-bold">Mental Health Management</h1>
    </header>
  );
};

export default Header;