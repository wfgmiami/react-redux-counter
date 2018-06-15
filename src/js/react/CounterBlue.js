import React from 'react';
import { incrementBlue } from '../redux/store';
import { connect } from 'react-redux';
import Nav from './Nav';

const CounterBlue = ( props ) => {
  
    const pathName = props.location.pathname;
    return(
        <div className = 'container'>
            <Nav pathName = { pathName }/>
            <button className = 'btn btn-primary' onClick = { props.increment }>{ props.count }</button>
        </div>
    )
}


const mapStateToProps = ( state ) => {
    return {
        count: state.counter.blue
    }
}
    

const mapDispatchToProps = ( dispatch ) => {
    return {
        increment: () => dispatch( incrementBlue() )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( CounterBlue );