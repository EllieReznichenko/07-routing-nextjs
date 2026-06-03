import ModalWrapper from "@/components/ModalWrapper/ModalWrapper";
import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NotePreviewModal({ params }: Props) {
  const { id } = await params;

  return (
    <ModalWrapper>
      <NotePreview id={id} />
    </ModalWrapper>
  );
}
