import {  NavLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { BsCollectionPlayFill } from "react-icons/bs";

export { default as logo } from '../images/logo.jpg';

export const categories = [
    { name: <NavLink to='/'>All</NavLink> },
    { name: <NavLink to='music'>Music</NavLink> },
    { name: <NavLink to='comedy'>Comedy</NavLink> },
    { name: <NavLink to='coding'>Coding</NavLink> },
    { name: <NavLink to='podcast'>Podcast</NavLink> },
    { name: <NavLink to='technologies'>Technologies</NavLink> },
]

export const mobileLinks = [
    { name: <NavLink to='/'><AiFillHome className='mob-icons' /></NavLink>, id: 1 },
    { name: <NavLink to='/shorts'><SiYoutubeshorts className='mob-icons' /></NavLink>, id: 2 },
    { name: <NavLink to='/history'><BsCollectionPlayFill className='mob-icons' /></NavLink>, id: 3 },
    { name: <NavLink to='/profile'><IoPersonCircle className='mob-icons' /></NavLink>, id: 4 },
]

export { default as Nav } from '../components/Nav.jsx';
export { default as Navbar } from '../components/Navbar';
export { default as Shorts } from '../components/Shorts.jsx';
export { default as Home } from '../components/Home.jsx';