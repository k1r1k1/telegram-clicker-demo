import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as House } from 'assets/icons/home.svg';
import { ReactComponent as HouseActive } from 'assets/icons/home-active.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import { ReactComponent as SearchActive } from 'assets/icons/search-active.svg';
import { ReactComponent as User } from 'assets/icons/account.svg';
import { ReactComponent as UserActive } from 'assets/icons/account-active.svg';
import {
  HOME, SEARCH, WALLET,
} from 'constants/routes';
import { useTonWallet } from '@tonconnect/ui-react';
import {
  GreenDot, MenuContainer, MenuWrapper, NavLabel,
} from './styled-ui';

function Nav() {
  const { pathname } = useLocation();
  const wallet = useTonWallet();

  return (
    <MenuContainer>
      <MenuWrapper>
        <Link to={HOME}>
          {pathname === HOME ? <HouseActive /> : <House />}
          <NavLabel $active={pathname === HOME}>Home</NavLabel>
        </Link>
        <Link to={SEARCH}>
          {pathname.indexOf(SEARCH) !== -1 ? <SearchActive /> : <Search />}
          <NavLabel $active={pathname.indexOf(SEARCH) !== -1}>Soon</NavLabel>
        </Link>
        <Link to={pathname !== WALLET && WALLET}>
          {pathname === WALLET ? <UserActive /> : <User />}
          <NavLabel $active={pathname === WALLET}>
            Wallet
            {!wallet && <GreenDot />}
          </NavLabel>
        </Link>
      </MenuWrapper>
    </MenuContainer>
  );
}

export default Nav;
