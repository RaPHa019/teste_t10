import styled, { css } from 'styled-components';

export const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
`;


export const Container = styled.div`
    display: flex;
    flex-direction: column;    

    width: 65%;

    @media(max-width: 1500px) {
        width: 80%;
    }

    @media(max-width: 1200px) {
        width: 90%;
    }

    @media(max-width: 1080px) {
        width: 100%;
    }
`;

export const Section = styled.section`
    padding: 50px 0;
    
    #background {
        position: relative;
        top: -180px;
        left: -280px;
    }

    @media(max-width: 1080px) {
        #background {
            display: none
        }
    }
`;

export const SectionHomeContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 150px; 

    
`;

export const SectionServicesContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 100px;

    #design{
        padding: 50px 50px;
        background-color: #F97270;
        border-radius: 5px;
        color: #fff;
        width: 300px;

        h1{
            font-size: 33px;
        }
        p{
            font-size: 16px;
            line-height: 30px;
        }
    }

    #lineDesing{
        display: flex;
        width: 110px;
        justify-content: space-between;

        div{
            border: solid 2px #fff;
            width: 17px;

        }
    }

    #arco{
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        border: solid 3px #fff;
        height: 100px;
        width: 100px;
    }

    #adobe{
        padding: 50px 30px;
        background-color: #fff;
        width: 512px;
    }

    #adobeContent{
        width: 362px;

        div{
            border: solid 3px #F97270;
            border-radius: 50px;

        }
        
        h1{
            font-size: 45px;
            color: #151D41;
            margin-bottom: 15px;
        }
        h2{
            font-size: 27px;
            color: #151D41;
        }
        p{
            font-size: 18px;
            color: #686868;
        }
    }

    #progressBar{
        border: solid 3px #F97270;
        opacity: 0.6;
        border-radius: 50px;
        width: 456px;
        position: relative;
        top: -123px;

    }

    #backgroundServices{
        position: absolute;
        transform: translateY(200px) translateX(-400px);
        //left: 400px;
        //top: 1845px;
        z-index: -1;
    }

    button{
        height: 42px;
        width: 150px;
        font-family: 'Josefin Sans';
    }

    @media(max-width: 980px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction:column;
        //flex-wrap: wrap;

        #backgroundServices{
            //display:none;
            transform: translateY(-200px) translateX(-200px);
        }

        #design{
            width: 500px;
            margin-top: 50px;
        }
    }
`;

export const SectionAboutContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    
    #backgroundImg{
        width: 150px;
        position: relative;
        top: -150px;
        left: -530px;
        z-index: -1;
    }

    #aboutImg{
        margin-right: 50px;
        z-index: 1000;
    }
    
    #divTextAbout{
        width: 322px;
    }

    button{
        border-radius: 5px;
        border: none;
        background-color: #F97270;
        color : #fff;
        height: 44px;
        width: 179px;
        font-size: 15px;
        font-family: 'Josefin Sans';
        margin-top: 50px;
    }

    @media(max-width: 953px) {
        flex-direction: column;

        #backgroundImg{
            width: 150px;
            top: -790px;
            left: 110px;
        }
    }
`;

export const SectionPortfolioContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 70px;

    .hoverDiv{
        height: 303px;
        width: 240px;
        //overflow: hidden;
        background-color: #F9727090 ;
        
        opacity: 0;
        position: absolute;

        transform: translateY(-309px);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1{
        color: #fff;
    }

    div:hover {
        img{
            opacity: 0.6;
        }
        .hoverDiv{
            opacity: 1;
            transition: all 0.5s;
        }
    }   

    @media(max-width: 980px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction:column;
        //flex-wrap: wrap;
    }
`;

export const HomeText = styled.div`
    text-align: left;    
    margin-right: 140px;

    h1 {
            font-size: 60px;
            font-weight: normal;
            letter-spacing: 0px;
            margin-bottom: 0px;
            //text-underline-offset: 1px;
        }

    p {
        font-size: 25px;
        color: #455A64;
        letter-spacing: 0px;
        margin-top: 15px;
        //font-weight: normal;
    }

    button{
        border-radius: 26px;
        border: none;
        background-color: #F97270;
        color : #fff;
        height: 44px;
        width: 179px;
        font-size: 15px;
        font-family: 'Josefin Sans';
        margin-top: 30px;
    }

    @media(max-width: 868px) {
        margin-right: 20px;

        h1 {
            font-size: 40px;
            //text-underline-offset: 1px;
        }

        p {
            font-size: 16px;
            //font-weight: normal;
        }
    }

    @media(max-width: 1654px) {
        margin-right: 60px;

    }

    @media(max-width: 1534px) {
        margin-right: 10px;

    }
`;

export const ContactForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    

    div{     
        width:90%;   
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        

        input{
            width: 530px;
        }
    }

    textarea{
        font-family: 'Josefin Sans';
        border-radius: 5px;
        height: 64px;
        //padding: 0 10px;
        border: 1px solid #151D41;
        width: 90%;
        margin-top: 40px;
        color: #151D41;
    }

    input{
        font-family: 'Josefin Sans';
        border-radius: 5px;
        height: 64px;
        //padding: 0 10px;
        border: 1px solid #151D41;
        width: 90%;
        margin-top: 40px;
        color: #151D41;
    }

    button{
        border-radius: 5px;
        border: none;
        background-color: #F97270;
        color : #fff;
        height: 44px;
        width: 179px;
        font-size: 15px;
        font-family: 'Josefin Sans';
        margin-top: 80px;
    }
`;


