import { Route, Routes } from "react-router-dom"
import Menu from "./menu"
import Home from "./Home"
import Cart from "./Cart"

export default function App(){
    return <div>
        <div className="container"> 
    <Menu/>
    <hr/>
    <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/cart" element={<Cart/>}/> 
    </Routes>
    </div>
    </div>
}