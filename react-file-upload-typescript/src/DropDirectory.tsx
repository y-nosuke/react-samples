import { DragEvent } from "react";
import { DropArea } from "./DropArea";

function DropDirectory() {
  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    const item = e.dataTransfer.items[0];
    const entry = item.webkitGetAsEntry();

    const file = entry?.name;
    if (entry?.isFile) {
      console.log("これはファイルです。", file);
    } else if (entry?.isDirectory) {
      console.log("これはディレクトリです。", file);
    }
  };

  return (
    <DropArea onDrop={handleDrop}>
      <div style={{ width: 600, height: 300, border: "solid", borderWidth: 2 }}>
        ドロップエリア
      </div>
    </DropArea>
  );
}

export default DropDirectory;
