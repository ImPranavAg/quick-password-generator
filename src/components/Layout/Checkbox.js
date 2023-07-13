import styled from "styled-components"
import { useState, useRef, useContext, useEffect } from "react"
import { SettingsContext } from "../../contexts/SettingsContext"

import { GoCheck } from "react-icons/go"

export default function Checkbox({ label, ...props }) {
  const [checked, setChecked] = useState(false)
  const checkboxRef = useRef(null)
  const { handleSettings } = useContext(SettingsContext)

  useEffect(() => {
    setChecked(checkboxRef.current.checked)
  }, [checkboxRef])

  const handleChange = (e) => {
    setChecked(e.target.checked)
    handleSettings(e.target.name, e.target.checked)
  }

  return (
    <Container>
      <CheckboxLabel>
        <CheckboxLabelItem checked={checked}>
          {checked && (
            <CheckboxLabelItemIcon>
              <GoCheck />
            </CheckboxLabelItemIcon>
          )}
        </CheckboxLabelItem>
        <StyledCheckbox
          ref={checkboxRef}
          type="checkbox"
          {...props}
          onChange={handleChange}
        />
        {label && <CheckboxText>{label}</CheckboxText>}
      </CheckboxLabel>
    </Container>
  )
}

const Container = styled.div`
  display: block;
  margin-bottom: 0.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const CheckboxLabel = styled.label`
  display: inline-block;
  cursor: pointer;
`

const CheckboxLabelItem = styled.div`
  width: 1rem;
  height: 1rem;
  vertical-align: text-top;
  display: inline-block;
  background-color: ${({ checked }) => (checked ? "#a8fdb0" : "transparent")};
  border: 2px solid ${({ checked }) => (checked ? "transparent" : "#D4D3D9")};

  &:hover {
    border-color: ${({ checked }) => (!checked ? "#a8fdb0" : "")};
  }
`

const CheckboxLabelItemIcon = styled.div`
  display: block;
  font-size: 1rem;
  // * used to counter move by border
  margin: -2px 0 0 -2px;
`

const StyledCheckbox = styled.input`
  -webkit-appearance: none;
`

const CheckboxText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #d4d3d9;
  margin-left: 1rem;
`
