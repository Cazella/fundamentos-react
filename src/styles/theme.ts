import { defineConfig } from "@chakra-ui/react";

export const themeConfig = defineConfig({
  globalCss: {
    "html, body": {
      backgroundImage: "linear-gradient(to right,rgb(255, 255, 255),rgb(171, 82, 253))",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    }
  },
  theme: {
    tokens: {
      colors: {},
    },
  },
})
