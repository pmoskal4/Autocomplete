import React from "react";
import { countries } from "./countries.jsx";
import "../css/main.css";

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          autocompleteCountries: []
        }
    }

    formSubmit = event => {
      event.preventDefault()
    };

    inputChange = event => {
      let matchingCountries = [];

      countries.forEach((country, i) => {
        if(country.name.toUpperCase().startsWith(event.currentTarget.value.toUpperCase()) || country.code.toUpperCase().startsWith(event.currentTarget.value.toUpperCase())){
          let newCountry = (
            <p key={i} className='country'>{country.name} ({country.code}) </p>
          );
          matchingCountries.push(newCountry);
        }
      });

      if(event.currentTarget.value.length === 0) {
        matchingCountries = [];
      }

      this.setState({
        autocompleteCountries: matchingCountries
      });
    };

    selectCountry = event => {

      if(this.state.autocompleteCountries.length === 0) {
        event.currentTarget.value = "";
      }

      if(event.keyCode === 9 || event.keyCode === 13) {
        document.querySelector("input").value = this.state.autocompleteCountries[0].props.children.join('');
      }
      this.setState({
        autocompleteCountries: []
      });
    };

    render(){
        return (
          <div className='container'>
            <form onSubmit={this.formSubmit}>
              <input type='text' name='country' placeholder='Type Country' onKeyDown={this.selectCountry} onChange={this.inputChange}/>
            </form>
            <div className='countryList'>
              {this.state.autocompleteCountries}
            </div>
          </div>
        )
    }
}

export default Autocomplete;