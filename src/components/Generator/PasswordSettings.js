import styled from "styled-components"

import SettingsValues from "./SettingsValues"
import Settings from "./Settings"

import CharacterLength from "./CharacterLength"
import SettingsInputs from "./SettingsInputs"

export default function PasswordSettings() {
  return (
    <Container>
      <SettingsValues>
        {({ settings }) => (
          <>
            {settings.characterLength && (
              <CharacterLength length={settings.characterLength} />
            )}
            <Settings>
              <SettingsInputs />
            </Settings>
          </>
        )}
      </SettingsValues>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 1.5rem;
`
