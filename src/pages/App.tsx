import '../assets/styles/App.css'
import { Intro } from './Intro'
import { Profile } from './Profile';
import { Degrees } from './Degrees';
import { Background } from '../components/Background'
import { Projects } from './Projects';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/degrees" element={<Degrees />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>

      <Background />
    </>
  )
}


export default App
