/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */


import { useState } from "react";
import Category from "./channels/category";

const questions = ['Invite People', 'Server settings', 'Create channel', 'Create category', 'Notifacation settings', 'Privacy settings', 'Leave server',];


/**? change 1: i moved all channels related code to seprate folder and  files */
/**  the main file for the channels is the category.jsx file from there the start */
function ChannelsBar() {
  return (
    <div className="fixed top-0 flex flex-col h-screen text-white bg-gray-900 shadow-lg left-16 w-80">
      <div className="flex justify-center ">
        <ServerDropDown selections={questions} />
        {/* <div>i</div>
        <div>i</div>
        <div>i</div> */}
      </div>
      <Category categoryName={'insane'} selections={questions} />

    </div>
  );
}
const ServerDropDown = ({ selections }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="server-name">
      <div className="flex-col dropdown">
        <a onClick={() => setExpanded(!expanded)} href="#" className="font-bold"> SERVER TRYOUT </a>
        <div>
          {expanded && selections.map((selection) => <ServerSettings selection={selection} />)}
        </div>
      </div>
    </div>
  );
};

const ServerSettings = ({ selection }) => {
  return (
    <>
      <div className="dropdown-selection">
        <h5 className='dropdown-selection-text'>{selection}</h5>
      </div>
      <div className="">
        <hr className="w-64 border-b-2 border-indigo-500 border-solid rounded-lg " />
      </div>
    </>
  );
};




export default ChannelsBar;