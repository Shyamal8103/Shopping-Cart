import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeItem,IncrementQty,decrementQty } from "./Cartslice"


export default function Cart(){
    // const [stat,setstat]=useState(undefined)

    const dispatch =useDispatch()
    
    const dp = useSelector(state=>state.data.value)
    return <div>
        <h1 className="alert-danger">My Cart</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {dp.map((ob,index)=><tr>
                    <td>{index+1}</td>
                    <td><img src={ob.thumbnail} width={100} height={100} /></td>
                    <td>{ob.title}<br/>
                    {ob.brand}-{ob.description}
                    </td>
                {/* {console.log(dp)} */}
                    <td>{ob.price}</td>
                    <td className="d-flex"><button onClick={()=>dispatch(decrementQty(ob))} className="btn-sm btn-info">-</button>&nbsp;&nbsp;{ob.qty}&nbsp;&nbsp;<button onClick={()=>dispatch(IncrementQty(ob))} className="btn-sm btn-info">+</button></td>
                    <td>{ob.price * ob.qty}</td>
                    <td><button onClick={()=>dispatch(removeItem(ob))} className="btn btn-danger">Remove</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
}