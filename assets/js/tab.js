function openTab(evt, tabId){
    var tab = document.getElementsByClassName('tablinks');
    var contentTab = document.getElementsByClassName('tabContent');

    for (var i=0; i<tab.length; i++){
        tab[i].className = tab[i].className.replace('active', "")
    }

    for (var i=0; i<contentTab.length; i++){
    contentTab[i].style.display = 'none';
    }


    document.getElementById(tabId).style.display = 'block';
    evt.currentTarget.className += ' active';
}
document.getElementById('defaultOpen').click();