import '@/styles/globals.css'
import { Provider, createClient } from "urql";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";
import { StateContext } from "@/lib/context";
import { Toaster } from "react-hot-toast";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Provider value={client}>
        <Toaster />
        <Nav />
        <Component {...pageProps} />;
        <Footer />
      </Provider>
    </StateContext>
  );
}
