import Dbconnect from "@/lib/db";
import Image from "next/image";
import NotesClient from "@/components/NotesClient";
import Note from "@/models/Note";

async function getNotes() {
  await Dbconnect();
  const notes = await Note.find({}).sort({ createdAt: -1 }).lean(); // .lean se faltu ke jo signs aa rahe the vo hat jayenge

  return notes.map((note) => ({
    ...note,
    _id: note._id.toString(),
  }));
}

export default async function Home() {
  const notes = await getNotes();
  console.log(notes);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">Notes App</h1>
      <NotesClient initialNotes={notes} />
    </div>
  );
}
