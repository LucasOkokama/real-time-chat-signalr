import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const SendMessageForm = ({ sendMessage }) => {
  const [msg, setMessage] = useState();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(msg);
        setMessage("");
      }}
      className="mt-4"
    >
      <InputGroup>
        <InputGroup.Text> Chat </InputGroup.Text>
        <Form.Control
          onChange={(e) => setMessage(e.target.value)}
          value={msg}
          placeholder="Type a message..."
        ></Form.Control>
        <Button variant="primary" type="submit" disabled={!msg}>Send</Button>
      </InputGroup>
    </Form>
  );
};

export default SendMessageForm;
