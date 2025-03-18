import logo from './assets/file.png'
import QuemSomos from './assets/quemsomos.svg'
import Gif from './assets/Animation.gif'
import './App.css'
import Card1 from "./assets/Card 1.svg"
import Card2 from "./assets/Card 2.svg"
import Card3 from "./assets/Card 3.svg"
import {Form} from "./components/Form/Form.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {RotatingText} from "./components/RotatingText/RotatingText.jsx";

function App() {

  AOS.init();

  return (
      <>
          <div className="card">
              <img style={{margin: "15px"}} width={250} src={logo} className="logo" alt="ByteSoft Lsogo"/>
              <div className={"container"} style={{width: "50%", margin: "0 auto", justifyContent: "center",}}>
                  <h1 style={{color: "white", fontSize: "60px"}}><b>
                      <RotatingText texts={['Soluções personalizadas ', 'Ferramentas personalizadas ', 'Serviços personalizados ', 'Soluções inteligentes ']} />
                      que se adaptam
                      <RotatingText texts={[' ao seu negócio', ' ao seu ambiente', ' a sua empresa', ' ao seu mercado']} />
                  </b></h1>
                  <p style={{color: "white", fontSize: "20px"}}>Transforme suas ideias em realidade com soluções de
                      software sob medida.</p>
              </div>
              <div></div>
              <div></div>
          </div>
          <div className="card-about" style={{display: "flex", alignItems: "center"}}>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <img data-aos="fade-right" width={500} src={QuemSomos} className="img" alt="ByteSoft Lsogo"/>
                  <div data-aos="fade-left" className={"card-about-container"} style={{width: "25%", textAlign: "start"}}>
                      <h2 style={{color: "#252B42", fontSize: "40px"}}><b>Quem Somos</b></h2>
                      <p style={{color: "#252B42", fontSize: "20px"}}>
                          A ByteSoft é uma empresa especializada em
                          desenvolvimento de software, focada em criar
                          soluções tecnológicas que atendem às necessidades
                          específicas dos nossos clientes. Com uma equipe de
                          profissionais experientes e apaixonados por
                          tecnologia, entregamos produtos de alta qualidade
                          que ajudam empresas a alcançar seus objetivos.
                      </p>
                  </div>
              </div>
          </div>
          <div className="card-descricao" style={{display: "flex"}}>
              <div className="card-descricao-container" style={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 auto", width: "50%"}}>
                  <div data-aos="fade-right" style={{width: "45%", textAlign: "start"}}>
                      <h2 style={{color: "#252B42", fontSize: "30px"}}>Por que Escolher a ByteSoft?</h2>
                      <img src={Card1} alt=""/>
                      <img src={Card2} alt=""/>
                      <img src={Card3} alt=""/>
                  </div>
                  <img data-aos="fade-left" width={400} src={Gif} className="img" alt="ByteSoft Lsogo"/>
              </div>
          </div>
          <div className="card-contato" style={{display: "flex"}}>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto", width: "30%", flexDirection: "column"}}>
                  <div>
                      <h2 style={{color: "white", fontSize: "30px", margin: 0}}>Vamos Transformar Sua Ideia em
                          Realidade!</h2>
                      <p style={{color: "white"}}>Entre em contato conosco e descubra como a ByteSoft pode ajudar o
                          seu negócio a crescer com soluções de software personalizadas.</p>
                  </div>
                  <Form/>
              </div>
          </div>
      </>
  )
}

export default App
