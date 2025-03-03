import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WaitingRoom from "./components/waitingroom";
import { useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

function App() {
  const [conn, setConnection] = useState();

  const joinChatRoom = async (username, chatroom) => {
    try {
      // Start connection
      const conn = new HubConnectionBuilder()
        .withUrl("http://localhost:5136/chat")
        .configureLogging(LogLevel.Information)
        .build();

      // Set up handler
      conn.on("JoinSpecificChatRoom", (username, msg) => {
        console.log("msg : ", msg);
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
                {" "}
                Welcome to the Real Time Chat app{" "}
              </h1>
            </Col>
          </Row>
          <WaitingRoom joinChatRoom={joinChatRoom} />
        </Container>
      </main>
    </div>
  );
}

export default App;
