const products = require('../products.json')


module.exports = {
getProducts(req, res, next) {
    if (req.query.price) {
        const items = products.filter(val => val.price >= parseInt(req.query.price))
        return res.status(200).send(items)
    }
    res.status(200).send(products)
},
getProduct(req, res, next) {
    const userId = products.find(val => val.id === parseInt(req.params.id))
        if (!userId) {
            return res.status(500).send('Item not in list')
        }
        res.status(200).send(userId)
}
}