const landingStylesConfig = () => {
  return {
    landingLabel: {
      "&.MuiTypography-root": {
        fontFamily: "Nunito",
        fontSize: "40px",
        fontWeight: "700",
        color: "#FAFAFA",
        marginBottom: "20px"
      },
    },
    landingInput: {
      "& .MuiInputBase-input": {
        backgroundColor: "#ffffff50",
        borderRadius: "40px",
        padding: "15px 10px",
        color: "#555555",
        fontSize: "20px",
        fontFamily: "Nunito",
        fontWeight: "600"
      }
    },
    landingButton: {
      width: "100%",
      marginTop: "20px",
      border: "2px solid #ffffff50",
      borderRadius: "40px",
      padding: "10px",
      backgroundColor: "#ffffff50",
      color: "#fafafa",
      fontSize: "20px",
      fontWeight: "700",
      fontFamily: "Nunito",
      transition: "0.4s ease-in-out",
      "&:hover": {
        boxShadow: "0 8px 32px 0 rgba( 255, 255, 255, 0.25 )",
        background: "rgba( 255, 255, 255, 0.15 )",
      },
    }
  }
}

export {landingStylesConfig};
