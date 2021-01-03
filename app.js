let qrcode = new QRCode("qrcode", {
    text: "https://www.instagram.com/thewebstain/",
    width: 300,
    height: 300,
    colorDark : "#f1f1f1",
    colorLight : "transparent",
    correctLevel : QRCode.CorrectLevel.H
});