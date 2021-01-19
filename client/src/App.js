import React, { Component, Fragment } from "react";
import MyContract from "./contracts/MyContract.json";
import Web3 from 'web3';
import "./App.css";
import Layer from './Layer'
import Navbar from "./components/Navbar";
import ScoreCard from "./components/ScoreCard";
import {getMatches} from "./api/Api";

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    
    const API_KEY="btCZL1Y9NMWbPbW05Xlmit7NtNk1"
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({ matches: json.matches },
          );
      });
  }
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = MyContract.networks[networkId]
    if(networkData) {
      const instance = new web3.eth.Contract(MyContract.abi, networkData.address)
      this.setState({ instance })
      // Write your logic to load data stored in your Smart Contract
      this.setState({ web3, accounts, contract: instance }, this.runExample);
      this.setState({ loading: false})
    } else {
      window.alert('MyContract not deployed to detected network.')
    }
  }

  constructor(props){
    super(props)
    this.state = {
      account: '',
      constructorVariable: '',
      constructorArray: [],
      loading: true,
      matches: []
  }

  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    return (
      <div className="App">
        <main role="main" className="col-lg-12 d-flex justify-content-center">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : 
                <div>
                  {console.log(this.state.matches)}
                  <Navbar/>
                  {
                    this.state.matches.map((match)=>(
                      <Fragment>
                        {match.type=="ODI" ? (
                          <ScoreCard key={match.unique_id} match={match}/> 
                          ) : (
                            ""
                      )}
                        
                      </Fragment>
                      
                      
                    ))
                  }

                </div>
              
              }
            </main> 
      </div>
      
    );
  }
}

export default App;


