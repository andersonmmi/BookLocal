import React, { Component } from 'react';
import Web3 from 'web3';
import moment from 'moment';

let reserve;
// let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
let web3 = window.web3
// stolen code zone vvv

if (typeof web3 !== 'undefined') {
  // Use Mist/MetaMask's provider
  web3 = new Web3(window.web3.currentProvider);
  console.log("web3 provider found");
} else {
  console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
}

// stolen code zone ^^^

let RRAbi = require('../../ABIs/RoomRentingAbi.js');
let RRAddress = require('../../contractAddress/rinkebyAddress.js');
let RR = web3.eth.contract(RRAbi).at(RRAddress);


class Reserve extends Component{
  constructor(props){
    super(props)
    this.state = {
      tokenId : '',
      start: '05/17/2018',
      stop: '05/21/2018',
      accessCode: '',
      availability: ''
    }

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleTextChange=this.handleTextChange.bind(this);
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }

  dateConverter = (mmddyyyy) => {
    return Math.floor(moment(mmddyyyy).unix() / 86400);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.dateConverter(this.state.start));
    console.log(this.dateConverter(this.state.stop));
    console.log("Reserve fired!");
    console.log("("+web3.toBigNumber(this.state.tokenId)+","+web3.toBigNumber(this.dateConverter(this.state.start))+","+web3.toBigNumber(this.dateConverter(this.state.stop))+","+web3.fromAscii(this.state.accessCode,32)+",{from: "+web3.eth.accounts[0]+", gas: 3000000}");
    reserve = RR.reserve(
      web3.toBigNumber(this.state.tokenId),
      web3.toBigNumber(this.dateConverter(this.state.start)),
      web3.toBigNumber(this.dateConverter(this.state.stop)),
      web3.fromAscii(this.state.accessCode,32),
      {from: web3.eth.accounts[0], gas: 3000000},
      (err,res) => {
        if(err){
          console.log(
            'availability: "false"'
          );
          this.setState({
            availability: "Oops! Something went wrong :-("
          })
        }
        console.log(
          'availability: "true"'
        );
        console.log(res);
        this.setState({
          availability: "Success!"
        });
      }
    );
    console.log(reserve);
  }

  render(){
    const style={
    //   backgroundColor: '#4D4D4D',
      padding: '10px',
    //   fontWeight: 'bold',
      width: '90vw',
      marginTop: '5px',
      marginBottom: '5px',
    }
    const fieldset={
        border: 'none',
      borderLeft: '2px solid #E66E1C',
      borderRight: '2px solid #E66E1C',
    }
    const legendStyle={
      textDecoration: 'overline underline',
      border: '10px #F4BE41',
      borderWidth: '10px',
      backgroundColor: 'white',
      textAlign: 'center',
      fontSize: '40px',
      fontWeight: '200',
      color: '#3C5BBE',
      marginBottom: '25px'
    }
    const labelStyle={
    //   border: "2px solid #383838",
    //   borderTop: "2px solid red",
      backgroundColor: "white",

      padding: "10px 30px",
      display: "flex"
    }
    const inputStyle={
        height: "18px",
        flexGrow: "1",
        marginLeft: "6px",
        border: "1px solid #ccc",
        boxShadow: "inset 0 1px 3px #ddd",
        borderRadius: "4px",
        fontSize: "12px"
      }
      const inputButtonStyle={
          marginTop: '25px',
          borderRadius: "4px"
      }
    return(
      <div style={style} className="reserve">
        <fieldset style={fieldset}>
          <legend style={legendStyle}>Reserve Your Room</legend>
            <div style={labelStyle}>Room Id:
              <input id="tokenId" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.tokenId} />
            </div>
            <div style={labelStyle}> Check-in date:
              <input id="start" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.start} />
            </div>
            <div style={labelStyle}> Check-out date:
              <input id="stop" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.stop} />
            </div>
            <div style={labelStyle}> Access Code:
              <input id="accessCode" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.accessCode} />
            </div>
            {/* <hr /> */}
            <input id="search" type="submit" style={inputButtonStyle} value="Reserve" onClick={this.handleSubmit} />
            {this.state.availability}
          {/* </label> */}
        </fieldset>
      </div>
    )
  }
}

export default Reserve
