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

/////////////////////////////////// FINDERS

exports.buyurtmalarInfos = (req, res) => {
    const { mahsulot, qachondan, qachongacha } = req.body
    const query = "SELECT \
buyurtmalar.id as buyurtma_idsi, \
ovqatlar.name as ovqat \
restoran.name as restoran_nomi, \
mijozlar.id as mijoz_idsi, \
mijozlar.name as mijoz_nomi, \
yetkazuvchilar.id as yetkazuvchi_idsi, \
yetkazuvchilar.name as yetakzuvchi_nomi \
FROM buyurtmalar \
JOIN restoran_menu ON buyurtmalar.zakaz = restoran_menu.id \
JOIN ovqatlar restoran_menu.ovqat_id = ovqatlar.id \
JOIN restoran ON restoran_menu.restoran_id = restoran.id \
JOIN mijozlar ON buyutymalar.mijoz_id = mijozlar.id \
JOIN yetkazuvchilar ON buyutymalar.yetkazuvchi_id = yetkazuvchilar.id \
WHERE ovqatlar.name = ? AND buyurtmalar.zakaz_vaqti BETWEEN ? AND ?"
    db.query(query, [mahsulot, qachondan, qachongacha], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json(result)
    })
}