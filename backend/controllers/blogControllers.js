
const getHello = async (req, res, next) => {
    res.send('Hello from the controllers files')
}

module.exports = { getHello }