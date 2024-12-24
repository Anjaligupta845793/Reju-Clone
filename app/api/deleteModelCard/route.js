import path from "path";
import fs, { readFileSync, writeFileSync } from "fs";
import { NextResponse } from "next/server";
export async function DELETE(request) {
  const { cardid, id } = await request.json();
  /* getting the model data */
  const filePath = path.join(process.cwd(), "app", "DummyData", "model.json");
  const modelData = fs.readFileSync(filePath, "utf-8");
  const Data = JSON.parse(modelData);

  const newCardItem = Data.find((item) => item.id === id);
  console.log(newCardItem);
  newCardItem.cards = newCardItem.cards.filter((item) => item.id != cardid);

  writeFileSync(filePath, JSON.stringify(Data, null, 2));
  return NextResponse.json({
    success: true,
    data: Data,
  });
}
