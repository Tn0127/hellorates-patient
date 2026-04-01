"use client";

import { Shield, Check } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Share Your Link or Hand Your Patient a Card",
      desc: (
        <>
          Text, email, or hand your patient a QR card at checkout. They apply from their phone.{" "}
          <strong className="text-[var(--navy)]">You&apos;re done in 30 seconds.</strong>
        </>
      ),
    },
    {
      num: 2,
      title: "60-Second Application, Zero Credit Impact",
      desc: (
        <>
          One soft pull. <strong className="text-[var(--navy)]">No harm to their score, ever.</strong> Before seeing any
          results they agree to lock the funds to your practice by name. Legally binding from the first click.
        </>
      ),
    },
    {
      num: 3,
      title: "35+ Lenders Checked Instantly",
      desc: (
        <>
          Same soft pull, <strong className="text-[var(--navy)]">no additional credit impact.</strong> Your patient
          chooses from approval options and completes two simple steps: proof of identity and bank details. About 2
          minutes total.
        </>
      ),
    },
    {
      num: 4,
      title: "Funded in 24–48 Hours. Your Practice Collects in Full.",
      desc: (
        <>
          Funds reach your practice within 24–48 hours of the patient confirming.{" "}
          <strong className="text-[var(--navy)]">Full treatment amount collected.</strong> No deductions. No holdbacks.
        </>
      ),
    },
  ];

  const protectionItems = [
    {
      title: "Funds locked to your practice before they see a rate",
      desc: "A condition of the application, enforceable from the first click. Not fine print.",
    },
    {
      title: "No treatment completion certificate. Ever.",
      desc: "Your practice is paid on treatment initiation. No lender inspection, no sign-off, no holdback.",
    },
    {
      title: "Zero recourse if a patient defaults",
      desc: "That’s between the patient and the lender. Your practice payment is never clawed back.",
    },
    {
      title: "No holdbacks. No lender inspections.",
      desc: "Paid at treatment initiation. No sign-off required from anyone.",
    },
    {
      title: "Primary program or powerful backup. Your call.",
      desc: "The protection is identical either way. Add it in 2 minutes. Go live same day.",
    },
  ];

  return (
    <section id="how-it-works" className="hr-section">
      <div className="hr-container">
        <p className="hr-eyebrow">How It Works</p>
        <h2 className="hr-headline mb-4 max-w-3xl">
          Four Steps. Zero Paperwork.
          <br />
          <span className="text-[var(--green)]">Your Practice Gets Paid in Full.</span>
        </h2>
        <p className="hr-lead mb-6 max-w-2xl">
          Your patient applies. Your practice gets paid in full within 24–48 hours of your patient confirming their
          financing.
        </p>
        <div className="mb-10 max-w-[680px] rounded-[10px] border border-[#BFDBFE] border-l-4 border-l-[var(--blue)] bg-[#EBF4FF] p-4 text-sm font-semibold leading-relaxed text-[var(--navy)]">
          The funds are legally locked to your practice by name before your patient sees a single rate. A condition of
          the application, enforceable from the first click.
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 text-[11px] font-bold uppercase tracking-wide text-[var(--blue)]">
              What Your Patient Experiences
            </div>
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <div key={step.num} className="relative flex gap-5 pb-8">
                  {i < steps.length - 1 && (
                    <div className="absolute bottom-0 left-[23px] top-12 w-0.5 bg-[var(--border)]" aria-hidden />
                  )}
                  <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-[var(--blue)] bg-[var(--navy)] text-lg font-bold text-white">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <div className="mb-1.5 text-[15px] font-bold text-[var(--navy)]">{step.title}</div>
                    <div className="text-[13px] leading-relaxed text-[var(--text-mid)]">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hr-card border-2 border-[var(--navy)] p-7 md:p-8">
            <div className="mb-1.5 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--navy)]">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div className="text-base font-bold text-[var(--navy)]">Your Practice Payment Is Fully Protected</div>
            </div>
            <div className="mb-5 text-xs text-[var(--text-mid)]">
              Structurally different from every other patient financing program. Here is what that means for your
              practice.
            </div>
            {protectionItems.map((item, i) => (
              <div key={i} className="flex gap-3 border-b border-[var(--border)] py-3 last:border-b-0">
                <div className="mt-0.5 flex shrink-0 text-[15px] font-bold text-[var(--green-bright)]">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <div className="mb-0.5 text-[13px] font-semibold text-[var(--navy)]">{item.title}</div>
                  <div className="text-[11px] leading-relaxed text-[var(--text-mid)]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
