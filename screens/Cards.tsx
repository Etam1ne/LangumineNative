import { AppContainer, Container } from "../styles/Container.styled";
import { useAppSelector } from "../hooks/reduxHooks";
import { useState } from "react";
import { selectTable } from "./store";
import { Text } from "react-native";
import { StyledCard, RowButtons } from "../styles/Cards.styled";
import { StyledButton } from "../styles/Button.styled";
import { StyledImage } from "../styles/StyledImage.style";

export const Cards = () => {
    
    const table: string[][] = useAppSelector(selectTable);

    const [currentCard, setCurrentCard] = useState<number>(0);

    const nextCard = () => {
        if (currentCard === table.length - 1) {
            setCurrentCard(0)
        } else {
            setCurrentCard(currentCard + 1)
        }
    }

    const previousCard = () => {
        if (currentCard === 0) {
            setCurrentCard(table.length - 1)
        } else {
            setCurrentCard(currentCard - 1)
        }
    }

    return (
        <AppContainer>
            <Container>
                <StyledCard>
                    <Text>{currentCard + 1}</Text>
                    <Text>
                        {table[currentCard][0]} - {table[currentCard][1]}
                    </Text>
                    <RowButtons>
                        <StyledButton onPress={previousCard}>
                            <StyledImage 
                                height="40px" 
                                width="40px" 
                                source={require('../images/arrowLeft.png')}
                            />
                        </StyledButton>
                        <StyledButton onPress={nextCard}>
                            <StyledImage 
                                height="40px" 
                                width="40px" 
                                source={require('../images/arrowRight.png')}
                            />
                        </StyledButton>
                    </RowButtons>
                </StyledCard>
            </Container>
        </AppContainer>
    );
}