function MessageItem({ message, onSelect }) {
  console.log("Render MessageItem:", message.id);

  return (
    <div onClick={() => onSelect(message)}>
      <strong>{message.author}</strong> : {message.text}
    </div>
  );
}

export default MessageItem;
