import { createRoot } from "react-dom/client";

export const render = (C: React.FC) => {
  const container = document.getElementById("app");
  const root = createRoot(container);
  root.render(<C />);
};
