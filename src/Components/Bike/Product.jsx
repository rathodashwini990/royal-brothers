// import {useState, useEffect} from "react";
// import React from 'react';

// import "./Product.css";

// const Product = () => {

//     const [item,setItem] = useState([]);

// 	useEffect(() =>{
// 		getItem();
// 	},[]);

//     async function getItem (){
// 		let res = await fetch("http://localhost:3000/bike");
// 		let data = await res.json();
// 		let s_data = [];
// 		s_data.push(data[0]);
// 		s_data.push(data[1]);
// 		s_data.push(data[2]);
// 		setItem(s_data);
// 	}

//     return (
//     <div className="outer">
//         <div className="inner"> 
//                 <div className="home-sani">
//                     <div className="home-sani-ch">Sort by</div>
//                     <div className="home-sani-ch">Relevance</div>
//                     <div className="home-sani-ch">Price - Low to High</div>
//                     <div className="home-sani-ch">Price - High to Low</div>
//                 </div>
        
//                 <div className="home-sani-drop" >
//                 <span className="home-sani-drop-span">Duration</span>
//                 <select className="home-sani-drop-sel" name="duration" >
//                     <option value="hourly">hourly</option>
//                     <option value="7 days">7 days</option>
//                     <option value="15 days">15 days</option>
//                     <option value="3 months">3 months</option>
//                     <option value="1 months">1 months</option>
//                 </select>
//                 </div>
//                 <div className="clear" ></div>
             
//         </div>
//     </div>
//         );
// }

// export default Product

import React,{useState, useEffect} from 'react'

const Product = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            
            if(componentMounted){
                setData(await response.clone().json())
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'> 
                <button className='btn btn-outline-dark'>All</button>
                <button className='btn btn-outline-dark me-2'>Men's Clothing</button>
                <button className='btn btn-outline-dark me-2'>Women's Clothing</button>
                <button className='btn btn-outline-dark me-2'>Jewelery</button>
                <button className='btn btn-outline-dark me-2'>Electronic</button>
                
            </div>
            {filter.map((product) => {
                return (
                    <>
                        <div className='col-md-3'>
                        <div class="card">
                        <img src={product.image} class="card-img-top" alt={product.title} />
                        <div class="card-body">
                            <h5 class="card-title">{product.title}</h5>
                            <p class="card-text">${product.price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        </div>
                    </>
                )
            })}
            </>
        )
    }
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts/>}
                </div>
            </div>
        </div>
    )
}

export default Product;