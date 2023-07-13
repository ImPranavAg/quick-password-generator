import styled from "styled-components"

export default function PasswordStrength({
  strength: { value: strengthValue, id: strengthId },
}) {
  return (
    <Container>
      <StrengthText>Strength</StrengthText>

      <StrengthValueContainer>
        {strengthValue && (
          <StrengthValueText>{strengthValue || ""}</StrengthValueText>
        )}
        <StrengthValueBars>
          {[...Array(4)].map((n, i) => (
            // ***** Return the four bars and set their "active" depending of strength ID *****
            <StrengthValueBar key={i} active={i <= strengthId} />
          ))}
        </StrengthValueBars>
      </StrengthValueContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: #17161e;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StrengthText = styled.p`
  color: #7f7d87;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  word-break: break-all;
`

const StrengthValueContainer = styled.div`
  display: flex;
  align-items: center;
`

const StrengthValueText = styled.strong`
  font-weight: 700;
  font-size: 1.35rem;
  text-transform: uppercase;
  color: #d4d3d9;
  margin-right: 0.75rem;
  word-break: break-all;
`

const StrengthValueBars = styled.div``

const StrengthValueBar = styled.div`
  width: 0.5rem;
  height: 1.35rem;
  background-color: ${({ active }) => (active ? "#f6cd6a" : "transparent")};
  border: 2px solid ${({ active }) => (active ? "#f6cd6a" : "#D4D3D9")};
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.35rem;

  &:last-of-type {
    margin-right: 0;
  }
`
