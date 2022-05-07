import { Route, Routes } from "react-router-dom"
import LoginForm from "./components/LoginForm/LoginForm"
import SignupForm from "./components/SignupForm/SignupForm"
function App() {
  return (
    <>
      <Routes>
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/signupform" element={<SignupForm />} />
      </Routes>
    </>
  )
}

export default App
