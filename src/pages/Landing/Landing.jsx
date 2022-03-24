import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      {/* All the <Link> components should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-manliest-things">Ben's Things</Link><br/>
      <Link to="/the-board-game-things">Will's Things</Link><br/>
      <Link to="/the-well-styled-things">David's Things</Link><br/>
      <Link to="/the-animal-things">Zack's Things</Link><br/>
      <Link to="/the-isaac-things">Isaac's Things</Link><br/>
    </>
  )
}
 
export default Landing