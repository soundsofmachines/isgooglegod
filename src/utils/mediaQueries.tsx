import { Box, BoxProps } from "@chakra-ui/react"
import sizes from "@theme/sizes"
import * as R from "ramda"

const useThemeSizes = (value) => 
  typeof value === "string"
    ? value
        .split(" ")
        .map((v) => sizes[v] || v)
        .join(" ")
    : value

export const bp: any = (
    mobile: any = null,
    tablet: any = null,
    desktop: any = null,
    widescreen: any = null
  ) => (
    R.pickBy((v) => R.not(R.isNil(v)), {
    base: useThemeSizes(mobile),
    md: useThemeSizes(tablet),
    lg: useThemeSizes(desktop),
    xl: useThemeSizes(widescreen),
  }))

export const MobileOnly: React.FC<BoxProps & { isFlex?: true }> = (props) => (
  <Box
    display={bp(props.isFlex ? "flex" : "initial", null, "none")}
    {...props}
  />
)

export const LaptopUpOnly: React.FC<BoxProps> = (props) => (
  <Box display={bp("none", null, "initial")} {...props} />
)
