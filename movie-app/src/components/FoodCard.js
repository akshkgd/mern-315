function FoodCard(props) {
    function orderFoodHandler() {
        console.log('Ordering food: ' + props.name);
        if (props.price > 100) {
            console.log('Amount ' + props.price);
            console.log('Enjoy Free Delivery!!')
        }

        else {
            console.log('Amount ' + props.price);
            console.log('Delivery charge Added', + props.price + 45)
        }
    }
    return (
        <div className="food-card">
            <div className="card-header">
                <img className="food-img" src={props.img} alt={props.name} />
                <p className="ratings">{props.ratings} ratings ({props.votes})</p>
                <p className={(props.ratings > 4.4) ? "must-try" : "d-none"}>Must Try</p>
            </div>

            <h2 className="food-title">{props.name}</h2>
            <h3 className="m-0">Rs {props.price}</h3>
            <p className="food-desc">{props.desc}</p>
            <button className="btn" onClick={orderFoodHandler}>Order Now</button>
        </div>
    );
}

export default FoodCard;