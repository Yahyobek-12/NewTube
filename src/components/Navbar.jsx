import '../styles/navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosSearch } from 'react-icons/io'
import { IoIosArrowBack } from "react-icons/io"
import { categories, logo } from '../constants/constans'

const Navbar = () => {
    const [active, setActive] = useState(false)

  return (
    <div className='nav'>
      <Link to='/' className="logo">
        <img src={logo} alt="" />
        <h2>NewTube</h2>
      </Link>
        
      <form onSubmit={(e) => e.preventDefault()} className={active ? 'nav-form-active' : 'nav-form'}>
        <button className='back-btn' onClick={() => setActive(false)}><IoIosArrowBack /></button>
        <input type="text" placeholder='Search' />
        <button className='form-btn' type='submit'><IoIosSearch  /></button>
      </form>

      <IoIosSearch className='search-menu' onClick={() => setActive(!active)} />

      {/* <div className="categories">
        <div className="cat-in">
          {categories.map(categorie => (
            <>
              {categorie.name}
            </>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default Navbar
