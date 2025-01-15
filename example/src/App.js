import DatePicker, { setLocale } from 'react-datefy';
function App() {
  setLocale('ko');
  return (
    <div>
      <h2>Example Page</h2>
      <DatePicker />
      <DatePicker mode="dark" />
    </div>
  );
}

export default App;
