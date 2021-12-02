import { Grid, Typography, LinearProgress, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainContainer from "../../components/hoc/MainContainer";
import { quizStylesConfig } from "../../stylesConfig/quizStylesConfig";

const Quiz = () => {
  const [data, setData] = useState();
  const [selectDifficulty, setSelectDifficulty] = useState(true);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [corrects, setCorrects] = useState(0)
  const [loading, setLoading] = useState(false)

  const useStyles = makeStyles(quizStylesConfig())
  const classes = useStyles()

  const getApiData = (difficulty) => {
    
    axios
      .get("https://quizapi.io/api/v1/questions", {
        headers: {
          "X-Api-Key": "c0kq9cZDqvZENHq4fbqRDmLZbwcEOkPPNbCsEu2t",
        },
        params: { limit: 10, difficulty: difficulty && difficulty },
      })
      
      .then((res) => {
        setLoading(true)
        setData(res.data);
      });
    
    setSelectDifficulty(false);
  };

  const nextQuestion = () => {
    setQuestion(question + 1);
  };

  const prevQuestion = () => {
    setQuestion(question - 1);
  };

  const viewResults = () => {
    setShowResults(true);
  };

  const resetData = () => {
    localStorage.removeItem("name")
    localStorage.removeItem("corrects")
  }

  const howManyCorrects = () => {
    return data && data.map((item, idx) => {
      if(answers[idx] === item.correct_answers.answer_a_correct || 
         answers[idx] === item.correct_answers.answer_b_correct || 
         answers[idx] === item.correct_answers.answer_c_correct || 
         answers[idx] === item.correct_answers.answer_d_correct ||
         answers[idx] === item.correct_answers.answer_e_correct ||
         answers[idx] === item.correct_answers.answer_f_correct 
        )
        setCorrects(corrects + 1)
        localStorage.setItem("corrects", corrects)
    })
  }

  useEffect(() => {
    howManyCorrects()
  }, [answers])

  const getAnswers = (answer) => {
    question <= 9 && setAnswers([...answers, answer])
    question < 9 && nextQuestion()
    question >= 9 && setShowResults(true)
    
  };

  const SelectDifficulty = () => {
    return (
      <MainContainer>
        <Grid container spacing={3}>
          <Grid item xs={11} sm={12} md={12} lg={12} xl={12}>
            <Typography className={classes.titles}>Selecione a dificuldade</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
            <div className={classes.buttonsContainer}>
              <button className={classes.quizButton} onClick={() => getApiData("Easy")}>Easy</button>
              <button className={classes.quizButton} onClick={() => getApiData("Medium")}>Medium</button>
              <button className={classes.quizButton} onClick={() => getApiData("Hard")}>Hard</button>
            </div>
          </Grid>
        </Grid>
      </MainContainer>
    );
  };

  const RenderResults = () => {
    return (
      <MainContainer showResults={showResults}>
        <div style={{ height: "600px", overflowY: "scroll"}}>
        {data && data.map((item, idx) => (
          <>
            <Typography className={classes.titles}>{idx + 1 + " - " + item?.question}</Typography>
            <div className={classes.buttonsContainer}>
            <button className={answers[idx] === item.correct_answers.answer_a_correct ? classes.correctAnswer : classes.wrongAnswer}>
              {"a - " + item?.answers.answer_a}
            </button>
            <button className={answers[idx] === item.correct_answers.answer_b_correct ? classes.correctAnswer : classes.wrongAnswer}>
              {"b - " + item?.answers.answer_b}
            </button>
            {item?.answers.answer_c && (
              <button className={answers[idx] === item.correct_answers.answer_c_correct ? classes.correctAnswer : classes.wrongAnswer}>
                {"c - " + item?.answers.answer_c}
              </button>
            )}
            {item?.answers.answer_d && (
              <button className={answers[idx] === item.correct_answers.answer_d_correct ? classes.correctAnswer : classes.wrongAnswer}>
                {"d - " + item?.answers.answer_d}
              </button>
            )}
            {item?.answers.answer_e && (
              <button className={answers[idx] === item.correct_answers.answer_e_correct ? classes.correctAnswer : classes.wrongAnswer}>
                {"e - " + item?.answers.answer_e}
              </button>
            )}
            {item?.answers.answer_f && (
              <button className={answers[idx] === item.correct_answers.answer_f_correct ? classes.correctAnswer : classes.wrongAnswer}>
                {"f - " + item?.answers.answer_f}
              </button>
            )}
          </div>
          </>
        ))}
        
        </div>
        <Link to="/" onClick={() => resetData()} className={classes.restartButton}>Iniciar outro quiz</Link>
      </MainContainer>
    );
  };

  const ShowQuestions = () => {
    
    return (
      <MainContainer>
        <LinearProgress style={{backgroundColor: "rgba( 255, 255, 255, 0.25 )"}} className={classes.progressBar} variant="determinate" value={question * 10} maxValue={100}/>
        {!loading ? <div style={{margin: "200px 0px"}}><CircularProgress/></div> : data && (
          <>
          <Typography className={classes.titles}>{question + 1 + " - " + data[question]?.question}</Typography>
          <div className={classes.buttonsContainer}>
            <button className={classes.answerButton} onClick={() => getAnswers("true")}>
              {"a - " + data[question]?.answers.answer_a}
            </button>
            <button className={classes.answerButton} onClick={() => getAnswers("true")}>
              {"b - " + data[question]?.answers.answer_b}
            </button>
            {data[question]?.answers.answer_c && (
              <button className={classes.answerButton} onClick={() => getAnswers("true")}>
                {"c - " + data[question]?.answers.answer_c}
              </button>
            )}
            {data[question]?.answers.answer_d && (
              <button className={classes.answerButton} onClick={() => getAnswers("true")}>
                {data[question]?.answers.answer_d &&
                  "d - " + data[question]?.answers.answer_d}
              </button>
            )}
            {data[question]?.answers.answer_e && (
              <button className={classes.answerButton} onClick={() => getAnswers("true")}>
                {data[question]?.answers.answer_e &&
                  "e - " + data[question]?.answers.answer_e}
              </button>
            )}
            {data[question]?.answers.answer_f && (
              <button className={classes.answerButton} onClick={() => getAnswers("true")}>
                {data[question]?.answers.answer_f &&
                  "f - " + data[question]?.answers.answer_f}
              </button>
            )}
          </div>
        </>)}
        <div className={classes.pageButtonsContainer}>
          {question > 0 && (
            <button className={classes.pageButtons} onClick={() => prevQuestion()}>Voltar</button>
          )}
          <button
            className={classes.pageButtons} onClick={() => (question < 9 ? nextQuestion() : viewResults())}
          >
            {question < 9 ? "Próxima" : "Resultados"}
          </button>
        </div>
      </MainContainer>
    );
  };

  return (
    <div>
      {selectDifficulty ? (
        <SelectDifficulty />
      ) : showResults ? (
        <RenderResults />
      ) : (
        <ShowQuestions />
      )}
    </div>
  );
};

export default Quiz;
