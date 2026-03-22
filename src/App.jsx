import PatilButton from "./Button.jsx";
import { Hello } from "./hello.jsx";
import Random from "./Random.jsx";
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <PatilButton></PatilButton>
      <Hello></Hello>
      <h2>
        <Random></Random>
        <Random></Random>
        <Random></Random>
        <Random></Random>
      </h2>
    </div>
  );
}
export default App;
