import React, { useState } from 'react';
import './../style.css';
import cartActive from './cart-active.svg';
import { Redirect } from 'react-router-dom'
{/* <Redirect to={'/'} /> */ }

function RedirectScreen() {
    const [flag, setFlag] = useState(false)
    setTimeout(() => {
        setFlag(true)
    }, 4000);


    if (flag) {
        return (<Redirect to={'/'} />);
    } else {
        return (
            <div className='redirect-Container' >
                <section>
                    <h2>netigo Online kaufen</h2>
                    <h5>Sie werden in wenigen Sekunden weiter geleitet</h5>
                </section>
                <div class="animation-container">
                    <img src={cartActive} />
                    <img src={cartActive} />
                </div>
            </div>
        );
    }
}

export default RedirectScreen;

