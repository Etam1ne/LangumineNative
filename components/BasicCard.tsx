import { StyledCard, GridButtons} from "../styles/Cards.styled";
import { StyledImage } from "../styles/StyledImage.style";
import { StyledButton } from "../styles/Button.styled";
import { useRef, useEffect } from "react"
import { Text } from "react-native";

interface BasicCardProps {
    table: string[][],
    currentCard: number,
    previousCard(): void,
    nextCard(): void,
}

export const BasicCard = ({ table, currentCard, previousCard, nextCard }: BasicCardProps) => {
    return (
        <StyledCard>
            <Text>{currentCard + 1}</Text>
            <Text>
                {table[currentCard][0]} - {table[currentCard][1]}
            </Text>
            <GridButtons>
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
            </GridButtons>
        </StyledCard>
    );
}