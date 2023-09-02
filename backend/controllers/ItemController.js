const Item = require('../models/Item')

//helpers
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = class ItemController {
    //create a item
    static async create(req, res) {
        const { title, short_desc, long_desc, price, brand } = req.body

        const images = req.files
        const available = true

        //images upload

        //validations
        if (!title) {
            res.status(422).json({ message: "Faltando Titulo" })
            return
        }

        if (!short_desc) {
            res.status(422).json({ message: "Faltando Descrição Curta" })
            return
        }

        if (!long_desc) {
            res.status(422).json({ message: "Faltando descrição completa" })
            return
        }

        if (!brand) {
            res.status(422).json({ message: "Faltando Marca" })
            return
        }

        if (!price) {
            res.status(422).json({ message: "Faltando Preço" })
            return
        }

        if (images.length === 0) {
            res.status(422).json({ message: "Faltando imagens" })
            return
        }

        if (images.length <= 2) {
            res.status(422).json({ message: "Selecione 3 ou mais imagens" })
            return
        }

        //get item owner
        const token = getToken(req)
        const user = await getUserByToken(token)


        //create a item

        const item = new Item({
            title,
            short_desc,
            long_desc,
            brand,
            price,
            available,
            images: [],
            user: {
                _id: user._id,
                cnpj: user.cnpj,
                business_name: user.business_name,
                name: user.name,
                image: user.image,
                phone: user.phone,
                address: user.address,
                email:user.email
            }
        })

        images.map((image) => {
            item.images.push(image.filename)
        })

        try {
            const newItem = await item.save()
            res.status(201).json({
                message: 'Item adicionado!',
                newItem
            })

        } catch (err) {
            res.status(500).json({ message: err })

        }
    }

    ////////////////////////////////////
    //get all items
    static async getAll(req, res) {
        const items = await Item.find().sort('-createAt')
        res.status(200).json({
            items: items,
        })
    }

    ///////////////////////////////
    //get all user items

    static async getAllUserItems(req, res) {
        //get user from token

        const token = getToken(req)
        const user = await getUserByToken(token)

        const items = await Item.find({ 'user._id': user._id }).sort('-createAt')
        res.status(200).json({
            items
        })

    }

    ///////////////////////////////
    //get all user rents

    static async getAllUserRent(req, res) {
        // get user
        const token = getToken(req)
        const user = await getUserByToken(token)

        const items = await Item.find({ 'renter._id': user._id })

        res.status(200).json({
            items,
        })

    }

    /////////////////////////////q
    //get item by id

    static async getItemById(req, res) {
        const id = req.params.id

        //check if id is valid
        if (!ObjectId.isValid(id)) {
            res.status(422).json({ message: 'Id inválido' })
            return
        }

        //check if items exists
        const item = await Item.findOne({ _id: id })

        if (!item) {
            res.status(404).json({ message: 'Item não encontrado' })
        }

        res.status(200).json({
            item: item
        })
    }

    //Delete item by id

    static async removeItemById(req, res) {
        const id = req.params.id

        // check if id is valid
        if (!ObjectId.isValid(id)) {
            res.status(422).json({ message: 'Id inválido' })
            return
        }

        // check if item exists
        const item = await Item.findOne({ _id: id })

        if (!item) {
            res.status(404).json({ message: 'Item não encontrado' })
            return
        }

        // check if user registered this item
        const token = getToken(req)
        const user = await getUserByToken(token)

        if (item.user._id.toString() != user._id.toString()) {
            res.status(404).json({
                message:
                    'Tente novamente depois',
            })
            return
        }

        await Item.findByIdAndRemove(id)

        res.status(200).json({ message: 'Item removido' })
    }

    static async updateItem(req, res) {
        const id = req.params.id

        const { title, short_desc, long_desc, price, available,brand } = req.body

        const images = req.files

        const updatedData = {}

        //check if item exists
        const item = await Item.findOne({ _id: id })

        if (!item) {
            res.status(404).json({ message: 'Item não encontrado' })
            return
        }

        // check if user registered this item
        const token = getToken(req)
        const user = await getUserByToken(token)

        if (item.user._id.toString() != user._id.toString()) {
            res.status(404).json({ message: 'Tente novamente depois' })
            return
        }

        //validations
        if (!title) {
            res.status(422).json({ message: "Faltando Titulo" })
            return
        } else {
            updatedData.title = title
        }

        if (!short_desc) {
            res.status(422).json({ message: "Faltando Descrição Curta" })
            return
        } else {
            updatedData.short_desc = short_desc
        }

        if (!long_desc) {
            res.status(422).json({ message: "Faltando Descrição Completa" })
            return
        } else {
            updatedData.long_desc = long_desc
        }

        if (!brand) {
            res.status(422).json({ message: "Faltando Descrição Completa" })
            return
        } else {
            updatedData.brand = brand
        }

        if (!price) {
            res.status(422).json({ message: "Faltando Preço" })
            return
        } else {
            updatedData.price = price
        }

        if (images.length > 0) {
            updatedData.images = []
            images.map((image) => {
                updatedData.images.push(image.filename)
            })
        }

        await Item.findByIdAndUpdate(id, updatedData)
        res.status(200).json({ message: 'item atualizado' })

    }

    static async rent(req, res) {
        const id = req.params.id

        //check if item exists
        const item = await Item.findOne({ _id: id })

        if (!item) {
            res.status(404).json({ message: 'Item não encontrado' })
            return
        }

        //check if user registered the item
        const token = getToken(req)
        const user = await getUserByToken(token)


        if (item.user._id.toString() === user._id.toString()) {
            res.status(404).json({
                message:
                    'Você não pode agendar uma visita com seu próprio item!',
            })
            return
        }

        //check if user has already scheduled a visit

        if (item.renter) {
            if (item.renter._id.toString() === user._id.toString()) {
                res.status(422).json({
                    message: 'Você já agendou uma visita para este item!'
                })
                return
            }
        }

        //add user to item
        item.renter = {
            _id: user._id,
            name: user.name,
            phone: user.phone,
            image: user.image
        }

        await Item.findByIdAndUpdate(id, item)

        res.status(200).json({
            message: `A solicitacão foi feita! Entre em contato com  ${item.user.name} nesse número: ${item.user.phone}`
        })

    }

    ////////////////////////////////////////////

    // conclude a item rent
    static async concludeRent(req, res) {
        const id = req.params.id

        // check if item exists
        const item = await Item.findOne({ _id: id })

        item.available = true
        item.renter = null

        await Item.findByIdAndUpdate(item._id, item)

        res.status(200).json({
            item: item,
            message: `Parabéns! O ciclo de locação foi finalizado com sucesso!`,
        })
    }
}
















