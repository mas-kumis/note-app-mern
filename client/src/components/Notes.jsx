// file Notes.jsx digunakan untuk menampilkan daftar note dari data yang disimpan di file notes.jsx
// pertama, import library react dan data note dari file notes.jsx
import { useState } from "react";
import noted from "../data/notes";
import { Link } from "react-router-dom";

function Notes() {
  const [isOpen, setIsOpen] = useState(null);

  // function toggleAccordion digunakan untuk membuka dan menutup konten accordion
  const toggleAccordion = (index) => {
    if (isOpen === index) {
      return setIsOpen(null);
    }
    setIsOpen(index);
  };

  // fungsi deletehandler digunakan untuk memverifikasi hapus note
  const deletehandler = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      console.log(id);
    }
  };
  return (
    <div className="flex flex-col px-[100px] justify-center my-[30px]">
      {noted.map((note, index) => (
        <div key={note.id} className="border-b border-gray-200 w-[600px]">
          <button
            type="button"
            className=" flex items-center justify-between w-full p-4 text-left text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => toggleAccordion(index)}
          >
            {note.title}
            <div className="flex space-x-4">
              <Link to={`/notes/${note._id}`}>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => deletehandler(note._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </button>
          <div className={`${isOpen === index ? "block" : "hidden"} p-4`}>
            {note.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
