import Column from "@/components/Column";
import Image from "next/image";
import { MyMusicData } from "@/app/Data/MyMusicData";
import {
  FirstColumnData,
  SecondColumnData,
  ThirdColumnData,
  FourthColumnData,
} from "./Data/FirstColumn";

import { OutNowData, DJMixes, YouTube } from "./Data/OutNow";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Column data={MyMusicData} item={FirstColumnData} />
      <Column data={OutNowData} item={SecondColumnData} />
      <Column data={DJMixes} item={ThirdColumnData} />
      <Column data={YouTube} item={FourthColumnData} />
    </div>
  );
}
