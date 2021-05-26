import React from 'react';
import { Container, CustomMenu, List } from './styles';
import logo from '../../assets/img/ART_T10Bank_Negativo.png'

const Menu: React.FC = () => {
  return (
    <CustomMenu >
        <Container>
            <div>
                <img src={logo} alt='logo' />
            </div>
            <List>
                <a href='#home'>
                    <li>Home</li>
                </a>
                <a href='#sobre'>
                    <li>Sobre Nós</li>
                </a>
                <a href='#servicos'>
                    <li>Serviços</li>
                </a>
                <a href='#portfolio'>
                    <li>Portfólio</li>
                </a>
                <a href='#contato'>
                    <li>Contato</li>
                </a>
            </List>
        </Container>        
    </CustomMenu>
  
  );
}

export default Menu;