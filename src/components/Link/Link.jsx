
import PropTypes from 'prop-types';
const Link = ({ route }) => {
    return (
        <div>
            <li className="mr-5 hover:bg-red-200"> 
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

 Link.propTypes = {
    route: PropTypes.object
 }

export default Link;