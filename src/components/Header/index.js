import Link from 'next/link';
import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import {
  Container,
  DesktopNavBar,
  LinksContainer,
  MobileNavBar,
  ThemeSwitcherContainer,
} from './styles';

import Navbar from '../Navbar';

import { SunIcon, MoonIcon } from '../Icons';

export function Header(props) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <DesktopNavBar>
        <LinksContainer>
          <Link href={'/'}>Home</Link>
          <Link href={'/photos'}>Photos</Link>
          <Link href={'/search'}>Search</Link>
        </LinksContainer>

        <ThemeSwitcherContainer>
          {props.theme.title === 'light' ? <SunIcon /> : <MoonIcon />}
          <Switch
            onChange={props.toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={4}
            width={30}
            handleDiameter={15}
            offColor={colors.text}
            onColor={colors.text}
            offHandleColor={colors.text}
          />
        </ThemeSwitcherContainer>
      </DesktopNavBar>

      <MobileNavBar>
        <Navbar toggleTheme={props.toggleTheme} theme={props.theme} />
      </MobileNavBar>
    </Container>
  );
}
