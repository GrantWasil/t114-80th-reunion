// Import Next.JS Components

// Import Third Party Components
import { createMedia } from "@artsy/fresnel";
import CountUp from "react-countup";

// Import Own Components
import Heading from "../components/heading";

// Import Styled Components
import "semantic-ui-css/semantic.min.css";
import {
  Segment,
  Grid,
  Header,
  Button,
  Container,
  Divider,
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
                <CountUp start={0} end={54750} duration={3} separator="," />
              </Header>
              <p style={{ fontSize: "1.66em" }}>Hours of Community Service</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Help Companies and Companions
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Make Bananas That Can Dance
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even bananas can be bioengineered.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image bordered rounded size="xlarge" src="patrol.jpg" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">Check Them Out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <Button as="a" size="large">
            Read More
          </Button>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a href="#">Case Studies</a>
          </Divider>

          <Header as="h3" style={{ fontSize: "2em" }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but it's really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <Button as="a" size="large">
            I'm Still Quite Interested
          </Button>
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
