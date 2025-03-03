import { Col, Row } from "react-bootstrap";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";

const ChatRoom = ({ messages, sendMessage }) => {
  return (
    <div
      className="d-flex"
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 650 }}>
        <Row className="py-2">
          <Col sm={12}>
            <h2> ChatRoom </h2>
          </Col>

          <Col></Col>
        </Row>
        <Row className="">
          <Col sm={12}>
            <MessageContainer messages={messages} />
          </Col>
          <Col sm={12}>
            <SendMessageForm sendMessage={sendMessage} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ChatRoom;
