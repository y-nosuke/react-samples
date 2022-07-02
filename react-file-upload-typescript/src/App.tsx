import { useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };

  const fileUpload = () => {
    console.log(inputRef.current);
    inputRef.current?.click();
  };

  return (
    <div>
      <button onClick={fileUpload}>ファイルアップロード</button>
      <input
        hidden
        ref={inputRef}
        type="file"
        onChange={onFileInputChange}
        multiple
      />
    </div>
  );
}

export default App;
