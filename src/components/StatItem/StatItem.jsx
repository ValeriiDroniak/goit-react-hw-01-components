import { randomColor } from "utils/randomColors";
import { Item, Label, Percentage } from "./StatItem.styled";

export const StatItem = ({ label, percentage }) => {
    const color = randomColor();

    return (
        <Item bg={color}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </Item>
    );
};