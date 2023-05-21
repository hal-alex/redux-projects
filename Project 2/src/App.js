import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Landing, Error, Dashboard, Register } from "./pages/"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/landing" element={<Landing></Landing>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
