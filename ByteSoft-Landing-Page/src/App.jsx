import logo from './assets/file.png'
import QuemSomos from './assets/quemsomos.svg'
import Gif from './assets/Animation.gif'
import './App.css'
import Card1 from "./assets/Card 1.svg"
import Card2 from "./assets/Card 2.svg"
import Card3 from "./assets/Card 3.svg"
import {Form} from "./components/Form/Form.jsx";

function App() {

  return (
      <>
          <div className="card">
              <img style={{margin: "15px"}} width={250} src={logo} className="logo" alt="ByteSoft Lsogo"/>
              <div className={"container"} style={{width: "50%", margin: "0 auto", justifyContent: "center",}}>
                  <h1 style={{color: "white", fontSize: "50px"}}><b>Soluções personalizadas que se adaptam ao seu
                      negócio</b></h1>
                  <p style={{color: "white", fontSize: "20px"}}>Transforme suas ideias em realidade com soluções de
                      software sob medida.</p>
              </div>
              <div></div>
              <div></div>
          </div>
          <div className="card-about" style={{display: "flex", alignItems: "center"}}>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <img width={500} src={QuemSomos} className="img" alt="ByteSoft Lsogo"/>
                  <div className={"card-about-container"} style={{width: "25%", textAlign: "start"}}>
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
                  <div style={{width: "45%", textAlign: "start"}}>
                      <h2 style={{color: "#252B42", fontSize: "30px"}}>Por que Escolher a ByteSoft?</h2>
                      <img src={Card1} alt=""/>
                      <img src={Card2} alt=""/>
                      <img src={Card3} alt=""/>
                  </div>
                  <img width={400} src={Gif} className="img" alt="ByteSoft Lsogo"/>
              </div>
          </div>
          <div className="card-contato" style={{display: "flex"}}>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto", width: "30%", flexDirection: "column"}}>
                  <div>
                      <h2 style={{color: "white", fontSize: "30px", margin: 0}}>Vamos Transformar Sua Ideia em
                          Realidade!</h2>
                      <p style={{color: "white"}}>Entre em contato conosco e descubra como a ByteSoftware pode ajudar o
                          seu negócio a crescer com soluções de software personalizadas.</p>
                  </div>
                  <Form/>
              </div>
          </div>
      </>
  )
}

export default App
