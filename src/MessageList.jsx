import MessageItem from "./MessageItem";

function MessageList({ messages, onSelect }) {
  console.log("Render Message List");

  return (
    <div className="message-list">
      {messages.map(msg =>
        <MessageItem key={msg.id} message={msg} onSelect={onSelect} />
      )}
    </div>
  );
}

export default MessageList;
