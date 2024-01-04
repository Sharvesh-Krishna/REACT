import React, { useState } from "react";
import './App.css'
import AudioFiles from "./AudioFiles";
import { audios } from "./Player";
import Player from "./Player";

function MusuxPlayer() {
    const [count, setCount] = useState(0)

          const [songs, setSongs] = useState(audios);
        
          const [currentIndex, setCurrentIndex] = useState(0);
        
          const [currentSong, setCurrentSOng] = useState(songs[0]);
        
          const checkNumber = (number) => {
            if (number > songs.length - 1) {
              return 0;
            }
            if (number < 0) {
              return songs.length - 1;
            }
            return number;
          };
        
          const getSongData = (song, index) => {
            setCurrentIndex(index);
            setCurrentSOng(song);
          };
        
          const nextSong = () => {
            setCurrentIndex((currentIndex) => {
              let newIndex = currentIndex + 1;
        
              return checkNumber(newIndex);
            });
        
            setCurrentSOng(audios[currentIndex]);
          };
        
          const prevSong = () => {
              setCurrentIndex((currentIndex) => {
              let newIndex = currentIndex - 1;
              return checkNumber(newIndex);
            });
            setCurrentSOng(audios[currentIndex]);
          };
        
        
          return (
              <>

            <div className="xshreyx">
              
            <section className="hero-section">
              <div className="card-grid">
                <a className="card" href="#">
                  <div className="card__background" style={{backgroundImage: 'url(https://m.timesofindia.com/photo/103861698/103861698.jpg)'}}></div>
                  <div className="card__content">
                    <h3 className="card__heading">Taylor Swift</h3>
                    <p className="card__category">Category</p>
                  </div>
                </a>
                <a className="card" href="#">
                  <div className="card__background" style={{backgroundImage: 'url(https://cdn.britannica.com/17/249617-050-4575AB4C/Ed-Sheeran-performs-Rockefeller-Plaza-Today-Show-New-York-2023.jpg)'}}></div>
                  <div className="card__content">
                    <h3 className="card__heading">Ed Sheeran</h3>
                    <p className="card__category">Category</p>
                  </div>
                </a>
                <a className="card" href="#">
                  <div className="card__background" style={{backgroundImage: 'url(https://rollingstoneindia.com/wp-content/uploads/2020/08/Anuv-Jain-scaled.jpg)'}}></div>
                  <div className="card__content">
                    <h3 className="card__heading">Anuv Jain</h3>
                    <p className="card__category">Category</p>
                  </div>
                </a>
                <a className="card" href="#">
                  <div className="card__background" style={{backgroundImage: 'url(https://yt3.googleusercontent.com/ytc/AIf8zZRVC48KKDO9l3rkQlcIdDDNoeQVsH-GzEqHlpmhfQ=s900-c-k-c0x00ffffff-no-rj)'}}></div>
                  <div className="card__content">
                    <h3 className="card__heading">Sanah Moidutty</h3>
                    <p className="card__category">Category</p>
                  </div>
                </a>
              </div>
            </section>
            <section>
              <div className="player-main">
                <Player
                  currentSong={currentSong}
                  currentIndex={currentIndex}
                  nextSong={nextSong}
                  prevSong={prevSong}
                />
              </div>
              </section>
            </div>
      <div className="flex flex-col ">

      <div className="flex flex-row ">

        <div> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11 pt-0 ml-2 mr-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
        </div>
      
        <div className=" bg-orange-600 p-3 border rounded-full w-11/12 ">
          <h1>Musux</h1>
        </div>
        
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbC4-Vmngu8-VpXa4TV8prCzF81X5fgKI8g&usqp=CAU" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-13 h-12 pt-1 ml-5">
          </img>

        </div>

      </div>

      <div className='flex justify-center items-center' >
        <div className=' bg-slate-200 border rounded-md w-8/12 mt-10 h-96 flex justify-center pt-72 bg-cover bg-no-repeat' style={{backgroundImage: 'url(https://images.pexels.com/photos/1135995/pexels-photo-1135995.jpeg?cs=srgb&dl=pexels-bob-clark-1135995.jpg&fm=jpg)' }} >

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
        </svg>

        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
        </svg> */}


        </div>
      </div>

      </div>
    </>
  )
}

export default MusuxPlayer;