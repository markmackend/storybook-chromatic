import React, { useEffect, useState, createContext, useContext, useReducer } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import data from "./db/data.js";
import TopCompany from "./TopCompanies/TopCompanies";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import NewFacility from "./NewFacility/NewFacility";
import "./index.css";
import Header from "./Header/header";

import './firebaseConfig';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import AuditDepartment from "./Sidebar/AuditDepartment/AuditDepartment";
import appReducer from "./reducers";
import { StateContext } from "./contexts";


export const Context = React.createContext();

function App() {


const [btnView, setBtnView] = useState('dashboard');


// ------- Firebase -------------
let [storedValues, setStoredValues] = useState([]); 
let [products, setProducts] = useState([]);  // NEW file add

function fetchDataFromFile(data) {
setProducts(data);
}

useEffect(() => {
  fetchDataFromFile(data);
}, []);

const db = getFirestore();

 // ------- async call to fetch data from the firebase  ----------
 const fetchDataFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(db, "auditrequests"));
  const temporaryArr = [];
  querySnapshot.forEach((doc) => {
    temporaryArr.push(doc.data());
  });
  setStoredValues(temporaryArr);
}

  useEffect(() => {
    if (btnView == "dashboard")
    {
      fetchDataFromFirestore();
      console.log('Data loaded from Firebase');
    }
  }, [btnView]);   // This will fire when "dashboard" page loads, as well as whenever page updates. 

  // ---------- Other ------------------

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = storedValues.filter(
    (storedValue) => storedValue.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // NEW FILE DATA ADD
  const filteredItemsFromFile = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(storedValues, selected, query) {
    let filteredProducts = storedValues;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ company, status, auditDepartment, auditType, title }) =>
          company === selected ||
          status === selected ||
          auditDepartment === selected ||
          auditType === selected ||
          title === selected
      );
      }

    return filteredProducts.map(
      ({ img, title, statusIcon, auditRequests, auditType, auditCompany, status }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          statusIcon={statusIcon}
          auditRequests={auditRequests}
          auditType={auditType}
          auditCompany={auditCompany}
          status={status}
        />
      )
    );
  }

// --- NEW from file
  function filteredDataFromFile(products, selected, query) {
    let filteredProductsFromFile = products;

    // Filtering Input Items
    if (query) {
      filteredProductsFromFile = filteredItemsFromFile;
    }

    // Applying selected filter
    if (selected) {
      filteredProductsFromFile = filteredProductsFromFile.filter(
        ({ company, status, auditDepartment, auditType, title }) =>
          company === selected ||
          status === selected ||
          auditDepartment === selected ||
          auditType === selected ||
          title === selected
      );
      }

    return filteredProductsFromFile.map(
      ({ img, title, statusIcon, auditRequests, auditType, auditCompany, status }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          statusIcon={statusIcon}
          auditRequests={auditRequests}
          auditType={auditType}
          auditCompany={auditCompany}
          status={status}
        />
      )
    );
  }

  // ----- This section combines the data from the local file with the data from Firebase and then we output the combined total
  const fileData = filteredDataFromFile(products, selectedCategory, query);
  let result = filteredData(storedValues, selectedCategory, query);

  function pushToResult(item)
  {
    result.push(item);
  }

  fileData.forEach(pushToResult);


// Populate pages
if (btnView == "dashboard")
{
  return (
    <>
      <Context.Provider value={[btnView, setBtnView]}>
        <Sidebar handleChange={handleChange}/>
      </Context.Provider>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <TopCompany handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}
else if (btnView == "newfacility")
{
  return (
    <>
      <Header />
      <Context.Provider value={[btnView, setBtnView]}>
        <NewFacility />
      </Context.Provider>
      
    </>
  );

}

}

export default App;