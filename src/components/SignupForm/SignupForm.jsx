import React, { useState } from "react"
import Input from "../Input/Input"
import Button from "../Button/Button"
import {
  FormWrapper,
  FormContainer,
  FormImage,
  FormBox,
  FormTitle,
} from "../../styles/components/form"
import { validateEmail } from "../../utilities/RegexValidation"
export default function SignupForm() {
  let initialFormState = {
    identifier: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  }
  let initialFormErrors = {
    identifier: false,
    password: false,
    confirmPassword: false,
    firstName: false,
    lastName: false,
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
  function confirmPassword(confirmPassword) {
    if (formData.password !== confirmPassword) {
      setFormErrors((prevState) => ({
        ...prevState,
        confirmPassword: true,
      }))
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        confirmPassword: false,
      }))
    }
  }
  function validateName(name, value) {
    if (value.length > 0) {
      setFormErrors((prevState) => ({ ...prevState, [name]: false }))
    } else setFormErrors((prevState) => ({ ...prevState, [name]: true }))
  }
  function validateForm() {
    if (
      formErrors.identifier ||
      formErrors.password ||
      formErrors.confirmPassword ||
      formErrors.firstName ||
      formErrors.lastName
    ) {
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
    <FormWrapper>
      <FormBox>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormBox>
              <FormImage
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="logo"
              />
            </FormBox>
            <FormTitle>Sign up</FormTitle>
            <Input
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onBlur={(e) => validateName("firstName", e.target.value)}
              onChange={handleOnChange}
              error={formErrors.firstName && "Please enter first name"}
              required
            />
            <Input
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onBlur={(e) => validateName("lastName", e.target.value)}
              onChange={handleOnChange}
              error={formErrors.lastName && "Please enter last name"}
              required
            />
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
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Enter password again"
              value={formData.confirmPassword}
              onBlur={(e) => confirmPassword(e.target.value)}
              onChange={handleOnChange}
              error={formErrors.confirmPassword && "Passwords must match"}
              required
            />
            <Button className="mt-2 mb-2">Sign up</Button>
          </form>
        </FormContainer>
      </FormBox>
    </FormWrapper>
  )
}
