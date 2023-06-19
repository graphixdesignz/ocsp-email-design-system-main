import styled from "@emotion/styled";
import { interactive } from "../../lib/colors";

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    input:checked + span {
        background-color: ${interactive};

        &:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
    }

    input:focus + span {
        box-shadow: 0 0 1px #2196f3;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;

        &:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
        }
    }
`;

const Toggle = styled.input``;

const Slider = styled.span``;

const ToggleSwitch = ({ title, onClick, checked = false }) => {
    return (
        <Switch>
            <Toggle
                title={title}
                type="checkbox"
                onClick={onClick}
                defaultChecked={checked}
            />
            <Slider></Slider>
        </Switch>
    );
};

export default ToggleSwitch;
