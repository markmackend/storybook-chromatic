import "./NewFacility.css";
import { Context } from "../App";
import { useContext } from "react";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import '../firebaseConfig';

const db = getFirestore();

// This is a function to create a random 20-digit alphanumeric string to be used as object id's in database
function randomStr() {
  let ans = '';
  let arr = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let len = 20;
  for (let i = len; i > 0; i--) {
      ans +=
          arr[(Math.floor(Math.random() * arr.length))];
  }
  return ans;
}

const NewFacility = () => {

  const [btnView, setBtnView] = useContext(Context);
  
  let facility = {
    facilityName: "",
    company: "",
    imageUrl: "",
    auditRequestNumber: "",
    auditType: "",
    auditCompany: "",
    auditDept: "",
    status: ""
  }

    const SaveFacility = () => {
        var validationErrors = false;

        facility.facilityName = document.getElementById('facilityNameTxt').value;
        facility.company = document.getElementById('companyNameTxt').value;
        facility.auditRequestNumber = document.getElementById('auditRequestTxt').value;
        facility.status = document.getElementById('statusTxt').value;
        facility.auditType = document.getElementById('auditTypeTxt').value;
        facility.auditDept = document.getElementById('auditDepartmentTxt').value;
        facility.auditCompany = document.getElementById('auditCompanyTxt').value;
        facility.imageUrl = document.getElementById('imageUrlTxt').value;

        if (facility.facilityName == '')
        {
          document.getElementById('facilityNameTxt').classList.add('validationError');
          if (document.getElementById('facilityNameTxt').placeholder.charAt(document.getElementById('facilityNameTxt').placeholder.length-1) != '*')
          {
            document.getElementById('facilityNameTxt').placeholder += '*';
          }
          validationErrors = true;
        }
        if (facility.company == '')
        {
          document.getElementById('companyNameTxt').classList.add('validationError');
          if (document.getElementById('companyNameTxt').placeholder.charAt(document.getElementById('companyNameTxt').placeholder.length-1) != '*')
          {
            document.getElementById('companyNameTxt').placeholder += '*';
          }
          validationErrors = true;
        }
        if (facility.auditRequestNumber == '')
        {
          document.getElementById('auditRequestTxt').classList.add('validationError');
          if (document.getElementById('auditRequestTxt').placeholder.charAt(document.getElementById('auditRequestTxt').placeholder.length-1) != '*')
          {
            document.getElementById('auditRequestTxt').placeholder += '*';
          }
          validationErrors = true;
        }
        if (facility.status == '')
        {
          document.getElementById('statusTxt').classList.add('validationError');
          if (document.getElementById('statusTxt').placeholder.charAt(document.getElementById('statusTxt').placeholder.length-1) != '*')
          {
            document.getElementById('statusTxt').placeholder += '*';
          }
          validationErrors = true;
        }
        if (facility.auditType == '')
        {
          document.getElementById('auditTypeTxt').classList.add('validationError');
          if (document.getElementById('auditTypeTxt').placeholder.charAt(document.getElementById('auditTypeTxt').placeholder.length-1) != '*')
          {
            document.getElementById('auditTypeTxt').placeholder += '*';
          }
          validationErrors = true;
        }
        if (facility.auditDept == '')
        {
          document.getElementById('auditDepartmentTxt').classList.add('validationError');
          if (document.getElementById('auditDepartmentTxt').placeholder.charAt(document.getElementById('auditDepartmentTxt').placeholder.length-1) != '*')
          {
            document.getElementById('auditDepartmentTxt').placeholder += '*';
          }
          validationErrors = true;
        }
        if (facility.imageUrl == '')
        {
          document.getElementById('imageUrlTxt').classList.add('validationError');
          if (document.getElementById('imageUrlTxt').placeholder.charAt(document.getElementById('imageUrlTxt').placeholder.length-1) != '*')
          {
            document.getElementById('imageUrlTxt').placeholder += '*';
          }
          validationErrors = true;
        }

        if (validationErrors == false)
        {
          setDoc(doc(db, "auditrequests", randomStr(20)), {
            auditCompany:facility.auditCompany,
            auditDepartment:facility.auditDept,
            auditRequests:facility.auditRequestNumber,
            auditType:facility.auditType,
            company:facility.company,
            img:facility.imageUrl,
            status:facility.status,
            title:facility.facilityName
          });
          setBtnView('dashboard');
        }
      };

      const backBtnClick = () => {
        setBtnView('dashboard');
      }

      const ClearForm = () => {
        document.getElementById('facilityNameTxt').value = "";
        document.getElementById('facilityNameTxt').placeholder = 'Enter Facility Name';
        document.getElementById('facilityNameTxt').classList.remove('validationError');
        document.getElementById('companyNameTxt').value = "";
        document.getElementById('companyNameTxt').placeholder = 'Enter Company Name';
        document.getElementById('companyNameTxt').classList.remove('validationError');
        document.getElementById('auditRequestTxt').value = "";
        document.getElementById('auditRequestTxt').placeholder = 'Enter Audit Request Number';
        document.getElementById('auditRequestTxt').classList.remove('validationError');
        document.getElementById('statusTxt').value = "";
        document.getElementById('statusTxt').placeholder = 'Enter Audit Request Status';
        document.getElementById('statusTxt').classList.remove('validationError');
        document.getElementById('auditTypeTxt').value = "";
        document.getElementById('auditTypeTxt').placeholder = 'Enter Audit Type';
        document.getElementById('auditTypeTxt').classList.remove('validationError');
        document.getElementById('auditDepartmentTxt').value = "";
        document.getElementById('auditDepartmentTxt').placeholder = 'Enter Audit Department';
        document.getElementById('auditDepartmentTxt').classList.remove('validationError');
        document.getElementById('auditCompanyTxt').value = "";
        document.getElementById('imageUrlTxt').value = "";
        document.getElementById('imageUrlTxt').placeholder = 'Enter Image URL';
        document.getElementById('imageUrlTxt').classList.remove('validationError');
      }

  return (
    <section className="formSection">
        <h4 className="label">Enter New Facility</h4>
          <form>
            <div><input className="formInput" type="text" placeholder="Enter Facility Name" id="facilityNameTxt"></input></div>
            <div><input className="formInput" type="text" placeholder="Enter Company Name" id="companyNameTxt"></input></div>
            <div><input className="formInput" type="text" placeholder="Enter Audit Request Number" id="auditRequestTxt"></input></div>
            <div><input className="formInput" type="text" placeholder="Enter Audit Request Status" id="statusTxt"></input></div>
            <div><input className="formInput" type="text" placeholder="Enter Audit Type" id="auditTypeTxt"></input></div>
            <div><input className="formInput" type="text" placeholder="Enter Audit Department" id="auditDepartmentTxt"></input></div>
            <div><input className="formInput" type="text" placeholder="Enter Audit Company Name" id="auditCompanyTxt"></input></div>
            <div><input className="formInput" type="text" placeholder="Enter Image URL" id="imageUrlTxt"></input></div>
          </form>
        <div className="wrapper">
          <a onClick={SaveFacility}><span>Save Facility</span></a>
          <a2 onClick={ClearForm}><span>Clear Form</span></a2>
          <a3 onClick={backBtnClick}><span>Back</span></a3>
        </div>
    </section>
  );
};

export default NewFacility;