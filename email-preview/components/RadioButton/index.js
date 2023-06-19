import styled from "@emotion/styled";
import { interactive, white } from "../../lib/colors";

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 34px;
    height: 34px;
    border-radius: 34px;
    background-color: #ccc;

    input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    input:checked + span {
        background-color: ${interactive};
    }

    input:focus + span {
        box-shadow: 0 0 1px #2196f3;
    }

    span {
        display: block;
        cursor: pointer;
        margin: 5px;
        background-color: ${white};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        width: 24px;
        height: 24px;
        border-radius: 24px;
    }
`;

const RadioButton = ({ name, title, onClick, checked }) => {
    return (
        <Switch>
            <input
                type="radio"
                name={name}
                title={title}
                onClick={onClick}
                defaultChecked={checked}
            />
            <span></span>
        </Switch>
    );
};

export default RadioButton;
