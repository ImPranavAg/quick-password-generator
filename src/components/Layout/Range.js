import styled from "styled-components"
import { useEffect, useRef, useContext } from "react"
import { SettingsContext } from "../../contexts/SettingsContext"

export default function Range({ ...props }) {
  const rangeInput = useRef(null)
  const { handleSettings } = useContext(SettingsContext)

  useEffect(() => {
    // ***** dispatch a new input event to trigger handleInput *****
    rangeInput.current.dispatchEvent(new Event("input", { bubbles: true }))
  }, [rangeInput])

  const handleInput = (e) => {
    const { name, value, min, max } = e.target
    handleSettings(name, value)

    // ***** Set the progress bar width based on Range value *****
    e.target.style.backgroundSize =
      ((value - min) * 100) / (max - min) + "% 100%"
  }

  return (
    <StyledRange
      min={0}
      max={10}
      steps={1}
      {...props}
      ref={rangeInput}
      type="range"
      onInput={handleInput}
    />
  )
}

const StyledRange = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  background-color: #17161e;
  // ! important for progress bar
  background-image: -webkit-gradient(
    linear,
    50% 0%,
    50% 100%,
    color-stop(0%, #a8fdb0),
    color-stop(100%, #a8fdb0)
  );
  background-size: 50% 100%;
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    border-radius: 50%;
    background-color: #d4d3d9;
    cursor: grab;

    &:hover,
    &:active {
      border-color: #a8fdb0;
      background-color: #17161e;
    }

    &:active {
      cursor: grabbing;
    }
  }

  &::-moz-range-progress {
    background-color: #a8fdb0;
  }
`
