import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  console.log("I am eher ");
  return (
    <Card>
      <div className="about">
        <h1>About this page</h1>
        <p>This is a react app to leave feeback for a product or service</p>
        <p>Versiion: 0.0.1</p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
