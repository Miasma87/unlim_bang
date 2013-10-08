chrome.tabs.query({
    active: true,
    windowId: chrome.windows.WINDOW_ID_CURRENT
}, function(arrayOfTabs) {
    var tab = arrayOfTabs[0];
    var url = tab.url;
    //Bangbros
    if(url.substring(7,23) == "new.bangbros.com")
    {
      chrome.cookies.set({url:"http://new.bangbros.com", name:"previews", value:"0"});
    }
    //RealityKing
    else if(url.substring(7,27) == "www.realitykings.com")
    {
      chrome.cookies.set({url:"http://www.realitykings.com", domain:".realitykings.com", name:"rktr", value:"0"});
    }
    //Culioneros
    else if(url.substring(7,25) == "www.culioneros.com")
    {
      chrome.cookies.set({url:"http://www.culioneros.com", name:"previews", value:"0"});
    }
    //Cumlouder
    else if(url.substring(7,24) == "www.cumlouder.com")
    {
      chrome.cookies.set({url:"http://www.cumlouder.com", name:"vt", value:"0"});
    }
    //Pornpros
    else if(url.substring(7,23) == "www.pornpros.com")
    {
      chrome.cookies.set({url:"http://www.pornpros.com", name:"pv", value:"0"});
    }
    //Teamskeet
    else if(url.substring(7,24) == "www.teamskeet.com")
    {
      chrome.cookies.set({url:"http://www.teamskeet.com", name:"trap_trailer", value:"0"});
    }
    //NaughtyAmerica
    else if(url.substring(7,30) == "tour.naughtyamerica.com")
    {
      chrome.cookies.set({url:"http://tour.naughtyamerica.com", name:"viewsLeft", value:"100"});
    }
});

