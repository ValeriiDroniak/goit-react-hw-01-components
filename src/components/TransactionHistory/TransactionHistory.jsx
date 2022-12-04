import PropTypes from 'prop-types';
import {
  TableTransaction,
  Head,
  Column,
  Row,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <Head>
        <tr>
          <Column>Type</Column>
          <Column>Amount</Column>
          <Column>Currency</Column>
        </tr>
      </Head>

      <tbody>
        {items.map(({ id, amount, type, currency }, idx) => {
          return (
            <Row key={id} index={idx}>
              <Column as="td">{type}</Column>
              <Column as="td">{amount}</Column>
              <Column as="td">{currency}</Column>
            </Row>
          );
        })}
      </tbody>

      {/* <TransactionHistoryBody items={items} /> */}
    </TableTransaction>
  );
};

TransactionHistory.propType = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
