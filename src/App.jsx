import { BrowserRouter as Router } from "react-router-dom"

import BgImg from "./assets/bg.png"
import RootLayout from "./components/layout/RootLayout"
import Navbar from "./components/navbar/Navbar"
import Page from "./pages/Page"

function App() {
  return (
    <>
      <Router>
        <RootLayout>
          {/* Background Img */}
          <img src={BgImg} alt="" className="w-full h-full object-cover object-center absolute top-0 left-0" />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-neutral-950/40 to-neutral-950/40"></div>
          {/* Layout section */}
          <div className="z-50 w-full flex items-center gap-10 flex-wrap p-4">
            {/* Navbar */}
            <Navbar />

            {/* Main Layout */}
            <Page />

          </div>
        </RootLayout>
      </Router>
    </>
  )
}

export default App
