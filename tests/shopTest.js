import { Selector } from 'testcafe'; 
import {loginp, logout,addtocartfn,checkoutshop,filterfn} from '../functions/shopfunction';
import {credentials,loginpath,commonbutn} from '../configuration/urls';
import xpathSelector from '../configuration/xpath-selector';
fixture `Swaglabs page testing`.page('https://www.saucedemo.com/');

test('Test 1 : Validate the login for different user category', async t => {
   
    await loginp(loginpath.username,credentials.stduser,loginpath.pswd,credentials.Ppwd,loginpath.sub,loginpath.ermessage);
    await logout(commonbutn.mainbtn,commonbutn.loutbtn);
    await loginp(loginpath.username,credentials.probuser,loginpath.pswd,credentials.Ppwd,loginpath.sub,loginpath.ermessage);
    await logout(commonbutn.mainbtn,commonbutn.loutbtn);
    await loginp(loginpath.username,credentials.perfuser,loginpath.pswd,credentials.Ppwd,loginpath.sub,loginpath.ermessage);
    await logout(commonbutn.mainbtn,commonbutn.loutbtn);
    })

test('Test 2 : Validate the locked out user error message ', async t => {
   
    await loginp(loginpath.username,credentials.lockuser,loginpath.pswd,credentials.Ppwd,loginpath.sub,loginpath.ermessage);
   })

test('Test 3 : Validate the incorrect user login & error message', async t => {
   
    await loginp(loginpath.username,credentials.incorrectuser,loginpath.pswd,credentials.Ppwd,loginpath.sub,loginpath.ermessage);
})

test('Test 4 : Validate user is able to purchase an item (E2E flow)', async t => {
   
    await loginp(loginpath.username,credentials.stduser,loginpath.pswd,credentials.Ppwd,loginpath.sub,loginpath.ermessage);
    await addtocartfn(commonbutn.addtocartbp)
    await checkoutshop(commonbutn.shopcartbtn,commonbutn.checkout,commonbutn.fnamesel,credentials.usrfname,commonbutn.lnamesel,credentials.lname,commonbutn.zcodesel,credentials.zipcode,commonbutn.contbtn,commonbutn.finbtn,commonbutn.home);

})

test('Test 5 : Validate sort options in home page ', async t => {
   
    await loginp(loginpath.username,credentials.stduser,loginpath.pswd,credentials.Ppwd,loginpath.sub,loginpath.ermessage);
    await filterfn(commonbutn.sortbtn,credentials.azName,credentials.zaName,credentials.hlPrice,credentials.lhPrice)
    
})