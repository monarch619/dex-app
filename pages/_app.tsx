import { ACTIVE_CHAIN } from "@/const/details";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";


const activeChain = "base";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={ACTIVE_CHAIN}
      supportedChains={[ACTIVE_CHAIN]}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}
