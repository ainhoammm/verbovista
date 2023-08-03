"use strict";

const scraperutils = require('./scraperutils');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const UserAgentPlugin = require("puppeteer-extra-plugin-anonymize-ua");
const verbs = require("./verbs.json");
const url = 'https://www.ingles.com/traductor/'

puppeteer.use(StealthPlugin());
puppeteer.use(UserAgentPlugin({ makeWindows: true }));


const con = scraperutils.getCon();

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
            try{
                let results = [];
                const items = document.querySelectorAll('.fy8K_XyV > div');
                items.forEach((item) => {
                    const traduccion = item.innerText;
                    results.push(traduccion);
                });
                return results;
            }catch (e){
                console.log(e);
            }
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


async function getAll(){


    var sql = "SELECT verb FROM meanings WHERE en = ''";
    con.query(sql, async function (err, results) {
        //if (err) throw err;
        //console.log("1 record inserted");
        console.log(results)

        for(let result of results){
            console.log(result.verb)
            await getTranslation(result.verb);

        }
    });
}

getAll();




//const url = 'https://www.ingles.com/traductor/' + es_infinitive
//document.querySelectorAll('._2qDMaLCj a');
