import $ from 'jquery';

let widthWin = window.innerWidth
class Methods{
    // async  myMap() {
  
    //     var mapProp= {
    //       center:new google.maps.LatLng(31.784286799999997,35.1795359),
    //       zoom:5,
    //     };
    //     var map = new google.maps.Map(document.getElementById("map"),mapProp);
    //   }


    timeLine(obj,itenwpaer,bar){
            let even = 0;
            let odd = 80;
            const MarginLine = 20
            let BarLine = 0;
            let checkEven = obj.length % 2 === 0 ? true : false;
            let heightBar = $(itenwpaer).parents(".timeline").height();
            obj.each((index,item) => {
                    
                let heightTimeLine = $(item).height(); 
                if(index % 2 === 0){
                    $(item).css({
                        "top":even + "px"
                    })
                    even += heightTimeLine + MarginLine;
                    BarLine += !checkEven ? heightTimeLine : 0 

                }else{
                    $(item).css({
                        "top":odd + "px"
                    })
                    odd += heightTimeLine + MarginLine
                    BarLine += checkEven ?  heightTimeLine : 0
                }
            });
            let heightContent  =  even > odd ? even : odd;
            let heightLineBar  = even > odd ? odd  : even;
            heightLineBar = widthWin < 480 ? heightBar - 200 : heightLineBar
            $(bar).css({ "height":heightContent - 100 + 'px'})
            $(itenwpaer).css({ "height": heightContent - MarginLine  +'px'})
    }

    async  currentLocation(){

        const data = await new Promise((resolve, reject) => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject)
          } else {
            alert("Geolocation is not supported by this browser.");
          }
        })
    
        return data
      }
}

  export default new Methods();
