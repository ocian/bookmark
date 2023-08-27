import { createRoot } from "react-dom/client";

const App = () => (
  <div>
    1145142
    <button type="button" className="btn btn-primary">
      123
    </button>
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
