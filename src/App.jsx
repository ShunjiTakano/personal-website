import NavBar from "./components/navbar/NavBar"
import Introduction from "./components/introduction/Introduction"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./App.scss"
import {useState} from "react"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Introduction/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
