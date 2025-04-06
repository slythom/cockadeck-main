import Form from "./components/Form";
import ExportButton from "./components/ExportButton";
import DeckImages from "./components/DeckImages";

export default async function HomePage() {
  return (
    <div>
      <Form />
      <ExportButton />
      <DeckImages />
    </div>
  );
}