const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Breed = sequelize.define('breed', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    height_min: {type: DataTypes.INTEGER},
    height_max: {type: DataTypes.INTEGER},
    weight_min: {type: DataTypes.INTEGER},
    weight_max: {type: DataTypes.INTEGER},
    life_expectancy_min: {type: DataTypes.INTEGER},
    life_expectancy_max: {type: DataTypes.INTEGER},
    about: {type: DataTypes.TEXT},
    nutrition: {type: DataTypes.TEXT},
    health: {type: DataTypes.TEXT},
    image: {type: DataTypes.STRING}
})

const ActivityLevel = sequelize.define('activityLevel',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level: {type: DataTypes.INTEGER, unique: true},
    name: {type: DataTypes.STRING, unique: true}
})
const Trainability = sequelize.define('trainability',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level: {type: DataTypes.INTEGER, unique: true},
    name: {type: DataTypes.STRING, unique: true}
})
const CoatLength = sequelize.define('coatLength',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level: {type: DataTypes.INTEGER, unique: true},
    name: {type: DataTypes.STRING, unique: true}
})
const Shedding = sequelize.define('shedding',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level: {type: DataTypes.INTEGER, unique: true},
    name: {type: DataTypes.STRING, unique: true}
})
const Barking = sequelize.define('barking',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level: {type: DataTypes.INTEGER, unique: true},
    name: {type: DataTypes.STRING, unique: true}
})
const DogsFriendly = sequelize.define('dogsFriendly',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level: {type: DataTypes.INTEGER, unique: true},
    name: {type: DataTypes.STRING, unique: true}
})
const KidsFriendly = sequelize.define('kidsFriendly',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level: {type: DataTypes.INTEGER, unique: true},
    name: {type: DataTypes.STRING, unique: true}
})

const Personality = sequelize.define('personality',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const Color = sequelize.define('color',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const BreedColors = sequelize.define('breedColors',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const BreedPersonality = sequelize.define('breedPersonality',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})



Breed.belongsTo(ActivityLevel);
ActivityLevel.hasMany(Breed)

Breed.belongsTo(Trainability)
Trainability.hasMany(Breed)

Breed.belongsTo(CoatLength)
CoatLength.hasMany(Breed)

Breed.belongsTo(Shedding)
Shedding.hasMany(Breed)

Breed.belongsTo(Barking)
Barking.hasMany(Breed)

Breed.belongsTo(DogsFriendly)
DogsFriendly.hasMany(Breed)

Breed.belongsTo(KidsFriendly)
KidsFriendly.hasMany(Breed)

Breed.belongsToMany(Color, {through: BreedColors})
Breed.belongsToMany(Personality, {through: BreedPersonality})


const Article = sequelize.define('article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    text: {type: DataTypes.TEXT},
    image: {type: DataTypes.STRING}
})

const ArticleCategory = sequelize.define('articleCategory', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const SavedArticle = sequelize.define('savedArticle', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


Article.belongsTo(User);
User.hasMany(Article);

Article.belongsTo(ArticleCategory);
ArticleCategory.hasMany(Article);

User.belongsTo(Role);
Role.hasMany(User);

User.belongsToMany(Article, {through: SavedArticle});



module.exports = {
    Breed,
    CoatLength,
    Trainability,
    ActivityLevel,
    Barking,
    Shedding,
    DogsFriendly,
    KidsFriendly,
    Color,
    Personality,
    BreedColors,
    BreedPersonality,
    Article,
    ArticleCategory,
    User,
    Role,
    SavedArticle
}
