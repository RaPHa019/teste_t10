import React from 'react';
import Menu from '../../components/Menu'
import Titulo from '../../components/Titulo'
import * as S from './styles';
import homeImg from '../../assets/img/2905211.svg'
import aboutImg from '../../assets/img/freelancer-bearded-man-taking-notes-laptop_85574-3146.png'
import portfolioImg1 from '../../assets/img/fish.png';
import portfolioImg2 from '../../assets/img/app-design3.png';
import portfolioImg3 from '../../assets/img/thumbnail-918x656-01-8be87c (1).png';
import portfolioImg4 from '../../assets/img/How-UX-UI-Design-Will-Help-Your-Business-Succeed.png';
import backgroundImg from '../../assets/img/back1.png';
import setaImg from '../../assets/img/arrow.svg';
import pageImg from '../../assets/img/Page-1.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';


const Home: React.FC = () => {
  return (
        <S.HomePage>
            <Menu />
            <S.Container>
                <S.Section id='home'>
                    <S.SectionHomeContent>
                        <S.HomeText>
                            <h1>Inovação, Design e <br/> <strong>Experiência</strong></h1>
                            <p>Sempre a frente em soluções digitais</p>
                            <button>Saiba mais</button>
                        </S.HomeText>                        
                        <div>
                            <img src={homeImg} />
                        </div>
                    </S.SectionHomeContent>                    
                </S.Section>
                <S.Section id='sobre'>
                    <Titulo tittle='SOBRE NÓS' />
                    <S.SectionAboutContent>
                        <div>
                            <img src={aboutImg} id='aboutImg' />                            
                        </div>
                        <div id='divTextAbout'>
                            <h1>Qual o seu próximo projeto?</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat consequat mauris nunc congue nisi. Lorem ipsum dolor sit amet. Ut diam quam nulla porttitor massa id neque.</p>
                            <button>Download CV</button>
                        </div>
                        
                        <img src={backgroundImg} id='backgroundImg' />
                    </S.SectionAboutContent>
                </S.Section>
                <S.Section id='servicos'>
                    <Titulo tittle='SERVIÇOS' subTittle='Proporcionamos uma melhor experiência' />
                    <S.SectionServicesContent>
                        <img src={backgroundImg} id='backgroundServices' />
                        <div id='adobe'>
                            <div id='adobeContent'>
                                <h1>85%</h1>
                                <div></div>
                                <h2>Design UI</h2>
                                <p>Photoshop, Illustrator</p>
                            </div>
                            <div id='progressBar'></div>                            
                        </div>
                        
                        <div id='design' >
                            <div id='arco'>
                                <img src={pageImg} />
                            </div>                            
                            <h1>Design</h1>
                            <div id='lineDesing'> <div></div> <div></div> <div></div> </div>
                            <p>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>
                            <button>Saiba mais <img src={setaImg} /></button>
                        </div>
                    </S.SectionServicesContent>
                </S.Section>
                <S.Section id='portfolio'>
                    <Titulo tittle='PORTFOLIO' subTittle='Meus Trabalhos' />
                    <S.SectionPortfolioContent>
                        <div>                            
                            <img src={portfolioImg1} />
                            <div className='hoverDiv' >
                                <h1>Fresh</h1>
                                <AiOutlinePlusCircle size={40} color='#fff' />
                            </div>
                        </div>
                        <div>
                            <img src={portfolioImg2} />
                            <div className='hoverDiv' >
                                <h1>Phone Mockup</h1>
                                <AiOutlinePlusCircle size={40} color='#fff' />
                            </div>
                        </div>
                        <div>
                            <img src={portfolioImg3} />
                            <div className='hoverDiv' >
                                <h1>Web Design</h1>
                                <AiOutlinePlusCircle size={40} color='#fff' />
                            </div>
                        </div>
                        <div>
                            <img src={portfolioImg4} />
                            <div className='hoverDiv' >
                                <h1>UI Design</h1>
                                <AiOutlinePlusCircle size={40} color='#fff' />
                            </div>
                        </div>
                    </S.SectionPortfolioContent>
                    
                </S.Section>
                <S.Section id='contato'>
                    <Titulo tittle='CONTATO' subTittle='Envie sua mensagem' />
                    <S.ContactForm>
                        <input type='text' id='nome' placeholder='Nome' />
                        <div>
                            <input type='text' id='telefone' placeholder='Telefone'/>
                            <input type='text' id='email' placeholder='Email' />
                        </div>
                        <textarea rows={10} id='mensagem' placeholder='Mensagem' />
                        <button>Enviar</button>
                    </S.ContactForm>
                    <div id='background'>
                        <img src={backgroundImg} />
                    </div>
                    
                </S.Section>
            </S.Container>           
        </S.HomePage>
    );
}

export default Home;