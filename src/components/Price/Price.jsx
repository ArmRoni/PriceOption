
import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const Price = ({option}) => {
    const {name , price, features} = option;
    return (
        <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col">
            <h2 className="text-center">
                <span className="text-7xl"> price:{price}</span>
                <span className="text-3xl "> /mon</span>
            </h2>
            <h4 className="text-4xl text-center "> {name}</h4>

            <div className="pl-6 flex-grow">
                {
                    features.map((feature, index) =><Feature key={index} feature={feature}></Feature> )
                }
            </div>
           
            <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-800"> Buy Now</button>
        </div>
    );
};

Price.propTypes = {
    option: PropTypes.object
};

export default Price;
