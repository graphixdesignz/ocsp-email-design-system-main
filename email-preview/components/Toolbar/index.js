import styled from "@emotion/styled";

export default styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Tool = styled.li`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0.25rem;
`;

export const ToolLabel = styled.div`
    width: 150px;
    font-size: 1rem;
    padding-left: 0.25rem;
    font-weight: bold;
`;
