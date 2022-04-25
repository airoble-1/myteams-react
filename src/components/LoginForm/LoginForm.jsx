import React, { useState } from "react"
import { validateEmail } from "../../utilities/RegexValidation"
import Input from "../Input/Input"

export default function LoginForm() {
  // one state instead of three slices of state
  let initialFormState = {
    identifier: "",
    password: "",
  }
  let initialFormErrors = {
    identifier: false,
    password: false,
  }
  const [formData, setFormData] = useState(initialFormState)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const handleOnChange = (e) => {
    // grab previous state no gurantee state rendered is the most updated since react schedules state updates
    // setFormData({ ...formData, [e.target.name]: e.target.value })
    // call back function has access to latest state in updater
    const { name, value } = e.target
    // setState function work asyncronously
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  function validateIdentifier(identifier) {
    if (validateEmail(identifier)) {
      setFormErrors((prevState) => ({
        ...prevState,
        identifier: false,
      }))
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        identifier: true,
      }))
    }
  }

  function validatePassword(password) {
    if (password.length >= 8) {
      setFormErrors((prevState) => ({
        ...prevState,
        password: false,
      }))
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        password: true,
      }))
    }
  }
  function validateForm() {
    if (formErrors.identifier || formErrors.password) {
      return false
    } else {
      return true
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const hasErrors = validateForm()
    if (!hasErrors) {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/local`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      )
      const authData = await response.json()
      console.log(authData)
    }
  }
  return (
    <div>
      <h1>LoginForm</h1>
      {}
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="identifier"
          type="email"
          placeholder="Enter email"
          value={formData.identifier}
          onBlur={(e) => validateIdentifier(e.target.value)}
          onChange={handleOnChange}
          error={formErrors.identifier && "Please enter a valid email"}
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onBlur={(e) => validatePassword(e.target.value)}
          onChange={handleOnChange}
          error={
            formErrors.password && "Password must be at least 8 characters"
          }
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
