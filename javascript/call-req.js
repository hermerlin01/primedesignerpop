const reqCall = document.getElementById("req-call");

reqCall.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const ceilingStyle = document.getElementById("ceiling-style").value;
    const room = document.getElementById("room").value;

    const whatsappMessage =
        `New client request\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Location: ${location}\n` +
        `room: ${room}\n` +
        `ceiling type: ${ceilingStyle}`;

    const whatsappNumber = "919756126440";

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
});