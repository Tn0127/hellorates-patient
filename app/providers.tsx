"use client";

import { RequestMoreInfoProvider } from "@/components/request-more-info-dialog";

export function Providers({ children }: { children: React.ReactNode }) {
  return <RequestMoreInfoProvider>{children}</RequestMoreInfoProvider>;
}
