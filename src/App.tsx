import { Analytics } from '@vercel/analytics/react'
import { HomePage } from './pages/home-page'

function App() {
  return (
    <>
      <HomePage />
      <Analytics />
    </>
  )
}

export default App
