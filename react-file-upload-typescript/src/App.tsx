import { useRef, useState } from "react";

function App() {
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    setFiles([...(files || []), ...Array.from(e.target.files || [])]);
    // 同じファイルを選択したい場合はコメント解除する
    // e.target.value = "";
  };

  const fileUpload = () => {
    console.log(inputRef.current);
    inputRef.current?.click();
  };

  const resetFile = () => {
    setFiles([]);
  };

  return (
    <div>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <td>ファイル名</td>
              <td>タイプ</td>
              <td>ファイルサイズ</td>
              <td>最終更新時刻</td>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.name}>
                <td>{file.name}</td>
                <td>{file.type}</td>
                <td>{file.size}</td>
                <td>{file.lastModified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={fileUpload}>ファイルアップロード</button>
      <button onClick={resetFile}>リセット</button>
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
