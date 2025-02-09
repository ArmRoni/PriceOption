import PropTypes from "prop-types";
import { FaRegCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center gap-2"> <FaRegCheckCircle />{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;

