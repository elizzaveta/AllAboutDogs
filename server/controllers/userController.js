const ApiError = require('../errors/ApiError')
const {User, SavedArticle} = require("../models/models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
const decryptUser = (req) =>{
    const token = req.headers.authorization.split(' ')[1]
    return jwt.verify(token, process.env.SECRET_KEY)
}

class UserController {
    async registration(req, res, next){
        const {name, email, password, roleId} = req.body
        const candidate = await User.findOne({
            where: {email}
        });
        if (candidate) {
            return next(ApiError.badRequest('User with given email already exists.'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({
            name,
            email,
            password: hashPassword,
            roleId
        })
        const token = generateJwt(user.id, email, user.roleId);
        return res.json(token);

    }
    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where:{email}});
        if(!user){
            return next(ApiError.badRequest('No user with given email.'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return next(ApiError.internal('Incorrect password.'))
        }
        const token = generateJwt(user.id, email, user.roleId)
        return res.json(token)
    }
    async check(req, res){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

    async saveArticle(req, res){
        const {articleId} = req.body;
        const userId = decryptUser(req).id

        const savedCandidate = await SavedArticle.findOne({
            where: {userId, articleId}
        })
        if(savedCandidate){
            return res.json({message: 'Article is already saved by user.'})
        }

        const saved = await SavedArticle.create({
            userId,
            articleId
        })
        return res.json(saved)
    }
    async deleteArticle(req, res){
        const {articleId} = req.body;
        const userId = decryptUser(req).id

        const savedCandidate = await SavedArticle.findOne({
            where: {userId, articleId}
        })
        if(!savedCandidate){
            return res.json({message: 'Article not saved by user.'})
        }

         await SavedArticle.destroy({where: {
            userId,
            articleId
        }})
        return res.json({message: 'Successfully deleted'})
    }

}

module.exports = new UserController();