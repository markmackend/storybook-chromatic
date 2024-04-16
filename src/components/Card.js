import { BsFillBagFill } from "react-icons/bs";
import { LuFactory } from "react-icons/lu";
import { AiFillStar, AiOutlineFileDone } from "react-icons/ai";
import { TbTrash } from "react-icons/tb";
import "./Card.css";
import { doc, deleteDoc, getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const Card = ({ img, title, statusIcon, auditRequests, auditType, auditCompany, status }) => {

const db = getFirestore();

const collectionRef = collection(db, "auditrequests");

// -------- Select status icon function ----------

  function SelectStatusIcon(input) 
  {
    switch (input)
    {
      case 'New':
        return <AiOutlineFileDone className="rating-new" />
        break;
        case 'Initiated':
        return <AiOutlineFileDone className="rating-initiated" />
        break;
        case 'In Progress':
        return <AiOutlineFileDone className="rating-inprogress" />
        break;
        case 'Completed':
        return <AiOutlineFileDone className="rating-completed" />
        break;
        case 'Cancelled':
        return <AiOutlineFileDone className="rating-cancelled" />
        break;
    }
  }

// Function that displays a pre-set message if there's no audit company
  function DisplayAuditCompany(auditCompany)
  {
    if (auditCompany == "")
    {
      return <p className="card-no-company">No Audit Company</p>
    }
    else
    {
      return <p className="card-company">Audit Company: {auditCompany}</p>
    }
  }

  function TestData(x)
  {
    if (x && x != null)
    {
      console.log('There is data');
    }
    else
    {
      console.log('There is no data');
    }
    console.log('Data: ', x);
  }

  function deleteDocument()
  {
    // const q = query(collectionRef, where('auditRequests', '==', '202403-NFGMP-06877'));
    // console.log(q);
    // const docSnap = getDocs(q);
    // docSnap.forEach((doc) => {
    //   console.log(doc.data());
    // });
    
    console.log('clickTrash');
    // deleteDoc(doc(db, 'auditrequests', docId));
  }

  return (
    <>
      <section className="card">
        <div align="center">
          <img src={img} alt={title} className="card-img"/>
        </div>
        
        <div>
          <h3 className="card-title">{title}</h3>
          <section className="card-auditRequests">
            <span className="total-auditRequests">{auditRequests}&nbsp;- &nbsp;</span>
            <p>Status:&nbsp;{status} &nbsp;</p>{SelectStatusIcon(status)}
          </section>
          <section align="center">
            <div className="card-audit-type">
              {auditType}
            </div>
          </section>
          <section align="center">
            {DisplayAuditCompany(auditCompany)}
          </section>
        </div>
        <div className="trash-bin">
          <TbTrash onClick={deleteDocument}/>
        </div>
      </section>
      
    </>
  );
};

export default Card;