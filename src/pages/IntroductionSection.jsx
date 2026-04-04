import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "2-24", apy: 1.5 },
  { date: "2-26", apy: 1.55 },
  { date: "2-28", apy: 1.6 },
  { date: "3-02", apy: 1.65 },
  { date: "3-04", apy: 1.6 },
  { date: "3-06", apy: 1.6 },
  { date: "3-08", apy: 1.95 },
  { date: "3-10", apy: 1.3 },
  { date: "3-12", apy: 1.35 },
  { date: "3-14", apy: 1.45 },
  { date: "3-16", apy: 1.48 },
  { date: "3-18", apy: 1.47 },
  { date: "3-20", apy: 2.1 },
  { date: "3-22", apy: 1.6 },
  { date: "3-24", apy: 1.57 }
];

export default function IntroductionSection() {
  return (
    <div className="space-y-8">
      {/* EXISTING SECTION */}
      <div className="bg-[#0e2a2f] text-white p-8 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <button className="bg-[#1c4c52] hover:bg-[#24656c] text-sm px-3 py-1 rounded flex items-center gap-1">
              Learn More <span>›</span>
            </button>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            stUSDT is a receipt token users receive upon staking USD stablecoins. The stUSDT-RWA Contract allows stUSDT to be unstaked and claimed as USDT at a 1:1 ratio (special rules may apply), with a Rebase mechanism for continuous rewards distribution.
          </p>

          <p className="text-gray-300 text-sm leading-relaxed">
            Security is always our highest priority. Tokens used for staking are managed by third-party companies.
          </p>

          <div className="flex flex-col md:flex-row gap-6 pt-4">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 font-semibold">
                <span className="text-green-400">⬢</span>
                stUSDT
              </div>
              <div className="text-xs text-gray-400 break-all">
                0x3862b57eb5ea6357423f588D78D99A8e6427cc2
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 font-semibold">
                <span className="text-green-400">⬢</span>
                USDT
              </div>
              <div className="text-xs text-gray-400 break-all">
                0xdac05023e8d884fa5c89b0fc535dcfb41951ec7
              </div>
            </div>
          </div>
        </div>

        {/* SIDE PANEL */}
        <div className="bg-[#0b2226] border border-[#12343a] rounded-lg p-6 space-y-5">
          <h3 className="text-lg font-semibold">Fees & Parameters</h3>

          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Staking Fee</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Unstaking Fee</span>
            <span>2.6%</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Claimable in</span>
            <span>T+0 ~ T+3</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Rebase Frequency</span>
            <span>Daily at 17:00</span>
          </div>
        </div>
      </div>

      {/* APY CHART SECTION */}
      <div className="bg-[#0e2a2f] text-white p-8 rounded-xl">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-semibold">stUSDT APY</h2>
          <button className="bg-[#1c4c52] hover:bg-[#24656c] text-sm px-3 py-1 rounded">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Stats */}
          <div className="space-y-6 text-sm">
            <div>
              <p className="text-gray-400">Last 7 Days</p>
              <p className="text-xl font-semibold">1.77%</p>
            </div>
            <div>
              <p className="text-gray-400">Last 30 Days</p>
              <p className="text-xl font-semibold">1.61%</p>
            </div>
            <div>
              <p className="text-gray-400">Since Inception</p>
              <p className="text-xl font-semibold">3.54%</p>
            </div>
          </div>

          {/* Chart */}
          <div className="md:col-span-3 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" domain={[0, 2.5]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="apy"
                  stroke="#34d399"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}