import { useContext, useEffect } from "react"
import { SettingsContext } from "../../contexts/SettingsContext"

export default function Settings({ children, handleValues }) {
  const { settings } = useContext(SettingsContext)

  useEffect(() => {
    if (typeof handleValues === "function") {
      handleValues(settings)
    }
  }, [handleValues, settings])

  return children
}
