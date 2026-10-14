const botoesAcao = ['Seguir', 'Enviar Mensagem', 'Recomendações']

function BarraAcoes(props) {
    return (
        <>
            <div id="barraacoes">
                { botoesAcao.map( (texto) => (
                    <div class="botoesopcoes"><p>{texto}</p></div>
                ))}
            </div>
        </>
    )
}

export default BarraAcoes