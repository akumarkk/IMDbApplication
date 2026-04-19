import './App.css'
import MovieList from './components/MovieList'
import {Routes, Route} from 'react-router-dom'
import WatchList from './components/WatchList';
import Header from './components/Header';
import Footer from './components/Footer';

function Home() {
  
  return(
    <>    
      <div className='home'>
        {/* <Header /> */}
        <div>Welcome to IMDb!</div>
      </div>
    </>

  )
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movielist/*" element={<MovieList />}/>
        <Route path="/watchlist/*" element={<WatchList />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
