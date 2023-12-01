async function senderimages(inputdat) {
    var imagekit = new ImageKit({
        publicKey: "public_nHkBn2KJUW1F2WpK9660ydQiTtg=",
        privateKey: "private_MuxqMwPaknJskKL6Gmr1Q5PToaU=",
        urlEndpoint: "https://ik.imagekit.io/9z8pcdvp6",
        authenticationEndpoint: "https://ik.imagekit.io/9z8pcdvp6/Pavan6134/", // Replace with your actual authentication endpoint
    });

    function generateSignature(token, expire, privateKey) {
        var message = token + expire;
        var keyBytes = CryptoJS.enc.Utf8.parse(privateKey);
        var signature = CryptoJS.HmacSHA1(message, keyBytes);
        return signature.toString(CryptoJS.enc.Hex).toLowerCase();
    }

    return new Promise((resolve, reject) => {
        var fileName = "uploaded_image_" + Date.now() + "_" + inputdat.name;
        var expirationTime = Math.floor(Date.now() / 1000) + 3600; // One hour from now

        var authenticationToken = generateRandomString(16);
        var signature = generateSignature(authenticationToken, expirationTime, "private_MuxqMwPaknJskKL6Gmr1Q5PToaU=");

        imagekit.upload({
            file: inputdat,
            fileName: fileName,
            tags: ["tag1", "tag2"],
            expire: expirationTime,
            token: authenticationToken,
            signature: signature,
        }, function (err, result) {
            if (err) {
                console.error("Error uploading image:", err);
                reject(err);
            } else {
                resolve(result.url);
            }
        });
    });
}

function generateRandomString(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }

    return result;
}
