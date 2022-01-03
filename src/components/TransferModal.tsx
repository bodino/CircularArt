import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'

import NftContract from '../contracts/nft.json'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: 'rgb(255,218,185)',
    transform: 'translate(-50%, -50%)',
  },
};


function TransferModal({item, wallet}:any) {
  let subtitle:any;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [inputedAddress, setInputedAddress] = useState("")

  const notify = () => toast("Wow so easy!");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function transferNFt() {
      
    if (ethers.utils.isAddress(inputedAddress)){
        
        var provider = new ethers.providers.Web3Provider(wallet.getState().wallet.provider)
        const contract = new ethers.Contract('0xB8Df6Cc3050cC02F967Db1eE48330bA23276A492', NftContract.abi, provider.getSigner() );
        console.log(wallet.getState().wallet);
        var tx =  await contract.safeTransferFrom(wallet.getState().address, inputedAddress, item);
        notify();

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

      <a style={{fontSize:"15px", marginRight:"0px"}}className="ShowOptions" onClick={openModal}>Transfer</a>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Transfer NFT</h2>
        <img className="UserMarketImg" src={"https://cloudflare-ipfs.com/ipfs/QmbAhtqQqiSQqwCwQgrRB6urGc3umTskiuVpgX7FvHhutU/" +item.toString()+ ".png"}/>
       
        <div>Enter Transfer Address</div>
        <form onSubmit={handleSubmit}>
            <input type="text"  onChange={handleAddressChange} required/>
            <input type="submit"></input>
        </form>
        <button onClick={closeModal}>cancel</button>
      </Modal>
      <ToastContainer />
    </div>
  );
}
export default TransferModal