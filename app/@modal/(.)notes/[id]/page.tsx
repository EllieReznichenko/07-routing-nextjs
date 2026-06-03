import ModalWrapper from "@/components/ModalWrapper/ModalWrapper";
import NotePreviewClient from "./NotePreview.client";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NotePreviewModal({ params }: Props) {
  const { id } = await params;

  return (
    <ModalWrapper>
      <NotePreviewClient id={id} />
    </ModalWrapper>
  );
}
