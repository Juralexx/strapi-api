import { css } from "styled-components";

export const style = css`
    .flex-list {
        column-fill   : initial;
        column-gap    : 20px;
        column-count  : 2;
        padding-left  : 32px;
        margin-bottom : 1.2em;

        @media(max-width: 576px) {
            column-count : 1;
        }

        > div {
            &::before {
                content       : "➜"; //➤
                font-size     : 14px;
                color         : var(--primary);
                display       : inline-block;
                margin-left   : -1em;
                margin-right  : 7px;
                margin-bottom : 2px;
            }
        }
    }
`