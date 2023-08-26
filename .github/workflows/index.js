
const g = process.argv[2];
console.log(`My constant is: ${g.substring(0, 3)}`+"liot");

const puppeteer = require('puppeteer');
// v13.0.0 or later

let singularity = "2023-08-26 | 22:10 | 11:01 | 3  normal x EUR x 11:00 x HCOB Manufacturing PMI Flash JUL x 43.5 x 43.4 nor eco |, normal x EUR x 11:00 x HCOB Composite PMI Flash JUL x 49.7 x 49.9 nor eco |, normal x EUR x 11:00 x HCOB Services PMI Flash JUL x 51.5 x 52 nor eco |"


let drink = [326403,0];
let breath = [480148, 1111];
let actual = [];

let hour_array = singularity.slice(13,18);
let gravity = new Date(singularity.slice(0,10)+'T'+hour_array+':07.000Z');
let black_hole = new Date(singularity.slice(0,10)+'T'+hour_array+':59.000Z')



const until = setInterval(async () => {
    if(new Date(new Date().getTime() + 10800000) > gravity){process.exit()

    }
  }, 1);
   



