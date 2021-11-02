import React, {useState} from 'react'
import Item from './Item'

const Accordion = ({ items }) => {
    const [activeIdx, setActiveIdx ] = useState(null)
    const onItemClick = (idx) => {
        setActiveIdx(idx)
    }
    const renderedItems = items.map((item, idx) => 
        <Item key={item.title} item={item} idx={idx} onItemClick={onItemClick} activeIdx={activeIdx}/>)

    return (
        <div className='ui styled accordion'>
            {renderedItems}
        </div>
    )
}

export default Accordion