import Layout from "./components/Layout"
import Generator from "./components/Generator"
import { SettingsProvider } from "./contexts/SettingsContext"

export default function App() {
  return (
    <SettingsProvider>
      <Layout>
        <Generator />
      </Layout>
    </SettingsProvider>
  )
}
