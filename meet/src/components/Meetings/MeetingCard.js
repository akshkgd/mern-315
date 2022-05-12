import './Meetings.css'

function MeetingCard(props) {
    return(
        <div className="card">
            <h2>This is meeting Name</h2>
            <p>This is meeting description</p>
            <button>Join the Meeting</button>
        </div>
    )
}

export default MeetingCard;
