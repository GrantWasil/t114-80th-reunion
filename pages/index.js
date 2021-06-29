// Import Next.JS Components
import Head from "next/head";

// Import Third Party Components
import { createMedia } from "@artsy/fresnel";
import CountUp from "react-countup";
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from "next-share";

// Import Own Components
import Heading from "../components/heading";
import ReserveButton from "../components/ReserveButton";
import EmblaCarousel from "../components/EmblaCarousel";

// Import Styled Components
import "semantic-ui-css/semantic.min.css";
import {
  Segment,
  Grid,
  Header,
  Divider,
  Container,
  List,
  Image,
  Form,
  Button,
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
  const SLIDE_COUNT = 11;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const recordInfo = async (event) => {
    event.preventDefault();
    const data = [event.target.name.value, event.target.email.value];
    const res = await fetch(
      "https://v1.nocodeapi.com/grantwasil/google_sheets/OjcsaXSqMFtlbqck?tabId=Sheet1&api_key=amLulfpkNyUDPMcdc",
      {
        body: JSON.stringify([data]),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
  };
  return (
    <>
    <Head>
      <title>Troop 114's 80th Reunion</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
      <ResponsiveContainer>
        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  <CountUp start={0} end={219} duration={3} />
                </Header>
                <p style={{ fontSize: "1.66em" }}>
                  Combined Girl and Boy Eagles
                </p>
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
                  Founded by the Littleton United Methodist Church (LUMC) in
                  1941, the Troop has served hundreds of families and
                  contributed 1,000’s of hours of service to the community.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  A Reunion Worth Attending
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Please plan to join fellow alumni, both youth and adult. This
                  reunion will also celebrate 69 years of Cub Scouting in Pack
                  114, and for the first time, 2 years of ScoutsBSA in Troop 114
                  Girls. The 80+69+2 combination is really something to shout
                  about!
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

        <Segment style={{ padding: "6em 0em" }} vertical textAlign="center">
          <Container text>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Stay Updated
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Please enter your email address below to recieve updates on the
              event
            </p>
            <Form onSubmit={recordInfo}>
              <Form.Field>
                <label>Name</label>
                <input id="name" name="name" placeholder="Name" required />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  type="email"
                />
              </Form.Field>
              <Button type="submit" primary style={{ marginTop: "1em" }}>
                Sign Up
              </Button>
            </Form>
          </Container>

          <Divider section hidden />

          <Container text>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Calling All Friends of Scouting
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Please contact your extended family of Scouting friends and invite
              them to join us for this extraordinary event. You can use the
              button below to easily share this event on Facebook.
            </p>
            <FacebookShareButton
              url={"https://www.troop114reunion.com"}
              quote={"Calling all Troop 114 Alumni"}
              style={{ paddingTop: "3em" }}
            >
              <FacebookIcon size={70} round />
            </FacebookShareButton>

            <LinkedinShareButton
              url={"https://www.linkedin.com/groups/12540755/"}
              quote={"Calling all Troop 114 Alumni"}
              style={{ paddingTop: "3em", paddingLeft:"1em"}}
            >
              <LinkedinIcon size={70} round />
            </LinkedinShareButton>
          </Container>
        </Segment>

        <Segment
          style={{ padding: "5em 0em", minheight: "50em" }}
          vertical
          textAlign="center"
        >
          <Header as="h3" style={{ fontSize: "2em" }}>
            See Our Scouts
          </Header>
          <EmblaCarousel slides={slides} />
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
    </>
  );
}
