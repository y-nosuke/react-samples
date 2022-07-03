import { DragEvent } from "react";
import { DropArea } from "./DropArea";

function DropDirectory() {
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {};

  return (
    <DropArea onDrop={handleDrop}>
      <div style={{ width: 600, height: 300, border: "solid", borderWidth: 2 }}>
        ドロップエリア
      </div>
    </DropArea>
  );
}

export default DropDirectory;
