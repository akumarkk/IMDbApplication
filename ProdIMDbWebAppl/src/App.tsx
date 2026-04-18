import './App.css'
import MovieList from './components/MovieList'
import {Routes, Route} from 'react-router-dom'

function Home() {
  return <div>Welcome to IMDb!</div>;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movielist/*" element={<MovieList />}/>
      </Routes>
    </>
  )
}

export default App
