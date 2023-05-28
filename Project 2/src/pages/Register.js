import { useState, useEffect } from "react"
import { Logo, FormRow } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
  }

  const [registerDetails, setRegisterDetails] = useState(initialState)

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  const toggleMember = () => {
    setRegisterDetails({
      ...registerDetails,
      isMember: !registerDetails.isMember,
    })
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo></Logo>
        <h3>{registerDetails.isMember ? "Login" : "Register"}</h3>
        {!registerDetails.isMember && (
          <FormRow
            type="text"
            name="name"
            value={registerDetails.name}
            handleChange={handleChange}
          ></FormRow>
        )}

        <FormRow
          type="email"
          name="email"
          value={registerDetails.email}
          handleChange={handleChange}
        ></FormRow>
        <FormRow
          type="password"
          name="password"
          value={registerDetails.password}
          handleChange={handleChange}
        ></FormRow>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {registerDetails.isMember ? "Not a member?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {registerDetails.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
