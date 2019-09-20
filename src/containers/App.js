import React , { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, makeDataRequest, changeSearchType } from '../actions';

import List from '../components/List/List';
import Heading from '../components/Heading/Heading';
import MainMenu from '../components/MainMenu/MainMenu';

import './App.css';
import '../components/Heading/Heading.css';
import '../components/MainMenu/MainMenu.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.Search.searchField,
    data: state.requestData.data,
    isPending: state.requestData.isPending,
    type: state.changeType.type
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestData: (type) => dispatch(makeDataRequest(type)),
    onTypeChange: (type) => dispatch(changeSearchType(type))
  }
}

class App extends Component {

  componentDidMount(){
    this.props.onRequestData(this.props.type);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.type !== prevProps.type) {
      this.props.onRequestData(this.props.type);
    }
  }

  render(){
    const {onSearchChange, data, searchField, isPending, type } = this.props;
    let DataArray = [];

    if(!isPending && (searchField !== '' || type === 'classes' || type === 'races')){
      DataArray = data.results.filter( eq => {
        return eq.name.toLowerCase().includes(searchField.toLowerCase());
      });
    }

    console.log(data);

    return (
      <>
        <Heading />
        <MainMenu changeType={this.props.onTypeChange}/>
        <List searchChange={onSearchChange} data={DataArray} type={type}/>
      </>
    );
  } 

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
