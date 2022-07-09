import './Meetings.css'

function MeetingCard(props) {
    return(
        <div className="card">
            <img src={props.img} alt="meetings" className="card-img-top" />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <p>{props.date}</p>

            <button className='btn'>Join the Meeting</button>
        </div>
    )
}

export default MeetingCard;
