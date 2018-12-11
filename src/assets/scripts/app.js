//new WOW().init();
function openCity(cityName,elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = '#f52d2d';

    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = '#f52d2d';
    elmnt.style.color = '#ffff';
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//Toggle chevrons
function toggleChevron(e) {
$(e.target)
.prev('.panel-heading')
.find("i.indicator")
.toggleClass('glyphicon-chevron-down-custom glyphicon-chevron-up-custom');
        }
        $('#accordion').on('hidden.bs.collapse', toggleChevron);
        $('#accordion').on('shown.bs.collapse', toggleChevron);
