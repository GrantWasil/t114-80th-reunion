// Import Next.JS Components

// Import Third Party Components
import { createMedia } from "@artsy/fresnel";
import CountUp from "react-countup";

// Import Own Components
import Heading from "../components/heading";
import ReserveButton from "../components/ReserveButton";

// Import Styled Components
import "semantic-ui-css/semantic.min.css";
import {
  Segment,
  Grid,
  Header,
  Button,
  Divider,
  Container,
  List,
  Image,
} from "semantic-ui-react";

// Defining media breakpoints
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

// Implements media breakpoints into Home
const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <Heading />
    {children}
  </MediaContextProvider>
);

export default function Home() {
  return (
    <ResponsiveContainer>
      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                <CountUp start={0} end={219} duration={3} />
              </Header>
              <p style={{ fontSize: "1.66em" }}>Combined Girl and Boy Eagles</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                <CountUp start={0} end={54750} duration={5} separator="," />
              </Header>
              <p style={{ fontSize: "1.66em" }}>
                Combined Hours of Community Service
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Celebrating 80 Years of Service
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Troop 114 in Littleton, CO celebrates 80 years of service to
                Scouts and families this year. Founded by the Littleton United
                Methodist Church (LUMC) in 1941, the Troop has served hundreds
                of families and contributed 1,000’s of hours of service to the
                community. The Troop’s 216 Boy and 3 Girl Eagle Scouts alone
                have generated 54,750 hours of service valued at $1.5MM.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                A Reuinion Worth Attending
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We celebrate this milestone in the Troop’s history with a
                reunion planned for Friday Nov. 26 at LUMC. Please plan to join
                fellow alumni, both youth and adult. This reunion will also
                celebrate 69 years of Cub Scouting in Pack 114, and for the
                first time, 2 years of ScoutsBSA in Troop 114 Girls. The 80+69+2
                combination is really something to shout about!
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image bordered rounded size="xlarge" src="patrol.jpg" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <ReserveButton />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical textAlign="center">
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Get Updated
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Please contact your extended family of Scouting friends and invite
            them to join us for this extraordinary event.
          </p>
        </Container>

        <Divider section hidden />

        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Calling All Friends of Scouting
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Please contact your extended family of Scouting friends and invite
            them to join us for this extraordinary event.
          </p>
        </Container>
      </Segment>

      <Segment
        inverted
        vertical
        style={{ padding: "4em 0em", background: "#9A5937" }}
      >
        <Container>
          <Grid divided inverted stackable columns="equal">
            <Grid.Row textAlign="center">
              <Grid.Column>
                <Header inverted as="h4" content="Troop 114 Boys" />
                <List link inverted>
                  <List.Item
                    as="a"
                    href="https://www.troop-114.org"
                    target="_blank"
                  >
                    Main Website
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header inverted as="h4" content="Troop 114 Girls" />
                <List link inverted>
                  <List.Item
                    as="a"
                    href="https://www.trooponefourteengirls.com/"
                    target="_blank"
                  >
                    Main Website
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4" inverted content="Cub Scout Pack 114" />
                <List link inverted>
                  <List.Item
                    as="a"
                    href="http://www.pack114.scoutlander.com/publicsite/unithome.aspx?UID=1264"
                    target="_blank"
                  >
                    Main Website
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  );
}
