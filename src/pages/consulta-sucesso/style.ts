import styled from 'styled-components'

export const Main = styled.main`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        margin-top: 257px;
        margin-bottom: 1095px;
        background: #DF86860A;
        width: 427px;
        height: 255px;
        border-radius: 8px;
        border: 1px solid #DF8686;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > * {
            margin-bottom: 20px;
        }

        > h1 {
            font-size: 20px;
            line-height: 24px;
            font-weight: 700;
            color: #1D1D1D;
        }

        > p {
            font-size: 14px;
            line-height: 17px;
            font-weight: 400;
            color: #747474;
            padding-left: 34px;
            padding-right: 34px;
            text-align: center;
        }

        > button {
            width: 197px;
            height: 42px;
        }

        > button:hover {
            border: 2px solid var(--primary-color);
            background-color: var(--white-color);
            color: var(--primary-color);
            transition: 0.2s;
        }
    }
`;
