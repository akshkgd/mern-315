import './meet.css';
import Welcome from '.././img/welcome.svg';
import NoMeetings from '.././img/noMeetings.png';
import MeetingsCard from '../components/Meetings/MeetingCard';
function Home(){
    fetch('https://mern315-meet-demo-default-rtdb.firebaseio.com/meetings.json').
    then(response => response.json()).then(data => {
        console.log(data);
    });
    return (
        <div>
            <div className="container text-center">

                <h1 className='title '>Welcome to Codekaro Meetings</h1>
                <p className='desc'>Foster meaningful relationships with events, newsletters, and community analytics</p>
            
                <img src={NoMeetings} alt="welcome" className="no-meetings" />
                <p>No meetings available!!</p>
            </div>
            

        </div>
    );
}
export default Home;