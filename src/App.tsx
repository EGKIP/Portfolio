import { SpeedInsights } from '@vercel/speed-insights/react'
import { HomePage } from './pages/home-page'

function App() {
  return (
    <>
      <HomePage />
      <SpeedInsights />
    </>
  )
}

export default App
