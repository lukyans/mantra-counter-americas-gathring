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
        Whether you are doing a formal session on the 16th Karmapa privately,
         in your local center, or are counting mantras while walking in the park...please
         focus your wishes as a gift to Lama Ole during this{' '}
         <a href="http://resources.diamondway.org/americas-gathering" target="_new">
           Americas Gathering
         </a>.
         Make your wish, add them up, and input the number of mantras in the form below.
         We'll keep this mantra marathon ongoing throughout this weekend and gather as many as possible for our dear Lama!
      </p>
    </div>
  )
}

export default MantrasIntro
