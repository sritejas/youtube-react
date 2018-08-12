import React from 'react';
import logo from '../images/youtubelogo.png';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state ={ term: ''};
  }

  render(){
   return (
     <div className='search-bar'>
     <img src={logo} alt="youtube clone" />
     <input onChange={(event) => this.onInputChange(event.target.value)} placeholder="search"/>
   </div>
 );
 }

// ES6 for term:term in setState
 onInputChange(term){
  this.setState({term});
  this.props.onSearchTermChange(term);
  //console.log(term);
  }
}


export default SearchBar;
