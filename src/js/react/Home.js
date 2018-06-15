import React from 'react';
import Nav from './Nav';

const Home = ( props ) => {
    console.log('home props', props)
    const pathName = props.location.pathname;


    return(
        <div className = 'container'>
        { pathName === '/' ? 
            (<div>
                <Nav pathName = { pathName }/>   
                <div className = 'card card-body bg-light'>
                    <h3>ReactJS Example</h3>
                </div>
            </div>)
            :
            <Nav pathName = { pathName }/>
         
        }
          </div>
    )
}
   

export default Home;