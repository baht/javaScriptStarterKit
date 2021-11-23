import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidityForErrors(user)){
                        this.customers.push(user) //validation burda yazılabilirmiş.
                    }
                    break;
                case "employee":
                    if(!this.checkEmployeeValidityForErrors(user)){
                        this.customers.push(user) //validation burda yazılabilirmiş.
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }

    checkCustomerValidityForErrors(user){ //global bir validation yazılabilir.
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required!`, user))
            }
        }

        if(Number.isNaN(Number.parseInt(+user.age))){ //bir fonksiyon yalnız bir işi görmeli
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number!`))
        }

        return hasErrors
    }

    checkEmployeeValidityForErrors(user){ //global bir validation yazılabilir.
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required!`, user))
            }
        }

        if(Number.isNaN(Number.parseInt(+user.age))){ //bir fonksiyon yalnız bir işi görmeli
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number!`))
        }

        return hasErrors
    }

    add(user) {
        switch (user.type) {
            case "customer":
                if(!this.checkCustomerValidityForErrors(user)){
                    this.customers.push(user) //validation burda yazılabilirmiş.
                }
                break;
            case "employee":
                if(!this.checkEmployeeValidityForErrors(user)){
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(new DataError("This user cannot be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers() {
        return this.customers
    }

    getCustomerById(id) { //employee ve customer ayrı servis yapılmalı
        return this.customers.find(u => u.id === id)
    }

    getCustomerSorted(){
        return this.customers.sort((customer1, customer2) => {
            if(customer1.firstName<customer2.firstName){
                return -1;
            }else if(customer1.firstName === customer2.firstName){
                return 0;
            }else{
                return 1;
            }
        })
    }
}