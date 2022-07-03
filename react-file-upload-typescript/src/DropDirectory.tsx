import { DragEvent } from "react";
import { DropArea } from "./DropArea";

function DropDirectory() {
  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    const item = e.dataTransfer.items[0];
    const entry = item.webkitGetAsEntry();
    if (!entry) return;

    const fileList: any = [];

    const traverseFileTree = (entry: FileSystemEntry) => {
      if (entry.isFile) {
        fileList.push({ file: entry, path: entry.fullPath });
      } else if (entry.isDirectory) {
        const directoryReader = (
          entry as FileSystemDirectoryEntry
        ).createReader();
        directoryReader.readEntries((entries) => {
          entries.forEach((entry) => {
            traverseFileTree(entry);
          });
        });
      }
    };

    traverseFileTree(entry);

    console.log(fileList);
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
