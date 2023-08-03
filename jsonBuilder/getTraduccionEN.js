"use strict";

const scraperutils = require('./scraperutils');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const UserAgentPlugin = require("puppeteer-extra-plugin-anonymize-ua");
const verbs = require("./verbs.json");
const url = 'https://www.ingles.com/traductor/'

puppeteer.use(StealthPlugin());
puppeteer.use(UserAgentPlugin({ makeWindows: true }));

async function getTranslation(inf){
    await puppeteer.launch({ headless: true, slowMo: 8 }).then(async browser => {
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(2300);
        await page.goto(url+inf, {waitUntil: 'load'}).catch(e => {
            console.log("no carga la url:" + url);
            scraperutils.sleep();
            return;
        });

        await scraperutils.sleep();

        const traducciones = await page.evaluate(() => {
            let results = [];
            const items = document.querySelectorAll('._2qDMaLCj a');
            items.forEach((item) => {
                const traduccion = item.innerText;
                results.push(traduccion);
            });
            return results.join(';');
        });

        if(traducciones){
            scraperutils.updateInMysqlDB(inf, traducciones);
        }else{
            scraperutils.updateInMysqlDB(inf, '');
        }


        await browser.close();
        await scraperutils.sleep();
    });

}


//continuar desde catalogar
let start = false;
async function getAll(){

    for(let verb of verbs){

        if(verb.verb === 'calcar'){
            start = true;
        }
        if(start){
            await getTranslation(verb.verb);

        }
    }
}

getAll();




//const url = 'https://www.ingles.com/traductor/' + es_infinitive
//document.querySelectorAll('._2qDMaLCj a');
