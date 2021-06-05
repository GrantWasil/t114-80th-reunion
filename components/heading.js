import { Container, Header, Button, Icon, Segment } from "semantic-ui-react";

export default function Heading() {
  return (
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 500, padding: "1em 0em" }}
      vertical
    >
      <Container text>
        <Header
          as="h1"
          content="Troop 114 80th Reunion"
          inverted
          style={{
            fontSize: "3em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "2.5em",
          }}
        />
        <Header
          as="h2"
          content="Keep on Scouting."
          inverted
          style={{
            fontSize: "2.0em",
            fontWeight: "normal",
            marginTop: "1em",
            marginBottom: ".7em",
          }}
        />
        <Button primary size="huge">
          Reserve a Seat
          <Icon name="right arrow" />
        </Button>
      </Container>
    </Segment>
  );
}
