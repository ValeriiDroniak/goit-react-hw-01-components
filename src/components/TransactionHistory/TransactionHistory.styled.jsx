import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const Head = styled.thead`
  text-transform: uppercase;
  color: #ffffff;
  background-color: rgb(0, 188, 213);
`;

export const Column = styled.th`
  padding: 16px 64px;
  font-weight: normal;
  border: 1px solid #dfdfdf;
`;

export const Row = styled.tr`
  border-radius: 4px;
  /* border: 1px solid red; */
  background-color: ${p => (p.index % 2 ? '#f6f6f6' : '#ffffff')};
`;
