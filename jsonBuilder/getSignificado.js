"use strict";

const scraperutils = require('./scraperutils');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const UserAgentPlugin = require("puppeteer-extra-plugin-anonymize-ua");
const verbs = require("./verbs.json");
const url = 'https://www.wordreference.com/definicion/'

puppeteer.use(StealthPlugin());
puppeteer.use(UserAgentPlugin({ makeWindows: true }));

async function getMeaning(inf){
    await puppeteer.launch({ headless: true, slowMo: 10 }).then(async browser => {
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(4200);
        await page.goto(url+inf, {waitUntil: 'load'}).catch(e => {
            console.log("no carga la url:" + url);
            scraperutils.sleep();
            return;
        });

        await scraperutils.sleep();

        const significados = await page.evaluate(() => {
            const entry = document.getElementsByClassName('entry');
            if(entry && entry.length > 0){
                return entry[0].innerHTML;
            }
        });

        if(significados){
            scraperutils.writeInMysqlDB(inf, significados);
        }else{
            scraperutils.writeInMysqlDB(inf, '');
        }


        await browser.close();
        await scraperutils.sleep();
    });

}



async function getAll(){
    for(let verb of verbs){
        await getMeaning(verb.verb);
    }
}


let test = ['coger', 'saltar', 'bailar']

getAll();
