import Input from "../../components/Input";
import "./AuditType.css";

const auditType = ({ handleChange }) => {
  return (
    <>
      <div className="sidebar-section">
        <h2 className="sidebar-title price-title">Audit Type</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="COC"
          title="COC"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="SCS"
          title="SCS"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="GMP"
          title="GMP"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="GFSI"
          title="GFSI"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="Other Certificate/Outside Audit"
          title="Other Certificate/Outside Audit"
          name="test2"
        />
        
        <Input
          handleChange={handleChange}
          value="Food Safety GMP Audit"
          title="Food Safety GMP Audit"
          name="test2"
        />
      </div>
    </>
  );
};

export default auditType;