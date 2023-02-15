import styled from "styled-components/native";

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

export const RowButtons = styled.View`
    align-self: stretch;
    flex-direction: row;
    justify-content: space-around;
`
export const ColumnButtons = styled.View`
    align-self: stretch;
    flex-direction: column;
    justify-content: space-around;
`