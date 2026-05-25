import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";

type Props = {
  id: string;
};

export default async function NotePreview({ id }: Props) {
  const note = await fetchNoteById(id);

  return (
    <div className={css.container}>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
      <p className={css.tag}>{note.tag}</p>
    </div>
  );
}
