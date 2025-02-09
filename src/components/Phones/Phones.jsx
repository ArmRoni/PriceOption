import { useEffect, useState } from "react";

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() =>{
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => setPhones(data.data))
    },[])
    return (
        <div>
            <h2 className="text-5xl text-white">Phones:{phones.length}</h2>
        </div>
    );
};

export default Phones;