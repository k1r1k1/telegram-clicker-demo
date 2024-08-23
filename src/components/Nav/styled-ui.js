import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const MenuWrapper = styled.nav`
  max-width: 500px;
  display: flex;
  position: fixed;
  z-index: 100;
  bottom: 0;
  justify-content: space-between;
  background: ${({ theme }) => theme.grayBg};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 70px;
  color: ${({ theme }) => theme.darkGray1};
  border-radius: 15px 15px 0px 0px;
  
  a {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    min-width: 43px;
    border: none;
    background: none;
    white-space: nowrap;

    svg {
      margin-bottom: 5px;
    }
  }

  a:first-child {
    margin-left: 23px;
  }

  a:last-child {
    margin-right: 23px;
  }
`;

export const NavLabel = styled.label`
  position: relative;
  color: ${({ theme, $active }) => ($active ? theme.darkGreen : theme.darkGray1)};
`;

export const GreenDot = styled.span`
  display: flex;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  position: absolute;
  background: ${({ theme }) => theme.darkGreen};
  right: -2px;
  top: -34px;
`;
