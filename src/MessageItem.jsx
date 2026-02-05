import React from "react";

const MessageItem = React.memo(({ message, onSelect }) => {
  console.log("Render MessageItem:", message.id);

  return (
    <div className="message-item" onClick={() => onSelect(message)}>
      <strong>
        {message.author}
      </strong>
      {message.text}
    </div>
  );
});

export default MessageItem;
