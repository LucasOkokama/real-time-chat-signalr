const MessageContainer = ({ messages }) => {
  return (
    <div>
      <table>
        <tbody>
          {messages.map((msg, index) => {
            return (
              <tr key={index}>
                <td style={{display: "flex", gap: 14}}>
                  {msg.msg}
                  <span style={{ color: "#8a8a8a" }}>- {msg.username}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MessageContainer;
