import { css } from "styled-components";

export const style = css`
    .color-primary {
        color : var(--primary);
    }
    .color-primary-light {
        color : var(--primary-light);
    }
    .color-primary-xlight {
        color : var(--primary-xlight);
    }
    .color-primary-dark {
        color : var(--primary-dark);
    }

    .color-secondary {
        color : var(--secondary);
    }
    .color-secondary-light {
        color : var(--secondary-light);
    }
    .color-secondary-dark {
        color : var(--secondary-dark);
    }
    
    .color-title {
        color : var(--title);
    }
    .color-text {
        color : var(--text);
    }
    .color-text-light {
        color : var(--text-light);
    }
    .color-text-xlight {
        color : var(--text-xlight);
    }

    .color-success {
        color : var(--success);
    }
    .color-info {
        color : var(--info);
    }
    .color-warning {
        color : var(--warning);
    }
    .color-danger {
        color : var(--danger);
    }
    
    .color-white {
        color : var(--white);
    }
    .color-dark {
        color : var(--dark);
    }

    .bg-zero {
        background-color : var(--bg-zero);
    }
    .bg-one {
        background-color : var(--bg-one);
    }
    .bg-two {
        background-color : var(--bg-two);
    }
    .bg-three {
        background-color : var(--slate-100);
    }
    .bg-body {
        background-color : var(--bg-body);
    }

    .bg-content {
        background-color : var(--content);
    }
    .bg-content-light {
        background-color : var(--content-light);
    }
    .bg-content-xlight {
        background-color : var(--content-xlight);
    }

    .color-facebook {
        color : var(--facebook);
    }
    .color-instagram {
        color : var(--instagram);
    }
    .color-twitter {
        color : var(--twitter);
    }
    .color-snapchat {
        color : var(--snapchat);
    }
    .color-youtube {
        color : var(--youtube);
    }
    .color-twitch {
        color : var(--twitch);
    }
    .color-pinterest {
        color : var(--pinterest);
    }
    .color-linkedin {
        color : var(--linkedin);
    }
    .color-whatsapp {
        color : var(--whatsapp);
    }
    .color-website {
        color : var(--website);
    }

    .bg-facebook {
        background-color : var(--facebook);
    }
    .bg-instagram {
        background-color : var(--instagram);
    }
    .bg-twitter {
        background-color : var(--twitter);
    }
    .bg-snapchat {
        background-color : var(--snapchat);
    }
    .bg-youtube {
        background-color : var(--youtube);
    }
    .bg-twitch {
        background-color : var(--twitch);
    }
    .bg-pinterest {
        background-color : var(--pinterest);
    }
    .bg-linkedin {
        background-color : var(--linkedin);
    }
    .bg-whatsapp {
        background-color : var(--whatsapp);
    }
    .bg-website {
        background-color : var(--website);
    }

    .white {
        color : white;
    }

    .no-scroll-y {
        overflow-y : hidden;
    }
    
    .boxshadow-xs {
        box-shadow : var(--shadow-xs);
    }
    .boxshadow-sm {
        box-shadow : var(--shadow-sm);
    }
    .boxshadow-md {
        box-shadow : var(--shadow-md);
    }
    .boxshadow-lg {
        box-shadow : var(--shadow-lg);
    }
    .boxshadow-xl {
        box-shadow : var(--shadow-xl);
    }
    .boxshadow-2xl {
        box-shadow : var(--shadow-2xl);
    }
    .boxshadow-inner {
        box-shadow : var(--shadow-inner);
    }
    .boxshadow-none {
        box-shadow : 0 0 #0000;
    }

    .boxshadow-top {
        box-shadow : var(--shadow-top);
    }
    .boxshadow-bottom {
        box-shadow : var(--shadow-bottom);
    }
    .boxshadow-left {
        box-shadow : var(--shadow-left);
    }
    .boxshadow-right {
        box-shadow : var(--shadow-right);
    }

    .radius-xs {
        border-radius : var(--rounded-xs);
    }
    .radius-sm {
        border-radius : var(--rounded-sm);
    }
    .radius-md {
        border-radius : var(--rounded-md);
    }
    .radius-lg {
        border-radius : var(--rounded-lg);
    }
    .radius-xl {
        border-radius : var(--rounded-xl);
    }
    .radius-2xl {
        border-radius : var(--rounded-2xl);
    }
    .radius-3xl {
        border-radius : var(--rounded-3xl);
    }
    .radius-full {
        border-radius : var(--rounded-full);
    }

    .border-bottom {
        border-bottom : 1px solid var(--light-border);
    }

    .border-top {
        border-bottom : 1px solid var(--light-border);
    }

    .border-left {
        border-bottom : 1px solid var(--light-border);
    }

    .border-right {
        border-bottom : 1px solid var(--light-border);
    }

    .list-styled {
        color      : var(--text);
        list-style : unset;
        li {
            list-style : unset;
        }
    }

    .highlight {
        color : var(--primary);
    }

    .max-w-hd {
        max-width : 1920px;
    }

    .default-page {
        padding-top    : 20px;
        padding-bottom : 70px;
        h2 {
            font-size   : 24px;
            margin      : 25px 0 10px;
            font-weight : 600;

            @media(max-width: 768px) {
                font-size   : 20px;
                line-height : 1.2;
            }
        }
        h3 {
            font-size    : 20px;
            margin       : 15px 0 0;
            font-weight  : 600;
            font-stretch : 100%;

            @media(max-width: 768px) {
                font-size   : 18px;
                line-height : 1.2;
            }
        }
        p {
            text-align : justify;
            padding    : 5px 0;

            a {
                color : var(--primary);
            }
        }
        ul {
            text-align   : justify;
            padding-left : 25px;
        }
        li {
            color           : var(--text);
            list-style-type : disc;
        }
    }

    .box {
        padding       : 30px;
        margin-bottom : 20px;
        border-radius : var(--rounded-xl);
        color         : var(--text);

        @media(max-width: 768px) {
            padding : 20px;
        }
        @media(max-width: 768px) {
            padding : 10px;
        }
        
        .box-inner {
            padding          : 30px;
            box-shadow       : var(--shadow-lg);
            background-color : var(--body);
            border-radius    : var(--rounded-xl);

            @media(max-width: 768px) {
                padding : 20px;
            }
            @media(max-width: 768px) {
                padding : 15px;
            }

            div,
            li {
                strong {
                    color : var(--text);
                }
            }
        }

        .title {
            font-size     : 20px;
            font-weight   : 600;
            margin-bottom : 10px;
        }

        .box-list {
            column-fill  : initial;
            column-count : 1;
            column-gap   : 20px;
            padding-left : 32px;

            &.two-columns {
                column-count : 2;
            }

            @media(max-width: 440px) {
                column-count : 1;
            }

            > div {
                vertical-align : middle;
                &::before {
                    content       : "◉";
                    font-size     : 16px;
                    color         : var(--primary);
                    display       : inline-block;
                    padding       : 0 3px;
                    border-radius : var(--rounded-full);
                    margin-left   : -1.2em;
                    margin-right  : 7px;
                }
            }

            @media(max-width: 576px) {
                padding-left : 20px;
            }
        }

        &.color-list-zero {
            div, li {
                &::before {
                    color : var(--primary-light);
                }
            }
        }
        &.color-list-one {
            div, li {
                &::before {
                    color : var(--secondary-dark);
                }
            }
        }
        &.color-list-three {
            div, li {
                &::before {
                    color : var(--slate-500);
                }
            }
        }
    }

    .listing {
        > div {
            vertical-align : middle;
            &::before {
                content       : "◉";
                font-size     : 16px;
                color         : var(--primary);
                display       : inline-block;
                padding       : 0 3px;
                border-radius : var(--rounded-full);
                margin-left   : -1.2em;
                margin-right  : 7px;
            }
        }
    }

    .flex-list {
        column-fill  : initial;
        column-gap   : 20px;
        column-count : 2;
        padding-left : 32px;

        @media(max-width: 440px) {
            column-count : 1;
        }

        > div {
            vertical-align : middle;
            &::before {
                content      : "◉";             //➤
                font-size    : 14px;
                color        : var(--primary);
                display      : inline-block;
                margin-left  : -1.2em;
                margin-right : 7px;
            }
        }
    }

    /**
    *   No search results
    */

    .no-results-big {
        display         : flex;
        flex-direction  : column;
        justify-content : center;
        align-items     : center;
        padding         : 40px 0;
        font-size       : 18px;

        svg {
            width            : 50px;
            height           : auto;
            padding          : 10px;
            border-radius    : var(--rounded-md);
            color            : var(--primary);
            background-color : rgba(var(--primary-rgb), 0.1);
            margin-bottom    : 20px;
        }

        span {
            font-size   : 24px;
            font-weight : 600;
        }

        button {
            margin-top : 20px;
        }
    }

    /**
    *   Hours component
    */

    .opening {
        margin-bottom   : 6px;
        display         : flex;
        align-items     : center;
        justify-content : space-between;

        .divider {
            flex-grow     : 1;
            border-bottom : 1px solid var(--light-border);
            margin        : 10px;
            min-width     : 5px;
        }

        span {
            font-weight : 600;
            color       : var(--dark);
        }
    }

    /**
    *
    */

    .products-menu {
        position      : relative;
        width         : 100%;
        padding       : 30px !important;
        border-radius : var(--rounded-md);
        margin-bottom : 40px;
        color         : var(--text);

        h2 {
            font-weight   : 700;
            padding-top   : 0;
            margin-bottom : 10px !important;
            font-family   : var(--font-fam2);
        }

        .item {
            p {
                &:nth-child(1) {
                    line-height   : 1.2;
                    margin-bottom : 0;
                }
                &:nth-child(2) {
                    font-weight   : 300;
                    font-size     : 16px;
                    margin-bottom : 8px;
                }
            }
        }
    }

    .animated {
        .animated-to-left,
        .animated-to-right,
        .animated-to-bottom {
            animation-duration : 10.4s;
            animation-timing-function : ease;
            animation-iteration-count : infinite;
        }

        .animated-to-left {
            animation-name : animated-to-left;
            animation-delay : 9.2s;
        }
        .animated-to-right {
            animation-name : animated-to-right;
            animation-delay : 9.3s;
        }
        .animated-to-bottom {
            animation-name : animated-to-bottom;
            animation-delay : 9.4s;
        }
    }

    @keyframes animated-to-left {
        0%, 5% {
            opacity    : 1;
            transform  : translateX(0);
        }
        10% {
            opacity   : 0;
            transform : translateX(-10px);
        }
        15%, 100% {
            opacity   : 1;
            transform : translateX(0);
        }
    }

    @keyframes animated-to-right {
        0%, 5% {
            opacity    : 1;
            transform  : translateX(0);
        }
        10% {
            opacity   : 0;
            transform : translateX(10px);
        }
        15%, 100% {
            opacity   : 1;
            transform : translateX(0);
        }
    }

    @keyframes animated-to-bottom {
        0%, 5% {
            opacity    : 1;
            transform  : translateY(0);
        }
        10% {
            opacity   : 0;
            transform : translateY(10px);
        }
        15%, 100% {
            opacity   : 1;
            transform : translateY(0);
        }
    }
`