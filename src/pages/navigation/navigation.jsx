import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navigation.scss'

function Navigation() {
  let ContactUs = 'Contact us'.split('')
  let Work = 'Work'.split('')
  let home = 'Home'.split('')
  let AboutUs = 'About us'.split('')
  let Projects = 'Projects'.split('')
  
  const [menuBar, setMenuBar] = useState(false)
  
  function Call(el, el2) {
    const locat = useLocation()
    return el === locat.pathname
  }
  
  const [contactBtn, setContactBtn] = useState(true)
  const [menuBarColor, setMenuBarColor] = useState(true)
  const [logoColor, setLogoColor] = useState(false)
  
  window.addEventListener('scroll', function() {
    if (this.scrollY >= 800) {
      setContactBtn(false)
    } else {
      setContactBtn(true)
    }
    
    if (this.scrollY >= 100) {
      setMenuBarColor(false)
    } else {
      setMenuBarColor(true)
    }
    
    
  })
  
  function handleMouseOver() {
    setLogoColor(true)
  }
  
  function handleMouseLeave() {
    setLogoColor(false)
  }
  
  return (
    <div style={{ display: `${Call('/contact') ? 'none' : 'flex'}` }} className='Navigation G-flex-between'>
      <span style={{
        position: "absolute",
        left: 0,
        right: 0
      }}>{window.innerWidth}</span>
      <Link
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          window.scrollTo(0, 0)
        }} className='logoNew' to='/'>
        <svg xmlns='http://www.w3.org/2000/svg' width='106' height='57' viewBox='0 0 106 57' fill='none'>
          <path
            d='M49.4537 35.8815L54.1868 21.1267H20.3717C15.3896 21.1267 10.9738 24.3598 9.44182 29.1341L7.06774 36.5341L7.06767 36.5343L5.51011 41.3973L5.51001 41.3977L0.684657 56.5H16.1538L21.0765 41.093L21.0767 41.0926L22.6354 36.2289L22.7467 35.8815H23.1116H49.4537Z'
            stroke={`${Call('/') ? contactBtn ? 'white' : 'black' : Call('/home') ? contactBtn ? 'white' : 'black' : 'black'}`}
            fill={`${Call('/') ? logoColor ? contactBtn ? 'white' : 'black' : 'transparent' : Call('/home') ? logoColor ? contactBtn ? 'white' : 'black' : 'transparent' : logoColor ? 'black' : 'transparent'}`} />
          <path
            d='M78.6604 33.038L78.6604 33.0381C76.9988 38.225 72.1984 41.7452 66.7762 41.7452H27.3726L22.6583 56.5H69.5281C79.7173 56.5 88.7451 49.8848 91.8689 40.1233L104.546 0.50927H89.0756L78.6604 33.038Z'
            stroke={`${Call('/') ? contactBtn ? 'white' : 'black' : Call('/home') ? contactBtn ? 'white' : 'black' : 'black'}`}
            fill={`${Call('/') ? logoColor ? contactBtn ? 'white' : 'black' : 'transparent' : Call('/home') ? logoColor ? contactBtn ? 'white' : 'black' : 'transparent' : logoColor ? 'black' : 'transparent'}`} />
          <path
            d='M55.9556 35.8896H62.9054C67.8876 35.8896 72.3044 32.6565 73.8353 27.8824L76.2079 20.483L76.2084 20.4811L77.7466 15.6203L77.7472 15.6185L82.5917 0.516354H67.2625L62.3398 15.9234L62.3397 15.9238L60.7811 20.786L60.781 20.7864L55.9556 35.8896Z'
            stroke={`${Call('/') ? contactBtn ? 'white' : 'black' : Call('/home') ? contactBtn ? 'white' : 'black' : 'black'}`}
            fill={`${Call('/') ? logoColor ? contactBtn ? 'white' : 'black' : 'transparent' : Call('/home') ? logoColor ? contactBtn ? 'white' : 'black' : 'transparent' : logoColor ? 'black' : 'transparent'}`} />
          <path
            d='M13.8711 15.2549H56.0477L60.7808 0.500044H26.9657C21.9836 0.500044 17.5678 3.73318 16.0358 8.5074C16.0358 8.5074 16.0358 8.50741 16.0358 8.50742L13.8711 15.2549Z'
            stroke={`${Call('/') ? contactBtn ? 'white' : 'black' : Call('/home') ? contactBtn ? 'white' : 'black' : 'black'}`}
            fill={`${Call('/') ? logoColor ? contactBtn ? 'white' : 'black' : 'transparent' : Call('/home') ? logoColor ? contactBtn ? 'white' : 'black' : 'transparent' : logoColor ? 'black' : 'transparent'}`} />
        </svg>
      </Link>
      
      
      <div className='buttonsBlock G-alignItems-center'>
        <div style={{
          borderColor: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`
        }} onClick={() => {
          setMenuBar(prev => !prev)
        }} className='menuBtn'>
          <div style={{ display: `${menuBar ? 'block' : 'none'}` }} className='clickBackDrop'></div>
          
          <svg className='barImg' style={{ display: `${menuBar ? 'none' : 'block'}` }} width='24' height='24'
               viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='menu-01'>
              <g id='Solid'>
                <path fillRule='evenodd' clipRule='evenodd'
                      d='M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z'
                      fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                <path fillRule='evenodd' clipRule='evenodd'
                      d='M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z'
                      fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                <path fillRule='evenodd' clipRule='evenodd'
                      d='M2 18C2 17.4477 2.44772 17 3 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z'
                      fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
              </g>
            </g>
          </svg>
          
          <svg className='barImg' style={{ display: `${menuBar ? 'block' : 'none'}` }} width='24' height='24'
               viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='x-close'>
              <path id='Solid'
                    d='M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z'
                    fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
            </g>
          </svg>
          
          
          {/*<img  className="barImg" style={{display: `${menuBar ? "none" : "block"}`}} src={MenuOpen} alt=""/>*/}
          {/*<img className="barImg" style={{display: `${menuBar ? "block" : "none"}`}} src={MenuClose} alt=""/>*/}
          
          <div onClick={() => {
            setMenuBar(prev => !prev)
          }} style={{
            display    : `${menuBar ? 'block' : 'none'}`,
            borderColor: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`
          }} className='menu G-flex-column'>
            
            
            <Link onClick={() => {
              setMenuBar(false)
              window.scrollTo(0, 0)
            }} className='linkToPage' to='/home'>
              <div className='textBlock'>
                <div className='textLine G-alignItems-center'>
                  {home.map((el) => {
                    if (el !== ' ') {
                      return (<div
                        style={{ color: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                        className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
                <div className='textLine G-alignItems-center'>
                  {home.map((el) => {
                    if (el !== ' ') {
                      return (<div
                        style={{ color: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                        className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
              </div>
              
              <div className='arrowBlock'>
                <div className='arrow'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='arrow-narrow-right'>
                      <path id='Solid'
                            d='M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z'
                            fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                    </g>
                  </svg>
                </div>
                
                <div className='arrow'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='arrow-narrow-right'>
                      <path id='Solid'
                            d='M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z'
                            fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                    </g>
                  </svg>
                </div>
              
              </div>
              
              <div
                style={{ backgroundColor: `${Call('/') ? menuBarColor ? 'transparent' : 'darkgray' : Call('/home') ? menuBarColor ? 'transparent' : 'darkgray' : 'darkgray'}` }}
                className='hoverLineBlock'>
                <div
                  style={{ backgroundColor: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                  className='line'></div>
              </div>
            </Link>
            
            
            <Link onClick={() => {
              setMenuBar(false)
              window.scrollTo(0, 0)
            }} className='linkToPage' to='/aboutUs'>
              <div className='textBlock'>
                <div className='textLine G-alignItems-center'>
                  {AboutUs.map((el) => {
                    if (el !== ' ') {
                      return (<div
                        style={{ color: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                        className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
                <div className='textLine G-alignItems-center'>
                  {AboutUs.map((el) => {
                    if (el !== ' ') {
                      return (<div
                        style={{ color: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                        className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
              </div>
              
              <div className='arrowBlock'>
                <div className='arrow'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='arrow-narrow-right'>
                      <path id='Solid'
                            d='M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z'
                            fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                    </g>
                  </svg>
                </div>
                
                <div className='arrow'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='arrow-narrow-right'>
                      <path id='Solid'
                            d='M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z'
                            fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                    </g>
                  </svg>
                </div>
              </div>
              
              <div
                style={{ backgroundColor: `${Call('/') ? menuBarColor ? 'transparent' : 'darkgray' : Call('/home') ? menuBarColor ? 'transparent' : 'darkgray' : 'darkgray'}` }}
                className='hoverLineBlock'>
                <div
                  style={{ backgroundColor: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                  className='line'></div>
              </div>
            </Link>
            
            <Link onClick={() => {
              window.scrollTo(0, 0)
              setMenuBar(false)
            }} className='linkToPage' to='/projects'>
              <div className='textBlock'>
                <div className='textLine G-alignItems-center'>
                  {Projects.map((el) => {
                    if (el !== ' ') {
                      return (<div
                        style={{ color: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                        className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
                <div className='textLine G-alignItems-center'>
                  {Projects.map((el) => {
                    if (el !== ' ') {
                      return (<div
                        style={{ color: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                        className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
              </div>
              
              <div className='arrowBlock'>
                <div className='arrow'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='arrow-narrow-right'>
                      <path id='Solid'
                            d='M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z'
                            fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                    </g>
                  </svg>
                </div>
                
                <div className='arrow'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='arrow-narrow-right'>
                      <path id='Solid'
                            d='M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z'
                            fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                    </g>
                  </svg>
                </div>
              </div>
              
              <div
                style={{ backgroundColor: `${Call('/') ? menuBarColor ? 'transparent' : 'darkgray' : Call('/home') ? menuBarColor ? 'transparent' : 'darkgray' : 'darkgray'}` }}
                className='hoverLineBlock'>
                <div
                  style={{ backgroundColor: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                  className='line'></div>
              </div>
            </Link>
            
            
            <Link onClick={() => {
              window.scrollTo(0, 0)
              setMenuBar(false)
            }} className='linkToPage' to='/work'>
              <div className='textBlock'>
                <div className='textLine G-alignItems-center'>
                  {Work.map((el) => {
                    if (el !== ' ') {
                      return (<div
                        style={{ color: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                        className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
                <div className='textLine G-alignItems-center'>
                  {Work.map((el) => {
                    if (el !== ' ') {
                      return (<div
                        style={{ color: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                        className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
              </div>
              
              <div className='arrowBlock'>
                <div className='arrow'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='arrow-narrow-right'>
                      <path id='Solid'
                            d='M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z'
                            fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                    </g>
                  </svg>
                </div>
                
                <div className='arrow'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='arrow-narrow-right'>
                      <path id='Solid'
                            d='M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z'
                            fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                    </g>
                  </svg>
                </div>
              </div>
              
              <div
                style={{ backgroundColor: `${Call('/') ? menuBarColor ? 'transparent' : 'darkgray' : Call('/home') ? menuBarColor ? 'transparent' : 'darkgray' : 'darkgray'}` }}
                className='hoverLineBlock'>
                <div
                  style={{ backgroundColor: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                  className='line'></div>
              </div>
            </Link>
            
            
            <Link onClick={() => {
              window.scrollTo(0, 0)
              setMenuBar(false)
            }} className='linkToPage' to='/contact'>
              <div className='textBlock'>
                <div className='textLine G-alignItems-center'>
                  {ContactUs.map((el) => {
                    if (el !== ' ') {
                      return (<div
                        style={{ color: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                        className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
                <div className='textLine G-alignItems-center'>
                  {ContactUs.map((el) => {
                    if (el !== ' ') {
                      return (<div
                        style={{ color: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                        className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
              </div>
              
              <div className='arrowBlock'>
                <div className='arrow'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='arrow-narrow-right'>
                      <path id='Solid'
                            d='M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z'
                            fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                    </g>
                  </svg>
                </div>
                
                <div className='arrow'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='arrow-narrow-right'>
                      <path id='Solid'
                            d='M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z'
                            fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                    </g>
                  </svg>
                </div>
              </div>
              
              <div
                style={{ backgroundColor: `${Call('/') ? menuBarColor ? 'transparent' : 'darkgray' : Call('/home') ? menuBarColor ? 'transparent' : 'darkgray' : 'darkgray'}` }}
                className='hoverLineBlock'>
                <div
                  style={{ backgroundColor: `${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}` }}
                  className='line'></div>
              </div>
            </Link>
            
            
            <div className='OtherLinks G-alignItems-center'>
              
              <a onClick={() => setMenuBar(false)} target='_blank' className='linkSite'
                 href='https://www.instagram.com/fytechnology/'>
                <svg width='94' height='36' viewBox='0 0 125 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <g id='Company=Instagram'>
                    <g id='Vector'>
                      <path
                        d='M6.42617 10.2856C3.8706 11.3553 1.06117 14.3774 0.173863 18.1708C-0.949845 22.9772 3.72643 25.0097 4.10998 24.3433C4.56141 23.5602 3.27204 23.2954 3.00664 20.8016C2.66362 17.5807 4.16102 13.9817 6.04556 12.4025C6.39586 12.1091 6.37919 12.5175 6.37919 13.2728C6.37919 14.6235 6.30456 26.7488 6.30456 29.2793C6.30456 32.7035 6.16313 33.7848 5.90912 34.8532C5.65176 35.936 5.238 36.6676 5.55153 36.9494C5.90181 37.2646 7.3974 36.5148 8.26322 35.3064C9.30147 33.8571 9.6649 32.1166 9.73015 30.2264C9.80896 27.9478 9.8056 24.3322 9.80896 22.2699C9.81212 20.3784 9.84082 14.8398 9.77581 11.5102C9.75987 10.6936 7.49492 9.83674 6.42605 10.2846L6.42617 10.2856ZM97.1745 26.3104C97.0921 28.0905 96.698 29.4819 96.209 30.4634C95.2622 32.3634 93.2976 32.9534 92.4635 30.222C92.0089 28.7332 91.9877 26.2466 92.3145 24.169C92.6472 22.0524 93.5761 20.4539 95.1143 20.5981C96.6314 20.7406 97.3416 22.6956 97.1745 26.3104ZM71.5978 37.3548C71.5772 40.3126 71.1117 42.906 70.1135 43.6592C68.6976 44.7272 66.7946 43.9261 67.1887 41.7677C67.5373 39.8578 69.1862 37.9073 71.6018 35.524C71.6018 35.524 71.6068 36.0675 71.5978 37.3548ZM71.2111 26.2931C71.1246 27.9145 70.7042 29.5433 70.2457 30.4636C69.2991 32.3636 67.3202 32.9576 66.5002 30.2222C65.9395 28.3533 66.0737 25.9345 66.3512 24.4104C66.7112 22.433 67.5838 20.5985 69.1509 20.5985C70.6746 20.5985 71.4259 22.27 71.2111 26.2931ZM56.3946 26.2683C56.3017 27.9855 55.9667 29.421 55.4291 30.4636C54.4564 32.3505 52.5322 32.9489 51.6836 30.2222C51.0718 28.2561 51.2801 25.5751 51.5346 24.1269C51.9122 21.9778 52.858 20.4541 54.3343 20.5985C55.8509 20.7467 56.5881 22.6956 56.3946 26.2683ZM124.296 28.2741C123.925 28.2741 123.756 28.6562 123.616 29.2994C123.13 31.536 122.62 32.041 121.962 32.041C121.227 32.041 120.566 30.9335 120.396 28.7167C120.263 26.9735 120.284 23.7642 120.455 20.5718C120.49 19.9159 120.309 19.267 118.55 18.6279C117.793 18.353 116.692 17.9482 116.144 19.2707C114.596 23.0072 113.991 25.9736 113.848 27.1787C113.841 27.2411 113.764 27.2538 113.751 27.1081C113.66 26.1429 113.457 24.389 113.432 20.7041C113.427 19.9851 113.275 19.3731 112.481 18.8721C111.966 18.547 110.403 17.972 109.84 18.656C109.352 19.2155 108.787 20.7211 108.2 22.5058C107.723 23.9563 107.391 24.9375 107.391 24.9375C107.391 24.9375 107.397 21.0237 107.403 19.5391C107.405 18.979 107.021 18.7924 106.905 18.7586C106.384 18.6073 105.356 18.3544 104.92 18.3544C104.382 18.3544 104.251 18.6552 104.251 19.0934C104.251 19.1507 104.166 24.2463 104.166 27.8094C104.166 27.9641 104.166 28.133 104.167 28.3124C103.87 29.95 102.905 32.173 101.855 32.173C100.804 32.173 100.309 31.2437 100.309 26.9959C100.309 24.5179 100.383 23.4404 100.419 21.6482C100.441 20.6159 100.482 19.8231 100.479 19.6432C100.472 19.0916 99.5177 18.8135 99.0738 18.7108C98.6279 18.6071 98.2403 18.567 97.9377 18.5842C97.5094 18.6084 97.2063 18.8894 97.2063 19.2759C97.2063 19.4831 97.2087 19.8771 97.2087 19.8771C96.657 19.0102 95.7697 18.4068 95.1794 18.232C93.5893 17.7598 91.9301 18.1782 90.6786 19.9295C89.6839 21.321 89.0843 22.8969 88.8483 25.1612C88.6757 26.8166 88.7321 28.4952 89.0387 29.9149C88.6682 31.5168 87.9803 32.173 87.2271 32.173C86.1336 32.173 85.3409 30.3882 85.4329 27.3015C85.4937 25.2712 85.8999 23.8465 86.344 21.7852C86.5333 20.9065 86.3795 20.4465 85.9936 20.0055C85.6397 19.6012 84.8857 19.3946 83.8017 19.6487C83.0295 19.8299 81.9256 20.0247 80.9155 20.1743C80.9155 20.1743 80.9765 19.9311 81.0265 19.5024C81.2892 17.2541 78.8461 17.4365 78.0666 18.1547C77.6013 18.5834 77.2846 19.089 77.1644 19.9982C76.9737 21.441 78.1504 22.1215 78.1504 22.1215C77.7644 23.8887 76.818 26.1973 75.841 27.8664C75.3177 28.7607 74.9173 29.4233 74.4005 30.1278C74.3986 29.8655 74.3972 29.6032 74.3963 29.3421C74.3844 25.6267 74.4339 22.7025 74.4557 21.6485C74.477 20.6162 74.5184 19.8445 74.516 19.6646C74.5102 19.2611 74.2746 19.1087 73.7845 18.9158C73.3511 18.7452 72.8387 18.627 72.3073 18.5858C71.6364 18.5335 71.2323 18.8893 71.2428 19.3101C71.2448 19.3895 71.2448 19.8773 71.2448 19.8773C70.6931 19.0104 69.8058 18.407 69.2155 18.2321C67.6254 17.7601 65.9662 18.1786 64.7147 19.9296C63.7202 21.3211 63.0689 23.2737 62.8844 25.1441C62.7125 26.8874 62.7442 28.3689 62.9785 29.6168C62.7257 30.8664 61.9988 32.1732 61.1768 32.1732C60.126 32.1732 59.5281 31.2438 59.5281 26.9961C59.5281 24.5181 59.6025 23.4406 59.6391 21.6485C59.6603 20.6162 59.7013 19.8233 59.699 19.6436C59.6912 19.0919 58.7373 18.8139 58.2934 18.7109C57.829 18.6035 57.428 18.564 57.1201 18.5867C56.7138 18.617 56.4282 18.9807 56.4282 19.2521V19.8773C55.8766 19.0104 54.9893 18.407 54.3989 18.2321C52.8088 17.7601 51.1589 18.1853 49.8981 19.9296C49.076 21.067 48.4104 22.328 48.0678 25.1193C47.9688 25.926 47.9251 26.6814 47.9308 27.3874C47.6029 29.3924 46.1549 31.7033 44.9704 31.7033C44.2773 31.7033 43.6172 30.3589 43.6172 27.4937C43.6172 23.6772 43.8534 18.2433 43.8934 17.7196C43.8934 17.7196 45.3899 17.6941 45.6797 17.6908C46.4262 17.6826 47.1023 17.7002 48.0966 17.6494C48.5953 17.6239 49.0757 15.8342 48.561 15.6127C48.3278 15.5125 46.6791 15.4246 46.0255 15.4107C45.4759 15.3983 43.9459 15.2851 43.9459 15.2851C43.9459 15.2851 44.0831 11.6783 44.1151 11.2972C44.1422 10.9797 43.7313 10.8162 43.4957 10.717C42.9228 10.4747 42.4103 10.3587 41.8027 10.2334C40.9633 10.0602 40.5825 10.2296 40.5081 10.9381C40.3961 12.0133 40.3381 15.1625 40.3381 15.1625C39.7221 15.1625 37.6179 15.0421 37.0018 15.0421C36.4293 15.0421 35.8114 17.5042 36.6029 17.5344C37.5135 17.5697 39.1004 17.6002 40.1525 17.6319C40.1525 17.6319 40.1056 23.1554 40.1056 24.8606C40.1056 25.0421 40.1072 25.2168 40.1075 25.3863C39.5285 28.4042 37.4891 30.0344 37.4891 30.0344C37.9271 28.0379 37.0324 26.5386 35.4209 25.2694C34.8272 24.8018 33.6551 23.9164 32.3437 22.9461C32.3437 22.9461 33.1033 22.1975 33.7768 20.6915C34.2541 19.6247 34.2747 18.4039 33.1033 18.1347C31.1677 17.6896 29.5717 19.1111 29.0957 20.6287C28.7269 21.8043 28.9236 22.6767 29.6461 23.5829C29.6989 23.6491 29.756 23.7168 29.8151 23.7849C29.3781 24.627 28.7779 25.7608 28.2695 26.6401C26.8585 29.0813 25.7926 31.0123 24.987 31.0123C24.3431 31.0123 24.3517 29.0519 24.3517 27.2164C24.3517 25.634 24.4686 23.255 24.5619 20.792C24.5928 19.9774 24.1855 19.5133 23.5027 19.093C23.0878 18.8377 22.2024 18.3356 21.6896 18.3356C20.9221 18.3356 18.7076 18.44 16.6153 24.4925C16.3516 25.2553 15.8335 26.6454 15.8335 26.6454L15.8781 19.3671C15.8781 19.1964 15.7872 19.0314 15.5791 18.9186C15.2266 18.7271 14.2848 18.3356 13.4475 18.3356C13.0485 18.3356 12.8494 18.5212 12.8494 18.891L12.7764 30.278C12.7764 31.1432 12.7989 32.1525 12.8845 32.594C12.9697 33.036 13.1078 33.3956 13.2788 33.6095C13.4495 33.823 13.647 33.9859 13.9727 34.0531C14.2758 34.1155 15.9355 34.3287 16.0218 33.6944C16.1251 32.9343 16.1291 32.1121 17.0006 29.0458C18.3574 24.272 20.1263 21.9428 20.9579 21.1156C21.1033 20.971 21.2694 20.9624 21.2614 21.199C21.2259 22.2456 21.101 24.8609 21.017 27.0827C20.7917 33.0286 21.8734 34.1307 23.4191 34.1307C24.6017 34.1307 26.2687 32.9557 28.0557 29.9813C29.1698 28.1277 30.2515 26.3102 31.0286 25.0002C31.5702 25.5016 32.178 26.0412 32.7854 26.6176C34.1968 27.9573 34.6602 29.2302 34.3528 30.4377C34.1176 31.3609 33.232 32.3123 31.6558 31.3876C31.1964 31.1178 31.0003 30.9094 30.5383 30.6052C30.2901 30.4418 29.9112 30.393 29.684 30.5642C29.0939 31.0091 28.7564 31.5751 28.5637 32.2758C28.3762 32.9575 29.059 33.318 29.7668 33.6332C30.3763 33.9045 31.6862 34.1504 32.5216 34.1784C35.7766 34.2872 38.3841 32.6068 40.1992 28.272C40.5242 32.0156 41.907 34.134 44.3096 34.134C45.9159 34.134 47.5263 32.0578 48.2306 30.0153C48.4328 30.8479 48.732 31.5719 49.1185 32.1841C50.9698 35.1174 54.5613 34.486 56.3653 31.9953C56.9231 31.2256 57.008 30.9491 57.008 30.9491C57.2711 33.301 59.1651 34.1227 60.2495 34.1227C61.464 34.1227 62.718 33.5485 63.5969 31.5699C63.6999 31.7846 63.8124 31.9897 63.9351 32.1841C65.7864 35.1173 69.3779 34.486 71.1819 31.9952C71.267 31.8784 71.3408 31.7724 71.4053 31.6772L71.4582 33.2221C71.4582 33.2221 70.4291 34.1662 69.7973 34.7453C67.0169 37.2963 64.9027 39.2317 64.7472 41.4854C64.5475 44.3592 66.8782 45.4272 68.6414 45.5672C70.514 45.7158 72.1175 44.6814 73.1032 43.2337C73.9701 41.9596 74.5375 39.2172 74.4959 36.5086C74.4793 35.424 74.452 34.0449 74.4305 32.5666C75.4078 31.4317 76.5088 29.9974 77.5227 28.3184C78.6275 26.4887 79.8115 24.0315 80.4178 22.1193C80.4178 22.1193 81.4466 22.1281 82.5445 22.0562C82.8956 22.0333 82.9965 22.105 82.9316 22.3624C82.8532 22.6735 81.5445 27.7211 82.7389 31.0837C83.5564 33.3856 85.3993 34.1262 86.4919 34.1262C87.771 34.1262 88.9945 33.1603 89.6502 31.726C89.7292 31.8859 89.8118 32.0406 89.902 32.1834C91.7533 35.1167 95.3322 34.4816 97.1488 31.9946C97.5588 31.4335 97.7915 30.9484 97.7915 30.9484C98.1813 33.3825 100.074 34.1344 101.158 34.1344C102.288 34.1344 103.36 33.6714 104.229 31.6137C104.266 32.5197 104.323 33.2605 104.413 33.4941C104.468 33.6369 104.789 33.8162 105.023 33.9028C106.056 34.286 107.11 34.1048 107.499 34.026C107.769 33.9713 107.98 33.7547 108.009 33.1952C108.085 31.7262 108.038 29.258 108.483 27.4237C109.231 24.3453 109.928 23.1512 110.259 22.56C110.444 22.2288 110.653 22.1741 110.661 22.5247C110.676 23.234 110.712 25.3169 111.001 28.1154C111.214 30.1736 111.498 31.3901 111.716 31.7751C112.339 32.8762 113.109 32.9283 113.736 32.9283C114.134 32.9283 114.968 32.8181 114.894 32.1175C114.857 31.776 114.921 29.6653 115.658 26.6325C116.139 24.6519 116.942 22.8624 117.231 22.2082C117.338 21.9669 117.387 22.1571 117.386 22.1941C117.325 23.5581 117.188 28.0194 117.744 30.4594C118.497 33.7648 120.676 34.1346 121.435 34.1346C123.056 34.1346 124.382 32.9016 124.828 29.6572C124.936 28.8764 124.777 28.2735 124.299 28.2735'
                        fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                    </g>
                  </g>
                </svg>
              </a>
              
              <a onClick={() => setMenuBar(false)} target='_blank' className='linkSite'
                 href='mailto:office@fytechnology.eu'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <g id='mail-02'>
                    <g id='Solid'>
                      <path
                        d='M2.06552 8.21149C1.82337 8.04056 1.70229 7.95509 1.59906 7.93423C1.37159 7.88825 1.13609 8.01028 1.04248 8.22263C0.999994 8.319 0.999996 8.46556 1 8.75869V15.2413C0.999988 16.0463 0.999978 16.7106 1.04419 17.2518C1.06792 17.5422 1.40639 17.659 1.62227 17.4634L6.81647 12.7581C7.06952 12.5289 7.19605 12.4142 7.23639 12.2826C7.27177 12.1673 7.26421 12.043 7.21513 11.9327C7.15914 11.807 7.01967 11.7085 6.74072 11.5116L2.06552 8.21149Z'
                        fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                      <path
                        d='M2.69115 19.1938C2.48752 19.3782 2.38571 19.4705 2.3454 19.6023C2.31416 19.7045 2.32351 19.8551 2.36717 19.9527C2.42348 20.0785 2.51634 20.1437 2.70207 20.2741C2.85507 20.3815 3.01605 20.4784 3.18404 20.564C3.66937 20.8113 4.18608 20.9099 4.74818 20.9558C5.28937 21 5.95372 21 6.75868 21H17.2413C18.0463 21 18.7106 21 19.2518 20.9558C19.8139 20.9099 20.3306 20.8113 20.816 20.564C20.984 20.4784 21.1449 20.3814 21.2979 20.2741C21.4837 20.1437 21.5765 20.0785 21.6328 19.9527C21.6765 19.8551 21.6859 19.7045 21.6546 19.6023C21.6143 19.4705 21.5125 19.3782 21.3089 19.1938L15.1892 13.65C15.0722 13.5441 15.0138 13.4911 14.9505 13.4601C14.8306 13.4013 14.6922 13.3929 14.5661 13.4368C14.4995 13.4599 14.435 13.5055 14.3062 13.5965C13.7589 13.984 13.2783 14.3243 12.7303 14.4618C12.2509 14.5821 11.7493 14.5821 11.2699 14.4618C10.7218 14.3243 10.2413 13.984 9.694 13.5965C9.56505 13.5054 9.50057 13.4599 9.43394 13.4367C9.30788 13.3929 9.16954 13.4013 9.0497 13.46C8.98636 13.491 8.92785 13.544 8.81085 13.65L2.69115 19.1938Z'
                        fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                      <path
                        d='M22.3777 17.4634C22.5936 17.659 22.9321 17.5421 22.9558 17.2518C23 16.7106 23 16.0463 23 15.2413V8.75868C23 8.46566 23 8.31916 22.9576 8.22282C22.864 8.0104 22.6284 7.88833 22.4009 7.93436C22.2977 7.95523 22.1766 8.04066 21.9346 8.21153L17.2594 11.5117C16.9804 11.7086 16.8409 11.807 16.785 11.9328C16.7359 12.043 16.7283 12.1673 16.7637 12.2827C16.804 12.4143 16.9306 12.5289 17.1836 12.7582L22.3777 17.4634Z'
                        fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                      <path
                        d='M22.2796 4.70729C22.3888 4.86318 22.4434 4.94112 22.4602 5.05968C22.4733 5.15207 22.4508 5.2809 22.4072 5.36341C22.3513 5.46929 22.2568 5.53604 22.0676 5.66953L13.2688 11.8805C12.5361 12.3977 12.3807 12.4875 12.2435 12.5219C12.0837 12.562 11.9165 12.562 11.7567 12.5219C11.6195 12.4875 11.4641 12.3977 10.7314 11.8805L1.93241 5.66945C1.74329 5.53596 1.64873 5.46921 1.5928 5.36333C1.54921 5.28082 1.52676 5.15199 1.53986 5.05959C1.55667 4.94103 1.61126 4.86309 1.72044 4.7072C2.09472 4.17279 2.604 3.73152 3.18404 3.43598C3.66937 3.18868 4.18608 3.09012 4.74818 3.04419C5.28937 2.99998 5.95372 2.99999 6.75869 3H17.2413C18.0463 2.99999 18.7106 2.99998 19.2518 3.04419C19.8139 3.09012 20.3306 3.18868 20.816 3.43598C21.396 3.73154 21.9053 4.17284 22.2796 4.70729Z'
                        fill={`${Call('/') ? menuBarColor ? 'white' : 'black' : Call('/home') ? menuBarColor ? 'white' : 'black' : 'black'}`} />
                    </g>
                  </g>
                </svg>
              
              </a>
            
            </div>
          
          
          </div>
        </div>
        
        <Link style={{
          transform      : `translateY(${contactBtn ? '0' : '-200px'})`,
          backgroundColor: `transparent`,
          border         : `${Call('/') ? '0.5px solid white' : Call('/home') ? '0.5px solid white' : '0.5px solid black'}`
        }} onClick={() => {
          window.scrollTo(0, 0)
        }} to='/contactUs' className='contactUsBtn G-alignItems-center'>
          
          <div className='textBlock'>
            <div className='textLine G-alignItems-center'>
              {ContactUs.map((el) => {
                if (el !== ' ') {
                  return (<div style={{
                    color: `${Call("/") ? "white" : Call("/home") ? "white" : "black"}`
                  }} className='letter'>{el}</div>)
                } else {
                  return (<div className='space'></div>)
                }
              })}
            </div>
            <div className='textLine G-alignItems-center'>
              {ContactUs.map((el) => {
                if (el !== ' ') {
                  return (<div style={{
                    color: `${Call("/") ? "white" : Call("/home") ? "white" : "black"}`
                  }} className='letter'>{el}</div>)
                } else {
                  return (<div className='space'></div>)
                }
              })}
            </div>
          </div>
          
          <div style={{ backgroundColor: `${Call('/') ? 'white' : Call('/home') ? 'white' : 'black'}` }}
               className='middleLine'></div>
          
          <div className='arrowBlock'>
            <div>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g id='arrow-narrow-right'>
                  <path id='Solid'
                        d='M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z'
                        fill={`${Call("/") ? "white" : Call("/home") ? "white" : "black"}`} />
                </g>
              </svg>
            </div>
            <div>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g id='arrow-narrow-right'>
                  <path id='Solid'
                        d='M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z'
                        fill='white' />
                </g>
              </svg>
            </div>
          
          
          </div>
        
        </Link>
      </div>
    
    </div>
  )
}

export default Navigation