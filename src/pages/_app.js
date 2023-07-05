import "@/styles/globals.css";
// Import Fetching-Library
import { SWRConfig } from "swr";

async function myFetcher(url) {
  // API Call to URL
  const response = await fetch(url);
  // Response to data format .json
  const data = await response.json();
  return data();
}

export default function App({ Component, pageProps }) {
  return (
    // Passes the fetch to components
    <SWRConfig value={{ fetcher: myFetcher }}>
      <Component {...pageProps} />;
    </SWRConfig>
  );
}
