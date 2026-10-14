import NavBar from './componentes/Navbar'
import Destaques from './componentes/Destaques'
import BarraAcoes from './componentes/BarraAcoes';
import Feed from './componentes/Feed';
import FotoPerfil from './componentes/FotoPerfil';
import IconeLink from './componentes/IconeLink';

function Instagram() {
    return (
        <>
        <NavBar></NavBar>  
            <div id="fullscreen">
                <div id="MainContainer">
                    <div id="profileheader">
                        <FotoPerfil></FotoPerfil>
                        <div id="textodeperfil">
                            <div id="nome">
                                <p><strong>marilia</strong></p>
                            </div>
                            <div id="username">
                                <p>agaetisbyrju <span>·</span> she/her</p>
                            </div>
                            <div id="dadosnumericos">
                                <p><strong>64,7 mil</strong> seguidores  <span>·</span><strong> 3.009</strong> seguindo,</p>
                            </div>
                            <div id="bio">
                                <p>2005 / fashion and technology enthusiast</p>
                            </div>
                            <div id="linkbio">
                                <IconeLink></IconeLink>
                                <a href="https://www.last.fm/user/morphinedrip" target="_blank">last.fm/user/morphinedrip</a>
                            </div>
                        </div>

                    </div>
                </div>
                <BarraAcoes></BarraAcoes>
                <Destaques></Destaques>
                <Feed></Feed>
            </div>

            


            


        </>
    );
}

export default Instagram

