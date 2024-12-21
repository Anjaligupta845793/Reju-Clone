import path from "path";
import fs, { readFileSync, writeFileSync } from "fs";
import { NextResponse } from "next/server";
export async function DELETE(request) {
  const { cardData, id } = await request.json();
  /* getting the model data */
  const filePath = path.join(process.cwd(), "app", "DummyData", "model.json");
  const modelData = fs.readFileSync(filePath, "utf-8");
  const Data = JSON.parse(modelData);

  const newCardItem = Data.find((item) => item.id === id);
  newCardItem.cards = newCardItem.cards.filter((item) => item.id != id);

  writeFileSync(filePath, JSON.stringify(Data, null, 2));
  return NextResponse.json({
    success: true,
  });
}
