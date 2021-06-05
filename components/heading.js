import { Container, Header, Button, Icon, Segment } from "semantic-ui-react";
import EventbriteButton from "react-eventbrite-popup-checkout";

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
        <EventbriteButton ebEventId="157009771453" component="p">
          <Button primary size="huge">
            Buy Tickets
            <Icon name="right arrow" />
          </Button>
        </EventbriteButton>
      </Container>
    </Segment>
  );
}
