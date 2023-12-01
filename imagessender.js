

   
 function senderimages(inputdat){

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


         
           
        
            var fileName = "uploaded_image_" + Date.now() + "_" + inputdat.name;
            var expirationTime = Math.floor(Date.now() / 1000) + 3600; // One hour from now

            // Replace these with actual values retrieved from your server
            var authenticationToken = inputdat.name;
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
                             return err;
                } else {
                     return  result.url;
                }
            });
        
 


    }