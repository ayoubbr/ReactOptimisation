import MessageItem from "./MessageItem";

function MessageList({ messages, search, onSelect }) {
  console.log("Render Message List");

  const filtredMessages = messages.filter(msg =>
    msg.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="message-list">
      {filtredMessages.map(msg =>
        <MessageItem key={msg.id} message={msg} onSelect={onSelect} />
      )}
    </div>
  );
}

export default MessageList;
