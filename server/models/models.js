const sequelize = require("../db")
const {DataTypes} = require("sequelize")
//ПОЛЬЗОВАТЕЛЬ
const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email:{type:DataTypes.STRING, unique: true, },
    password:{type:DataTypes.STRING},
    passportNumber:{type:DataTypes.INTEGER,},
    passportSeries:{type:DataTypes.STRING},
    phoneNumber:{type:DataTypes.CHAR},
    role:{type:DataTypes.STRING, defaultValue:"USER"},
})
//ТЕХНИКА
const Device = sequelize.define('device',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    model:{type: DataTypes.STRING, allowNull:false},
    releaseDate:{type: DataTypes.DATE, allowNull:false},
    guaranteePeriod:{type:DataTypes.STRING, allowNull:false},
    price:{type:DataTypes.DECIMAL, allowNull:false},
    img:{type:DataTypes.STRING,allowNull:true}
})
//НАЗВАНИЕ ТЕХНИКИ
const DeviceName = sequelize.define('deviceName',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, allowNull:false, unique:true}
})
//КАРТА
const Card = sequelize.define('card',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    number:{type:DataTypes.INTEGER,allowNull:false},
    expiryDate:{type:DataTypes.DATE, allowNull:false},
})
//ПАРТИЯ ТОВАРА
const Consignment = sequelize.define('consignment',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    consignmentDate:{type:DataTypes.DATE, allowNull:false},
})
//ПОСТАВЩИК
const Provider = sequelize.define('provider',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, allowNull:false}
})
//ПРОИЗВОДИТЕЛЬ
const Manufacturer = sequelize.define('manufacturer',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, allowNull:false},
})
//СТРАНА
const Country = sequelize.define('country',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, allowNull:false},
    code:{type: DataTypes.STRING, allowNull:false}
})
//СЧЁТ
const Bill = sequelize.define('bill',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    date:{type: DataTypes.DATE, allowNull:false},
    discount:{type: DataTypes.INTEGER, allowNull:false},
    sum:{type: DataTypes.INTEGER, allowNull:false}
})
//ПРОДАЖА
const Sale = sequelize.define('sale',{
    number:{type: DataTypes.INTEGER, allowNull:false},
    price:{type: DataTypes.INTEGER, allowNull:false}
})
//связи пользователя
User.hasMany(Card)
Card.belongsTo(User)

User.hasMany(Bill)
Bill.belongsTo(User)

//связи счета
Bill.hasMany(Sale)
Sale.belongsTo(Bill)

//связм техники
DeviceName.hasMany(Device)
Device.belongsTo(DeviceName)

Device.hasMany(Sale)
Sale.belongsTo(Device)

Manufacturer.hasMany(Device)
Device.belongsTo(Manufacturer)

Device.hasMany(Consignment)
Consignment.belongsTo(Device)

//связи страны
Country.hasMany(Manufacturer)
Manufacturer.belongsTo(Country)

//связи поставщика
Provider.hasMany(Consignment)
Consignment.belongsTo(Provider)

module.exports = {
    User,
    Device, 
    DeviceName, 
    Card, 
    Consignment, 
    Provider, 
    Manufacturer, 
    Country, 
    Bill, 
    Sale
}