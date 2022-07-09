import styled from "styled-components";

export const LayoutStyle = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: fadeIn 0.5s;
    -webkit-animation: fadeIn 0.5s;
    -moz-animation: fadeIn 0.5s;
    -o-animation: fadeIn 0.5s;
    -ms-animation: fadeIn 0.5s;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @-moz-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @-webkit-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @-o-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @-ms-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`