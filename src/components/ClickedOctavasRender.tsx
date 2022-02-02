import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'

import NftContract from '../contracts/nft.json'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OctavasRender from '../renderArt/OctavasRender';




const customStyles = {
  content: {
    display: 'flex',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    // backgroundColor: 'rgb(255,218,185)',
    transform: 'translate(-50%, -50%)',
    border: '1px solid rgb(45, 45, 61)',
    margin: '5px',
  
    // justifyContent: spaceBetween,
    backgroundColor: 'peachpuff',
    borderRadius: '3px',
    // height: '500px',
    // width: '500px',
    flexDirection: 'column' as 'column',
  },
};


function ClickedOctavasRender({item, seed}:any) {
  let subtitle:any;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [inputedAddress, setInputedAddress] = useState("")

  const notify = () => toast("Wow so easy!");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function transferNFt() {
      
    if (ethers.utils.isAddress(inputedAddress)){
        
     

    } else {
        toast("Not a valid Address")
    }

  }

  const handleAddressChange = (event:any) => {
    setInputedAddress(event.target.value)
    console.log(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log("hi");
    transferNFt()
   closeModal();
  };

  return (
    <div>

      <a style={{fontSize:"15px", marginRight:"0px"}}className="ShowOptions" onClick={openModal}>Interact</a>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
       
      >
        <OctavasRender
        pushedseed={seed}/>       
        {/* <div>Enter Transfer Address</div> */}

      
        {/* <button onClick={closeModal}>cancel</button> */}
      </Modal>
      <ToastContainer />
    </div>
  );
}
export default ClickedOctavasRender