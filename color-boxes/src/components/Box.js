import {useState} from 'react'

const Box = () => {
    const colors = ["bisque", 'cadetblue', 'coral', 'chocolate', 'crimson', 'darksalmon', 'darkorange', 'dimgray', "deepskyblue", 'darkseagreen', 'indianred', 'lavender', 'lightblue', 'lightpink', 'mediumorchid', 'mediumpurple']
    const [ colorIdx, setColorIdx ] = useState(Math.floor(Math.random() * colors.length))

    const handleClick = () => {
        setColorIdx(Math.floor(Math.random() * colors.length))
    }

    
    const style = {
        backgroundColor: colors[colorIdx],
        width: "19.8%",
        height: "19.8vh",
        margin: "1px"
    }
    return (
        <div className="Box" style={style} onClick={handleClick}></div>
    )
}

export default Box