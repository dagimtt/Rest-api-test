import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/letters/")
      .then(res => setLetters(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Letters</h1>
      <ul>
        {letters.map((l) => (
          <li key={l.id}>
            {l.ref_num} - {l.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
