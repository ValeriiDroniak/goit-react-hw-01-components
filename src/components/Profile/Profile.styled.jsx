import styled from '@emotion/styled';

export const Card = styled.div`
    display: block;
    width: 280px;
    text-align: center;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const Description = styled.div`
    padding: 24px 0;
`;

export const Avatar = styled.img`
    display: block;
    width: 120px;
    height: 120px;
    margin: 0 auto;
    border-radius: 50%;
    border: 1px solid #dedede;
`;

export const UserName = styled.p`
    margin-top: 16px;
    font-size: 20px;
    font-weight: 700;
`;

export const UserInfo = styled.p`
    margin-top: 8px;
    color: #b0b0b0;
`;

export const StatItems = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #f4f4f4;
    `;

export const Item = styled.li`
    padding: 8px 0;
    border: 1px solid #dedede;
`;

export const Label = styled.span`
    display: block;
    color: #b0b0b0;
`;

export const Quantity = styled.span`
    display: block;
    margin-top: 4px;
    font-size: 18px;
    font-weight: 700;
`;


