"use strict";

require('dotenv').config()
const BN = require('bn.js')

//WEB3 Config
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(process.env.MAINNET_RPC_URL);
const wallet = web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY)

// [ Contract Addresses ]
const BIIndexFundAddress = "0x5AD53642A7Fe5FAE8EC02dBE6005325DD86dC0d2"; // mainnet 

// Token Address
const GDXTokenAddress = "0x2F27118E3D2332aFb7d165140Cf1bB127eA6975d"; // real one
const WETHTokenAddress = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"; // real one
const GRIDAddress = "0x8Eb76679F7eD2a2Ec0145A87fE35d67ff6e19aa6"

// Shogun Contracts
var BIIndexFund = require("./abis/BIIndexFund.json")
const BIIndexFundABI = BIIndexFund.abi;
const BIIndexFundContract = new web3.eth.Contract(BIIndexFundABI, BIIndexFundAddress);
var IERC20 = require("./abis/IERC20.json")
const GDXContract = new web3.eth.Contract(IERC20.abi, GDXTokenAddress);
const WETHContract = new web3.eth.Contract(IERC20.abi, WETHTokenAddress);

async function checkForTheRebalance() {
    try {
        let GDXbalance = await GDXContract.methods.balanceOf(BIIndexFundAddress).call()
        let WETHBalance = await WETHContract.methods.balanceOf(BIIndexFundAddress).call()

        

        console.log("balance : ", balance.toString())
    } catch (e) {
        console.log(e)
       
    }
}

async function rebalance(){

    const gasEstimated = await BIIndexFundContract.methods.rebalance(GDXTokenAddress,new BN(1000)).estimateGas({
        from: wallet.address
    });

    const gasLimit = parseInt((gasEstimated * 2).toString()) //(await web3.eth.getBlock('latest')).gasLimit
    const gasPrice = (new BN(await web3.eth.getGasPrice())).mul(new BN(140)).div(new BN(100));

    let addAllVoting =  await BIIndexFundContract.methods.rebalance(GDXTokenAddress,new BN(1000)).send(
        {
            from: wallet.address,
            gas: gasLimit,
            gasPrice: gasPrice
        }
    )
    console.log("result! ")
    addAllVoting = JSON.stringify(addAllVoting);
    addAllVoting = JSON.parse(addAllVoting);

    let orderId = addAllVoting.events.PlaceOrder[0].raw.data

    orderId =parseInt(orderId, 16)
    console.log("my current orderId" , orderId)
} 

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

module.exports = {
    checkForTheRebalance,
    rebalance
}

