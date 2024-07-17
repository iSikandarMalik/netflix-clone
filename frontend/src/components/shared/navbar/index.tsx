import { Notifications, Search, ArrowDropDown } from '@material-ui/icons'
import { FC, useState } from 'react'
import './style.scss'

const Navbar: FC = () => {
  const [isScrolled, setScrolled] = useState(false)

  window.onscroll = () => {
    setScrolled(!(window.pageYOffset === 0))
    return () => window.onscroll = null
  }

  return (
    <div className={`navbar__main ${isScrolled && 'navbar__scrolled'}`}>
      <div className="container">
        <div className="left">
          <img
            src="/images/logo/netflix.png"
            alt="Netflix"
          />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className={'icon'} />
          <span>KID</span>
          <Notifications className={'icon'} />
          <img src="/images/icon/profile.png" alt="profile" />
          <div className="profile">
            <ArrowDropDown className={'icon'} />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
