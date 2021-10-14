var fs = require('fs');
const political = require('./political.json')
const listpolitst = require('./listPolistical.json')
const education = require('./education.json')


class model {
    async findEducate(edu) {
        for(let i =0;i<education.length;i++){
            if(edu == education[i].university){
                return true
            }
        }
        return null
    }

    async checkEducate(edu) {
        let checkEducate = this.findEducate(edu)
        if(checkEducate == null){
            return "สถาบันไม่มีจริง"
        }else
            return true

    }
    
    async regis(name,last,partyname){
        var politic = [];
        var listPo = [];

        for(let i =0;i<listpolitst.length;i++){
            if(partyname != listpolitst[i].partyName){
                listPo.push(partyname)
            }else{
                politic.push(name,last,partyname)
            }
        }

        for(let i =0;i<political.length;i++){
            if(political.length==11 && partyname == political){
                return "สมาชิกครบแล้ว"
            }
        }

        listPo = {
            "partyname": partyname,
        };

        politic = {
            "partyname": partyname,
            "firstName": name,
            "lastName": last
        };
        
        const jsonString = JSON.stringify(politic, null, 2);
        await fs.writeFile('./model/political.json', jsonString, function (err) {
            if (err) throw err;
            console.log('JSON File Created!');
    });
        return "สมัครเลือกตั้งสำเร็จ"
    }


}
module.exports = model;