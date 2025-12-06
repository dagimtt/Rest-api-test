import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function EditLetter() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    ref_num: "",
    title: "",
    body: ""
  });

  useEffect(() => {
    api.get(`/letters/${id}/`)
      .then(res => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`/letters/${id}/`, form)
      .then(() => navigate("/"))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Letter</h2>

      <input name="ref_num" value={form.ref_num} onChange={handleChange} />
      <input name="title" value={form.title} onChange={handleChange} />
      <textarea name="body" value={form.body} onChange={handleChange}></textarea>

      <button type="submit">Update</button>
    </form>
  );
}

export default EditLetter;
