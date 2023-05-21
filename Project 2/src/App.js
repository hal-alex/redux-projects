import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/Landing"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
