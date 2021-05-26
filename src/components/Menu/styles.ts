import styled from 'styled-components';
//import logo from '../../assets/img/ART_T10Bank_Negativo.png'

export const CustomMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;

    width: 100%;
    height: 128px;
    background-color: #F97270;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 65%;

    @media(max-width: 1500px) {
        width: 70%;
    }
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    justify-content: center;
    color: #fff;
    margin-right: 30px;

    a{
        text-decoration:none;
        color: #fff;
    }

    li{
        width: 100px;
    }
`;