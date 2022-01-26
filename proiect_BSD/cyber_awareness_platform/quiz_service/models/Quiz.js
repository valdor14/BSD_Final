const db = require("../config/db")

class Quiz {
    constructor(category, question, answer1, answer2, answer3, answer4, correctAnswer){
        this.category = category;
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.correctAnswer = correctAnswer;
    }

    async save() {
        let sql = `INSERT INTO Quiz(category, question, answer1, answer2, answer3, answer4, correctAnswer)
                        VALUES ('${this.category}', '${this.question}', '${this.answer1}', '${this.answer2}', '${this.answer3}', '${this.answer4}', '${this.correctAnswer}');`;
        const [newQuiz, _] = await db.execute(sql);
        return newQuiz;
    }

    static findAll(){
        let sql = "SELECT * FROM Quiz;"
        return db.execute(sql)
    }

    static findByCategory(category){
        let sql = `SELECT * FROM Quiz WHERE category = '${category}';`;
        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM Quiz WHERE id = ${id};`;
        return db.execute(sql);
    }

}

module.exports = Quiz;