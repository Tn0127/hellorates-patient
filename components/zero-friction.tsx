"use client";

import { XCircle } from "lucide-react";

export function ZeroFriction() {
  const whatYouNeverDo = [
    {
      title: "No Paperwork. Ever.",
      desc: "The patient is the borrower. There is no practice-side paperwork, no forms, no documents to chase. You hand a card or share a link and your team is done.",
    },
    {
      title: "No Switching Programs. No Training Required.",
      desc: "Keep your current financing program exactly as-is. Your team doesn't need to understand loan terms or underwriting. HelloRates handles everything. Your staff just hands a card.",
    },
    {
      title: "No Patient Handholding Or Follow-Up.",
      desc: "Your patient applies privately on their phone. You get a notification when they're approved. No calls, no chasing, no explaining financing terms. Your practice collects payment.",
    },
    {
      title: "No Fees Deducted From Your Payment. Ever.",
      desc: "Other patient financing programs charge 5–15% per funded treatment. HelloRates charges $0. You bill the full treatment amount, you receive the full treatment amount. HelloRates earns on loan origination, not from your practice.",
    },
  ];

  const paymentSteps = [
    "Patient applies and sees up to 3 approval options. They choose the best one for their situation.",
    "The funds go directly to your practice within 24–48 hours of loan confirmation.",
    <>
      <strong className="text-[var(--navy)]">Patient pays your practice in full on your terms.</strong> Before treatment
      begins or however you choose to structure it.
    </>,
  ];

  return (
    <section className="hr-section hr-surface-muted">
      <div className="hr-container">
        <p className="hr-eyebrow">Zero Friction Adoption</p>
        <h2 className="hr-headline mb-4 max-w-3xl">
          Two Minutes to Add It.
          <br />
          <span className="text-[var(--green)]">Go Live the Same Day.</span>
        </h2>
        <p className="hr-lead mb-10 max-w-2xl">
          Already using a patient financing program? HelloRates runs alongside it and covers every patient your current
          program declines, every partial approval gap, and eliminates all merchant financing fees. If your program
          can&apos;t do all three, it&apos;s incomplete. HelloRates makes it whole. No switching. No training. No changes
          to how your
          practice runs.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-4">
            {whatYouNeverDo.map((item, i) => (
              <div key={i} className="hr-card flex items-start gap-4 p-5 md:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50">
                  <XCircle className="h-5 w-5 text-[var(--red)]" />
                </div>
                <div>
                  <div className="mb-1 text-[15px] font-bold text-[var(--navy)]">{item.title}</div>
                  <div className="text-[13px] leading-relaxed text-[var(--text-mid)]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <div className="hr-card border-[3px] border-[var(--blue)] p-7 text-center shadow-md md:p-8">
              <div className="mb-2 text-xs font-semibold tracking-wider text-[var(--navy)]">Your practice gets paid</div>
              <div className="mb-1 text-5xl font-bold leading-none tracking-tight text-[var(--green)]">In Cash</div>
              <div className="mb-4 text-base font-semibold text-[var(--navy)]">Within 24–48 hours</div>
              <div className="mb-4 h-px bg-[var(--border)]" />
              <div className="flex flex-col gap-2.5">
                {paymentSteps.map((step, j) => (
                  <div key={j} className="flex items-start gap-2.5 text-left">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--green)] text-xs font-bold text-white">
                      {j + 1}
                    </div>
                    <div className="text-[13px] leading-relaxed text-[var(--text-mid)]">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
