import { useEffect, useState, useContext } from "react";
import AuditDepartment from "./AuditDepartment/AuditDepartment";
import Price from "./AuditType/AuditType";
import Status from "./Status/Status";
import "./Sidebar.css";
import { Context } from "../App";

const Sidebar = ({ handleChange }) => {

  const [btnView, setBtnView] = useContext(Context);


  function newfacilitybtnclick() {
    setBtnView('newfacility');
  }

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <img src="https://cdn.worldvectorlogo.com/logos/costco-wholesale.svg" alt="Costco" width="240" height="100"></img>
        </div>
        <AuditDepartment handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Status handleChange={handleChange} />
        <br></br>
        <br></br>
        <div className="wrapper">
          <a4 onClick={newfacilitybtnclick}><span>Create New Facility</span></a4>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
