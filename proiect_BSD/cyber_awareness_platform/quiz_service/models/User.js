const db = require("../config/db")

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    async save() {
        let sql = `INSERT INTO Users(email,password,role) VALUES ('${this.email}', '${this.password}', "user");`;
        const [newUser, _] = await db.execute(sql);
        return newUser;
    }

    static findAll(){
        let sql = "SELECT * FROM Users;"
        return db.execute(sql)
    }

    static findById(id){
        let sql = `SELECT * FROM Users WHERE id = ${id};`;
        return db.execute(sql);
    }

    static findByEmail(email){
        let sql = `SELECT * FROM Users WHERE email = '${email}';`
        return db.execute(sql);
    }

    static incrementCampaign(email, campaign){
        let sql = `UPDATE Users SET ${campaign} = ${campaign} + 1 WHERE email = '${email}';`
        return db.execute(sql);
    }

    static updatePhishingGrade(id, grade){
        let sql = `UPDATE Users SET phishing_grade = ${grade} WHERE id = '${id}';`
        return db.execute(sql);
    }

}

module.exports = User;