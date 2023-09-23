import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  Button,
  CardTitle,
  CardGroup,
  CardText,
} from 'reactstrap'
import React, { useState } from 'react';
import ws1 from '../assets/images/website1.png'
import '../componets/boxstyle.css' 
import './PortfolioPagecss.css'
import pac from '../assets/images/pawsandclaws.png'
const PortfolioPage = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
    <CardGroup className="mt-4 rounded-5">
      <Card className="m-2 rounded-5 boxstyle" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <div className="card-img-container">
          <CardImg alt="Graphics Portfolio" src={ws1} top width="100%" className="rounded-5" />
      </div>

        {isHovered && (
        <Button
          target="blank"
          style={{ fontSize: 18, padding: 6, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          className="rounded-4 card-img-hover"
          href={'https://xux.eth.limo/'}
        >
          Launch
        </Button>
      )}
        <CardBody>
          <CardTitle tag="h2">IPFS Graphics Portfolio</CardTitle>
          <hr />
          <CardText tag="h4" style={{fontSize: '23px'}}>
            This is a landing page for my graphic design work, The art shows my skills in Adobe Photoshop, After Effects, Encoder, Cinema 4D and more.
            It also show cases my skills in HTML/CSS and JS
          </CardText>
          <Button target="blank" style={{ fontSize: 18, padding: 6 }} className="rounded-4" href="https://xux.eth.limo/">
            Launch
          </Button>
        </CardBody>
      </Card>
      <Card className="m-2 rounded-5 boxstyle">
        <CardImg className="rounded-5" alt="Card image cap" src={pac} top width="100%" />
        <CardBody>
          <CardTitle tag="h2">Paws and Claws Shelter</CardTitle>
          <hr />
          <CardSubtitle className="mb-2 text-muted" tag="h3">
            Animal Rescue Shelter
          </CardSubtitle>
          <CardText tag="h4" style={{fontSize: '23px'}}>
          Paws and Claws Rescue is a web app built with React, 
          Redux, HTML, and CSS. It connects animal lovers with rescue
          organizations to find forever homes for abandoned and vulnerable
          animals. The platform showcases animals available for adoption, 
          promotes adoption events, and accepts donations to support the
          mission of animal shelters and rescues.
          </CardText>
          <Button target="blank" style={{ fontSize: 18, padding: 6 }} className="rounded-4" href="https://64c55db0b41ae1159eadea4c--magical-rabanadas-e5d3e8.netlify.app/about">
            Launch
          </Button>
        </CardBody>
      </Card>
      
    </CardGroup>
    <CardGroup className="mt-5 rounded-5">
    
  </CardGroup>
  </>
  );
};


export default PortfolioPage
