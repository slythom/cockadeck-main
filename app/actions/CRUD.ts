"use server";

import { revalidatePath } from "next/cache";
import { Builder } from "xml2js";

let deckList = [] as any; // Liste globale en memoire

export async function createDeck(formData: FormData) {
  const cardQty = formData.get("cardqty");
  const setCode = formData.get("setcode");
  const collectorNumber = formData.get("collectornumber");
  const response = await fetch(
    `https://api.scryfall.com/cards/${setCode}/${collectorNumber}`
  );
  const result = await response.json();
  const cardName = result.name;
  const cardImage = result.image_uris.normal;
  deckList.push({ cardQty, cardName, cardImage });
  revalidatePath("/");
  return deckList;
}

export async function getDeckDetails() {
  return deckList
}

// CREATION XML
export async function handleExport() {
  const xmlEntries = {
    cockatrice_deck: {
      $: {
        version: "1",
      },
      lastLoadedTimestamp: "",
      deckname: "",
      bannerCard: {
        $: {providerId: ""}
      },
      comments: "",
      tags: "",
      zone: {
        $: {
          name: "main",
        },
        card: deckList.map((card: any) => ({
          $: {
            number: card.cardQty,
            name: card.cardName,
          },
        })),
      },
    },
  };

  const builder = new Builder();
  const xml = builder.buildObject(xmlEntries);
  
  // Convert the XML to base64
  const buffer = Buffer.from(xml);
  const base64Data = buffer.toString('base64');
  
  return base64Data;
}