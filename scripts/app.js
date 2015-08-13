"use strict";


function openLightBox(name){
    document.getElementById('lightbox').style.display='inline';
    
    
    switch(name){
        case "news":
            document.getElementById('lightBoxImg').src = "images/ImageElements/420pxNewsBreak.png";
            break;
        case "che":
            document.getElementById('lightBoxImg').src = "images/ImageElements/420pxPatRiot.png";
            break;
        case "riri":
            document.getElementById('lightBoxImg').src = "images/ImageElements/420pxRI.png";
            break;
        case "logo":
            document.getElementById('lightBoxImg').src = "images/ImageElements/420pxRonRockWell.png";
            break;
        case "wrath":
            document.getElementById('lightBoxImg').src = "images/ImageElements/420pxRonWrath.png";
            break;
         case "girl":
            document.getElementById('lightBoxImg').src = "images/ImageElements/good2remix.jpg";
            break;
        case "astro":
            document.getElementById('lightBoxImg').src = "images/ImageElements/420pxAstroLand.png";
            break;
        case "carni":
            document.getElementById('lightBoxImg').src = "images/ImageElements/carnivalRi.jpg";
            break;
        case "many":
            document.getElementById('lightBoxImg').src = "images/ImageElements/multiply.jpg";
            break;
        case "riri2":
            document.getElementById('lightBoxImg').src = "images/ImageElements/420pxRI.png";
            break;
        case "logo2":
            document.getElementById('lightBoxImg').src = "images/ImageElements/420pxRonRockWell.png";
            break;
        case "dmc":
            document.getElementById('lightBoxImg').src = "images/ImageElements/RonDMC.jpg";
            break;
        case "astro2":
            document.getElementById('lightBoxImg').src = "images/ImageElements/420pxAstroLand.png";
            break;
        default:
            document.getElementById('lightBoxImg').src = "images/ImageElements/420pxRonRockWell.png";
            break;
     }       
     
}

