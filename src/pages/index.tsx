import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = ({ toggleTheme }) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme}/>
    </div>
  )
}

export default Home
