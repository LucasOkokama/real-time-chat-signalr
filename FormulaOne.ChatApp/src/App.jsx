import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WaitingRoom from "./components/waitingroom";

function App() {
  return (
    <div>
      <main>
        <Container>
          <Row className="my-5">
            <Col sm='12' style={{textAlign: "center"}}>
              <h1 className="font-weight-light"> Welcome to the Real Time Chat app </h1>
            </Col>
          </Row>
          <WaitingRoom />
        </Container>
      </main>
    </div>
  );
}

export default App;
