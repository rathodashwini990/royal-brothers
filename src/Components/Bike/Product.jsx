import {useState, useEffect} from "react";
import React from 'react'

import "./Product.css";

const Product = () => {

    const [item,setItem] = useState([]);

	useEffect(() =>{
		getItem();
	},[]);

    async function getItem (){
		let res = await fetch("http://localhost:3000/bike");
		let data = await res.json();
		let s_data = [];
		s_data.push(data[0]);
		s_data.push(data[1]);
		s_data.push(data[2]);
		setItem(s_data);
	}

    return (
    <div className="outer">
        <div className="inner"> 
                <div className="home-sani">
                    <div className="home-sani-ch">Sort by</div>
                    <div className="home-sani-ch">Relevance</div>
                    <div className="home-sani-ch">Price - Low to High</div>
                    <div className="home-sani-ch">Price - High to Low</div>
                </div>
        
                <div className="home-sani-drop" >
                <span className="home-sani-drop-span">Duration</span>
                <select className="home-sani-drop-sel" name="duration" >
                    <option value="hourly">hourly</option>
                    <option value="7 days">7 days</option>
                    <option value="15 days">15 days</option>
                    <option value="3 months">3 months</option>
                    <option value="1 months">1 months</option>
                </select>
                </div>
                <div className="clear" ></div>
             
        </div>
    </div>
        );
}

export default Product