import { NavLink } from 'react-router-dom'
import './sidebar.css'
NavLink
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h1>Sidebar</h1>
        <NavLink to="/main" className="navlink" >
            Cars
        </NavLink>
        <NavLink to="/main/brand" className="navlink" >
           Brand
        </NavLink>
    </div>
  )
}

export default Sidebar