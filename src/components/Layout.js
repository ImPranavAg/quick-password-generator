import styled from "styled-components"

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>
}

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`
