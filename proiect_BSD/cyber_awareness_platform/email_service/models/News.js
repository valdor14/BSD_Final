const db = require("../config/db")

class News {
    constructor(title, description, link){
        this.title = title;
        this.description = description;
        this.link = link
    }

    async save() {
        let sql = `INSERT INTO News(title,description,link) VALUES ('${this.title}', '${this.description}', '${this.link}');`;
        const [newNews, _] = await db.execute(sql);
        return newNews;
    }

    static findAll(){
        let sql = "SELECT * FROM News;"
        return db.execute(sql)
    }

    static findById(id){
        let sql = `SELECT * FROM News WHERE id = ${id};`;
        return db.execute(sql);
    }

}

module.exports = News;