import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './Login.scss'

export default function Login() {
  const history = useHistory()
  const login = () => {
    // TO DO api call
    history.push('/home')
  }
  return (
    <div className="login-container">
      <div className="card">
        <Form>
          <h1>Instagram</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={login}>
            Login
          </Button>
          <hr />
          OR <hr />
          <a href="/forgot">Forgot password?</a>
        </Form>
      </div>
      <div className="card">
        <span>
          Don't you have an account? <a href="/signup">Sign Up</a>
        </span>
      </div>
      <span>Get the app.</span>
      <img alt="apple" srcset="" />
      <img alt="android" srcset="" />
    </div>
  )
}
