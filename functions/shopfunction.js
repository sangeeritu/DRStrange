import { t, Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
import xpathSelector from '../configuration/xpath-selector';

//Login to the shopping page 
export async function loginp(uname,uvalue,pword,pvalue,subva,errmsg) {
await t.typeText(Selector(uname),uvalue)
await t.typeText(Selector(pword),pvalue)
await t.click(subva);
const locmsg = Selector(errmsg).withText('Epic sadface: Sorry, this user has been locked out.');
const msg = Selector(errmsg).withText('Epic sadface: Username and password do not match any user in this service');
const getLocation = ClientFunction(() => document.location.href);
if(await locmsg.exists)
{
await t.expect(locmsg.exists).ok()
}
else if(await msg.exists)
{
    await t.expect(msg.exists).ok()
}
else  
{
    await t.wait(1000)
    await t.expect(getLocation()).contains('inventory.html');
    
}
}

//Logout function
export async function logout(mainmen,out) {
    await t.click(mainmen);
    await t.click(out);
    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('https://www.saucedemo.com/');
}

// Add to cart 
export async function addtocartfn(addcart,cart,cout) {
    await t.click(addcart);
}

//checkout E2E
export async function checkoutshop(sCart,cOut,fnameSel,fName,lnameSel,lName,zCSel,zcode,cBtn,fBtn,eBtn) {
    await t.click(sCart);
    await t.click(cOut);
    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('checkout-step-one.html');
    await t.typeText(Selector(fnameSel),fName)
    await t.typeText(Selector(lnameSel),lName)
    await t.typeText(Selector(zCSel),zcode)
    await t.click(cBtn);
    await t.expect(getLocation()).contains('checkout-step-two.html');
    await t.click(fBtn);
    await t.expect(getLocation()).contains('checkout-complete.html');
    await t.click(eBtn);
    await t.expect(getLocation()).contains('inventory.html');
}

// Sort option check 
export async function filterfn(filteraction,nameaz,nameza,priceLH,priceHL) {
    const filteroption = Selector(filteraction);
    await t.expect(filteroption.exists).ok()
    await t.click(filteroption);
    const optionList = Selector('option');
    for( var i = 0; i < await optionList.count; i++){
        const optionText = await optionList.nth(i).innerText;
        await t.expect(optionText === nameaz || optionText === nameza|| optionText === priceLH|| optionText === priceHL).ok( );     
    }
    
 }



