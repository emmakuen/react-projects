import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('programming')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])
    
    const onInputChange = (e) => {
        setTerm(e.target.value)
    }

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php?', {
                params: {
                    action: 'query',
                    list: 'search', 
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })

            setResults(data.query.search)
        }
        debouncedTerm && search()

    }, [debouncedTerm])


    const renderedResults = results.map(result => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        type="text" 
                        className="input" 
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search