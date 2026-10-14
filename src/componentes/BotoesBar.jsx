const textoBotoesConta = ['Entrar', 'Cadastre-se']

function BotoesBar(props) {
    return (
        <>
        <div id="botoesconta">
            { textoBotoesConta.map( (texto) => (
                <div class="botoesnav"><p>{texto}</p></div>
            ))}
        </div>
        </>
    )
}

export default BotoesBar