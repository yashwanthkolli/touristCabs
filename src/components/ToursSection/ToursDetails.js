import mysore from '../../assets/mysore.jpg'
import banglore from '../../assets/banglore.jpg'

const tours = [
    {
        id: 1,
        place: 'Mysore',
        people: 4,
        duration: 3,
        cost: 5000,
        car: 'Dzire',
        img: mysore,
        visitingPlaces: ['Sri Rangapatna Temple', 'Sri Rangapatna Gumbaz', 'River Sangam', 'Mysore Zoo', 'Mysore Palace', 'Sand Museum', 'Brindhavan Gardens', 'Chamundeshwari Temple']
    },
    {
        id: 2,
        place: 'Banglore',
        people: 4,
        duration: 3,
        cost: 5000,
        car: 'Dzire',
        img: banglore,
        visitingPlaces: ['Banglore Palace', 'Lalbagh Garden', 'Cubbon Park', 'Visvesvaraya Museum', 'Iskon Temple', 'Jawaharlal Nehru Planetorium', 'Vidhan Soudha', 'Tippu Sulthan Summer Palace']
    }
]

export default tours