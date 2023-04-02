import { Navigate, useParams, Outlet, useOutletContext } from "react-router-dom";
import { Note, NoteLayoutProps } from "../types";

const NoteLayout = ({ notes }: NoteLayoutProps) => {
    const { id } = useParams();
    const note = notes.find(n => n.id === id);
    
    if(note == null) return <Navigate to={"/"} replace />

    return <Outlet context={note} />
}

export default NoteLayout;

export function useNote(){
    return useOutletContext<Note>();
}