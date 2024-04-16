import Button from "../components/Button";
import "./TopCompanies.css";

const TopCompany = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Top Companies</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Companies" />
          <Button onClickHandler={handleClick} value="Ningbo" title="Ningbo" />
          <Button onClickHandler={handleClick} value="Epson" title="Epson" />
          <Button onClickHandler={handleClick} value="Guangdong Baili Food Co Ltd" title="Guangdong" />
          <Button onClickHandler={handleClick} value="Tyson Foods, Inc." title="Tyson Foods" />
        </div>
      </div>
    </>
  );
};

export default TopCompany;