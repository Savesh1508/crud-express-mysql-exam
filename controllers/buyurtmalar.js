const db = require("../config/db.js")

exports.getAllBuyurtmalars = (req, res) => {
    db.query("SELECT * FROM buyurtmalar", (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json(result)
    })
}

exports.getBuyurtmaById = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM buyurtmalar WHERE id = ?", [id],(error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }
        if (result.length == 0) {
            return res.status(404).json({"error": "Bunday buyurtma topilmadi!"})
        }

        res.json(result[0])
    })
}

exports.postNewBuyurtma = (req, res) => {
    const { zakaz, yetkazuvchi_id, mijoz_id, zakaz_vaqti, quantity } = req.body
    db.query("INSERT INTO buyurtmalar(zakaz, yetkazuvchi_id, mijoz_id, zakaz_vaqti, quantity) VALUES (?, ?, ?, DATE(?), ?)", [zakaz, yetkazuvchi_id, mijoz_id, zakaz_vaqti, quantity], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Buyurtma buyurtmalar ro'yxatiga qo'shildi!"
        })
    })
}

exports.putBuyurtmaById = (req, res) => {
    const id = req.params.id
    const { zakaz, yetkazuvchi_id, mijoz_id, zakaz_vaqti, quantity } = req.body
    if (!quantity) {
        quantity = parseInt(Math.random()*300)
    }

    db.query("UPDATE buyurtmalar SET zakaz = ?, yetkazuvchi_id = ?, mijoz_id = ?, zakaz_vaqti = DATE(?), quantity = ? WHERE id = ?", [zakaz, yetkazuvchi_id, mijoz_id, zakaz_vaqti, quantity, id], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Buyurtma ma'lumotlari o'zgartirildi!"
        })
    })
}

exports.deleteBuyurtmaById = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM buyurtmalar WHERE id = ?", [id], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json({
            "status": "Buyurtma buyurtmalar ro'yxatidan chiqarildi!"
        })
    })
}