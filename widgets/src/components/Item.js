import React from 'react'

const Item = ({ item, idx, onItemClick, activeIdx }) => {
    const onTitleClick = (e) => {
        onItemClick(idx)
    }

    const active = idx === activeIdx ? 'active' : ''
    
    return (
        <>
            <div 
                className={`title ${active}`}
                onClick={onTitleClick}
            >
                <i className="dropdown icon"></i>
                    {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
            
        </>
    )
}

export default Item
