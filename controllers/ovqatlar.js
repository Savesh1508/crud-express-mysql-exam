const db = require("../config/db.js")

const getAllOvqats = (req, res) => {
    db.query("SELECT * FROM ovqatlar", (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json(result)
    })
}

const getOvqatById = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM ovqatlar WHERE id = ?", [id],(error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }
        if (result.length == 0) {
            return res.status(404).json({"error": "Bunday ovqat topilmadi!"})
        }

        res.json(result[0])
    })
}

const postNewOvqat = (req, res) => {
    const { name } = req.body
    db.query("INSERT INTO ovqatlar(name) VALUES (?)", [name], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Ovqat ovqatlar ro'yxatiga qo'shildi!"
        })
    })
}

const putOvqatById = (req, res) => {
    const id = req.params.id
    const { name } = req.body
    db.query("UPDATE ovqatlar SET name = ? WHERE id = ?", [name, id], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Ovqat ma'lumotlari o'zgartirildi!"
        })
    })
}

const deleteOvqatById = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM ovqatlar WHERE id = ?", [id], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Ovqat ovqatlar ro'yxatidan chiqarildi!"
        })
    })
}

module.exports = {
    getAllOvqats,
    getOvqatById,
    postNewOvqat,
    putOvqatById,
    deleteOvqatById
}
