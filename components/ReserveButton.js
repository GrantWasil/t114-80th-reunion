import { Button, Icon } from "semantic-ui-react";
import React from "react";
import dynamic from "next/dynamic";
const EventbriteButton = dynamic(
  () => import("react-eventbrite-popup-checkout"),
  { ssr: false }
);
export default function ReserveButton() {
  return (
    <EventbriteButton ebEventId="157009771453" component="div">
      <Button primary size="huge">
        Reserve a Seat
        <Icon name="right arrow" />
      </Button>
    </EventbriteButton>
  );
}
