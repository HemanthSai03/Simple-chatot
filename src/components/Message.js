import React from 'react';

function Message({ text, type }) {
  return (
    <div style={{ margin: '5px 0', textAlign: type === 'user' ? 'right' : 'left' }}>
      <div style={{ display: 'inline-block', padding: '10px', borderRadius: '10px', backgroundColor: type === 'user' ? '#dcf8c6' : '#eee' }}>
        {text}
      </div>
    </div>
  );
}

export default Message;
