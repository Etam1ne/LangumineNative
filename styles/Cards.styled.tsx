import styled from "styled-components/native";

export const MainContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const CardContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const CardTypesContainer = styled.View`
    display: flex;
    gap: 20px;
`

export const CardType = styled.View`
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid ${props => props.theme.colors.green};
    border-radius: 20px;
    padding: 5px 10px;
    font-size: 16px;
    color: ${props => props.theme.colors.green};
`;

export const StyledCard = styled.View`
    height: 40%;
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    border: 1px solid ${props => props.theme.colors.green};
    border-radius: 20px;
`

export const GridButtons = styled.View`
    align-self: stretch;
    flex-direction: row;
    justify-content: space-around;
`