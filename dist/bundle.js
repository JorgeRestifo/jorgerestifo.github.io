(function () {
  'use strict';

  function init() {
    var content = document.getElementById("content"),
        loader = document.getElementById("loader"),
        urls = ["samsung-butterfly_300x600", "samsung-display_300x600", "samsung-bogo_300x600", "ally-12month_300x600", "battery_300x600", "celestial_300x250", "lego_300x600", "lego_easytobuild_300x600", "lego-harrypotter_300x250", "lego-juniors_300x600", "Rihanna-teaser-A_300x250", "multitask_300x600", "nike-flyknit_300x250", "nike-janosky_300x250", "nike-nrc_300x600", "nike-tempo_300x250", "nike-vomero_300x600", "personal-prepago_300x250", "Rihanna-teaser-B_300x250", "samsung_tab_300x600", "samsung-battery_300x600", "samsung-camera-300x600", "samsung-cnn-money_300x250", "samsung-diplo_300x250", "samsung-emoji_300x600", "samsung-gametime_300x250", "samsung-holliday_300x250", "ally-11month_300x250", "samsung-holliday-mobile_300x600", "samsung-memory_300x250", "samsung-ocean_300x250", "samsung-s9_300x600", "samsung-wash_300x250", "storage-300x600", "svedka-300x600", "samsung-pay_300x250"]; // "samsung-spen_300x250","samsung-guru_300x250"

    function loadAds() {
      for (var i = 0; i < urls.length; i++) {
        var ifrm = document.createElement("iframe"); // var img = document.createElement("IMG");

        var div = document.createElement("DIV");
        ifrm.setAttribute("src", "works/" + urls[i] + "/index.html");
        ifrm.id = i;
        ifrm.style.display = "none"; // img.src="works/"+urls[i]+"/backup.jpg";
        // img.id="img"+i;
        // img.style.transform= "scale(50%, 50%)";
        // loadImg(img,div,ifrm);
        // t.style.display="none";

        div.className = "ad";
        ifrm.className = "ifrm"; // div.addEventListener("mouseover", reloadAd);

        div.appendChild(ifrm); // div.appendChild(t);

        container.appendChild(div); // var temp = document.getElementById(i);

        iframeLoad(ifrm);
      } // function loadImg(img,div,ifrm) {
      //   img.addEventListener("load", function() {
      //     // var preloader = document.createElement("DIV")
      //     // div.style.width=img.width / 2 +"px";
      //     // div.style.height=img.height / 2 +"px";
      //     div.className = "ad"
      //     // ifrm.style.width=img.width / 2 +"px";
      //     // ifrm.style.height=img.height / 2 +"px";
      //     // div.addEventListener("mouseover", reloadAd);
      //     div.appendChild(ifrm);
      //     // ifrm.style.display= "block";
      //     div.appendChild(img);
      //     // container.appendChild(div);
      //   });
      // }


      function iframeLoad(iframe) {
        iframe.onload = function () {
          var metaData = iframe.contentDocument,
              dimensionsStr = metaData.querySelector('meta[name="ad.size"]').content,
              matched = dimensionsStr.match(/=(.*?),(.*?)=(.*?)$/),
              width = parseInt(matched[1]),
              height = parseInt(matched[3]);
          iframe.style.width = width + "px";
          iframe.style.height = height + "px";
          iframe.style.display = "block";
          iframe.style.opacity = "0";

          if (iframe.id < 1) {
            iframe.style.opacity = "1";
          } // loader.style.display="none";
          // iframe.addEventListener("mouseover", reloadAd);
          // setTimeout(reloadAd,15000,iframe)

        };
      }

      $(function () {
        $(".ifrm").recliner({
          attrib: "src",
          // selector for attribute containing the media src
          throttle: 100,
          // millisecond interval at which to process events
          threshold: 25,
          // scroll distance from element before its loaded
          live: true // auto bind lazy loading to ajax loaded elements

        });
      }); // $(document).on('lazyloded', '.ifrm', function() {
      // var $e = $(this);
      // // do something with the loaded element...
      // console.log('lazyshow', $e);
      // TweenMax.from($e,1,{autoAlpha:0})
      // });
      // // $(document).on('lazyload', '.ifrm', function() {
      // // var $e = $(this);
      // // // do something with the loaded element...
      // // console.log('lazyshow', $e);
      // // });
    }

    loadAds();
    //     var elem = document.querySelector('#ad');
    //     if(elem!=null) elem.parentNode.removeChild(elem);
    //     var random = Math.floor(Math.random()*urls.length);
    //     if(random===index) {
    //       random = Math.floor(Math.random()*urls.length)
    //     }
    //     index = random;
    //     loader.style.display="block";
    //       var ifrm = document.createElement("iframe");
    //       ifrm.setAttribute("src", "works/"+urls[index]+"/index.html");
    //       ifrm.id="ad";
    //       ifrm.style.display="none";
    //       ifrm.className = "center-middle-trans"
    //       content.appendChild(ifrm);
    //       var iframe = document.getElementById("ad");
    //       iframe.onload = function () {
    //         var metaData = iframe.contentDocument,
    //         dimensionsStr = metaData.querySelector('meta[name="ad.size"]').content,
    //         matched = dimensionsStr.match(/=(.*?),(.*?)=(.*?)$/),
    //         width = parseInt(matched[1]),
    //         height = parseInt(matched[3]);
    //         iframe.style.width = width+"px";
    //         iframe.style.height = height+"px";
    //         loader.style.display="none";
    //         ifrm.style.display="block";
    //       }
    //       // console.log(heigth)
    //   }
    // content.addEventListener("click", showAd);

  }

  window.onload = function () {
    init();
  };

}());