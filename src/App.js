
import React from 'react';
import './App.css';
import DisplayQuote from './components/DisplayQuote'
import axios from 'axios'

const sampleQuote =  [ {
    "quote": "By chilling my loins I increase the chances of impregnating my wife.",
    "character": "Apu Nahasapeemapetilon",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    "characterDirection": "Left"
    }]
  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
      
    };
  }
  

  getQuote = ()=> {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data)
        this.setState({
          quote: data});
    });
  }


  render() {
    return (
      <div  className="DisplayQuote">
        
        <DisplayQuote quote={this.state.quote[0]} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
        
       
      </div>
    );
  }
}


export default App;
