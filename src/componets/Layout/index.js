import { Container } from "reactstrap";
import SubHeader from "../Header/SubHeader";
import Display from "./Display";

const HomePage= () => {
  return (
    <Container>
      <SubHeader current='Home' />
      <Display />
    </Container>
  )
}

export default HomePage