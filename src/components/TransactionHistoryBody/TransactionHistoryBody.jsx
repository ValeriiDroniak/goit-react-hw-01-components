import PropTypes from 'prop-types';
import { Cell, Row } from './TransactionHistoryBody.styled';

export const TransactionHistoryBody = ({ items }) => {
  return (
    <tbody>
      {items.map(({ id, amount, type, currency }, idx) => {
        return (
          <Row key={id} index={idx}>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
          </Row>
        );
      })}
    </tbody>
  );
};

TransactionHistoryBody.propType = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
