const db = require("../config/db.js")

exports.buyurtmalarInfos = (req, res) => {
    const { mahsulot, qachondan, qachongacha } = req.body
    const query = "\
SELECT \
buyurtmalar.id AS buyurtma_idsi, \
ovqatlar.name AS ovqat_nomi, \
restoran.name AS restoran_nomi, \
mijozlar.id AS mijoz_idsi, \
mijozlar.name AS mijoz_nomi, \
yetkazuvchilar.id AS yetkazuvchi_idsi, \
yetkazuvchilar.name as yetakzuvchi_nomi \
FROM buyurtmalar \
JOIN restoran_menu ON buyurtmalar.zakaz = restoran_menu.id \
JOIN ovqatlar ON restoran_menu.ovqat_id = ovqatlar.id \
JOIN restoran ON restoran_menu.restoran_id = restoran.id \
JOIN mijozlar ON buyurtmalar.mijoz_id = mijozlar.id \
JOIN yetkazuvchilar ON buyurtmalar.yetkazuvchi_id = yetkazuvchilar.id \
WHERE ovqatlar.name = ? AND buyurtmalar.zakaz_vaqti BETWEEN ? AND ?";
    db.query(query, [mahsulot, qachondan, qachongacha], (error, result) => {
        if (error) {
            return res.status(500).json({"error": "Server javob bermadi!"})
        }

        res.json(result)
    })
}