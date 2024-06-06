const Amazon = require('../models/amazon_model');
const Hepsi = require('../models/hepsiburada_model');

// const addProductH = async (req, res) => {
//     const eklenecek = new Hepsi({ product_id: req.body.product_id, name: req.body.name, point: req.body.point })
//     console.log(req.body);
//     const sonuc = await eklenecek.save();
//     res.json(eklenecek);
//     console.log(sonuc);
// }

// const addProductA = async (req, res) => {
//     const eklenecek = new Amazon({ product_id: req.body.product_id, name: req.body.name, point: req.body.point })
//     console.log(req.body);
//     const sonuc = await eklenecek.save();
//     res.json(eklenecek);
//     console.log(sonuc);
// }


const addProductH = async (req, res) => {
    try {
        const products = req.body; // Gelen ürün listesi

        // Ürünlerin veritabanına eklenmesi için Promise.all kullanılabilir
        const promises = products.map(async (product) => {
            const newProduct = new Hepsi({
                product_id: product.product_id,
                name: product.product_name,
                point: product.sentiment_category
            });
            return await newProduct.save();
        });

        // Tüm işlemler tamamlandığında response dönülmesi
        const results = await Promise.all(promises);
        res.json(results);
    } catch (error) {
        console.error("Ürün eklerken bir hata oluştu:", error);
        res.status(500).json({ error: "Ürün eklenirken bir hata oluştu" });
    }
}

const addProductA = async (req, res) => {
    try {
        const products = req.body; // Gelen ürün listesi

        // Ürünlerin veritabanına eklenmesi için Promise.all kullanılabilir
        const promises = products.map(async (product) => {
            const newProduct = new Amazon({
                product_id: product.product_id,
                name: product.product_name,
                point: product.sentiment_category
            });
            return await newProduct.save();
        });

        // Tüm işlemler tamamlandığında response dönülmesi
        const results = await Promise.all(promises);
        res.json(results);
    } catch (error) {
        console.error("Ürün eklerken bir hata oluştu:", error);
        res.status(500).json({ error: "Ürün eklenirken bir hata oluştu" });
    }
}



const viewAmazon = (req, res) => {
    Amazon.find({})
        .then((son) => {
            res.json(son)
        })
        .catch(err => console.log(err))
}

const viewHepsi = (req, res) => {
    Hepsi.find({})
        .then((son) => {
            res.json(son)
        })
        .catch(err => console.log(err))
}


module.exports = {
    addProductH,
    addProductA,
    viewAmazon,
    viewHepsi
}