import MainView from "./layout/MainView";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { Auth0Provider } from "@auth0/auth0-react";

import { ThemeProvider } from "@material-ui/core/styles";

export default function Home() {
  return (
    <Auth0Provider
      domain="lawhouse.us.auth0.com"
      clientId="c6wMEZsJJhTqjhnF95rwGFD1xWG5xE1X"
      redirectUri="http://localhost:3000"
    >
      {/* redirectUri={
        typeof window !== "undefined" ? window.location.origin : undefined
      }*/}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainView />
      </ThemeProvider>
    </Auth0Provider>
  );
}
