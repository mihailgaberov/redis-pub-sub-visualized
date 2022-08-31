import { useState } from "react";
import { Subscriber } from "./components/Subscriber";
import "./App.scss";
import { Publisher } from "./components/Publisher";

function App() {
  return (
    <div className="app">
      <section className="publishers">
        {["⛅", "🤾‍♀️", "🎶"].map((channel) => (
          <Publisher
            icon={channel}
            publishCallback={() => console.log(">>> publish")}
          />
        ))}
      </section>
      <section className="subscribers">
        {[1, 3, 4].map((n) => (
          <Subscriber data={n} />
        ))}
      </section>
    </div>
  );
}

export default App;
