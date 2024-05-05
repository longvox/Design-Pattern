/**
                            ,-----------------------------------------------------.
                            |ShopFacade                                           |
                            |-----------------------------------------------------|
                            |+buyProductByMoMoWithGrabShipping(name: String)      |
                 ___________|+buyProductByPayPalWithNinjaVanShipping(name: String)|_____
                |           `-----------------------------------------------------'     |
                |                           |                    |                      |
                |                           |                    |                      |
,-------------------------------.  ,-----------------.   ,---------------.   ,--------------------.
|LoginService                   |  |PayService       |   |ShipService    |   |NotiService         |
|-------------------------------|  |-----------------|   |---------------|   |--------------------|
|+loginFB(userName: String)     |  |+payByPayPal()   |   |+nowShip()     |   |+NotificationSMS()  |
|+loginYoutube(userName: String)|  |+payByMoMo()     |   |+grabShip()    |   |+NotificationGmail()|
|+loginGithub(userName: String) |  |+payByDebitCash()|   |+ninjaVanShip()|   `--------------------'
`-------------------------------'  `-----------------'   `---------------'
**/

const ShopFacade = require("./shopFacade");

let shopFacade = new ShopFacade();

console.log("buyProductByMoMoWithGrabShipping ==================");
shopFacade.buyProductByMoMoWithGrabShipping("Nick");
console.log("===================================================");

console.log();

console.log("buyProductByPayPalWithNinjaVanShipping ============");
shopFacade.buyProductByPayPalWithNinjaVanShipping("Nick");
console.log("===================================================");
