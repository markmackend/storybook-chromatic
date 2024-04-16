import "./Status.css";
import Input from "../../components/Input";

const Status = ({ handleChange }) => {
  return (
    <>
      <div className="sidebar-section">
        <h2 className="sidebar-title status-title">Status</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="New"
          title="New"
          name="test1"
          color="LightGray"
        />

        <Input
          handleChange={handleChange}
          value="Initiated"
          title="Initiated"
          name="test1"
          color="CornflowerBlue"
        />

        <Input
          handleChange={handleChange}
          value="In Progress"
          title="In Progress"
          name="test1"
          color="orange"
        />

        <Input
          handleChange={handleChange}
          value="Completed"
          title="Completed"
          name="test1"
          color="SpringGreen"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="Cancelled"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "Crimson" }}
          ></span>
          Cancelled
        </label>
      </div>
    </>
  );
};

export default Status;