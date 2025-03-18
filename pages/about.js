import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: "50px" }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          We are building amazing applications using Next.js and Material UI.
        </Typography>

        <Typography variant="h5">Our Features:</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Fast and Responsive" />
          </ListItem>
          <ListItem>
            <ListItemText primary="SEO Optimized" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Beautiful UI with MUI" />
          </ListItem>
        </List>
      </Container>
    </>
  );
}
