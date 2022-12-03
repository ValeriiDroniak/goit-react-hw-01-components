import PropTypes from 'prop-types';
import { StatItem } from "components/StatItem/StatItem";
import { List } from './StatList.styled';

export const StatList = ({ items }) => {
    return (
        <List>
            {items.map(({id, label, percentage}) => {
                return (
                    <StatItem
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                );
            })}
        </List>
    );
};

StatList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    },),
    ).isRequired,
};