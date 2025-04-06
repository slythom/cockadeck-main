import { createDeck } from "@/app/actions/CRUD";

export default async function Form() {
  
  return (
    <div>
      <form action={createDeck}>
        <input type="text" name="cardqty" id="cardqty" placeholder="Quantity" className="outline p-2 m-2" />
        <input type="text" name="setcode" id="setcode" placeholder="Set Code" className="outline p-2 m-2" />
        <input type="text" name="collectornumber" id="collectornumber" placeholder="Card Number" className="outline p-2 m-2" />
        <button type="submit" className="border-2 border-sky-500 p-2 m-2 cursor-pointer">Add to the deck</button>
      </form>
    </div>
  );
}
