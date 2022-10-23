import swift from '../../assets/swift.png'
import innova from '../../assets/innova.png'
import innova1 from '../../assets/innova1.jpg'
import traveller from '../../assets/traveller.png'
import traveller1 from '../../assets/traveller1.jpg'
import etios from '../../assets/etios.png'
import etios1 from '../../assets/etios1.jpg'

const Cars = [
    {
        _id: 1,
        name: "Etios",
        fuel: "Desiel",
        noOfSeats: 4,
        transition: "Manual",
        type: "AC",
        pricePerDay: 2300, 
        image: etios,
        image1: etios1
    },
    {
        _id: 2,
        name: "Innova Crysta",
        fuel: "Desiel",
        noOfSeats: 6,
        transition: "Manual",
        type: "AC",
        pricePerDay: 3300, 
        image: innova,
        image1: innova1
    },
    {
        _id: 4,
        name: "Force Traveller",
        fuel: "Desiel",
        noOfSeats: 11,
        transition: "Manual",
        type: "AC",
        pricePerDay: 4300, 
        image: traveller,
        image1: traveller1
    },
    {
        _id: 5,
        name: "Dzire",
        fuel: "Desiel",
        noOfSeats: 4,
        transition: "Manual",
        type: "AC",
        pricePerDay: 2300, 
        image: swift,
        image1: swift
    }
]

export default Cars