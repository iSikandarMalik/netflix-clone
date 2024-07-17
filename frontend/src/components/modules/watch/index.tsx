import React from 'react'
import './style.scss'
import { ArrowBackOutlined } from '@material-ui/icons'

const Watch = () => {
  return (
    <div className={'watch__main'}>
      <div className="back__icon">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src="https://storage.googleapis.com/media.nomysh.com/1716910736000_1479_video"
        className={'video'}
        autoPlay
        controls
        // @ts-ignore
        progress
      />
    </div>
  )
}

export default Watch