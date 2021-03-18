import React from 'react';
import './../style.css';
import data from './../data.json'
import FaqItem from './FaqItem';

function Faq() {
    const mapArray = data.faq.map((el, i) => {
        return <FaqItem qu={el.qu} ans={el.ans} id={el.id} key={el.id} />
    })
    return (
        <div className='faq-Container' >
            <section>
                <h2>Häufig gestellte Fragen</h2>
                <h5>Wenn Sie Frage zu unserem Produkte haben sollten, dann schauen Sie hier</h5>
            </section>
            {mapArray}
        </div >
    );
}

export default Faq;