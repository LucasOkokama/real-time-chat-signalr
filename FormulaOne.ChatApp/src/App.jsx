import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import WaitingRoom from "./components/waitingroom";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [conn, setConnection] = useState();
  const [messages, setMessages] = useState([]);

  const joinChatRoom = async (username, chatroom) => {
    try {
      // Start connection
      const conn = new HubConnectionBuilder()
        .withUrl("http://localhost:5136/chat")
        .configureLogging(LogLevel.Information)
        .build();

      // Set up handler
      conn.on("JoinSpecificChatRoom", (username, msg) => {
        setMessages((messages) => [...messages, { username, msg }]);
      });

      conn.on("ReceiveSpecificMessage", (username, msg) => {
        setMessages(messages => [...messages, {username, msg}])
      });

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, chatroom });

      setConnection(conn);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <main>
        <Container>
          <Row className="my-5">
            <Col sm="12" style={{ textAlign: "center" }}>
              <h1 className="font-weight-light">
                Welcome to the Real Time Chat app
              </h1>
            </Col>
          </Row>

          {!conn
            ? <WaitingRoom joinChatRoom={joinChatRoom} />
            : <ChatRoom messages={messages}></ChatRoom>
          }


        </Container>
      </main>
    </div>
  );
}

export default App;
