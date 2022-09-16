import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/app.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>
      <Component />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <script src="https://unpkg.com/prismjs@1.29.0/components/prism-core.min.js">
      </script>
      <script src="https://unpkg.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js">
      </script>
    </>
  );
}
