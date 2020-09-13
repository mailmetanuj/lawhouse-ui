import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
//import { useStore } from "../state/store";
// import { Provider } from "react-redux";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  //const store = useStore(pageProps.initialReduxState);

  return (
    <React.Fragment>
      <Head>
        <title>Law House</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/*   <Provider store={store}>  */}
      <Component {...pageProps} />

      <script src="/__/firebase/7.20.0/firebase-app.js"></script>

      <script src="/__/firebase/7.20.0/firebase-analytics.js"></script>

      <script src="/__/firebase/init.js"></script>
    </React.Fragment>
  );
}
