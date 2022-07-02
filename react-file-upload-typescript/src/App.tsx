function App() {
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };
  return (
    <div>
      <input type="file" onChange={onFileInputChange} multiple />
    </div>
  );
}

export default App;
