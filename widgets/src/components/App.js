import React, { useState } from 'react'
import Accordion from './Accordion'
import Dropdown from './Dropdown'
import Search from './Search'
import Translate from './Translate'
import Route from './Route'
import Header from './Header'

const items = [
    {
        title: "What two things can you never eat for breakfast?",
        content: "Lunch and dinner."
    },
    {
        title: "What gets wetter the more it dries?",
        content: "A towel."
    },
    {
        title: "16. What has a face and two hands, but no arms or legs?",
        content: "A clock."
    },


]

const options = [
    {
        label: 'Red',
        value: '#E03C3C'
    },
    {
        label: 'Blue',
        value: '#34DEEC'
    },
    {
        label: 'Green',
        value: '#3EDD89'
    },
]

const App = () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div>
            <Header />
            <div className='ui container'>
                <Route path='/'>
                    <Accordion items={items} />
                </Route>
                <Route path='/list'>
                    <Search />
                </Route>
                <Route path='/dropdown'>
                    <Dropdown
                        label="Select a Color"
                        options={options}
                        selected={selected}
                        setSelected={setSelected} />
                </Route>
                <Route path='/translate'>
                    <Translate />
                </Route>
            </div>
        </div>
    )
}

export default App
