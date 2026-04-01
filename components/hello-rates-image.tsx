import Image, { type ImageProps } from "next/image"

/**
 * hellorates.com media returns 403 when Referer is localhost or another disallowed origin.
 */
export function HelloRatesImage(props: Omit<ImageProps, "referrerPolicy">) {
  return <Image {...props} referrerPolicy="no-referrer" />
}
