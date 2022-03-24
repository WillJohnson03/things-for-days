import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import BoardGameThings from './pages/BoardGameThings/BoardGameThings'
import StyledThings from './pages/StyledThings/StyledThings'
import AnimalThings from './pages/AnimalThings/AnimalThings'
import Landing from './pages/Landing/Landing'

const App = () => {
  const [willsThings, setWillsThings] = useState([
    {
      name: 'board games',
      image: 'https://i.imgur.com/67na6Bt.jpeg',
      attributes: ['classic', 'fun', 'spooky', 'replayable', 'not a taco'],
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
  
  const  [isaacThings, setIsaacThings] =useState([
    {
      name: 'bear',
      image: 'https://i.imgur.com/eCD3nll.gif',
      attributes: ['big', 'can ride a motorcycle', 'can run fast']
    },
    {
      name:'Burgers',
      image: 'https://i.imgur.com/zlOens4.jpeg',
      attributes: ['bacon!!', 'juicy!']
    }
  ])

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-board-game-things"
        element={<BoardGameThings things={willsThings} />}
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
