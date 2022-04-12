const houses = require('./db.json')

module.exports = {
    getHouses: (req,res) => {

        res.status(200).send(houses)
    }
        ,
    deleteHouse: (req, res)=> {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index,1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let globalID = houses.length-1
        let {address, price, imageURL} = req.body
        houses.push({
            id: globalID,
            address,
            price,
            imageURL
        })
        res.status(200).send(houses)
    }, 
    updateHouse: (req,res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        const {type} = req.body
        console.log(type)
        
        if (type === "plus") {
            houses[index].price +=10000
            res.status(200).send(houses)
        } else if (type=== "minus" && houses[index].price>10000){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }
        res.status(200).send(houses)
    }
}