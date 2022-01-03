import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Octavasimg from '../art/octavas.png'
import Unannouncedimg from '../art/Unannounced.png'
import OptiPunksimg from '../art/OptiPunks.png'
import MapMarkets from './MapMarkets'
import MapAllMints from './MapAllMints'

import { OptiPunks } from '../state/collections'
import { Unannounced } from '../state/collections'
import { Octavas } from '../state/collections'


export function IndividualCollectionPage() {
  const { id } = useParams()
  var [renderNow, setRenderNow] = useState<any>();
  var [info, setInfo] = useState<any>(OptiPunks);

  var img;

  useEffect(() => {
    if (id == "OptiPunks"){
      setRenderNow(OptiPunksimg);
      setInfo(OptiPunks);
    } else if (id == "Unannounced"){
      setRenderNow(Unannouncedimg);
      setInfo(Unannounced);
    }  else if (id == "Octavas"){
      setRenderNow(Octavasimg);
      setInfo(Octavas);


    }
   
  }, );
  return (
    <div
      style={{
        flexDirection: 'column',
        justifySelf: 'left',
        maxWidth: '1380px',
        justifyContent: 'center',
      }}
      className="Menu2"
    >
      <div style={{ justifyContent: 'center' }}className="FlexBox">
        <div style={{ height: '450px' }}className="FlexBoxColum">
          {}
          <img style={{ height: '450px' }} src={renderNow}></img>
        </div>

        <div
          style={{ width: '300px', height: '400px' }}
          className="FlexIndividualCollection"
        >
          <b> {id} </b>
          
            <form>
            <div style={{borderRight:"0px"}}className="FlexBoxColum">
              <input style={{marginRight:"0px", width:"110px"}} className="ShowOptions" type="number"  max="20" min="1" placeholder="1"/>
              <br/>
              <input style={{marginRight:"0px"}}className="ShowOptions" type="submit" value="Mint"/> 
              </div>
            </form>
     
          <div style={{width:"100px"}}>
            <div className="IndividualText">
              Artist
            </div>
            <div className="IndividualText">
              <div>Total </div>
              <div>{info.total}</div>
            </div>
            <div className="IndividualText">
             <div>Minted</div>
             <div> {info.minted}</div>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
      <div>
        <MapAllMints
        info={info}/>
      </div>
      {info.date}
    </div>
  )
}

export default IndividualCollectionPage
