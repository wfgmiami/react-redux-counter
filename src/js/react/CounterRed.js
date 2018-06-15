import React from 'react';
import { connect } from 'react-redux';
import { incrementRed } from '../redux/store';
import Nav from './Nav';

const CounterRed = ( props ) => {
  
    const pathName = props.location.pathname;
    return(
        <div className = 'container'>
            <Nav pathName = { pathName }/>
            <button className = 'btn btn-danger' onClick = { props.increment }>{ props.count }</button>
        </div>
    )
}


const mapStateToProps = ( state ) => {
    return {
        count: state.counter.red
    }
}

const mapDispatchToProps = ( dispatch ) => (
    {
        increment: () => dispatch( incrementRed() )
    }
)


export default connect( mapStateToProps, mapDispatchToProps )( CounterRed )