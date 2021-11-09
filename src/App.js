import { ThemeProvider } from "styled-components";
import { MainRoutes } from "./routes/MainRoutes";
import { defaultTheme } from "./styles/default-theme";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <MainRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};
