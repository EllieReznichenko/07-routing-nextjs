import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import { getQueryClient } from "@/lib/query-client";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function NotesFilterPage({ params }: Props) {
  const { slug } = await params;

  const tag = slug[0] === "all" ? undefined : slug[0];

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: "",
        tag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialPage={1} initialSearch="" initialTag={tag} />
    </HydrationBoundary>
  );
}
