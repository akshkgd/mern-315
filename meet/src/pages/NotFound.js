import Nf from '.././img/nf.svg';
function NotFound(){
    return(
        <div>
        <div className="container text-center">
        <img src={Nf} alt="welcome" className="nf" />

            <h1 className='title'>Page Not Found</h1>
            <p className='desc'>Foster meaningful relationships with events, newsletters, and community analytics</p>
            <button className='btn mt-1'> Homepage</button>
        </div>
        

    </div>
    )
}
export default NotFound;