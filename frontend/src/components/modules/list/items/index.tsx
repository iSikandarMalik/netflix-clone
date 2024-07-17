import { FC, useState } from 'react'
import './style.scss'
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'

type Props = {
  index: number
}
const ListItems: FC<Props> = ({ index }) => {
  const [isHovered, setHovered] = useState(false)
  const trailer = 'https://storage.googleapis.com/media.nomysh.com/1716910736000_1479_video'
  return (
    <div
      className={'list__items__main'}
      style={{ left: isHovered ? index * 225 - 50 + index * 2.5 : 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src="/images/banner/aladdin.jpg" alt="aladin" />
      {isHovered && (
        <>
          {/**@todo use video instead of iframe when populating it with API*/}
          <video autoPlay loop muted src={trailer} />
          {/*<iframe*/}
          {/*  src="https://www.youtube.com/embed/-G5XI61Y9ms?si=rzMPJ7d866MhwwcM"*/}
          {/*  title="YouTube video player"*/}
          {/*  frameBorder="0"*/}
          {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
          {/*  referrerPolicy="strict-origin-when-cross-origin"*/}
          {/*  allowFullScreen*/}
          {/*/>*/}
          <div className="item__info">
            <div className="icons">
              <PlayArrow className={'icon'} />
              <Add className={'icon'} />
              <ThumbUpAltOutlined className={'icon'} />
              <ThumbDownOutlined className={'icon'} />
            </div>
            <div className="item__info__top">
              <span>1 hour 14 mins</span>
              <span className={'age__limit'}>+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi beatae consectetur cupiditate
              doloremque dolorum eius enim facere hic, illum impedit maiores nostrum optio recusandae, reprehenderit
              saepe
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ListItems
