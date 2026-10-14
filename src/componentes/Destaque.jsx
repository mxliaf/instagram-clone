function Destaque(props) {
    return (
        <>
            <div class="destaque">
                <img src={props.img} alt=""  />
                <p>{props.nome}</p>
            </div>
        </>
    )
}

export default Destaque