import '../card-list/card-list.styles.css';
import Card from "../card/card.component";

// make this as a implecit return
const CardList = ({ monsters }) => (
    <div className="card-list">
        {
            monsters.map((monster) => {
                return(
                <Card monster = {monster} key={monster.id}/>
            );
        })}
    </div>
);

export default CardList;