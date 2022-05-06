import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import PolicyHeaders from './components/PolicyHeaders';
import Privacy from './components/Privacy';
import Terms from './components/Terms'
import './Policies.css';


function Policies({isPrivacy}: {isPrivacy: boolean}) {
    return(
        <div>
            <Header/>
            <PolicyHeaders />
            {
                isPrivacy
                ? <Privacy />
                : <Terms />
            }
            <Footer isHomeVisible={true} />
        </div>
    )
}

export default Policies