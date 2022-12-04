import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  min-width: 240px;
  justify-content: left;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const Name = styled.p`
  font-weight: bold;
  color: rgb(60, 71, 86);
`;
