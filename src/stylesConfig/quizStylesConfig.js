const quizStylesConfig = () => {
  return {
    progressBar: {
      "&.MuiLinearProgress-root": {
        height: "15px",
        borderRadius: "50px"
      },
      "&.MuiLinearProgress-bar1": {
        borderRadius: "50px",
        backgroundColor: "#FAFAFA",
        color: "#FAFAFA"
      },
    },
    titles: {
      "&.MuiTypography-root": {
        fontFamily: "Nunito",
        fontSize: "40px",
        fontWeight: "700",
        color: "#FAFAFA",
        marginBottom: "20px"
      },
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "400px",
      gap: "25px",
    },
    quizButton: {
      width: "100%",
      background: "rgba( 255, 255, 255, 0.25 )",
      backdropFilter: "blur( 4px )",
      webkitBackdropFilter: "blur( 4px )",
      borderRadius: "40px",
      border: "2px solid rgba( 255, 255, 255, 0.18 )",
      fontFamily: "Nunito",
      fontSize: "23px",
      fontWeight: "700",
      padding: "15px",
      textAlign: "center",
      transition: "0.4s ease-in-out",
      cursor: "pointer",
      color: "#FAFAFA",
      "&:hover": {
        width: "103%",
        fontSize: "28px",
        boxShadow: "0 8px 32px 0 rgba( 255, 255, 255, 0.25 )",
        background: "rgba( 255, 255, 255, 0.15 )",
      },
    },
    answerButton: {
      width: "100%",
      background: "rgba( 255, 255, 255, 0.25 )",
      backdropFilter: "blur( 4px )",
      webkitBackdropFilter: "blur( 4px )",
      borderRadius: "40px",
      border: "2px solid rgba( 255, 255, 255, 0.18 )",
      fontFamily: "Nunito",
      fontSize: "18px",
      fontWeight: "700",
      padding: "15px 10px",
      textAlign: "left",
      transition: "0.4s ease-in-out",
      cursor: "pointer",
      color: "#FAFAFA",
      "&:hover": {
        width: "102%",
        fontSize: "22px",
        boxShadow: "0 8px 32px 0 rgba( 255, 255, 255, 0.25 )",
        background: "rgba( 255, 255, 255, 0.15 )",
      },
    },
    pageButtonsContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px"
    },
    pageButtons: {
      width: "30%",
      background: "rgba( 255, 255, 255, 0.25 )",
      backdropFilter: "blur( 4px )",
      webkitBackdropFilter: "blur( 4px )",
      borderRadius: "40px",
      border: "2px solid rgba( 255, 255, 255, 0.18 )",
      fontFamily: "Nunito",
      fontSize: "18px",
      fontWeight: "700",
      padding: "15px 10px",
      textAlign: "center",
      transition: "0.4s ease-in-out",
      cursor: "pointer",
      color: "#FAFAFA",
      "&:hover": {
        boxShadow: "0 8px 32px 0 rgba( 255, 255, 255, 0.25 )",
        background: "rgba( 255, 255, 255, 0.15 )",
      },
    },
    correctAnswer: {
      width: "300px",
      background: "rgba( 55, 544, 2, 0.25 )",
      backdropFilter: "blur( 4px )",
      webkitBackdropFilter: "blur( 4px )",
      borderRadius: "40px",
      border: "2px solid rgba( 55, 544, 2, 0.25 )",
      fontFamily: "Nunito",
      fontSize: "18px",
      fontWeight: "700",
      padding: "15px 10px",
      textAlign: "center",
      transition: "0.4s ease-in-out",
      cursor: "pointer",
      color: "#FAFAFA",
    },
    wrongAnswer: {
      width: "300px",
      background: "rgba( 900, 0, 0, 0.25 )",
      backdropFilter: "blur( 4px )",
      webkitBackdropFilter: "blur( 4px )",
      borderRadius: "40px",
      border: "2px solid rgba( 255, 255, 255, 0.18 )",
      fontFamily: "Nunito",
      fontSize: "18px",
      fontWeight: "700",
      padding: "15px 10px",
      textAlign: "center",
      transition: "0.4s ease-in-out",
      cursor: "pointer",
      color: "#FAFAFA",
    },
    restartButton: {
      background: "rgba( 255, 255, 255, 0.25 )",
      backdropFilter: "blur( 4px )",
      webkitBackdropFilter: "blur( 4px )",
      borderRadius: "40px",
      border: "2px solid rgba( 255, 255, 255, 0.18 )",
      fontFamily: "Nunito",
      fontSize: "18px",
      fontWeight: "700",
      textDecoration: "none",
      padding: "15px 10px",
      textAlign: "center",
      transition: "0.4s ease-in-out",
      cursor: "pointer",
      color: "#FAFAFA",
      marginTop: "20px",
      "&:hover": {
        boxShadow: "0 8px 32px 0 rgba( 255, 255, 255, 0.25 )",
        background: "rgba( 255, 255, 255, 0.15 )",
      },
    },
  };
};

export { quizStylesConfig };
