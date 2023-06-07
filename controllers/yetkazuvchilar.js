const db = require("../config/db.js")

const getAllYetkazuvchilars = (req, res) => {
    db.query("SELECT * FROM yetkazuvchilar", (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json(result)
    })
}

const getYetkazuvchiById = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM yetkazuvchilar WHERE id = ?", [id],(error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }
        if (result.length == 0) {
            return res.status(404).json({"error": "Bunday yetkazuvchi topilmadi!"})
        }

        res.json(result[0])
    })
}

const postNewYetkazuvchi = (req, res) => {
    const { name, phone, email } = req.body
    db.query("INSERT INTO yetkazuvchilar(name, phone, email) VALUES (?, ?, ?)", [name, phone, email], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Yetkazuvchi yetkazuvchilar ro'yxatiga qo'shildi!"
        })
    })
}

const putYetkazuvchiById = (req, res) => {
    const id = req.params.id
    const { name, phone, email} = req.body
    db.query("UPDATE yetkazuvchilar SET name = ?, phone = ?, email = ? WHERE id = ?", [name, phone, email, id], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Yetkazuvchi ma'lumotlari o'zgartirildi!"
        })
    })
}

const deleteYetkazuvchiById = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM yetkazuvchilar WHERE id = ?", [id], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Yetkazuvchi yetkazuvchilar ro'yxatidan chiqarildi!"
        })
    })
}

module.exports = {
    getAllYetkazuvchilars,
    getYetkazuvchiById,
    postNewYetkazuvchi,
    putYetkazuvchiById,
    deleteYetkazuvchiById
}