import styled from "@emotion/styled";

export const Item = styled.li`
    display: flex;
    min-width: 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 16px;
    color: white;
    background-color: ${({bg}) => bg};
`;

export const Label = styled.span`
    font-size: 14px;
`;

export const Percentage = styled.span`
    font-size: 18px;
`;