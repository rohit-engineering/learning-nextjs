import { Container, Typography, Button, Avatar } from "@mui/material";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="sm"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <Avatar
          src="https://th.bing.com/th/id/OIP.WkuGv4-iR5uPKZFcs7UjvAHaHs?w=170&h=180&c=7&r=0&o=5&pid=1.7" // Replace with your image URL
          alt="Profile"
          sx={{ width: 150, height: 150, margin: "auto", borderRadius: "50%" }}
        />
        <Typography variant="h4" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Explore Next.js with Material UI.
        </Typography>
      </Container>
    </>
  );
}
