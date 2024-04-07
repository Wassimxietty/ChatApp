/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCaretRightFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";

const questions = ['Invite People', 'Server settings', 'Create channel','Create category', 'Notifacation settings', 'Privacy settings', 'Leave server',];

function ChannelsBar(){
  return(
    <div className="fixed top-0 left-16 h-screen w-80 flex  flex-col bg-gray-900 text-white shadow-lg">
      <div className="flex">
          <ServerDropDown selections={questions} />
          <div>i</div>
          <div>i</div>
          <div>i</div>
          <Category categoryName={'insane'} selections={questions} />
      </div>
      
    </div>
  );
}
const ServerDropDown = ( { selections} )=>{
  const [expanded, setExpanded] = useState(false);
  return(
  <div className="server-name">
    <div className="dropdown flex-col">
      <a onClick={()=>setExpanded(!expanded)} href="#" className="font-bold"> SERVER TRYOUT </a>
        <div className={expanded}>
          {expanded && selections.map((selection)=> <ServerSettings selection={selection}/>)}
      </div>
    </div>
  </div>  
  );
};

const ServerSettings = ({selection})=>{
  return(
    <>
      <div className="dropdown-selection">
        <h5 className='dropdown-selection-text'>{selection}</h5>     
      </div>
      <div className="flex justify-center">
        <hr className="border-solid border-b-2 w-64  border-indigo-500 rounded-lg "/> 
      </div>
    </>
  );
};
const Channels = ({selection})=>{
  return(
    <>
      <div className="dropdown-selection">
        <h5 className='dropdown-selection-text'>{selection}</h5>     
      </div>
    </>
  );
};

const Category = ({categoryName, selections})=>{
  const [expanded, setExpanded] = useState(false);

  return(
    <div className="dropdown flex-col">
      <a onClick={()=>setExpanded(!expanded)} href="#" className="font-bold"> {categoryName} </a>
      <div className="">
        <ArrowIcon expanded={expanded} className="serverdropdown-icon"/>
        <div className={expanded}>
          {expanded && selections.map((selection)=> <Channels selection={selection}/>)}
        </div>
      </div>
    </div>
  )
};
const ArrowIcon =( {expanded})=>{
  const iconClass = "text-accent text-opacity-80 my-auto mr-1"
  return expanded ? (
    <BsCaretRightFill size='14' className={iconClass} />
  ) :
  (
    <BsCaretDownFill size='14' className={iconClass}/>
  );
};
export default ChannelsBar;