import styled from "styled-components/native";


export const InputContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
`
export const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`

export const SelectorContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const StyledSelector = styled.select`
    all: unset;
    width: max-content;
    padding: 5px;
    text-align: center;
    border: 1px solid ${props => props.theme.colors.green};
    border-radius: 20px;
    color: ${props => props.theme.colors.green};
    cursor: pointer;
`

export const StyledTable = styled.table`
    border: 1px solid ${props => props.theme.colors.green};
    border-collapse: collapse;
`

export const StyledLabel = styled.label`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: min-content;
    border: 1px solid ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.green};
    cursor: pointer;
    border-radius: 20px;
    padding: 10px;
`

export const StyledSubmit = styled.input`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: min-content;
    border: 1px solid ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.green};
    cursor: pointer;
    border-radius: 20px;
    padding: 10px;
`