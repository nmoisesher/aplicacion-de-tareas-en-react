import '../styles/logofreecodeCamp.css'
function LogoFreeCodeCamp() {
    const img ='/img/fcc_primary.svg';
    return(
        <div className="contenedor-freecodecampLogo">
            <img className="img-freecodecampLogo" src={img}/>
        </div>
    );
}
export default LogoFreeCodeCamp