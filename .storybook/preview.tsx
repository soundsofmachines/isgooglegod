// import { ChakraProvider, CSSReset } from "@chakra-ui/react"
// import type { Parameters } from "@storybook/react"

// import { viewportParams } from "@utils/storybook"
// import { theme } from "@theme/index"

// import React from "react"

// const withChakra = (Story, context) => (
//   <ChakraProvider theme={theme}>
//     <CSSReset />
//     <Story {...context} />
//   </ChakraProvider>
// )

// export const decorators = [withChakra]

// export const parameters: Parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   layout: 'fullscreen',
//   ...viewportParams
// }
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import type { Parameters } from '@storybook/react';

import { viewportParams } from "@utils/storybook"
import { theme } from "@theme/index"

// Needed for next/image to work in storybook
// https://stackoverflow.com/questions/64622746/how-to-mock-next-js-image-component-in-storybook
import * as nextImage from "next/image"

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "block",
          margin: 0,
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: "block",
            width: 0,
            height: 0,
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            margin: "auto",
            padding: 0,
            boxSizing: "border-box",
            border: "none",
            objectFit: "contain",
            objectPosition: "center",
          }}
          {...props}
        />
      </div>
    )
  },
})

const withChakra = (Story, context) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Story {...context} />
  </ChakraProvider>
)

export const decorators = [withChakra]

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  ...viewportParams
}
