import React from 'react'
import '../styles/MantrasIntro.css'
// import Logo from '../assets/mala.png'

const MantrasIntro = () => {
  // const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  return (
    <div className="intro-container">
      <p className="intro_title">Americas Gathering 2021 Mantra collection</p>
      {/* if you want to have an image uncomment below */}
      {/* <img src={Logo} alt="Logo" className="intro_image" /> */}
      <p className="intro_text">
        You can enter the number of Karmapa Chenno mantras (not malas) that you do throughout the weekend. You can fill out the form as many times as you want.
      </p>
    </div>
  )
}

export default MantrasIntro
