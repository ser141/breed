import React from "react";
import { Link } from "react-router-dom";

function Header() {

    return(
        <header className="w-full h-[100px]  flex justify-between items-center border-b border-gray1">
            <Link to='/' className="bg-header  bg-50% bg-center bg-no-repeat w-[300px] h-[100px]"></Link>
            <nav className="flex gap-[15px] mr-[55px] items-center">
                <Link to='/about' className="text-lg uppercase">О нас</Link>
                <a className="text-lg uppercase" >Как закать</a>
                <a className="text-lg uppercase" >Товар</a>
                <Link to='/cart' className="bg-cart bg-center bg-cover bg-no-repeat  w-[40px] h-[40px] ml-[40px]"></Link>
            </nav>
        </header>
    )
}

export default Header