import './meet.css';
import Welcome from '.././img/welcome.svg';
import MeetingsCard from '../components/Meetings/MeetingCard';
function Home(){
    return (
        <div>
            <div className="container text-center">
                <img src={Welcome} alt="welcome" className="welcome" />

                <h1 className='title '>Welcome to Codekaro Meetings</h1>
                <p className='desc'>Foster meaningful relationships with events, newsletters, and community analytics</p>
            </div>
            

        </div>
    );
}
export default Home;