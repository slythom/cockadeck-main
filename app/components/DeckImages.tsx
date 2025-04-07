import { getDeckDetails } from "../actions/CRUD";

const formData = new FormData();

const decklist = await getDeckDetails();

export default function DeckImages() {
  return (
  <div className="grid grid-cols-6 gap-2">
    {decklist.map((card: any, index: number) => 
    <div key={index}>
        <img className="h-80 w-auto object-cover" src={card.cardImage} alt={card.cardName} />
    </div>)}
    </div>
  )
}