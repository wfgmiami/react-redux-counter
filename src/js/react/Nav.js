import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Nav = ( props ) => {
    console.log('......props', props, '.....', props.pathName)
    
    return(
        <div className = 'container'>
            <ui className = 'nav nav-tabs'>
                <Link className = { props.pathName == '/' ? "nav-link active" : "nav-link" } to = '/'>Home</Link>
                <Link className = { props.pathName == '/red'  ? "nav-link active" : "nav-link" } to = '/red'>Red Counter ({ props.red })</Link>
                <Link className = { props.pathName == '/blue' ? "nav-link active" : "nav-link" } to = '/blue'>Blue Counter ({ props.blue })</Link>
            </ui>
            <div>&nbsp;</div>
        </div>
    )
}

const mapStateToProps = ( state ) => (
    state.counter
)

export default connect( mapStateToProps )( Nav );