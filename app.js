const booleanItem = [true, false];

const randomBooleanItem = booleanItem[Math.floor(Math.random() * booleanItem.length)];

console.log(randomBooleanItem);

async function asinxronFunksiya() {
    return new Promise((resolve, reject)=> {
        if (randomBooleanItem == true) {
            resolve({
                status: 200,
                message: "Ma'lumot Muvaffaqiyatli Yuklandi!",
                data: {
                    name: "Iphone 15 Pro Max",
                    price: 1999.99,
                    desc: "Yap Yangi"
                }
            })
        } else if (randomBooleanItem == false) {
            reject({
                status: 404,
                message: "Ma'lumot Topilmadi!",
                err: {
                    name: undefined,
                    price: null,
                    desc: undefined
                }
            })
        }
    })
}

asinxronFunksiya()
.then((message)=> {
    console.log(message);
})
.catch((err)=> {
    console.log(err);
})