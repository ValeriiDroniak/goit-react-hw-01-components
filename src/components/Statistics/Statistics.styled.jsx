import styled from '@emotion/styled';

export const Section = styled.section`
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const Title = styled.h2`
  padding: 32px 8px;
  text-align: center;
  text-transform: uppercase;
  color: rgb(60, 71, 86);
  background-color: rgb(255, 255, 255);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  min-width: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  color: white;
  background-color: ${({ bg }) => bg};
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 18px;
`;
