import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/landing/Landing"
import Quiz from "./pages/quiz/Quiz"

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing/>} />
        <Route path="/quiz" exact element={<Quiz/>}/>
      </Routes>
    </Router>
  )
}

export default routes
