import styled from "styled-components";

export const BannerWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
`;

export const BannerText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: auto;
`;