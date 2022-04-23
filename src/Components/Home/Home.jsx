import "./Home.css";

import {useState, useEffect} from "react";

export const Home = () => {

	const [item,setItem] = useState([]);

	useEffect(() =>{
		getItem();
	},[]);

    async function getItem (){
		let res = await fetch("http://localhost:4000/bike");
		let data = await res.json();
		let s_data = [];
		s_data.push(data[0]);
		s_data.push(data[1]);
		s_data.push(data[2]);
		setItem(s_data);
	}


  return (
    <>
      <img
        className="home-img"
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page_web-986bff386c60dfaf5106b17c40f7c04228518a95dff9b04ccd88c81465cec0be.jpg"
        alt="home"
      ></img>
      <div className="home-sani">
        <div className="home-sani-ch">Sanitized Vehicles</div>
        <div className="home-sani-ch">Vehicle Insurance</div>
        <div className="home-sani-ch">24/7 Roadside Assistance</div>
        <div className="home-sani-ch">24/7 Roadside Assistance</div>
      </div>
      <div className="home-sani-div">
        <h1 className="home-sani-h">OUR FLEET</h1>
        <div className="home-sani-line"></div>
      </div>

      <div className="home-sani-drop" >
        <span className="home-sani-drop-span" >Duration</span>
        <select className="home-sani-drop-sel" name="duration" >
          <option value="hourly">hourly</option>
          <option value="7 days">7 days</option>
          <option value="15 days">15 days</option>
          <option value="3 months">3 months</option>
		  <option value="1 months">1 months</option>
        </select>
      </div>
	  <div className="clear" ></div>

	  {item.map((e)=>(
		  <div>
			  <img src={e.url} alt=""/>
		  </div>
	  ))}

    </>
  );
};
