import React,{useState} from 'react'
import '../styles/navbar.css';
// import {logo} from '../data/data.json'
import { Link } from 'react-router-dom';
import {AiOutlineMenu, AiOutlineSearch,AiOutlineClose} from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
    const [openMenu,setopenMenu]=useState(false);
    const toggleMenu=()=>{
        setopenMenu(!openMenu);
    }

  return (
    <div className='navbar'>
        <div className='logo'>
            <Link to="/">
                <img src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" alt="" id='logoimg' />
            </Link>
        </div>
        <div >
            <button onClick={toggleMenu}>
                {
                    openMenu===true?<AiOutlineClose/>:<AiOutlineMenu/>
                }
            </button>
        </div>
            <Link className='navlinks' to="/miphones">MI Phones</Link>
            <Link className="navlinks" to="/redmiphones">Redmi Phones</Link>
            <Link className="navlinks" to="/tv">TV</Link>
            <Link className="navlinks" to="/laptops">Laptops</Link>
            <Link className="navlinks" to="/lifestyle">Fashion & Fitness</Link>
            <Link className="navlinks" to="/home">Home</Link>
            <Link className="navlinks" to="/audio">Audio</Link>
            <Link className="navlinks" to="/accessories">Accessories</Link>

        <div className='searchbox'>
            <input type="text"  name='search' placeholder='Search Products'/>
            <AiOutlineSearch/>
        </div>

    </div>
  )
}

export default Navbar