import styled from '@emotion/styled';

export const Body = styled.tbody``;

export const Row = styled.tr`
  border-radius: 4px;
  /* border: 1px solid red; */
  background-color: ${p => (p.index % 2 ? '#f6f6f6' : '#ffffff')};
`;

export const Cell = styled.td`
  padding: 16px 64px;
  font-weight: normal;
  border: 1px solid #dfdfdf;
`;
