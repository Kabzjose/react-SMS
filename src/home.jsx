import { useState, useEffect } from "react";
import StudentForm from "./studentform";
import StudentCard from "./studentcard";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // Load DUMMY DATA instead of backend
  useEffect(() => {
    setLoading(true);

    // simulate API loading delay
    setTimeout(() => {
      const dummy = [
        { _id: "1", name: "Jose Kabz", age: 20, course: "Software Engineering" },
        { _id: "2", name: "Alice Peter", age: 22, course: "Data Science" },
        { _id: "3", name: "Mark Ronny", age: 23, course: "Cyber Security" }
      ];

      setStudents(dummy);
      setLoading(false);
    }, 800);
  }, []);

  // Add new student (NO BACKEND)
  function handleAdd(student) {
    const newStudent = {
      _id: crypto.randomUUID(),
      ...student,
    };

    setStudents((prev) => [...prev, newStudent]);
  }

  // Edit student (NO BACKEND)
  function handleEdit(updated) {
    setStudents((prev) =>
      prev.map((s) => (s._id === updated._id ? updated : s))
    );
  }

  // Delete student (NO BACKEND)
  function handleDelete(id) {
    setStudents((prev) => prev.filter((s) => s._id !== id));
  }

  return (
    <main>
      <StudentForm onSubmit={handleAdd} />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {students.map((s) => (
        <StudentCard
          key={s._id}
          student={s}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </main>
  );
}
