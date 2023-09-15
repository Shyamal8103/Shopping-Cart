import axios from "axios"
import store from "./Store"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "./Cartslice"
export default function Home(){
    const [products,setProducts]=useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        loadData()
    },[])
    let loadData = async ()=>{
        // fetch('https://dummyjson.com/products').then(response=>response.json()).then(result=>setProducts(result.products))
       const response =await axios.get('https://dummyjson.com/products')
       setProducts(response.data.products)
    }
    return <div>
        <h1 className="alert-danger">Product List</h1>
        <div className="row">
           {/* {console.log({products})} */}
           {products.map(ob=><div className="col-lg-3 text-center border mt-1 mb-2">
            <div>
            <img src={ob.thumbnail} width={200} height={180}/><br/>
            <b>{ob.title}</b><br/>
            <b className="text-danger">Rs : {ob.price}</b><br />
            <button className="btn-sm btn-success" onClick={()=>dispatch(addItem(ob))}>Add to Cart</button>
            </div>
           </div>)}
        </div>

    </div>
}