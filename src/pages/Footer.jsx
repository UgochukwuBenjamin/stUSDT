import React from "react";
import { Mail, Linkedin, Send, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1624] text-white border-t border-gray-800 mt-10">
      
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <h1 className="text-lg font-bold text-green-400">stUSDT</h1>

        {/* Center Links */}
        <div className="flex gap-6 text-gray-400 text-sm">
          <p className="hover:text-green-400 cursor-pointer">Home</p>
          <p className="hover:text-green-400 cursor-pointer">Stake</p>
          <p className="hover:text-green-400 cursor-pointer">Docs</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          
          <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 hover:text-black transition">
            <Twitter className="w-5 h-5" />
          </a>

          <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 hover:text-black transition">
            <Send className="w-5 h-5" /> {/* Telegram */}
          </a>

          <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 hover:text-black transition">
            <Linkedin className="w-5 h-5" />
          </a>

          <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 hover:text-black transition">
            <Mail className="w-5 h-5" />
          </a>

        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-xs pb-4">
        © {new Date().getFullYear()} stUSDT. All rights reserved.
      </div>

    </footer>
  );
}