import { config } from "../../config"
import styled from "styled-components"
import Range from "../Layout/Range"
import Checkbox from "../Layout/Checkbox"

export default function SettingsInputs() {
  return (
    <>
      <Range
        name="characterLength"
        min={2}
        max={64}
        steps={1}
        defaultValue={config?.rangeDefaultValue}
      />
      <Checkboxes>
        <Checkbox
          name="includeUppercase"
          defaultChecked
          label="Include Uppercase A-Z"
        />
        <Checkbox
          name="includeLowercase"
          defaultChecked
          label="Include Lowercase a-z"
        />
        <Checkbox
          name="includeNumbers"
          defaultChecked
          label="Include Numbers 0-9"
        />
        <Checkbox name="includeSymbols" label="Include Symbols !#$%&/=¡+-_.@|<>" />
      </Checkboxes>
    </>
  )
}

const Checkboxes = styled.div`
  margin-top: 1rem;
`
