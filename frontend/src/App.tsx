import { FC } from 'react'
import HomePageMain from './components/modules/home'
import Watch from './components/modules/watch'
import Register from './components/modules/auth/register'
import Login from './components/modules/auth/login'

import './App.scss'

const App: FC = () => {
  return (
    <div>
      <HomePageMain />
    </div>
  )
}

export default App
