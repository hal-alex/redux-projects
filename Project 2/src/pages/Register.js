import { useState, useEffect } from "react"
import { Logo, FormRow } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { loginUser, registerUser } from "../features/user/userSlice"

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
  }

  const { user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [registerDetails, setRegisterDetails] = useState(initialState)

  const handleChange = (e) => {
    const valueName = e.target.name
    const value = e.target.value
    // console.log(e.target.value)
    setRegisterDetails({ ...registerDetails, [valueName]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = registerDetails
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all details")
      return
    }
    if (isMember) {
      dispatch(loginUser({ email, password }))
      return
    }
    dispatch(registerUser({ name, email, password }))
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
