import { AppContainer, Container } from "../styles/Container.styled";
import { Navbar } from "../components/Navbar";

export const Test = ({navigation}) => {
    return (
        <AppContainer>
            <Container>
            </Container>
            <Navbar navigation={navigation} />
        </AppContainer>
    );
}