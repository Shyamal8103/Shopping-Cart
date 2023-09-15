import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Menu(){
    const cartlen = useSelector(state=>state.data.value.length)
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 text-center alert-primary">
                    <h1>Shooping Cart Demo</h1>
                </div>
            
                <div className="col-lg-1 mt-3 text-primary">
                   <Link to='/'> <h6>Home</h6></Link>
                </div>
                <div className="col-lg-1 mt-3  text-primary">
                    <Link to='/cart'><h6>Cart : {cartlen}</h6></Link>
                </div>
            </div>
        </div>
    </div>
}