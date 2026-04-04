import React from "react";
import { ChevronRight } from "lucide-react";


export default function FAQ() {
  const faqs = [
    {
      question: "What is stUSDT?",
      answer:
        "stUSDT is a receipt token that conforms to ERC-20 standards and can be obtained by staking USD stablecoins into the stUSDT-RWA Contract. It supports transfer and can be used in other DeFi protocols. The stUSDT-RWA Contract allows stUSDT to be unstaked and claimed as USDT at a 1:1 ratio (special rules may apply).",
    },
    {
      question: "How to get the stUSDT rewards?",
      answer:
        "You can earn rewards by holding stUSDT. The platform periodically distributes rewards to stUSDT holders through the Rebase mechanism. Holders can observe their rewards growing as their stUSDT balance increases. There are $10,000,000 emergency reserves in the pool that don't generate any reward.",
    },
    {
      question: "What risks are involved?",
      answer:
        "All investments carry risks. The platform prioritizes security and allocates assets to short-term government bonds. However, tokens used here are issued and managed by third-party companies.",
    },
    {
      question: "What fee does the stUSDT platform charge?",
      answer:
        "Staking has no fee. Unstaking includes a small deduction for operational costs. Gas fees may also apply depending on the network.",
    },
    {
      question: "How to stake and unstake?",
      answer:
        "Stake via the Stake tab to receive stUSDT. Unstake via the Unstake tab. Processing usually takes 0–3 days before claiming.",
    },
  ];

  return (
    <div className="bg-[#071c1f] text-white min-h-screen flex flex-col items-center px-6 py-16">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-12 text-green-400 text-center">
        Frequently Asked Questions
      </h1>

      {/* FAQ List */}
      <div className="w-full max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-[#0e2a2f] border border-[#12343a] rounded-xl p-5 transition hover:bg-[#12343a]"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-medium text-base md:text-lg">
                {faq.question}
              </span>

              {/* Icon */}
              <ChevronRight
                className="transition-transform duration-300 group-open:rotate-90 text-green-400"
                size={20}
              />
            </summary>

            {/* Answer */}
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      
    </div>
  );
}