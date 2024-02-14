import '../styles/nav.css'
import { mobileLinks } from '../constants/constans'

const Nav = () => {
  return (
    <div className='mobile'>
      <div className="mob-in">
        {mobileLinks.map(mobileLink => (
            <div key={mobileLink.id}>
                {mobileLink.name}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Nav
