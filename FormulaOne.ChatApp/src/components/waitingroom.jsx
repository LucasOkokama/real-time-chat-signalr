import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const WaitingRoom = ({ joinChatRoom }) => {
  const [username, setUsername] = useState();
  const [chatroom, setChatroom] = useState();

  return (
    <Form
      className="d-flex"
      style={{ alignItems: "center", justifyContent: "center" }}
      onSubmit={(e) => {
        e.preventDefault();
        joinChatRoom(username, chatroom);
      }}
    >
      <Row style={{ width: "650px" }}>
        <Col sm={12}>
          <Form.Group className="d-flex" style={{ gap: 16 }}>
            <Form.Control
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control
              placeholder="Chatroom"
              onChange={(e) => setChatroom(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col sm={12}>
          <hr />
          <Button variant="success" type="submit" style={{width: "25%"}}>
            Join
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default WaitingRoom;
