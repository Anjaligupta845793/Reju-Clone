import { NextResponse } from "next/server";
import fs, { writeFileSync } from "fs";
import path from "path";

export async function POST(request) {
  const { cardData, id } = await request.json();
  /* getting the model data */
  const filePath = path.join(process.cwd(), "app", "DummyData", "model.json");
  const modelData = fs.readFileSync(filePath, "utf-8");
  const Data = JSON.parse(modelData);

  const newCardItem = Data.find((item) => item.id === id);
  console.log(`cardata:${cardData}`);
  const cardId = newCardItem.cards.length + 1;
  newCardItem.cards.push({ id: cardId, ...cardData });
  writeFileSync(filePath, JSON.stringify(Data, null, 2));
  return NextResponse.json({
    success: true,
  });
}
