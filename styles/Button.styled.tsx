import styled from "styled-components/native"

export const StyledButton = styled.Pressable`
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.green};
    border-radius: 10px;
    color: ${props => props.theme.colors.green};
`