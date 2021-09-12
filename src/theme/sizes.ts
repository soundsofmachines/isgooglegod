import { theme } from "@chakra-ui/react"
import * as R from "ramda"

const TOTAL_COLUMNS = 16

// const makeCol = (col) => ({
//   [`${col}col`.replace(".", "p")]: `calc(${col} / ${TOTAL_COLUMNS} * 100vw)`,
// })

// const cols = Array.from({ length: 64 }, (_, i) => (i + 1) * 0.25)
// const widthsForCols = cols.map(makeCol)

export default {
  ...theme.sizes,
  xss: ".25rem",
  xs: ".5rem",
  s: ".75rem",
  m: "1rem",
  lg: "1.25rem",
  xl: "2.5rem",
  "2xl": "3.75rem",
  "3xl": "5rem",
  "4xl": "7.5rem",
  // ...R.mergeAll(widthsForCols),
}
