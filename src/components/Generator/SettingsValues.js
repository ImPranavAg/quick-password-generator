import { useContext } from "react"
import { SettingsContext } from "../../contexts/SettingsContext"

export default function SettingsValues({ children }) {
  const { settings, setSettings, handleSettings } = useContext(SettingsContext)

  return (
    children &&
    children({
      settings,
      setSettings,
      handleSettings,
    })
  )
}
