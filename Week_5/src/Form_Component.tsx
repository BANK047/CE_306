import React, { useState } from "react";
import './Form_Component.css'

interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ชื่อ: ${formData.name}\nอีเมล: ${formData.email}`);
  };

  // handle clear
  const handleClear = () => {
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="form-container">
      <h2>User Form Exercise - Solution</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ชื่อ:</label>
          <input
            type="text"
            name="name"
            placeholder="กรอกชื่อของคุณ"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>อีเมล:</label>
          <input
            type="email"
            name="email"
            placeholder="กรอกอีเมลของคุณ"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-clear"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>

      <div className="form-output">
        <h4>ข้อมูลปัจจุบัน:</h4>
        <p>ชื่อ: {formData.name || "ยังไม่ได้กรอก"}</p>
        <p>อีเมล: {formData.email || "ยังไม่ได้กรอก"}</p>
      </div>
    </div>
  );
};

export default UserForm;