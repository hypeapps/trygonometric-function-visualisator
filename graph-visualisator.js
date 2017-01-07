document.getElementById("submit").onclick = function () {
    calucateFunctions();
};

function calucateFunctions() {
    var parA1 = document.getElementById("parA1").value;
    var parB1 = document.getElementById("parB1").value;

    var parA2 = document.getElementById("parA2").value;
    var parB2 = document.getElementById("parB2").value;

    var canvasSinus = document.getElementById("sine");
    var sinus = canvasSinus.getContext("2d");

    var canvasCosinus = document.getElementById("cosine");
    var cosinus = canvasCosinus.getContext("2d");


    var i;
    for (i = 0; i < 360; i += 20) {
        sinus.moveTo(i, 180);
        sinus.lineTo(i + 5, 180);

    }
    sinus.stroke();

    var counter = 0,
        x = 0,
        y = 180;

    var increase = 90 / 180 * Math.PI / 9;

    for (i = 0; i <= 360; i += 10 / parB1) {

        sinus.moveTo(x, y);
        x = i;
        y = 180 - Math.sin(counter) * (parA1 * 10);
        counter += increase;

        sinus.lineTo(x, y);
        sinus.stroke();
    }


    var i;

    for (i = 0; i < 360; i += 20) {
        cosinus.moveTo(i + 5, 180);
        cosinus.lineTo(i, 180);

    }
    cosinus.stroke();


    counter = 0,
        x = 0,
        y = 180;

    var increase = 90 / 180 * Math.PI / 9;

    for (i = 0; i <= 360; i += 10 / parB2) {

        cosinus.moveTo(x, y);
        x = i;
        y = 180 - Math.cos(counter) * (parA2 * 10);
        counter += increase;

        cosinus.lineTo(x, y);
        cosinus.stroke();


    }

}