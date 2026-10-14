import Destaque from "./Destaque"

function Destaques(props) {
    return (
        <>
            <div id="destaques">
                <div id="containerdestaque">
                    <Destaque img="https://i.pinimg.com/1200x/ef/ae/80/efae80928e7c81ec9ddc6be7a65b569c.jpg" nome="1"/>
                    <Destaque img="https://i.pinimg.com/1200x/2b/a3/4e/2ba34e18f1aae91f2d8cdde577accad0.jpg" nome="2"/>
                    <Destaque img="https://i.pinimg.com/736x/65/52/3a/65523a1e799035d40378cc8f5bb419d3.jpg" nome="3"/>
                    <Destaque img="https://i.pinimg.com/1200x/2e/76/46/2e7646d4c15ab4733af7de302ea59855.jpg" nome="4"/>
                    <Destaque img="https://i.pinimg.com/736x/fa/6a/38/fa6a389f5d7e9ff002f16c5193cf3a1c.jpg" nome="5"/>
                    <Destaque img="https://i.pinimg.com/736x/3a/c2/06/3ac206e81411832a9f5bfcfa807910bd.jpg" nome="6"/>
                </div>
            </div>
        </>
    )
}

export default Destaques