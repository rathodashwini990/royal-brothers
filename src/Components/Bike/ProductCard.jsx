import { Note } from '@material-ui/icons'
import React from 'react'

const ProductCard = ({note}) => {
  return (
    <div>
        {note.title}
    </div>
  )
}

export default ProductCard

// import Grid from '@material-ui/core/Grid'
// //import Card from '@mui/material/Card';
// import { Paper } from '@material-ui/core';
// import { Container } from '@material-ui/core';

// import React,{ useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {storeData} from "../../Redux/action"
// import "./Product.css";
// import ProductCard from "./ProductCard"

// const Product = () => {
//   //const [data, setData] = useState([]);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetch("https://royal-brothers-json.herokuapp.com/tariff")
//     .then((res) => res.json())
//     .then((res) => dispatch(storeData(res)))
//     .catch((err) => console.log(err))
//   }, [])

//   const result = useSelector((state) => state.data);
//   //console.log(result);

//   return ( 
//     <Container>
//       <Grid container>
//         {
//         result.map((note) => {
//             //let temp = e.img;
//             //console.log(e);
//             return (
//               <Grid>
//                     {/* <img className="images" src={temp} alt="" />
//                     <Paper>{e.name}</Paper>
//                     <Paper>{e.booktime}</Paper>
//                     <Paper>{e.kmlimit}</Paper>
//                     <Paper>{e.exkm}</Paper>
//                     <Paper>{e.price}</Paper> */}
//                     <ProductCard note={note} />
//               </Grid>
//             );
//         })}
//       </Grid>
//     </Container>
    
//    )
// }

// export default Product