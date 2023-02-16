import { AppContainer, Container } from "../styles/Container.styled";
import { Navbar } from "../components/Navbar";
import { Pressable, Text } from "react-native";
import { StyledCard, ColumnButtons } from "../styles/Cards.styled";
import { StyledButton } from "../styles/Button.styled";
import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import { selectTable } from "./store";

interface LearnCardProps {
    table: string[][],
    currentCard: number,
    setCurrentCard: Dispatch<SetStateAction<number>>
}

export const Test = ({navigation}) => {
    
    interface Question {
        word: string,
        answers: string[],
        rightIndex: number
    }
    const table: string[][] = useAppSelector(selectTable);

    const [currentCard, setCurrentCard] = useState<number>(0);
    const [randomizedSet, setRandomizedSet] = useState<Question[]>([]);

    const isAnswered = useRef<boolean>(false);

    const checkAnswer = (currentCard: number, answer: string) => {
        if (randomizedSet[currentCard].answers.indexOf(answer) === randomizedSet[currentCard].rightIndex) {
            isAnswered.current = true;
            nextCard();
        }
        else {
        }
    }

    const nextCard = () => {
        if (currentCard === (table.length - 1)) return
        setCurrentCard(currentCard + 1);
        isAnswered.current = false;
    }
    
    useEffect(() => {

        const getRandomAnswers = (table: string[][]) => {
            let result: number[] = [];
            let i: number = 0;
            while (i < 4) {
                let random = Math.floor((Math.random() * table.length));
                if (result.includes(random)) continue // need to fix this later
                result.push(random);
                i++;
            }
            return result;
        }
    
        const assignAnswers = (table: string[][]): Question[] => {
    
            if (table.length < 4) return []
            let temp = [...table]
            temp.sort(() => Math.random() - 0.5)
            return temp.map((data: string[]) => {
                let randoms: number[] = getRandomAnswers(table);
                let result: Question = {
                    word: data[0],
                    answers: [
                        table[randoms[0]][1],
                        table[randoms[1]][1],
                        table[randoms[2]][1],
                        table[randoms[3]][1]
                    ],
                    rightIndex: Math.floor(Math.random() * 4)
                }
                if (result.answers.includes(data[1])) {
                    result.rightIndex = result.answers.indexOf(data[1]);
                    return result;
                }
                result.answers[result.rightIndex] = data[1];
                return result
            });
        }

        setRandomizedSet(assignAnswers(table));

    }, [table])

    return (
        <AppContainer>
            <Container>
                <Pressable onPress={() => isAnswered.current ? nextCard() : undefined}>
                    <StyledCard>
                        {randomizedSet.length !== 0 && 
                        <>
                            <Text>{currentCard + 1}</Text>

                            <Text>{randomizedSet[currentCard].word}</Text>

                            <ColumnButtons>
                                {
                                    randomizedSet[currentCard].answers.map((answer, index) => (
                                        <StyledButton 
                                        key={index} 
                                        onPress={() => checkAnswer(currentCard, answer)}
                                        >
                                            <Text>{answer}</Text>
                                        </StyledButton>
                                    ))
                                }
                            </ColumnButtons>
                        </>
                        }
                    </StyledCard>
                </Pressable>
            </Container>
        </AppContainer>
    );
}