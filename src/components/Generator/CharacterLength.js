import styled from "styled-components"

export default function CharacterLength({ length }) {
  return (
    <Container>
      <CharacterLengthText>Character Length</CharacterLengthText>
      <CharacterLengthValue>{length}</CharacterLengthValue>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`

const CharacterLengthText = styled.p`
  color: #d4d3d9;
  font-size: 1rem;
  word-break: break-all;
`

const CharacterLengthValue = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  color: #a8fdb0;
  font-weight: 700;
`
