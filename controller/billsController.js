const bills = require('../models/billSchema')
const Items = require('../models/itemsSchema')
const billItem = require('../models/billItemSchema')

async function generateBillNumber () {
    const lastBill = await bills.findOne().sort({billNo : -1})
    return lastBill ? lastBill.billNo + 1 : 0001;
}

// create bill

exports.createBill = async(req,res) => {
    
    const {items} = req.body
    let total = 0
    const billItems = []

    try {
        for(const item of items){

            const{id,qtn} = item
            const inventory_item = await Items.findOne({id})

            if(inventory_item.quantity < qtn){
                return res.status(400).json(`Insufficient quantity for item: ${inventory_item.name}`)
            }

            inventory_item.quantity -= item.qtn
            await inventory_item.save()
            
            total += inventory_item.price * item.qtn

            const newBillItem = new billItem({
                item:inventory_item._id,
                quantity:qtn
            })

            const savedBillItem = await newBillItem.save()
            billItems.push(savedBillItem._id)
        }

        const newBill = new bills({
            billNo: await generateBillNumber(),
            items:billItems,
            total:total
        })

        await newBill.save()
        res.status(200).json(newBill)

    } catch (error) {
        res.status(400).json("Failed to create bill")
    }
}

// get all bills

exports.getAllBills = async(req,res) => {
    try {
        const allBills = await bills.find()
        res.status(200).json(allBills)
    } catch (error) {
        res.status(400).json('Failed to get all bills')
    }
}

// get bill

exports.getBill = async (req,res) => {

    const {billNo} = req.params

    try {
        const bill = await bills.findOne({billNo})
        res.status(200).json(`The bill : ${bill}`)
    } catch (error) {
        res.status(400).json('Failed to get bill')
    }
}