import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function CreateLetter() {
  const [form, setForm] = useState({
    ref_num: "",
    title: "",
    body: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/letters/", form)
      .then(() => navigate("/"))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Letter</h2>

      <input name="ref_num" placeholder="Ref Number" onChange={handleChange} />
      <input name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="body" placeholder="Body" onChange={handleChange}></textarea>

      <button type="submit">Save</button>
    </form>
  );
}

export default CreateLetter;
