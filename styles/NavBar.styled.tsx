import styled from "styled-components/native";

export const StyledNavBar = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 10%;
    background-color: ${props => props.theme.colors.green};
`;