
import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export { GlobalStyle }

export const ContainerHeader = styled.div`
    background: #FFF;
    height: 104px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div`
    width: 259px;
    height: 61px;
    background: #E40F0F;
    border-radius: 50px;
    margin-left: 83px;
    text-align: center;
    cursor: pointer;
`;

export const LogoContent = styled.div`
    display: flex;
    align-items: center;
    padding-left: 13px;
`;
export const ImageLogo = styled.img`
    padding-right: 19px;
`;

export const LogoParagraph = styled.p`
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const ContentHeader = styled.div`
    align-items: center;
    display: flex;
    p {
        font-family: 'Inter', sans-serif;
        margin-right: 30px;
        cursor: pointer;
    }
`;

export const WeAre = styled.p`
    font-family: 'Inter', sans-serif;
    margin-right: 30px;
    cursor: pointer;
`;

export const ScheduleAppointment = styled.div`
    width: 172px;
    height: 42px;
    border-radius: 30px;
    background: #E40F0F;
    margin-right: 83px;
    text-align: center;
    cursor: pointer;
`;

export const ScheduleParagraph = styled.p`
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: end;
`;


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

export const FooterContainer = styled.div`
    height: 72px;
    background: #1D1D1D;
    text-align: center;
    margin-top: -4px;
`;

export const FooterText = styled.p`
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    padding-top: 24px;
`;

export const ContainerQuemSomos = styled.div`
    width: auto;
    height: 187px;
    background: #E40F0F;
`;
export const ContentHeaderQuemSomos = styled.div`
    margin-left: 106px; 
    padding-top: 32px; 
`;

export const GoToHome = styled.p`
    margin: 0;
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const TitleQuemSomos = styled.p`
    margin: 12px 0;
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const TextQuemSomos = styled.p`
    margin: 0;
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const ContentQuemSomos = styled.div`
    width: 408px;
    height: 1429px;
    margin: 0 auto;

    h3 {
        color: #000;
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
    }

    h4 {
        color: #000;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
    }

    p {
        color: #000;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
    }
`;