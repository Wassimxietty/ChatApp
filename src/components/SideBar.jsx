/* eslint-disable react/prop-types */
import { FaFire } from "react-icons/fa";


function SideBar(){
  return(
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-950 shadow-lg">
      <a href='#'> <SideBarIcon icon={
        <FaFire size='26'/>
      } /> </a>
      <a href='#'> <SideBarIcon icon={
        <FaFire size='26'/>
      } /> </a>
      <a href='#'> <SideBarIcon icon={
        <FaFire size='26'/>
      } /> </a>
      <a href='#'> <SideBarIcon icon={
        <FaFire size='26'/>
      } /> </a>
    </div>
  );
}
const SideBarIcon = ( {icon, text='tooltip smiley'} )=>{
  return(
    //*sidebar Icon is the parent class, we use Group on it
    //*the child gets the group and the action alongside it
  <div className="sidebar-icon group">
    {icon}
    <span className='sidebar-tooltip group-hover:scale-100'>
      {text}
    </span>
  </div>
  );
};
export default SideBar;