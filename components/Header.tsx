"use client"

import React from 'react';
import Image from 'next/image';
import logo from "../assets/images/logo.svg";
import unitsIcon from "../assets/images/icon-units.svg";
import dropdown from "../assets/images/icon-dropdown.svg";
import checkmarkIcon from "../assets/images/icon-checkmark.svg";

import { useState } from "react";



interface HeaderProps {
  units: string;
  onToggleUnits: () => void;
};
//why is it void


export default function Header({ units, onToggleUnits }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const handleUnitSelection = (targetUnit: "metric" | "imperial") => {
    if (units !== targetUnit) {
      onToggleUnits();
    }
  };



  return (
    <>
    <header className="flex justify-between items-center mb-8 ">
      <div className="">
        <Image 
        src={logo}
        alt="Weather now logo"
        className="w-40 sm:w-auto"
        />
      </div>

      <div className="relative">
      {/* <div className="relative"> */}
        <button 
        className='flex items-center glass-card space-x-2 px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200'
        //className='flex items-center space-x-2 glass-card px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Image
          src={unitsIcon}
          alt="Weather Units"
          className='inline-block mr-2 '
          />
          Units 
          <Image 
          src={dropdown}
          alt="dropdown"
          className={`inline-block ml-2 ${
              isDropdownOpen ? "rotate-180 transition" : ""
            }`}

          />

        </button>

        {isDropdownOpen && (
          <div className='absolute right-0 glass-card mt-2 rounded-lg w-48 z-50 text-sm'>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <button
                // className="glass-card p-2 rounded-lg w-full "
                className='text-white bg-blue-600 hover:bg-blue-800 font-medium py-2 px-3 rounded-lg transition-colors w-full text-center block text-xs'
                onClick={() => {
                    onToggleUnits();
                    setIsDropdownOpen(false);
                  }}
                >
                  Switch to {units === "metric" ? "Imperial" : "Metric"}

                </button>
              </div>
              

              <div>
                <div className='text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5'>
                  {/* titlle */}
                  Temperature
                </div>

                <div className='space-y-2'>
                  {/* button */}
                  <button
                 className={`w-full px-3 py-1.5 rounded text-left flex items-center justify-between    ${
                        units === "metric" ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:bg-white/10"
                      } `}
                  onClick={() => handleUnitSelection("metric")}
                  >
                    
                    <span>Celsius (&deg; C)</span>
                    {units === "metric" && 
                    <Image 
                    src={checkmarkIcon} 
                    alt="Selected" 
                    className="size-3.5" />
                    }
                  </button>

                   <button
                 className={`w-full px-3 py-1.5 rounded text-left flex items-center justify-between ${
                        units === "imperial" ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:bg-white/10"
                      } `}
                  onClick={() => handleUnitSelection("imperial")}
                  >
                    
                    <span>Fahrenheit (&deg;F)</span>
                    {units === "imperial" && 
                    <Image 
                    src={checkmarkIcon} 
                    alt="Selected" 
                    className="size-3.5" />
                    }
                  </button>

                  
                </div>

              </div>







              {/* Wind Metrics Settings Block */}
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Wind Speed
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => handleUnitSelection("metric")}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-left ${
                        units === "metric" ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:bg-white/5"
                      } transition-colors`}
                    >
                      <span>km/h</span>
                      {units === "metric" && 
                      <Image src={checkmarkIcon} 
                      alt="Selected" 
                      className="size-3.5" />
                      }
                    </button>
                    <button
                      onClick={() => handleUnitSelection("imperial")}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-left ${
                        units === "imperial" ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:bg-white/5"
                      } transition-colors`}
                    >
                      <span>mph</span>
                      {units === "imperial" && 
                      <Image src={checkmarkIcon} 
                      alt="Selected" 
                      className="size-3.5" />
                      }
                    </button>
                  </div>
                </div>

                {/* Precipitation Metrics Settings Block */}
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Precipitation
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => handleUnitSelection("metric")}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-left ${
                        units === "metric" ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:bg-white/5"
                      } transition-colors`}
                    >
                      <span>Millimeters (mm)</span>
                      {units === "metric" && 
                      <Image src={checkmarkIcon} 
                      alt="Selected" 
                      className="size-3.5" />
                      }
                    </button>
                    <button
                      onClick={() => handleUnitSelection("imperial")}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-left ${
                        units === "imperial" ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:bg-white/5"
                      } transition-colors`}
                    >
                      <span>Inches (in)</span>
                      {units === "imperial" && 
                      <Image src={checkmarkIcon} 
                      alt="Selected" 
                      className="size-3.5" />
                      }
                    </button>
                  </div>
                </div>























            </div>
          </div>
         




        )}






      </div>
      






    </header>
      
    </>
  );
}









{/* <div className="absolute right-0 mt-2 w-48 glass-card rounded-lg shadow-lg z-50 text-sm">
            <div className="p-4">


              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => {
                    onToggleUnits();
                    setIsDropdownOpen(false);
                  }}
                  className="text-white glass-card p-2 rounded-lg transition-colors w-full"
                >
                  Switch to {units === "metric" ? "Imperial" : "Metric"}
                </button>
              </div>





              <div className="space-y-4">
                <div>
                  <div className="text-white text-sm mb-2">Temperature</div>
                  <div className="space-y-1">
                    <div
                      className={`flex items-center justify-between px-3 py-2 rounded ${
                        units === "metric" ? "bg-white/20" : "hover:bg-white/10"
                      } transition-colors`}
                    >
                      <span className="text-white">Celcius (&deg;C)</span>
                      {units === "metric" && (
                        <img
                          src={checkmark}
                          alt=""
                          className="inline-block ml-2"
                        />
                      )}
                    </div>

                    <div
                      className={`flex items-center justify-between px-3 py-2 rounded ${
                        units === "imperial"
                          ? "bg-white/20"
                          : "hover:bg-white/10"
                      } transition-colors`}
                    >
                      <span className="text-white">Fahrenheit (&deg;F)</span>
                      {units === "imperial" && (
                        <img
                          src={checkmark}
                          alt=""
                          className="inline-block ml-2"
                        />
                      )}
                    </div>
                  </div>
                </div>






                <div>
                  <div className="text-gray-300 text-sm mb-2">Wind Speed</div>
                  <div className="space-y-1">
                    <div
                      className={`flex items-center justify-between px-3 py-2 rounded ${
                        units === "metric" ? "bg-white/20" : "hover:bg-white/10"
                      } transition-colors`}
                    >
                      <span className="text-white">km/h</span>
                      {units === "metric" && (
                        <img
                          src={checkmark}
                          alt=""
                          className="inline-block ml-2"
                        />
                      )}
                    </div>

                    <div
                      className={`flex items-center justify-between px-3 py-2 rounded ${
                        units === "imperial"
                          ? "bg-white/20"
                          : "hover:bg-white/10"
                      } transition-colors`}
                    >
                      <span className="text-white">mph</span>
                      {units === "imperial" && (
                        <img
                          src={checkmark}
                          alt=""
                          className="inline-block ml-2"
                        />
                      )}
                    </div>
                  </div>
                </div>












                <div>
                  <div className="text-gray-300 text-sm mb-2">
                    Precipitation
                  </div>
                  <div className="space-y-1">
                    <div
                      className={`flex items-center justify-between px-3 py-2 rounded ${
                        units === "metric" ? "bg-white/20" : "hover:bg-white/10"
                      } transition-colors`}
                    >
                      <span className="text-white">Millimeters (mm)</span>
                      {units === "metric" && (
                        <img
                          src={checkmark}
                          alt=""
                          className="inline-block ml-2"
                        />
                      )}
                    </div>
                    <div
                      className={`flex items-center justify-between px-3 py-2 rounded ${
                        units === "imperial"
                          ? "bg-white/20"
                          : "hover:bg-white/10"
                      } transition-colors`}
                    >
                      <span className="text-white">Inches (in)</span>
                      {units === "imperial" && (
                        <img
                          src={checkmark}
                          alt=""
                          className="inline-block ml-2"
                        />
                      )}
                    </div>
                  </div>
                </div>















              </div>

            </div>
          </div> */}























// "use client"

// //hw why isn't my images working ?

// import React from 'react'
// import { useState } from "react";
// import logo from "/assets/images/logo.svg";
// import unitsIcon from "/assets/images/icon-units.svg";
// import dropdown from "/assets/images/icon-dropdown.svg";
// import checkmark from "/assets/images/icon-checkmark.svg";
// import Image from 'next/image'; // 1. Import the component


// export default function Header({ units, onToggleUnits }) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);



//   return (
//     <>
//       <header className="flex justify-between items-center mb-8">
//       <div className="flex items-center space-x-2">
//         <Image src={logo} alt="Weather now!" className="w-40 sm:w-auto" />
//       </div>

//       <div className="relative">
//         <button
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           className="flex items-center space-x-2 glass-card px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200"
//         >
//           <Image src={unitsIcon} alt="" className="inline-block mr-2" />
//           Units
//           <Image
//             src={dropdown}
//             alt=""
//             className='inline-block ml-2'
//             // className={`inline-block ml-2 ${
//             //   isDropdownOpen ? "rotate-180 transition" : ""
//             // }`}
//           />
//         </button>

//         {isDropdownOpen && (
//           <div className="absolute right-0 mt-2 w-48 glass-card rounded-lg shadow-lg z-50 text-sm">
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-4">
//                 <button
//                   // onClick={() => {
//                   //   onToggleUnits();
//                   //   setIsDropdownOpen(false);
//                   // }}
//                   className="text-white glass-card p-2 rounded-lg transition-colors w-full"
//                 >
//                   Switch to {units === "metric" ? "Imperial" : "Metric"}
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <div className="text-white text-sm mb-2">Temperature</div>
//                   <div className="space-y-1">
//                     <div
//                     className='flex items-center justify-between px-3 py-2 rounded'
//                       // className={`flex items-center justify-between px-3 py-2 rounded ${
//                       //   units === "metric" ? "bg-white/20" : "hover:bg-white/10"
//                       // } transition-colors`}
//                     >
//                       <span className="text-white">Celcius (&deg;C)</span>
//                       {units === "metric" && (
//                         <Image
//                           src={checkmark}
//                           alt=""
//                           className="inline-block ml-2"
//                         />
//                       )}
//                     </div>

//                     <div
//                     className="flex items-center justify-between px-3 py-2 rounded"
//                       // className={`flex items-center justify-between px-3 py-2 rounded ${
//                       //   units === "imperial"
//                       //     ? "bg-white/20"
//                       //     : "hover:bg-white/10"
//                       // } transition-colors`}
//                     >
//                       <span className="text-white">Fahrenheit (&deg;F)</span>
//                       {units === "imperial" && (
//                         <Image
//                           src={checkmark}
//                           alt=""
//                           className="inline-block ml-2"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-gray-300 text-sm mb-2">Wind Speed</div>
//                   <div className="space-y-1">
//                     <div
//                       className={`flex items-center justify-between px-3 py-2 rounded ${
//                         units === "metric" ? "bg-white/20" : "hover:bg-white/10"
//                       } transition-colors`}
//                     >
//                       <span className="text-white">km/h</span>
//                       {units === "metric" && (
//                         <Image
//                           src={checkmark}
//                           alt=""
//                           className="inline-block ml-2"
//                         />
//                       )}
//                     </div>

//                     <div
//                       className={`flex items-center justify-between px-3 py-2 rounded ${
//                         units === "imperial"
//                           ? "bg-white/20"
//                           : "hover:bg-white/10"
//                       } transition-colors`}
//                     >
//                       <span className="text-white">mph</span>
//                       {units === "imperial" && (
//                         <Image
//                           src={checkmark}
//                           alt=""
//                           className="inline-block ml-2"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-gray-300 text-sm mb-2">
//                     Precipitation
//                   </div>
//                   <div className="space-y-1">
//                     <div
//                       className={`flex items-center justify-between px-3 py-2 rounded ${
//                         units === "metric" ? "bg-white/20" : "hover:bg-white/10"
//                       } transition-colors`}
//                     >
//                       <span className="text-white">Millimeters (mm)</span>
//                       {units === "metric" && (
//                         <Image
//                           src={checkmark}
//                           alt=""
//                           className="inline-block ml-2"
//                         />
//                       )}
//                     </div>
//                     <div
//                       className={`flex items-center justify-between px-3 py-2 rounded ${
//                         units === "imperial"
//                           ? "bg-white/20"
//                           : "hover:bg-white/10"
//                       } transition-colors`}
//                     >
//                       <span className="text-white">Inches (in)</span>
//                       {units === "imperial" && (
//                         <Image
//                           src={checkmark}
//                           alt=""
//                           className="inline-block ml-2"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//     </>
//   )
// }
