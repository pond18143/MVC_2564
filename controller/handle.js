const model = require('../model/model')

class logic {

    async cratePolitic(req){
        var firstName = req.firstName
        var lastName = req.lastName
        var university = req.university
        var partyName = req.partyName
        //check int
        if(Number.isInteger(firstName)||(Number.isInteger(lastName))){
            return [400,"ไม่ใช่ตัวหนังสือ"]
        }
        
        //check edu
        var checkUni = await new model().checkEducate(university)
        if (checkUni == null){
            return [400,"สถาบันไม่มีจริง"]
        }
        
        var register = await new model().regis(firstName,lastName,partyName)
        console.log(register)

        return [200,register]
    }
}
module.exports = logic;