import { FC } from 'react'
import './style.scss'
import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import { GenreData } from '../../../assets/Data/MockData'
import { CapitalizeFirstLetterOfEach } from '../../../utils/helper'

type Props = {
  type?: string
}
const FeaturedPage: FC<Props> = ({ type }) => {
  return (
    <div className={'featured__main'}>
      {type && (
        <div className={'category'}>
          <span>{CapitalizeFirstLetterOfEach(type)}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            {GenreData.map((each, id) => (
              <option value={each} key={`${each}-${id}`}>{CapitalizeFirstLetterOfEach(each)}</option>
            ))}
          </select>
        </div>
      )}
      <img src="/images/banner/poster.jpg" alt="poster" />
      <div className="info">
        <img src="/images/banner/underground-logo.png" alt="profile" />
        <span className={'desc'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus error illo libero minima placeat
          reprehenderit, sequi vero voluptate. Ab at commodi deserunt explicabo magnam magni quia rem repellat vel.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPage
