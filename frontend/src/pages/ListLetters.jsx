import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function ListLetters() {
  const [letters, setLetters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/letters/")
      .then(res => setLetters(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    api.delete(`/letters/${id}/`)
      .then(() => {
        setLetters(letters.filter(l => l.id !== id));
      });
  };

  return (
    <div>
      <h2>All Letters</h2>
      <button onClick={() => navigate("/create")}>Add New</button>
      <ul>
        {letters.map(letter => (
          <li key={letter.id}>
            {letter.ref_num} - {letter.title}
            <button onClick={() => navigate(`/edit/${letter.id}`)}>Edit</button>
            <button onClick={() => handleDelete(letter.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListLetters;
