import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import FunctionalThings from './pages/FunctionalThings/FunctionalThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import Landing from './pages/Landing/Landing'

const App = () => {
  const [shahzadsThings, setShazadsThings] = useState([
    {
      name: 'functional programming',
      image: 'https://imgs.xkcd.com/comics/functional.png',
      attributes: ['efficient', 'reusability', 'not a taco', 'beautiful'],
    },
    {
      name: 'React hooks',
      image:
        'https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'useEffect',
        'useState',
        'not a taco',
        "state's best friend",
      ],
    },
    {
      name: 'BluBlockers',
      image:
        'https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584',
      attributes: [
        'very attractive',
        'useful probably!',
        'good for viewing tacos',
        'such hip',
        'worn by all the cool kids',
      ],
    },
    {
      name: 'Healthy food',
      image: 'https://i.imgur.com/gRxOxsA.jpg',
      attributes: [
        'makes you live a long time',
        'consistent poops',
        'probably tacos sometimes!',
        'farm to market',
      ],
    },
  ])

  const [bensThings, setBensThings] = useState([
    {
      name: 'banana',
      image:
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      attributes: [
        'potassium-rich',
        'yellow when good',
        'not a taco',
        'ring ring ring ring ring ring ring',
      ],
    },
    {
      name: 'turkey',
      image:
        'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'such gobbles',
        'good when stuffed',
        'not a taco',
        'why gravy exists',
      ],
    },
    {
      name: 'taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'yummy in my tummy',
        'salsas may vary',
        'definitely a taco',
        'very edible',
      ],
    },
    {
      name: 'linux',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['not a taco', 'not Windows', 'not macOS', 'Penguins?'],
    },
  ])

  const [davidsThings, setDavidsThings] = useState([
    {
      name: 'French Toast',
      image:
        'https://i.imgur.com/4dDeMhc.jpeg',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'Horses',
      image:
        'https://i.imgur.com/5TzUr1B.gif',
      attributes: [
        'Weapon to use against Ben',
        'cool',
        'fun',
        'animal',
        "Battle ready",
      ],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Toaster strudel',
      image: 'https://i.imgur.com/PP4sN8R.jpeg',
      attributes: ['pastry?', 'food?', 'edible?', 'Amazing when toasted!'],
    },
  ])

  const [erinsThings, setErinsThings] = useState([
    {
      name: "dnd",
      image: "https://i.imgur.com/NicF3Yr.png",  
      attributes: ["dice", "monsters", "swords", "beautiful", "not a taco"],
    },
  ])

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-functional-things"
        element={<FunctionalThings things={shahzadsThings} />}
      />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={bensThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={erinsThings} />}
      />
    </Routes>
  )
}

export default App
