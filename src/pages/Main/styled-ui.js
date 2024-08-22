import styled from 'styled-components';

export const AppLogo = styled.img`
    height: ${({ multiplier }) => `${40 + (multiplier * 2)}vmin;`};
    animation: ${({ multiplier }) => `App-logo-spin infinite ${(20 - (multiplier || 1)) || 0.5}s linear;`}
    filter: ${({ multiplier }) => `hue-rotate(${(multiplier || 1) * 17}deg);`}

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const DonationButton = styled.button`
    align-items: center;
    border: none;
    border-radius: 100vh;
    cursor: pointer;
    display: flex;
    font-size: 15px;
    font-weight: 510;
    padding: 12px 16px;
    font-weight: 800;
    min-width: 148px;
    justify-content: center;
    background-color: #0098EA;
    color: #FFFFFF;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    gap: 4px;
    height: 40px;
    line-height: 18px;
    transition: transform 0.125s ease-in-out;
`;
