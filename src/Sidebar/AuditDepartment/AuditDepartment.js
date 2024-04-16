import "./AuditDepartment.css";
import Input from "../../components/Input";

function AuditDepartment({ handleChange }) {
  return (
    <div className="sidebar-section">
      <h2 className="sidebar-title">Audit Departments</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All Departments
        </label>
        <Input
          handleChange={handleChange}
          value="CoC USA"
          title="CoC USA"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Non-Foods GMP"
          title="Non-Foods GMP"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="SCS"
          title="SCS"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Food Safety Audits"
          title="Food Safety Audits"
          name="test"
        />
      </div>
    </div>
  );
}

export default AuditDepartment;