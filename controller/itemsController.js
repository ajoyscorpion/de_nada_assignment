const items = require('../models/itemsSchema')

// to get all items

exports.getAllItems = async (req,res) => {

    try {

        const allItems = await items.find()
        res.status(200).json(allItems)

    } catch (error) {
        res.status(400).json('Failed to get all Items')
    }
}

// to add items
exports.createItem = async(req,res) => {

    const {id,name,quantity,price} = req.body
    
    if(!id || !name || !quantity || !price ){
        res.status(400).json("All Inputs required")
    }

    else {

        try {

            const preItem = await items.findOne({id,name})
            if(preItem){
                res.status(400).json("Item already exists")
            }
            else{
                
                const newItem = new items({
                    id,
                    name,
                    quantity,
                    price
                })

                await newItem.save()
                res.status(200).json("Added Items")
            }

        } catch (error) {
            res.status(400).json('Failed to create Item')
        }
    }
}


// to update item
exports.updateItem = async(req,res) => {
    
    const {id} =req.params
    const {name,quantity,price} = req.body

    try {
        const item = await items.findOne({id})
        console.log(item);

        if(name){
            item.name = name
        } else if(quantity){
            item.quantity = quantity
        } else if (price){
            item.price = price
        }

        await item.save()
        res.status(200).json(`Updated item : ${item}`)

    } catch (error) {
        res.status(400).json('update failed')
    }
}


// to delete item
exports.deleteItem = async (req,res) => {

    const {id} = req.body

    try {
        const item = items.findOne({id})

        await items.deleteOne(item)
        res.status(200).json(`deleted item : ${item}`)

    } catch (error) {
        res.status(400).json("Failed to delete")
    }
}