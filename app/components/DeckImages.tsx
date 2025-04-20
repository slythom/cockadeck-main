import { getDeckDetails } from "../actions/CRUD";

interface Card {
  cardQty: string;
  cardName: string;
  cardImage: string;
}

export default async function DeckImages() {
  const decklist = await getDeckDetails();
  return (
  <div className="grid grid-cols-6 gap-2">
    {decklist.map((card: Card, index: number) => 
    <div key={index}>
        <img loading="lazy" className="h-80 w-auto object-cover" src={card.cardImage} alt={card.cardName} />
    </div>)}
    </div>
  )
}