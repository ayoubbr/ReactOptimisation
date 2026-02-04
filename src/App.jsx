import { useState } from "react";
import MessageList from "./MessageList";
import "./App.css";

const messagesData = [
  { id: 1, author: "Admin", text: "Server maintenance at 10pm" },
  { id: 2, author: "Support", text: "Ticket Num:542 resolved" },
  { id: 3, author: "HR", text: "New company policy released" }
];

function App() {
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelect = message => {
    setSelectedMessage(message);
  };

  return (
    <div className="app-container">
      <div className="glass-panel">
        <div className="header">
          <h2>Messages</h2>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search messages..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <MessageList
          messages={messagesData}
          search={search}
          onSelect={handleSelect}
        />

        {selectedMessage &&
          <div className="message-details">
            <h3>Message Details</h3>
            <p>
              {selectedMessage.text}
            </p>
          </div>}
      </div>
    </div>
  );
}

export default App;
