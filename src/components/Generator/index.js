import styled from "styled-components"
import { FiArrowRight } from "react-icons/fi"

import useGenerator from "../../hooks/useGenerator"

import { Title } from "../Layout/Title"
import { Button } from "../Layout/Button"
import PasswordOutput from "./PasswordOutput"
import PasswordSettings from "./PasswordSettings"
import PasswordStrength from "./PasswordStrength"

export default function Generator() {
  const { password, strength, generatePasswordAndStrength } = useGenerator()
  return (
    <Container>
      <GeneratorTitle>Password Generator</GeneratorTitle>
      <PasswordOutput password={password} />
      <GeneratorBox>
        <PasswordSettings />
        <PasswordStrength strength={strength} />
        <GenerateButton type="button" onClick={generatePasswordAndStrength}>
          Generate
          <FiArrowRight />
        </GenerateButton>
      </GeneratorBox>
    </Container>
  )
}

const Container = styled.div`
  width: 90%;
  max-width: 45ch;
  padding: 1rem 0;
`

const GeneratorTitle = styled(Title)`
  margin-bottom: 1rem;
  text-align: center;
`

const GeneratorBox = styled.div`
  background-color: #24232b;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
`

const GenerateButton = styled(Button)`
  margin-top: 1.5rem;
  & > svg {
    transition: transform 0.15s;
  }

  &:hover {
    & > svg {
      transform: translateX(0.5rem);
    }
  }
`
