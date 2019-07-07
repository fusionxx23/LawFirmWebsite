
class DropDown {
    constructor() {
        // Cards 
        this.serveCard = $('#serve-card, #serve-card-dropdown'); 
        this.protectCard = $('#protect-card, #protect-card-dropdown'); 
        this.commercialCard = $('#commercial-card, #commercial-card-dropdown'); 
        // DropDown Area for Cards
        this.dropServe = $('#serve-card-dropdown'); 
        this.dropProtect = $('#protect-card-dropdown'); 
        this.dropCommercial = $('#commercial-card-dropdown'); 

        

        // Drop Down Container 

        this.dropDownContainer = $('#drop_down_container');  
        this.events();

    }
    events () {

            this.protectCard.hover(this.dropDown.bind(this.dropProtect), 
                        this.dropDownOut.bind(this.dropProtect)); 
        

                this.protectCard.hover(this.styleCard.bind(this.protectCard), 
                        this.styleCard.bind(this.protectCard));  
           
    }

    dropDown() {  
       this.removeClass('inactive'); 

    } 
    dropDownOut() {
        var timeout = setTimeout(() => (this.addClass('inactive')), 500); 
    }
    styleCard() {
       
    }

}

var DropDownEvent = new DropDown(); 