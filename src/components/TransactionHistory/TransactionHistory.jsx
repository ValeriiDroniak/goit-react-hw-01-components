import { TransactionHistoryBody } from 'components/TransactionHistoryBody/TransactionHistoryBody';
import { TransactionHistoryHead } from 'components/TransactionHistoryHead/TransactionHistoryHead';
import { TableTransaction } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <TransactionHistoryHead />
      <TransactionHistoryBody items={items} />
    </TableTransaction>
  );
};
