import { Column, Head } from './TransactionHistoryHead.styled';

export const TransactionHistoryHead = () => {
  return (
    <Head>
      <tr>
        <Column>Type</Column>
        <Column>Amount</Column>
        <Column>Currency</Column>
      </tr>
    </Head>
  );
};
