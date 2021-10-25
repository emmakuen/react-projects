import Box from './Box'

const BoxContainer = (props) => {
    return (
        <div className="BoxContainer">
            {Array.apply(null, Array(props.numBoxes)).map(item => (
                <Box/>
            ))}
        </div>
    )
}

export default BoxContainer