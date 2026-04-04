import React, { useState, useRef, useEffect } from "react";
import { Cpu, Triangle, ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/image.png";

export default function Navbar() {
  const [network, setNetwork] = useState("Ethereum");
  const [networkOpen, setNetworkOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const networkRef = useRef();
  const langRef = useRef();

  const [language, setLanguage] = useState("English");

  const networks = [
    { name: "Ethereum", icon: <Cpu className="w-5 h-5 text-blue-400 mr-2" /> },
    { name: "TRON", icon: <Triangle className="w-5 h-5 text-red-500 mr-2" /> },
  ];

  const languages = [
    { name: "English" },
    { name: "中文" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (networkRef.current && !networkRef.current.contains(event.target)) {
        setNetworkOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedNetwork = networks.find((n) => n.name === network);

  return (
    <>
      {/* ✅ FIXED NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 bg-slate-800 text-white px-6 py-4 flex justify-between items-center shadow-md">

        {/* Logo */}
        <div className="flex items-center gap-2 ml-20 cursor-pointer">
          <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
          <h1 className="text-xl  font-bold text-green-400">stUSDT</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-25 ml-25 text-sm">
          <p className="hover:text-green-400 cursor-pointer">Home</p>
          <p className="text-green-400 border-b-2 border-green-400 pb-1">Stake</p>
          <p className="hover:text-green-400 cursor-pointer">Wrap</p>
          <p className="hover:text-green-400 cursor-pointer">Data</p>
          <p className="hover:text-green-400 cursor-pointer">Docs</p>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center space-x-3">

          {/* Language */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="bg-gray-700 px-3 py-1 rounded flex items-center"
            >
              <span className="text-sm">{language}</span>
              <ChevronDown
                className={`w-4 h-4 ml-1 transition ${
                  langOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langOpen && (
              <ul className="absolute right-0 mt-1 bg-gray-700 rounded shadow-lg">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    onClick={() => {
                      setLanguage(lang.name);
                      setLangOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  >
                    {lang.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Network */}
          <div className="relative" ref={networkRef}>
            <button
              onClick={() => setNetworkOpen(!networkOpen)}
              className="bg-gray-700 px-3 py-1 rounded flex items-center"
            >
              {selectedNetwork.icon}
              <span className="text-sm">{selectedNetwork.name}</span>
              <ChevronDown
                className={`w-4 h-4 ml-1 transition ${
                  networkOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {networkOpen && (
              <ul className="absolute right-0 mt-1 bg-gray-700 rounded shadow-lg">
                {networks.map((net) => (
                  <li
                    key={net.name}
                    onClick={() => {
                      setNetwork(net.name);
                      setNetworkOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-600 flex items-center cursor-pointer"
                  >
                    {net.icon}
                    {net.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Button */}
          <button className="border border-green-500 text-green-500 px-3 py-1 rounded hover:bg-green-500 hover:text-black transition">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* ⚠️ SPACER (VERY IMPORTANT) */}
      <div className="h-[80px]" />

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Slide-in Menu */}
      <div
  className={`fixed top-0 right-0 h-full w-64 bg-slate-900 text-white z-50 transform transition-transform duration-300 ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex justify-between items-center p-4 border-b border-gray-700">
    <h2 className="text-green-400 font-bold">Menu</h2>
    <X className="cursor-pointer" onClick={() => setMenuOpen(false)} />
  </div>

  <div className="flex flex-col p-4 space-y-4">
    <p className="hover:text-green-400 cursor-pointer">Home</p>
    <p className="text-green-400">Stake</p>
    <p className="hover:text-green-400 cursor-pointer">Wrap</p>
    <p className="hover:text-green-400 cursor-pointer">Data</p>
    <p className="hover:text-green-400 cursor-pointer">Docs</p>

    {/* Language */}
    <div className="relative" ref={langRef}>
      <button
        onClick={() => setLangOpen(!langOpen)}
        className="bg-gray-700 px-3 py-2 rounded flex items-center justify-between w-full"
      >
        <span>{language}</span>
        <ChevronDown className={`w-4 h-4 ${langOpen ? "rotate-180" : ""}`} />
      </button>

      {langOpen && (
        <ul className="mt-1 bg-gray-700 rounded shadow-lg">
          {languages.map((lang) => (
            <li
              key={lang.name}
              onClick={() => {
                setLanguage(lang.name);
                setLangOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
            >
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Network */}
    <div className="relative" ref={networkRef}>
      <button
        onClick={() => setNetworkOpen(!networkOpen)}
        className="bg-gray-700 px-3 py-2 rounded flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-2">
          {selectedNetwork.icon}
          <span>{selectedNetwork.name}</span>
        </div>
        <ChevronDown className={`w-4 h-4 ${networkOpen ? "rotate-180" : ""}`} />
      </button>

      {networkOpen && (
        <ul className="mt-1 bg-gray-700 rounded shadow-lg">
          {networks.map((net) => (
            <li
              key={net.name}
              onClick={() => {
                setNetwork(net.name);
                setNetworkOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-600 flex items-center cursor-pointer"
            >
              {net.icon}
              {net.name}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Button */}
    <button className="mt-4 border border-green-500 text-green-500 py-2 rounded hover:bg-green-500 hover:text-black transition">
      Connect Wallet
    </button>
  </div>
</div>
</>
  );
}