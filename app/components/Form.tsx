import { createDeck } from "@/app/actions/CRUD";

export default async function Form() {
  
  return (
    <div>
      <form action={createDeck}>
        <input required type="text" name="cardqty" id="cardqty" placeholder="Quantité*" className="outline p-2 m-2" />
        <input required type="text" name="setcode" id="setcode" placeholder="Code du set*" className="outline p-2 m-2" />
        <input required type="text" name="collectornumber" id="collectornumber" placeholder="Numéro de la carte*" className="outline p-2 m-2" />
        <button type="submit" className="border-2 border-sky-500 p-2 m-2 cursor-pointer">Ajouter au deck</button>
      </form>
    </div>
  );
}
