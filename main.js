function copyrightFooter(){
    return `
    <footer class="text-white text-center py-3"> 
        <div class="container"> 
            &copy; 2023 Fimmion Foods. All Rights Reserved. Your lips to his ears!
        </div> 
    </footer>
    `;
}

function OfferBanner(){
    return `
        <div class="marquee offer-banner">
            <div class="marqueeone">
                <p>&nbsp;Currently offering <script>document.writeln(GetOffer(true).toLowerCase())</script>!</p>
                <p>Currently offering <script>document.writeln(GetOffer(true).toLowerCase())</script>!</p>&nbsp;
            </div>
            <div class="marqueetwo">
                <p>&nbsp;Currently offering <script>document.writeln(GetOffer(true).toLowerCase())</script>!</p>
                <p>Currently offering <script>document.writeln(GetOffer(true).toLowerCase())</script>!</p>&nbsp;
            </div>
            <div class="marqueethree">
                <p>&nbsp;Currently offering <script>document.writeln(GetOffer(true).toLowerCase())</script>!</p>
                <p>Currently offering <script>document.writeln(GetOffer(true).toLowerCase())</script>!</p>&nbsp;
            </div>
            <div class="marqueefour">
                <p>&nbsp;Currently offering <script>document.writeln(GetOffer(true).toLowerCase())</script>!</p>
                <p>Currently offering <script>document.writeln(GetOffer(true).toLowerCase())</script>!</p>&nbsp;
            </div>
        </div>
        <hr>`;
}


function Navbar(){
    return`
<hr>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="aboutus.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contactus.html">Contact</a>
                </li>
                    <a class="nav-link" href="employment.html">Employment</a>
                </li>
                    <a class="nav-link" href="menu.html">Our Menu</a>
                </li>
            </ul>
        </div>
    </nav>
<hr>
    `;
}

function GetCurrentDay(){

    var date = new Date();
    
    var current_day = date.getDay();

    var day = "Null";

    switch(current_day){
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
    }

    return day;
}

function GetPrice(price){
    var retailPrice =  price;
    var discountedPrice = 0;

    var result = "£";

    var discount = false;

    offerID = GetOfferID();
    switch(offerID){
        case 0:
            result = retailPrice;
            discount = false;
            break;
        case 1:
            discountedPrice = retailPrice - (retailPrice * 0.5);
            result = discountedPrice;
            discount = true;
            break;            
        case 2:
            result = retailPrice;
            discount = false;
            break;
        case 3:
            result = retailPrice;
            discount = false;
            break;
        case 4:
            discountedPrice = retailPrice - (retailPrice * 0.35)
            result = discountedPrice;
            discount = true;
            break;
        case 5:
            result = retailPrice;
            discount = false;
            break;
        case 6:
            result = retailPrice;
            discount = false;
            break;
        case 7:
            result = retailPrice;
            discount = false;
            break;
    }
    result = +result.toFixed(2);
    
    if (result.toString().length <= 3){
        result = `${result}0`
    }

    if(discount){
        return `<s style = "color: red;">£${retailPrice}</s> - £${result}`;
    }else{
        return `£${result}`;

    }
    
}

function GetOffer(realtime, day){

    if (realtime){
        var day = (GetCurrentDay()).toLowerCase();
    }

    var offer = "";
    day = day.toLowerCase();

    switch(day){
        case "monday":
            offer = "50% off all items";
            break;
        case "tuesday":
            offer = "Two large meals for £7";
            break;
        case "wednesday":
            offer = "Buy one get one free";
            break;
        case "thursday":
            offer = "35% off all items";
            break;
        case "friday":
            offer = "Large meal and two sides for £5";
            break;
        case "saturday":
            offer = "Any 3 food items for £10";
            break;
        case "sunday":
            offer = "One large meal for £4";
            break;
    }
    return offer;
}

function GetOfferID(){

    day = GetCurrentDay();
    day = day.toLowerCase();
    
    var offerID = 0;
    
    
    switch(day){
        case "monday":
            offerID = 1;
            break;
        case "tuesday":
            offerID = 2;
            break;
        case "wednesday":
            offerID = 3;
            break;
        case "thursday":
            offerID = 4;
            break;
        case "friday":
            offerID = 5;
            break;
        case "saturday":
            offerID = 6;
            break;
        case "sunday":
            offerID =7 ;
            break;
    }
    
    return offerID;
    }
