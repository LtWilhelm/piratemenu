$(document).ready(()=>{
    setImage();
    setInterval(setImage, 60000);
});

function setImage () {
    let now = new Date();
    let morningTime = new Date();
    let afternoonTime = new Date();

    morningTime.setHours(10);
    morningTime.setMinutes(00);

    switch (now.getDay()) {
        case 5:
        case 6:
            afternoonTime.setHours(18);
            afternoonTime.setMinutes(00);
            break;
        default:
            afternoonTime.setHours(15);
            afternoonTime.setMinutes(00);
    }

    if (morningTime < now && now < afternoonTime) {
        $('#morning').show();
        $('#afternoon').hide();
    } else {
        $('#afternoon').show();
        $('#morning').hide();
    }
}