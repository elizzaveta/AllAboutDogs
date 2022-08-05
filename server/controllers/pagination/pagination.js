module.exports = function (req){
    let {limit, page} = req.query
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    return {
        limit,
        offset
    }
}