"use client"

import { useState, useEffect, useCallback } from "react"

export function RoiCalculator() {
  const [freqMode, setFreqMode] = useState<"month" | "year">("month")

  // Panel 1: Declined deals
  const [jobValue, setJobValue] = useState(12000)
  const [declinedDeals, setDeclinedDeals] = useState(3)

  // Panel 2: Partial approvals
  const [gapAmount, setGapAmount] = useState(4000)
  const [partialApprovals, setPartialApprovals] = useState(2)

  // Panel 3: Fee savings
  const [fundedJobs, setFundedJobs] = useState(5)
  const [fundedJobValue, setFundedJobValue] = useState(12000)
  const [feeRate, setFeeRate] = useState(8)

  const formatCurrency = (n: number) => "$" + Math.round(n).toLocaleString("en-US")

  const isYear = freqMode === "year"

  // Calculations
  const d1 = isYear ? declinedDeals : declinedDeals * 12
  const loss1 = jobValue * d1
  const gain1 = loss1

  const p2 = isYear ? partialApprovals : partialApprovals * 12
  const loss2 = gapAmount * p2
  const gain2 = loss2

  const loss3 = fundedJobs * fundedJobValue * (feeRate / 100) * 12
  const hrCost = isYear ? 1001 : 1361
  const hrYr2 = isYear ? 804 : 1164
  const hrLabel = isYear ? "$804/yr + $197 kit" : "$97/mo + $197 activation"
  const gain3 = Math.max(0, loss3 - hrCost)

  const totalLoss = loss1 + loss2 + loss3
  const totalNet = Math.max(0, totalLoss - hrCost)
  const paybackDeals = Math.ceil(hrCost / (jobValue || 12000))

  const handleFreqChange = (mode: "month" | "year") => {
    if (mode === "year" && freqMode === "month") {
      setDeclinedDeals(Math.min(Math.round(declinedDeals * 12), 240))
      setPartialApprovals(Math.min(Math.round(partialApprovals * 12), 240))
    } else if (mode === "month" && freqMode === "year") {
      setDeclinedDeals(Math.max(1, Math.round(declinedDeals / 12)))
      setPartialApprovals(Math.max(1, Math.round(partialApprovals / 12)))
    }
    setFreqMode(mode)
  }

  const sliderStyle = (value: number, min: number, max: number) => {
    const pct = ((value - min) / (max - min)) * 100
    return {
      background: `linear-gradient(to right, var(--blue) ${pct}%, var(--border) ${pct}%)`,
    }
  }

  const maxDeals = isYear ? 240 : 20
  const dealLabel = isYear ? "/yr" : "/mo"
  const minLabel = isYear ? "1/yr" : "1/mo"
  const maxLabel = isYear ? "240/yr" : "20/mo"

  return (
    <section id="calculators-roi" className="hr-section hr-surface-muted">
      <div className="hr-container">
        <div className="mb-10 text-center">
          <p className="hr-eyebrow">Revenue Recovery Calculator</p>
          <h2 className="hr-headline mx-auto mb-4 max-w-3xl">
            How Much Revenue Are You
            <br />
            <span className="text-[var(--green)]">Leaving Behind Every Year?</span>
          </h2>
          <p className="hr-lead mx-auto mb-5">
            Adjust the sliders to match your business. Results update live.
          </p>
          {/* Frequency toggle */}
          <div className="inline-flex bg-white border-2 border-[var(--border)] rounded-full p-0.5 gap-0.5">
            <button
              onClick={() => handleFreqChange("month")}
              className={`text-xs font-bold py-2 px-5 rounded-full border-none cursor-pointer transition-all ${
                freqMode === "month" ? "bg-[var(--navy)] text-white" : "bg-transparent text-[var(--text-mid)]"
              }`}
            >
              Per Month
            </button>
            <button
              onClick={() => handleFreqChange("year")}
              className={`text-xs font-bold py-2 px-5 rounded-full border-none cursor-pointer transition-all ${
                freqMode === "year" ? "bg-[var(--navy)] text-white" : "bg-transparent text-[var(--text-mid)]"
              }`}
            >
              Per Year
            </button>
          </div>
        </div>

        {/* Three Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Panel 1: Declined Deals */}
          <div className="bg-white rounded-2xl border-2 border-[var(--blue)] overflow-hidden shadow-lg flex flex-col">
            <div className="px-5 py-5 border-b border-white/10 bg-[var(--navy)]">
              <div className="text-xl font-bold text-white leading-tight tracking-tight mb-1.5">
                Declined Deal Recovery Calculator
              </div>
              <div className="text-xs text-white/85 leading-relaxed">
                When your primary lender says no, the whole job is lost. How much is that costing you?
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col gap-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-semibold text-[var(--navy)]">Average job value</span>
                  <span className="text-sm font-bold text-[var(--navy)]">{formatCurrency(jobValue)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={50000}
                  step={500}
                  value={jobValue}
                  onChange={(e) => setJobValue(Number(e.target.value))}
                  className="w-full h-1 rounded-full cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--blue)] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
                  style={sliderStyle(jobValue, 0, 50000)}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-[var(--text-light)]">$0</span>
                  <span className="text-[10px] text-[var(--text-light)]">$50,000</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-semibold text-[var(--navy)]">Declined deals per {isYear ? "year" : "month"}</span>
                  <span className="text-sm font-bold text-[var(--navy)]">
                    {declinedDeals}
                    {dealLabel}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={maxDeals}
                  step={1}
                  value={declinedDeals}
                  onChange={(e) => setDeclinedDeals(Number(e.target.value))}
                  className="w-full h-1 rounded-full cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--blue)] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
                  style={sliderStyle(declinedDeals, 1, maxDeals)}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-[var(--text-light)]">{minLabel}</span>
                  <span className="text-[10px] text-[var(--text-light)]">{maxLabel}</span>
                </div>
              </div>
            </div>
            <div className="border-t border-[var(--border)]">
              <div className="px-5 py-3 bg-red-50 border-b border-red-200 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-red-700 tracking-wide">Losing annually</div>
                  <div className="text-[10px] text-[var(--text-light)] mt-0.5">
                    {isYear ? `${d1} declines x ${formatCurrency(jobValue)}` : `${formatCurrency(loss1 / 12)}/mo`}
                  </div>
                </div>
                <div className="text-xl font-bold text-[var(--red)] tracking-tight">{formatCurrency(loss1)}</div>
              </div>
              <div className="px-5 py-3 bg-green-50 flex items-center justify-between">
                <div className="text-[10px] font-bold text-green-700 tracking-wide">
                  Recoverable with HelloRates
                </div>
                <div className="text-xl font-bold text-[var(--green)] tracking-tight">{formatCurrency(gain1)}</div>
              </div>
            </div>
          </div>

          {/* Panel 2: Partial Approvals */}
          <div className="bg-white rounded-2xl border-2 border-[var(--blue)] overflow-hidden shadow-lg flex flex-col">
            <div className="px-5 py-5 border-b border-white/10 bg-[var(--navy)]">
              <div className="text-xl font-bold text-white leading-tight tracking-tight mb-1.5">
                Partial Approval Gap Recovery Calculator
              </div>
              <div className="text-xs text-white/85 leading-relaxed">
                Your lender approves $9k on a $14k job. The gap kills the deal. How much is that costing you?
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col gap-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-semibold text-[var(--navy)]">Average gap amount</span>
                  <span className="text-sm font-bold text-[var(--navy)]">{formatCurrency(gapAmount)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={15000}
                  step={250}
                  value={gapAmount}
                  onChange={(e) => setGapAmount(Number(e.target.value))}
                  className="w-full h-1 rounded-full cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--blue)] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
                  style={sliderStyle(gapAmount, 0, 15000)}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-[var(--text-light)]">$0</span>
                  <span className="text-[10px] text-[var(--text-light)]">$15,000</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-semibold text-[var(--navy)]">Partial approvals per {isYear ? "year" : "month"}</span>
                  <span className="text-sm font-bold text-[var(--navy)]">
                    {partialApprovals}
                    {dealLabel}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={maxDeals}
                  step={1}
                  value={partialApprovals}
                  onChange={(e) => setPartialApprovals(Number(e.target.value))}
                  className="w-full h-1 rounded-full cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--blue)] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
                  style={sliderStyle(partialApprovals, 1, maxDeals)}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-[var(--text-light)]">{minLabel}</span>
                  <span className="text-[10px] text-[var(--text-light)]">{maxLabel}</span>
                </div>
              </div>
            </div>
            <div className="border-t border-[var(--border)]">
              <div className="px-5 py-3 bg-red-50 border-b border-red-200 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-red-700 tracking-wide">Losing annually</div>
                  <div className="text-[10px] text-[var(--text-light)] mt-0.5">
                    {isYear ? `${p2} gaps x ${formatCurrency(gapAmount)}` : `${formatCurrency(loss2 / 12)}/mo`}
                  </div>
                </div>
                <div className="text-xl font-bold text-[var(--red)] tracking-tight">{formatCurrency(loss2)}</div>
              </div>
              <div className="px-5 py-3 bg-green-50 flex items-center justify-between">
                <div className="text-[10px] font-bold text-green-700 tracking-wide">
                  Recoverable with HelloRates
                </div>
                <div className="text-xl font-bold text-[var(--green)] tracking-tight">{formatCurrency(gain2)}</div>
              </div>
            </div>
          </div>

          {/* Panel 3: Fee Savings */}
          <div className="bg-white rounded-2xl border-2 border-[var(--blue)] overflow-hidden shadow-lg flex flex-col">
            <div className="px-5 py-5 border-b border-white/10 bg-[var(--navy)]">
              <div className="text-xl font-bold text-white leading-tight tracking-tight mb-1.5">
                Merchant & Loan Fee Savings Calculator
              </div>
              <div className="text-xs text-white/85 leading-relaxed">
                How much are dealer and merchant fees costing you annually?
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col gap-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-semibold text-[var(--navy)]">Funded jobs per month</span>
                  <span className="text-sm font-bold text-[var(--navy)]">{fundedJobs}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={30}
                  step={1}
                  value={fundedJobs}
                  onChange={(e) => setFundedJobs(Number(e.target.value))}
                  className="w-full h-1 rounded-full cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--blue)] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
                  style={sliderStyle(fundedJobs, 0, 30)}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-[var(--text-light)]">0</span>
                  <span className="text-[10px] text-[var(--text-light)]">30</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-semibold text-[var(--navy)]">Average funded job value</span>
                  <span className="text-sm font-bold text-[var(--navy)]">{formatCurrency(fundedJobValue)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={50000}
                  step={500}
                  value={fundedJobValue}
                  onChange={(e) => setFundedJobValue(Number(e.target.value))}
                  className="w-full h-1 rounded-full cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--blue)] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
                  style={sliderStyle(fundedJobValue, 0, 50000)}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-[var(--text-light)]">$0</span>
                  <span className="text-[10px] text-[var(--text-light)]">$50,000</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-semibold text-[var(--navy)]">Current merchant fee rate</span>
                  <span className="text-sm font-bold text-[var(--navy)]">{feeRate}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={15}
                  step={0.5}
                  value={feeRate}
                  onChange={(e) => setFeeRate(Number(e.target.value))}
                  className="w-full h-1 rounded-full cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--blue)] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
                  style={sliderStyle(feeRate, 0, 15)}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-[var(--text-light)]">0%</span>
                  <span className="text-[10px] text-[var(--text-light)]">15%</span>
                </div>
              </div>
            </div>
            <div className="border-t border-[var(--border)]">
              <div className="px-5 py-3 bg-red-50 border-b border-red-200 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-red-700 tracking-wide">
                    Paying in fees annually
                  </div>
                  <div className="text-[10px] text-[var(--text-light)] mt-0.5">{formatCurrency(loss3 / 12)}/mo</div>
                </div>
                <div className="text-xl font-bold text-[var(--red)] tracking-tight">{formatCurrency(loss3)}</div>
              </div>
              <div className="px-5 py-3 bg-green-50 flex items-center justify-between">
                <div className="text-[10px] font-bold text-green-700 tracking-wide">Annual fee savings</div>
                <div className="text-xl font-bold text-[var(--green)] tracking-tight">{formatCurrency(gain3)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Bar */}
        <div className="text-center mb-3 flex items-center gap-3 justify-center">
          <div className="h-px flex-1 bg-[var(--border)]"></div>
          <div className="text-xs font-bold text-[var(--text-mid)] tracking-wide">YOUR RESULTS</div>
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-mid)" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <div className="h-px flex-1 bg-[var(--border)]"></div>
        </div>

        <div className="bg-[var(--navy)] rounded-2xl p-5 md:p-7">
          <div className="flex flex-wrap items-center gap-5 mb-5">
            <div>
              <div className="text-[10px] font-bold text-white/90 tracking-wide mb-1">
                Total annual losses
              </div>
              <div className="text-2xl md:text-3xl font-bold text-red-400 tracking-tight">{formatCurrency(totalLoss)}</div>
            </div>
            <div className="text-xl text-white/60 mt-4 hidden md:block">-</div>
            <div>
              <div className="text-[10px] font-bold text-white/90 tracking-wide mb-1">
                HelloRates first-year cost
              </div>
              <div className="text-lg font-bold text-white/90">{formatCurrency(hrCost)}</div>
              <div className="text-[10px] text-white/65 mt-0.5">{hrLabel}</div>
              <div className="text-[10px] text-white/55 mt-0.5">
                Year 2+: {formatCurrency(hrYr2)}/yr. kit already paid for
              </div>
            </div>
            <div className="text-xl text-white/60 mt-4 hidden md:block">=</div>
            <div>
              <div className="text-[10px] font-bold text-white/90 tracking-wide mb-1">
                Your net annual recovery
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--green-bright)] tracking-tight">{formatCurrency(totalNet)}</div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-5 flex flex-wrap items-center justify-between gap-5">
            <div>
              <div className="text-sm text-white">
                {paybackDeals <= 1
                  ? "HelloRates pays for itself after your first funded deal"
                  : `HelloRates pays for itself after ${paybackDeals} funded deals`}
              </div>
              <div className="text-[10px] text-white/55 mt-1">
                Based on your slider inputs. Your actual results will vary.
              </div>
            </div>
            <button
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[var(--green-bright)] hover:bg-[var(--green)] text-white text-base font-bold py-3.5 px-10 rounded-full transition-all whitespace-nowrap"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
