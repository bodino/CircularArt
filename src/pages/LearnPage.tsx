import React from 'react'
import Learn from '../components/Learn'
import Footer from '../components/Footer'

var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'

export function LearnPage() {
  return (
    <div className="Menu2">
      <div>
        <Learn />
      </div>
    </div>
  )
}

export default LearnPage
