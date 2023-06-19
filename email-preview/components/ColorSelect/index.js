import styled from "@emotion/styled";
import RadioButton from "../RadioButton";

const Selector = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 34px;
    margin: 4px 0;
`;

const ColorBlock = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props => props.color};
`;

const ColorWay = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100px;
    height: 100px;
    margin-left: 12px;
`;

const ColorSelector = ({ colorWay = [], onClick, name, title, checked }) => {
    return (
        <Selector>
            <RadioButton
                name={name}
                title={title}
                onClick={onClick}
                checked={checked}
            />
            <ColorWay>
                {colorWay.map(color => (
                    <ColorBlock key={color} color={color} />
                ))}
            </ColorWay>
        </Selector>
    );
};

export default ColorSelector;

export const ColorDefault = ({
    colorWay = [],
    onClick,
    name,
    title,
    checked,
}) => {
    return (
        <Selector>
            <RadioButton
                name={name}
                title={title}
                onClick={onClick}
                checked={checked}
            />
            <ColorWay>Neutral</ColorWay>
        </Selector>
    );
};
