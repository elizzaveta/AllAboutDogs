const {ArticleCategory} = require("../models/models");

class ArticleCategoryController {
    async getAll(req, res) {
        const categories = await ArticleCategory.findAll();
        return res.json(categories)
    }

    async create(req, res) {
        const {name} = req.body
        const category = await ArticleCategory.create({name})
        return res.json(category);
    }
}

module.exports = new ArticleCategoryController()


