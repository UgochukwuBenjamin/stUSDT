import React, { useState, useRef, useEffect } from "react";
import { Cpu, Triangle, ChevronDown, Wallet } from "lucide-react";

export default function Hero() {
  const [network, setNetwork] = useState("Ethereum");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const networks = [
    {
      name: "Ethereum",
      icon: <Cpu className="w-4 h-4 text-blue-400 mr-2" />,
    },
    {
      name: "TRON",
      icon: <Triangle className="w-4 h-4 text-red-500 mr-2" />,
    },
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedNetwork = networks.find((n) => n.name === network);

  return (
    <div className="bg-gradient-to-r from-[#0b1a2b] via-[#0e2436] to-[#0f2d3a] text-white px-6 md:px-20 py-14">
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* LEFT SECTION */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Stake and Get{" "}
            <span className="text-[#4ade80]">stUSDT</span>
          </h1>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            You can stake USDT to get the receipt token, stUSDT, by holding which you can receive rewards from RWA investment
            <br />
            <span className="text-[#4ade80] cursor-pointer hover:underline">
              Yields Data Disclosure &gt;
            </span>
          </p>

          {/* NETWORK DROPDOWN */}
          <div className="mt-6 relative inline-block" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="bg-[#1f2a37] hover:bg-[#263445] transition px-4 py-2 rounded-md w-44 flex justify-between items-center text-sm"
            >
              <div className="flex items-center">
                {selectedNetwork.icon}
                {selectedNetwork.name}
              </div>

              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <ul className="absolute mt-2 w-44 bg-[#1f2a37] border border-gray-700 rounded-md shadow-lg z-20">
                {networks.map((net) => (
                  <li
                    key={net.name}
                    onClick={() => {
                      setNetwork(net.name);
                      setOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-[#2c3a4d] flex items-center cursor-pointer text-sm"
                  >
                    {net.icon}
                    {net.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* RIGHT SECTION (STATS) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-x-10 md:gap-y-6 w-full md:w-auto text-left md:text-right">
          
          {/* Total Staked */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-gray-400 text-sm">Total Staked</p>
            <h2 className="text-2xl font-semibold mt-1">$1,804,781</h2>
          </div>

          {/* APY */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-gray-400 text-sm">APY</p>
            <h2 className="text-2xl font-semibold mt-1">3.53%</h2>
          </div>

          {/* My Balance */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-gray-400 text-sm">My stUSDT Balance</p>
            <div className="mt-1 text-lg">-</div>
            <button className="mt-2 text-xs border border-gray-600 px-2 py-1 rounded hover:bg-gray-700 transition flex items-center gap-2">
              <Wallet className="w-3 h-3" />
             Please Connect wallet
            </button>
          </div>

          {/* My Earnings */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-gray-400 text-sm">My Earnings</p>
            <div className="mt-1 text-lg">-</div>
            <button className="mt-2 text-xs border border-gray-600 px-2 py-1 rounded hover:bg-gray-700 transition flex items-center gap-2">
              <Wallet className="w-3 h-3" />
              Please Connect wallet
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}