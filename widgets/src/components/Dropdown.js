import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ options, selected, setSelected, label }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()
    useEffect(() => {
        const onBodyClick = (e) => {
            if (!ref.current.contains(e.target)) setOpen(false)
        }

        document.body.addEventListener('click', onBodyClick, { capture: true })

        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true })
        }

    }, [])

    const onItemClick = (e) => {
        const clickedItem = options.filter(option => option.value === e.target.id)[0]
        setSelected(clickedItem)
    }

    const onDropdownClick = () => {
        setOpen(!open)
    }

    const renderedOptions = options.map((option) => {
        return (
            selected !== option &&
            <div
                className="item"
                key={option.value}
                id={option.value}
                onClick={onItemClick}
            >
                {option.label}
            </div>
        )
    })
    return (
        <div className='ui form' ref={ref}>
            <div className="field">
                <label htmlFor="" className="label">{label}</label>
                <div
                    className={`ui selection dropdown ${open && 'visible active'}`}
                    onClick={onDropdownClick}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open && 'visible transition'}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
