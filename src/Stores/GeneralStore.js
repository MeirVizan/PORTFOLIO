import { makeAutoObservable} from "mobx"
import $ from 'jquery';


class GeneralStore {
  
    toggleNav = false
    constructor() {
        makeAutoObservable(this)
    }

     onToggleNav(){
      this.toggleNav = !this.toggleNav
    }
    

    scrollAnimt(nameId) {
       console.log(nameId)
        $("body").animate({
            top:  $(`#${nameId}`).offset().top + "px"
        }, 2000);
    }

}





export default  new GeneralStore();
