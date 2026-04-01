"use client";

import type { FC } from "react";
import {
  TradeIconPlumbingHvac,
  TradeIconPoolSpa,
  TradeIconWindowsSiding,
  TradeIconRoofingExteriors,
  TradeIconKitchenBath,
  TradeIconElectricalLighting,
  TradeIconLandscapingOutdoor,
  TradeIconRemodelingRenovation,
  TradeIconSolarEnergy,
  TradeIconPaintingFinishes,
  TradeIconHardscapingDecks,
  TradeIconHandymanSpecialty,
} from "./trade-icons";

const trades: { name: string; Icon: FC }[] = [
  { name: "Plumbing & HVAC", Icon: TradeIconPlumbingHvac },
  { name: "Pool & Spa", Icon: TradeIconPoolSpa },
  { name: "Windows & Siding", Icon: TradeIconWindowsSiding },
  { name: "Roofing & Exteriors", Icon: TradeIconRoofingExteriors },
  { name: "Kitchen & Bath", Icon: TradeIconKitchenBath },
  { name: "Electrical & Lighting", Icon: TradeIconElectricalLighting },
  { name: "Landscaping & Outdoor", Icon: TradeIconLandscapingOutdoor },
  { name: "Remodeling & Renovation", Icon: TradeIconRemodelingRenovation },
  { name: "Solar & Energy", Icon: TradeIconSolarEnergy },
  { name: "Painting & Finishes", Icon: TradeIconPaintingFinishes },
  { name: "Hardscaping & Decks", Icon: TradeIconHardscapingDecks },
  { name: "Handyman & Specialty", Icon: TradeIconHandymanSpecialty },
];

export function TradesSection() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-[var(--navy)] py-14 md:py-20 lg:py-24"
      aria-labelledby="trades-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 100% 80% at 50% -30%, rgba(59, 130, 246, 0.2), transparent 50%)",
        }}
      />
      <div className="hr-container relative">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2
            id="trades-heading"
            className="text-[12px] font-bold tracking-[0.08em] text-white/90"
          >
            Works For Every Home Service Trade
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {trades.map(({ name, Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center rounded-2xl border border-white/20 bg-white px-3 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)] md:px-4 md:py-6"
            >
              <div className="mb-3 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[var(--bg-light)] transition-colors group-hover:bg-[var(--bg-blue)] md:h-20 md:w-20">
                <Icon />
              </div>
              <div className="text-center text-[13px] font-semibold leading-snug text-[var(--navy)] md:text-sm">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
