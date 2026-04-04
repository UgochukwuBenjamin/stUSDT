import React from "react";
import Stake from "./pages/Stake";
import FAQ from "./pages/FAQ";
import IntroductionSection from "./pages/IntroductionSection";


function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      <Stake />
<IntroductionSection />
<FAQ />

    </div>
  
  );
}
export default App; 