import React, {useState} from 'react'
import arrow from '../assets/arrow.svg'

const FaqTile = ({question, answer}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className='tile faq-tile' onClick={() => setOpen(!open)}>
            <div className='faq-tile__header'>
                <div className='faq-tile__question'> {question} </div>
                <img className={`faq-tile__button ${open ? 'faq-tile__button--open' : 'faq-tile__button--closed' }`} src={arrow}/>
            </div>

            <p className={`faq-tile__answer ${open ? 'faq-tile__answer--open' : 'faq-tile__answer--closed'}`}>
                {answer}
            </p>

        </div>
    )
}

export default FaqTile