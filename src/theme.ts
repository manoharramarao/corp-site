import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      // main: "#556cd6",
      main: "#7B1FA1",
    },
    secondary: {
      // main: "#19857b",
      main: "#f50057",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F6F6F6",
    },
  },
  typography: {
    // Use the system font.
    fontFamily:
      // "-apple-system,system-ui,BlinkMacSystemFont," +
      '"Maven Pro", "Open Sans",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       blockSize: "3.5rem",
    //       fontSize: "1.125rem",
    //     },
    //   },
    // },
    // MuiContainer: {
    //   styleOverrides: {
    //     root: {
    //       padding: "1rem",
    //       backgroundColor: "#FFFFFF",
    //       borderRadius: "0.5rem",
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
        },
      },
    },
    // MuiAccordionSummary: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "1rem",
    //       borderStyle: "solid",
    //     },
    //   },
    // },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem", // This works only if square={true} is used in accordion
          ":before": {
            display: "none",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem", // or any value you like
        },
      },
    },
  },
});

export default theme;
