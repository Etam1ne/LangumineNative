import { AppContainer, Container } from "../styles/Container.styled";
import { Navbar } from "../components/Navbar";
import { BasicCard } from "../components/BasicCard";
import { useAppSelector } from "../hooks/reduxHooks";
import { useState } from "react";
import { selectTable } from "./store";
import { Text } from "react-native";

export const Cards = ({navigation}) => {
    const table: string[][] = useAppSelector(selectTable);

    const [currentCard, setCurrentCard] = useState<number>(0);
    const [cardType, setCardType] = useState<string>("Basic");

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

    const switchCardType = () => {
        switch (cardType) {
            case "Basic":
                return (
                    <BasicCard 
                    table={table}
                    currentCard={currentCard}
                    nextCard={nextCard}
                    previousCard={previousCard}
                    />
                );
            // case "Learn":
            //     return (
            //         <LearnCard 
            //         table={table}
            //         currentCard={currentCard}
            //         setCurrentCard={setCurrentCard}
            //         />
            //     );
        }
    }

    return (
        <AppContainer>
            <Container>
                {switchCardType()}
            </Container>
            <Navbar navigation={navigation} />
        </AppContainer>
    );
}