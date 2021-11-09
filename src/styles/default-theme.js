export const defaultTheme = {
  color: {
    primary: { main: "#243B55", dark: "#141E30", light: "#DAECF6", text: "#FFF" },
    secondary: { main: "", dark: "", light: "", text: "" },
    header: { light: "#243B55", dark: "#141E30", gradient: "linear-gradient(to top, #243b55, #141e30)" },
    background: "#061028",
    defaultText: "#FFF",
    error: { main: "#BE5547", dark: "#7E1217", light: "#F9DFD0" },
    warning: { main: "#EDAF3B", dark: "#E28B00", light: "#FDF1CA" },
    success: { main: "#42B547", dark: "#043F22", light: "#D8F8CE" },
    info: { main: "#31AFC1", dark: "#00476E", light: "#C8F9F5" },
  },
  screen: { xs: "0px", sm: "600px", md: "900px", lg: "1200px", xl: "1536px" },
  spacing: (value) => {
    return `${value * 18}px`;
  },
};
