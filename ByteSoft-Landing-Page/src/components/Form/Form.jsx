import "./Form.css";






export const Form = () => {
    return (
        <>
            <form data-aos="zoom-in" className="form" action={"https://formspree.io/f/mvgkggqy"} method="post">
                <div className="title2">Entre em contato</div>
                <input id={"name"} name={"name"} type="text" placeholder="Seu nome" className="input"/>
                <input id={"email"} name={"email"} type="text" placeholder="Seu email" className="input"/>
                <textarea id={"message"} name={"message"} placeholder="Sua mensagem"></textarea>
                <button type={"submit"}>Enviar</button>
            </form>
        </>
    )
}