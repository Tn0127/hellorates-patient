import Image from "next/image";

type HelloRatesLogoProps = {
  className?: string;
  priority?: boolean;
};

export function HelloRatesLogo({ className, priority }: HelloRatesLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="HelloRates — Patient Financing Solutions"
      width={220}
      height={62}
      className={className}
      priority={priority}
    />
  );
}
