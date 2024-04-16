import "./header.css";

const Header = () => {

    return (
      <header>
        <div className="header">
        <img className="costcoLogo" src="https://cdn.worldvectorlogo.com/logos/costco-wholesale.svg" alt="Costco" width="240" height="100"></img>
        </div>
        <p className="header-title">Facility Audit Dashboard</p>
      </header>
    );
  };
  
  export default Header;