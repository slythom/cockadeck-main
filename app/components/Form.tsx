import { createDeck } from "@/app/actions/CRUD";

export default async function Form() {
  
  return (
    <div>
      <form action={createDeck}>
        <input type="text" name="cardqty" id="cardqty" placeholder="Quantity" className="outline" />
        <input type="text" name="setcode" id="setcode" placeholder="Set Code" className="outline" />
        <input type="text" name="collectornumber" id="collectornumber" placeholder="Card Number" className="outline" />
        <button type="submit">Add to the deck</button>
      </form>
    </div>
  );
}
