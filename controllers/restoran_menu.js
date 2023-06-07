const db = require("../config/db.js")

const getAllRestoranMenus = (req, res) => {
    db.query("SELECT * FROM restoran_menu", (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json(result)
    })
}

const getRestoranMenuById = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM restoran_menu WHERE id = ?", [id],(error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }
        if (result.length == 0) {
            return res.status(404).json({"error": "Bunday restoran menyusi topilmadi!"})
        }

        res.json(result[0])
    })
}

const postNewRestoranMenu = (req, res) => {
    const { restoran_id, ovqat_id, price } = req.body
    db.query("INSERT INTO restoran_menu(restoran_id, ovqat_id, price) VALUES (?, ?, ?)", [restoran_id, ovqat_id, price], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Menyu menyular ro'yxatiga qo'shildi!"
        })
    })
}

const putRestoranMenuById = (req, res) => {
    const id = req.params.id
    const { restoran_id, ovqat_id, price } = req.body
    db.query("UPDATE restoran_menu SET restoran_id = ?, ovqat_id = ?, price = ? WHERE id = ?", [restoran_id, ovqat_id, price, id], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Menyu ma'lumotlari o'zgartirildi!"
        })
    })
}

const deleteRestoranMenuById = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM restoran_menu WHERE id = ?", [id], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Menyu menyular ro'yxatidan chiqarildi!"
        })
    })
}

module.exports = {
    getAllRestoranMenus,
    getRestoranMenuById,
    postNewRestoranMenu,
    putRestoranMenuById,
    deleteRestoranMenuById
}