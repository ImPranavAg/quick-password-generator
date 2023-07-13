import styled from "styled-components"

export const Button = styled.button`
  border: 2px solid transparent;
  display: block;
  width: ${({ icon }) => (icon ? "auto" : "100%")};
  height: ${({ icon }) => (icon ? "auto" : "45px")};
  font-family: inherit;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ icon }) => (icon ? "#a4ffaf" : "#24542b")};
  background-color: ${({ icon }) => (icon ? "transparent" : "#a4ffaf")};
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border-color: ${({ icon }) => (icon ? "transparent" : "#a4ffaf")};
    color: ${({ icon }) => (icon ? "#D4D3D9" : "#a4ffaf")};
  }

  & > svg {
    margin-left: 0.5rem;
    vertical-align: ${({ icon }) => (icon ? "middle" : "text-top")};
  }
`
