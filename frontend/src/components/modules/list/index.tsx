import { FC, useRef, useState } from 'react'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'

import ListItems from './items'

import './style.scss'

const List: FC = () => {
  const [isMoved, setMoved] = useState(false)
  const [slideNum, setSlideNum] = useState(0)
  const listRef = useRef(null)

  const handleArrowClick = (type: string) => {
    const elem: any = listRef.current
    if (type === 'right' && slideNum < 5) {
      if (elem) {
        setSlideNum(prev => prev + 1)
        const distance = elem.getBoundingClientRect().x - 50
        elem.style.transform = `translateX(${-235 + distance}px)`
      }
    }
    if (type === 'left' && slideNum > 0) {
      setSlideNum(prev => prev - 1)
      const distance = elem.getBoundingClientRect().x - 50
      if (elem) elem.style.transform = `translateX(${235 + distance}px)`
    }
    setMoved(true)
  }

  return (
    <div className={'list__main'}>
      <span className="list__title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className={'sliderArrow'}
          onClick={() => handleArrowClick('left')}
          style={{ display: !isMoved || slideNum === 0 ? 'none' : 'inline' }}
        />
        <div className="container" ref={listRef}>
          {new Array(10).fill('').map((_, idx) => <ListItems index={idx} />)}
        </div>
        <ArrowForwardIosOutlined
          className={'sliderArrow'}
          onClick={() => handleArrowClick('right')}
          style={{ display: slideNum === 5 ? 'none' : 'inline' }}
        />
      </div>
    </div>
  )
}

export default List
