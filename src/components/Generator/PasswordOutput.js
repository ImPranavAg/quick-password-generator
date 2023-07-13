import styled from "styled-components"
import { useState } from "react"
import { CopyToClipboard } from "../../utils/CopyToClipboard"
import { FaRegCopy } from "react-icons/fa"

import { Button } from "../Layout/Button"
import Alert from "../Layout/Alert"

export default function PasswordOutput({ password }) {
  const [alert, setAlert] = useState("")
  const [alertSuccess, setAlertSuccess] = useState(true)

  const copyPassword = () => {
    CopyToClipboard(
      password,
      () => {
        // ***** success *****
        setAlertSuccess(true)
        setAlert("Successfully copied")
      },
      () => {
        // ***** fail *****
        setAlertSuccess(false)
        setAlert("Failed to copy")
      }
    )
  }

  const hideAlert = () => {
    return setAlert(null)
  }

  return (
    <Container>
      <Output>{password.toString()}</Output>
      <Button icon onClick={copyPassword}>
        <FaRegCopy />
      </Button>
      {alert && (
        <Alert onEnd={hideAlert} success={alertSuccess}>
          {alert}
        </Alert>
      )}
    </Container>
  )
}

const Container = styled.div`
  background-color: #24232b;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Output = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #d4d3d9;
  word-break: break-all;
`
