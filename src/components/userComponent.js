import BaseLogger, { ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi.")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Mert", "Bahtiyar", "Samsun")
let user2 = new User(2, "Meliha", "Bahtiyar", "Merzifon")

userService.add(user1)
userService.add(user2)

console.log(userService.list())

console.log(userService.getById(2))
userService.list()


//prototyping----------------------------------------------------------
let customer = { id: 1, firstName: "Mert" }
customer.lastName = "Bahtiyar"

console.log(customer.lastName)