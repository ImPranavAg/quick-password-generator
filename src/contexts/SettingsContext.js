import { createContext, useState } from "react"

export const SettingsContext = createContext()

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({})

  const handleSettings = (name, value) => {
    if (!name) return
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <SettingsContext.Provider value={{ settings, setSettings, handleSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}
