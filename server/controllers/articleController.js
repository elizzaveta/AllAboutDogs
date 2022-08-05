const {Article} = require("../models/models");
const url = require('url');
const jwt = require("jsonwebtoken");
const pagination = require('./pagination/pagination')

class ArticleController {
    async getAll(req, res) {
        let filterQuery = url.parse(req.url, true).query

        const {limit, offset} = pagination(req)

        delete filterQuery.limit
        delete filterQuery.page

        const articles = await Article.findAndCountAll({
            where: filterQuery,
            limit,
            offset
        })
        return res.json(articles)
    }

    async getOne(req, res) {
        const {id} = req.params
        const breed = await Article.findOne({
            where: {id}
        });
        return res.json(breed)
    }


    async create(req, res) {
        const token = req.headers.authorization.split(' ')[1]
        const decodedAuthor = jwt.verify(token, process.env.SECRET_KEY)

        const {
            title,
            text,
            articleCategoryId
        } = req.body
        const article = await Article.create({
            title,
            text,
            userId: decodedAuthor.id,
            articleCategoryId,
            image: req.file.path
        })
        return res.json(article);
    }

}

module.exports = new ArticleController()


