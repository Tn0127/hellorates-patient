"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type RequestMoreInfoContextValue = {
  openRequestMoreInfo: () => void;
};

const RequestMoreInfoContext =
  React.createContext<RequestMoreInfoContextValue | null>(null);

export function useRequestMoreInfo() {
  const ctx = React.useContext(RequestMoreInfoContext);
  if (!ctx) {
    throw new Error(
      "useRequestMoreInfo must be used within RequestMoreInfoProvider",
    );
  }
  return ctx;
}

export function RequestMoreInfoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const openRequestMoreInfo = React.useCallback(() => setOpen(true), []);

  return (
    <RequestMoreInfoContext.Provider value={{ openRequestMoreInfo }}>
      {children}
      <RequestMoreInfoModal open={open} onOpenChange={setOpen} />
    </RequestMoreInfoContext.Provider>
  );
}

function RequestMoreInfoModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[calc(100%-2rem)] gap-0 rounded-xl border-[var(--border)] bg-white p-6 shadow-xl sm:max-w-[480px] sm:p-8">
        <DialogHeader className="space-y-3 pr-6 text-left">
          <p className="text-sm font-semibold text-[var(--blue)]">
            Get More Information
          </p>
          <DialogTitle className="text-balance text-2xl font-bold tracking-tight text-[var(--navy)] sm:text-[1.65rem] sm:leading-tight">
            Let&apos;s send you the full details.
          </DialogTitle>
          <DialogDescription className="text-left text-[15px] leading-relaxed text-[var(--text-mid)]">
            Pricing, how the approval process works, and everything you need to decide. Sent directly to you.
          </DialogDescription>
        </DialogHeader>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label
                htmlFor="request-info-first-name"
                className="text-sm font-semibold text-[var(--navy)]"
              >
                First name
              </Label>
              <Input
                id="request-info-first-name"
                name="firstName"
                autoComplete="given-name"
                placeholder="James"
                className="h-11 rounded-lg border-[var(--border)] bg-white px-3.5 text-[var(--navy)] placeholder:text-[var(--text-light)]"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="request-info-last-name"
                className="text-sm font-semibold text-[var(--navy)]"
              >
                Last name
              </Label>
              <Input
                id="request-info-last-name"
                name="lastName"
                autoComplete="family-name"
                placeholder="Rivera"
                className="h-11 rounded-lg border-[var(--border)] bg-white px-3.5 text-[var(--navy)] placeholder:text-[var(--text-light)]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="request-info-email"
              className="text-sm font-semibold text-[var(--navy)]"
            >
              Email address
            </Label>
            <Input
              id="request-info-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="james@riveraroofing.com"
              className="h-11 rounded-lg border-[var(--border)] bg-white px-3.5 text-[var(--navy)] placeholder:text-[var(--text-light)]"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label
                htmlFor="request-info-phone"
                className="text-sm font-semibold text-[var(--navy)]"
              >
                Phone number
              </Label>
              <Input
                id="request-info-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(843) 555-0100"
                className="h-11 rounded-lg border-[var(--border)] bg-white px-3.5 text-[var(--navy)] placeholder:text-[var(--text-light)]"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="request-info-website"
                className="text-sm font-semibold text-[var(--navy)]"
              >
                Business website
              </Label>
              <Input
                id="request-info-website"
                name="website"
                type="url"
                autoComplete="url"
                placeholder="riveraroofing.com"
                className="h-11 rounded-lg border-[var(--border)] bg-white px-3.5 text-[var(--navy)] placeholder:text-[var(--text-light)]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center rounded-full bg-[var(--green-bright)] text-[15px] font-bold text-white shadow-sm transition-colors hover:bg-[var(--green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green)] focus-visible:ring-offset-2"
            >
              Send Me the Details
            </button>
          </div>

          <p className="pt-1 text-center text-xs leading-relaxed text-[var(--text-mid)]">
            No spam. No sales pressure. We&apos;ll follow up within one business
            day.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
