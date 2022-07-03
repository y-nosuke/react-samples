import { DragEvent, ReactNode } from "react";

function DropArea({ children, onDrop }: { children: ReactNode; onDrop: any }) {
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();

    onDrop(e);
  };

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      {children}
    </div>
  );
}

export { DropArea };
