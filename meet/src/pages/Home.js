import './meet.css';
import { useState, useEffect } from 'react';
import Welcome from '.././img/welcome.svg';
import NoMeetings from '.././img/noMeetings.png';
import MeetingsCard from '../components/Meetings/MeetingCard';
function Home(){

    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    fetch('https://mern315-meet-demo-default-rtdb.firebaseio.com/meetings.json').
    then(response => response.json()).then(data => {
        const meetings = [];
        for(const key in data){
            const meeting = {
                id: key,
                ...data[key]
            }
            meetings.push(meeting);
        }
        setMeetings(meetings);
        console.log(meetings);
        setLoading(false);
    });
    }, []);

    

    return (
        

        
        <div>
           
            <div className='container text-center my-5'>
                <h1 className='title '>Welcome to Codekaro Meetings</h1>
                <p className='desc'>Foster meaningful relationships with events, newsletters, and community analytics</p>
            
            </div>
            <div className={loading ? "loading" : "d-none"}>
                <div className='loading-animation'>loading...</div>
            </div>
            <div className={meetings.length == 0 ? "container text-center" : "d-none"}>
                
                
                <img src={NoMeetings} alt="welcome" className="no-meetings" />
                <p>No meetings available!!</p>
            </div>
            

            <div>
                <div className="meetings-container">
                    {
                        meetings.map(meeting => {
                           return <MeetingsCard title={meeting.title} desc={meeting.desc} img={meeting.img} />
                        })
                    }
                </div>
            </div>

        </div>
        
    );
}
export default Home;