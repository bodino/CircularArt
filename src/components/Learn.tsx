import { listenerCount } from 'process'
import React, { useEffect, useState } from 'react'
import Sketch from 'react-p5'
import { RecoilState } from 'recoil'
import { Particle } from './particle'
import banner from '../art/anotherBanner.png'
import { url } from 'inspector'

export function Learn() {

  let setAllFalse = () => {
    setfirstOpen(false)
    setsecondOpen(false)
    setthirdOpen(false)
    setforthOpen(false)
    setfithOpen(false)
  }
  var [firstOpen, setfirstOpen] = useState(true)
  var [secondOpen, setsecondOpen] = useState(false)
  var [thirdOpen, setthirdOpen] = useState(false)
  var [forthOpen, setforthOpen] = useState(false)
  var [fithOpen, setfithOpen] = useState(false)

  return (
    <div>
      <div className=" FlexBoxLearn UpperBodyText">
        {/* <b>  Whats Circular Art? </b>  */}
        <div className="TopImageDiv">
        <img className="ImageCss" src={banner}></img>

        </div>
      </div>

      <div
        style={{ fontSize: '20px' }}
        className="FlexBoxLearn"
        onClick={() => {
          setAllFalse()
          setfirstOpen(true)
          console.log('click')
        }}
      >
        <i>Why Circular Art? </i>
        {/* {!loading ? <Sketch setup={setup} draw={draw} className="Art" />  : ""} */}
      </div>
      <div
        style={{ display: firstOpen ? 'flex' : 'none' }}
        className="FlexBoxLearn"
      >
        Circular Art is a generative art platform designed to sustainably fund
        public goods while providing a platform for artists to express their
        imagination.
      </div>

      <div
        className="FlexBoxLearn"
        onClick={() => {
          setAllFalse()
          setsecondOpen(true)
          console.log('click')
        }}
      >
        <i> What is the Minting Process? </i>
        {/* {!loading ? <Sketch setup={setup} draw={draw} className="Art" />  : ""} */}
      </div>
      <div
        style={{ display: secondOpen ? 'flex' : 'none' }}
        className="FlexBoxLearn"
      >
        Select one of our curated collections, and view the auction price -
        collections are sold through dutch auctions. When you submit a mint a
        new generative piece of art is created immediately and verifiable on
        chain.
      </div>
      <div
        className="FlexBoxLearn"
        onClick={() => {
          setAllFalse()
          setthirdOpen(true)
          console.log('click')
        }}
      >
        <i> What are the platform fees? </i>
        {/* {!loading ? <Sketch setup={setup} draw={draw} className="Art" />  : ""} */}
      </div>
      <div
        style={{ display: thirdOpen ? 'flex' : 'none' }}
        className="FlexBoxLearn"
      >
        For the first collection, Circular Art, will take 50% to be used solely
        for funding public goods. There will also be a 3% royalty on resales
        half given to the artist and the remainder used to fund Circular Arts
        operational expenses.
      </div>
      <div
        className="FlexBoxLearn"
        onClick={() => {
          setAllFalse()
          setforthOpen(true)
          console.log('click')
        }}
      >
        <i> What are public goods? </i>
        {/* {!loading ? <Sketch setup={setup} draw={draw} className="Art" />  : ""} */}
      </div>
      <div
        style={{ display: forthOpen ? 'flex' : 'none' }}
        className="FlexBoxLearn"
      >
        Public goods are services which are open to the public to use and have
        overwhelming positive externalities but are often not monetarily
        incentivized. By funding public goods, Circular Art is attempting to
        alleviate the monetary constraint in turn rectifying this incentive
        problem.
      </div>
      <div
        className="FlexBoxLearn"
        onClick={() => {
          setAllFalse()
          setfithOpen(true)
          console.log('click')
        }}
      >
        <i> What's the process to become a verified artist? </i>
        {/* {!loading ? <Sketch style={{width:"400px", height:"400px"}} setup={setup} draw={draw} className="Art" />  : ""} */}
      </div>
      <div
        style={{ display: fithOpen ? 'flex' : 'none' }}
        className="FlexBoxLearn"
      >
        Reach out in our discord which can be found at the bottom of the page.
        We are open to anybody, new and old artists alike.
      </div>
      <div className="FlexBoxLearn">
        <i> Ars Longa, Vita Brevis </i>
      </div>
    </div>
  )
}

export default Learn
