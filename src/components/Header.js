import Button from './Button'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1 /*style={headingStyle}*/>{title}</h1>
            {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}


//how to do inline css
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }


Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header