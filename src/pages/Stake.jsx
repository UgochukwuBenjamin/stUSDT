import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { ArrowRight } from "lucide-react";

export default function Stake() {
  const [amount, setAmount] = useState("");

  const converted = amount ? parseFloat(amount) * 1 : "";

  return (
    <div className="min-h-screen bg-[#0a1624]">
      <Navbar />
      <Hero />

      {/* Tabs */}
      <div className="px-4 md:px-10 text-white border-b border-gray-700 overflow-x-auto">
        <div className="flex space-x-6 min-w-max">
          <p className="text-green-400 border-b-2 border-green-400 pb-3">Stake</p>
          <p className="text-gray-400 cursor-pointer pb-3">Unstake</p>
          <p className="text-gray-400 cursor-pointer pb-3">Claim</p>
        </div>
      </div>

      {/* Container */}
      <div className="px-4 md:px-10 py-10 text-white max-w-6xl mx-auto">

        {/* Inputs */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          
          {/* Stake */}
          <div className="w-full lg:flex-[1.5]">
            <p className="text-gray-400 text-sm mb-2">You Will Stake</p>
            <div className="flex items-center rounded-xl px-4 md:px-5 py-3 md:py-4 border border-gray-700">
              <input
                type="number"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent outline-none text-white flex-1 text-base md:text-lg"
              />
              <button
                onClick={() => setAmount("100")}
                className="text-xs text-gray-400 mr-2 md:mr-3 hover:text-green-400"
              >
                MAX
              </button>
              <div className="flex items-center gap-1 text-white text-sm">
                <span>🪙</span>
                USDT
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Balance: 100 USDT</p>
          </div>

          {/* Arrow */}
          <div
            className={`flex justify-center items-center transition-all duration-300 ${
              amount
                ? "scale-110 text-green-400"
                : "text-gray-400"
            }`}
          >
            <ArrowRight className="w-6 h-6 md:w-7 md:h-7 rotate-90 lg:rotate-0" />
          </div>

          {/* Receive */}
          <div className="w-full lg:flex-[1.5]">
            <p className="text-gray-400 text-sm mb-2">You Will Receive</p>
            <div className="flex items-center bg-[#1b3438] rounded-xl px-4 md:px-5 py-3 md:py-4 border border-gray-700">
              <input
                type="number"
                placeholder="0"
                readOnly
                value={converted}
                className="bg-transparent outline-none text-white flex-1 text-base md:text-lg"
              />
              <div className="flex items-center gap-1 text-white text-sm">
                <span>🪙</span>
                stUSDT
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Daily Rebase Rewards:{" "}
              {converted
                ? (converted * 0.0001).toFixed(4)
                : "--"}{" "}
              stUSDT
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-green-400 text-white px-6 md:px-8 py-2 rounded-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-300">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}