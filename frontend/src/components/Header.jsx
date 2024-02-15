import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Header = () => {
    const user = {
        name: "John",
    };

    const {cart} = useCart();

    const logout= ()=> {

    }
  return (
    <header className=' header bg-white p-0 border-b border-[#e72929]'>
        <div className='mx-auto flex justify-between'>
            <Link to={"/"} className='font-bold p-[1rem]' >
                Amailo!
            </Link>

            <nav>
                <ul>
                    {
                        user ? (
                            <li className='relative menu_container'>
                                <Link to="/profile">{user.name}</Link>
                                <div className='absolute z-[1] bg-[whitesmoke] hidden menu'>
                                    <Link to="/profile">Profile</Link>
                                    <Link to="/orders">Orders</Link>
                                    <a className='' onClick={logout}>Logout</a>
                                </div>
                            </li>
                        ) : (
                            <Link to={"/login"}></Link>
                        )
                    }

                    <li>
                        <Link to={"/cart"}>
                        Cart
                        {cart.totalCount > 0 && <span className='cart_count'>{cart.totalCount}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header