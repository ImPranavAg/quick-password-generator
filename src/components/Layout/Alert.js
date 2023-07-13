import styled from "styled-components"
import { useState, useEffect } from "react"
import { config } from "../../config"

export default function Alert({ onEnd, success, children }) {
  const [show, setShow] = useState(true)
  const alertTime = config.alertTime || 2000 // milliseconds
  const alertAnimationTime = config.alertAnimationTime || 1000 // milliseconds

  useEffect(() => {
    // ***** fade-in animation *****
    setShow(true)

    // ***** fade-out animation *****
    const animationTimeout = setTimeout(() => {
      setShow(false)
    }, alertTime)

    // ***** call onEnd() function *****
    const endTimeout = setTimeout(() => {
      onEnd()
    }, alertTime + alertAnimationTime)

    return () => {
      clearTimeout(animationTimeout)
      clearTimeout(endTimeout)
    }
  }, [onEnd, alertAnimationTime, alertTime])

  return (
    <StyledAlert
      show={show}
      alertAnimationTime={alertAnimationTime}
      success={success}
    >
      {children}
    </StyledAlert>
  )
}

const StyledAlert = styled.div`
  color: #fff;
  background-color: ${({ success }) => (success ? "#24232b" : "darkred")};
  padding: 1rem;
  font-size: 1rem;
  position: absolute;
  top: 20px;
  justify-contet:center;
  left: 50%;
   transform: translate(-50%, 0%);

  @supports (animation: test) {
    // alertAnimationTime / 1000 = time in seconds
    animation: ${({ show }) => (show ? "fade-in" : "fade-out")}
      ${({ alertAnimationTime }) => alertAnimationTime / 1000}s forwards;

    @keyframes fade-in {
      from {
        top: 0;
        opacity: 0;
        visibility: hidden;
      }

      to {
        top: 20px;
        opacity: 1;
        visibility: visible;
      }
    }

    @keyframes fade-out {
      to {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`
