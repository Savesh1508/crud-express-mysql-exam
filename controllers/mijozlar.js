const db = require("../config/db.js")

exports.getAllMijozlars = (req, res) => {
    db.query("SELECT * FROM mijozlar", (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json(result)
    })
}

exports.getMijozById = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM mijozlar WHERE id = ?", [id],(error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }
        if (result.length == 0) {
            return res.status(404).json({"error": "Bunday mijoz topilmadi!"})
        }

        res.json(result[0])
    })
}

exports.postNewMijoz = (req, res) => {
    const { name, address, phone, email } = req.body
    db.query("INSERT INTO mijozlar(name, address, phone, email) VALUES (?, ?, ?, ?)", [name, address, phone, email], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Mijoz mijozlar ro'yxatiga qo'shildi!"
        })
    })
}

exports.putMijozById = (req, res) => {
    const id = req.params.id
    const { name, address, phone, email } = req.body
    db.query("UPDATE mijozlar SET name = ?, address = ?, phone = ?, email = ? WHERE id = ?", [name, address, phone, email, id], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Mijoz ma'lumotlari o'zgartirildi!"
        })
    })
}

exports.deleteMijozById = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM mijozlar WHERE id = ?", [id], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Mijoz mijozlar ro'yxatidan chiqarildi!"
        })
    })
}