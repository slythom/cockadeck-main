import { getDeckDetails } from "../actions/CRUD";

const formData = new FormData();

const decklist = await getDeckDetails();

export default function DeckImages() {
  return (
  <div className="grid grid-cols-4 gap-4">
    {decklist.map((card: any, index: number) => 
    <div key={index}>
        <img src={card.cardImage} alt={card.cardName} />
    </div>)}
    </div>
  )
}