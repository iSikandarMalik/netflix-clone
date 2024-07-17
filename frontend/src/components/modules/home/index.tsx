import { FC } from 'react'
import './style.scss'
import FeaturedPage from '../featured'
import Navbar from '../../shared/navbar'
import List from '../list'

const HomePageMain: FC = () => {
  return (
    <div className={'home__main'}>
      <Navbar />
      <FeaturedPage />
      <List />
      <List />
      <List />
    </div>
  )
}

export default HomePageMain
