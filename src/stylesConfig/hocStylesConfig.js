const hocStylesConfig = () => {
  return {
    mainContainerWrapper: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(270deg, #c51dd8, #71e5e7)",
      backgroundSize: "200% 200%",
      animation: "$changeBackground 8s infinite ease-in-out",
    },
    mainCard: {
      "&.MuiPaper-root": {
        maxWidth: "100%",
        minHeight: "500px",
        padding: "30px",
        borderRadius: "30px",
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 255, 255, 255, 0.25 )",
        backdropFilter: "blur( 4px )",
        webkitBackdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "2px solid rgba( 255, 255, 255, 0.18 )",
      },
    },
    text: {
      "&.MuiTypography-root": {
        color: "#FAFAFA",
        fontFamily: "Nunito",
        fontWeight: "700",
        fontSize: "20px",
        textTransform: "uppercase",
      },
    },
    "@keyframes changeBackground": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
  };
};

export { hocStylesConfig };
