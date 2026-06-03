import NotesClient from "./Notes.client";

interface NotesFilterPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function NotesFilterPage({
  params,
}: NotesFilterPageProps) {
  const { slug } = await params;

  const tag = slug[0] === "all" ? undefined : slug[0];

  return <NotesClient initialPage={1} initialSearch="" initialTag={tag} />;
}
