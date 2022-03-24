import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import FunctionalThings from './pages/FunctionalThings/FunctionalThings'
import StyledThings from './pages/StyledThings/StyledThings'
import AnimalThings from './pages/AnimalThings/AnimalThings'
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

  const [wolfsThings, setWolfThings] = useState([
    {
      name: 'Maw',
      image:
        'https://i.imgur.com/XOIRHjD.jpg',
      attributes: [
        'Pointy',
        'Wet',
        'Moist',
        '😳',
      ],
    },
    {
      name: 'Tail',
      image:
        'https://i.imgur.com/iMWgztF.jpg',
      attributes: [
        'Soft',
        'Floofy',
        'Long',
        '😱'
      ],
    },
    {
      name: 'Paw',
      image:
        'https://i.imgur.com/g6yow5o.jpg',
      attributes: [
        'Beans',
        'Stronk',
        'Squishy',
        '😵‍💫',
      ],
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

  const [zacksThings, setZacksThings] = useState([
    {
      name: "dog",
      image: "https://media-be.chewy.com/wp-content/uploads/2021/05/27135654/Shiba-Inu_FeaturedImage.jpg",  
      attributes: ["cute", "spicy", "medium", "amazing", "not food"],
    },
    {
      name: "rat",
      image: "https://www.vancouverwildlife.com/images/splash/4x3/rats.jpg",
      attributes: ["also cute", "sweet", "tiny",
    "big ears"]
    }
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
        element={<ManliestThings things={wolfsThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-animal-things"
        element={<AnimalThings things={zacksThings} />}
      />
    </Routes>
  )
}

export default App
