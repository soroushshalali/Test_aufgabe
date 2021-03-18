import React from 'react';
import './../style.css';
import HomeItem from './HomeItem';
import pro1 from './img/product-1.jpg';
import video from './img/video.png';
import info from './img/info.svg';
import data from './../data.json'

function Home() {

  let rev = true;
  const mapArray = data.homeItem.map((el, i) => {
    rev = !rev;
    return <HomeItem object={el} key={i} rev={rev} />
  })

  return (
    <div className='home-Container' >
      <section className='home-header' >
        <img src={pro1} alt="Netigo Logo" />
        <h2>Männer färben nicht-Männer tunen</h2>
      </section>
      <section className='video-container' >
        <img src={video} alt="Play Video" />
      </section>
      {mapArray}

      <section className='info' >
        <div>
          <h3>Hinweis:</h3>
          <p>Nicht für halbbelodes bis blondes Harr!</p>
        </div>
        <img src={info} />
      </section>

    </div>
  );
}

export default Home;