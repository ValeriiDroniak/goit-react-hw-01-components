import { StatisticTitle } from 'components/StatisticTitle/StatisticTitle';
import { StatList } from 'components/StatList/StatList';
import { Section } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <Section>
            <StatisticTitle title={title} />
            <StatList items={stats} />
        </Section>
    );
};