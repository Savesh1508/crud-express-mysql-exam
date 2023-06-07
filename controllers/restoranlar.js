const db = require("../config/db.js")

const getAllRestorans = (req, res) => {
    db.query("SELECT * FROM restoran", (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json(result)
    })
}

const getRestoranById = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM restoran WHERE id = ?", [id],(error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }
        if (result.length == 0) {
            return res.status(404).json({"error": "Bunday restoran topilmadi!"})
        }

        res.json(result[0])
    })
}

const postNewRestoran = (req, res) => {
    const { name, address, phone } = req.body
    db.query("INSERT INTO restoran(name, address, phone) VALUES (?, ?, ?)", [name, address, phone], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Restoran restoranlar ro'yxatiga qo'shildi!"
        })
    })
}

const putRestoranById = (req, res) => {
    const id = req.params.id
    const { name, address, phone } = req.body
    db.query("UPDATE restoran SET name = ?, address = ?, phone = ? WHERE id = ?", [name, address, phone, id], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Restoran ma'lumotlari o'zgartirildi!"
        })
    })
}

const deleteRestoranById = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM restoran WHERE id = ?", [id], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Restoran restoranlar ro'yxatidan chiqarildi!"
        })
    })
}

module.exports = {
    getAllRestorans,
    getRestoranById,
    postNewRestoran,
    putRestoranById,
    deleteRestoranById
}