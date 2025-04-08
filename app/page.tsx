import Form from "./components/Form";
import ExportButton from "./components/ExportButton";
import DeckImages from "./components/DeckImages";
import { totalCardQty } from "./actions/CRUD";

export default async function HomePage() {
  const TotalCardQty = await totalCardQty();
  return (
    <div>
      <Form />
      <p>Nombre de cartes ajoutées au deck : {TotalCardQty}</p>
      <ExportButton />
      <DeckImages />
    </div>
  );
}