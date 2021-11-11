export const defaultTheme = {
  color: {
    primary: { main: "#243B55", dark: "#141E30", light: "#DAECF6", text: "#FFF" },
    secondary: { main: "", dark: "", light: "", text: "" },
    header: { light: "#243B55", dark: "#141E30", gradient: "linear-gradient(to top, #243b55, #141e30)" },
    backgroundColor: "#000",
    backgroundGradient: "linear-gradient(90deg, rgba(12,17,25,1) 0%, rgba(20,30,48,1) 10%, rgba(20,30,48,1) 90%, rgba(12,17,25,1) 100%);",
    defaultText: "#FFF",
    error: { main: "#BE5547", dark: "#7E1217", light: "#F9DFD0" },
    warning: { main: "#EDAF3B", dark: "#E28B00", light: "#FDF1CA" },
    success: { main: "#42B547", dark: "#043F22", light: "#D8F8CE" },
    info: { main: "#31AFC1", dark: "#00476E", light: "#C8F9F5" },
    gray: { main: 'rgba(0,0,0,0.2)', light: 'rgba(0,0,0,0.02)'}
  },
  shadown: "0px 1px 5px rgba(0, 0, 0, 0.25)",
  screen: { xs: "0px", sm: "600px", md: "900px", lg: "1200px", xl: "1536px" },
  size: { headerBar: "80px", footerBar: "" },
  spacing: (value) => {
    return `${value * 18}px`;
  },
};
