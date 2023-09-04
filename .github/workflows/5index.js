const WebSocket = require('ws');

let singularity = '2023-09-04 | 10:50 | 15:31 | 3  10:30 x CHF x Industrial Production (MoM) (Jun) x 0.5 x 326974 x 480705 x normal || 10:30 x CHF x Industrial Production (MoM) (Jun) x 0.1 x 326976 x 480698 x normal ||'

    
let drink = [];
let breath = [];
let the_way = [];
let forecast = [];
let actual = [];
  
singularity = singularity.slice(0, singularity.length - 3);
let chlorine = singularity.split(' || ');
chlorine.map(e => actual.push('xxx') )
  
for(let dead = 0; dead < chlorine.length; dead++){
  let mercury = chlorine[dead].split(' x ');
  forecast.push(mercury[3]);
  drink.push(mercury[4]);
  breath.push(mercury[5]);
  the_way.push(mercury[6]);
}
console.log(drink,breath,the_way,forecast,actual)

let hit_and_run = '';
for(let i = 0; i < breath.length; i++){
  hit_and_run = hit_and_run + 'event-'+breath[i]+':%%'
}
hit_and_run = hit_and_run.slice(0, hit_and_run.length - 2);
console.log(hit_and_run)

let hour_array = singularity.slice(13,18);


const wss = new WebSocket('wss://streaming.forexpros.com/echo/575/6tvwzssq/websocket' );
    
wss.on('open', () => {
  console.log('Inv webSocket connected');
  wss.send('{"_event":"bulk-subscribe","tzID":8,"message":"'+hit_and_run+'"}')
  wss.send('{"_event":"UID","UID":241357129}')  
});


const heartbeat = setInterval(() => {
    const message = '{"_event":"heartbeat","data":"h"}';
    wss.send(message);
  }, 6000);


wss.on('message', (data) => {
  /*
//console.log(data)
if(g==0){
  data = 'a["{\"message\":\"event-481287::{\\\"event_ID\\\":\\\"481287\\\",\\\"actual_color\\\":\\\"redFont\\\",\\\"rev_from_col\\\":\\\"blackFont\\\",\\\"previous\\\":\\\"1.7%\\\",\\\"forecast\\\":\\\"1.4%\\\",\\\"actual\\\":\\\"1.3%\\\",\\\"rev_from\\\":\\\"\\\"}\"}"]'
}
if(g==1){
  data = 'a["{\"message\":\"event-480214::{\\\"event_ID\\\":\\\"480214\\\",\\\"actual_color\\\":\\\"redFont\\\",\\\"rev_from_col\\\":\\\"blackFont\\\",\\\"previous\\\":\\\"3.0%\\\",\\\"forecast\\\":\\\"2.5%\\\",\\\"actual\\\":\\\"2.2%\\\",\\\"rev_from\\\":\\\"\\\"}\"}"]'
}
if(g==2){data = 'a["{\"message\":\"event-480213::{\\\"event_ID\\\":\\\"480213\\\",\\\"actual_color\\\":\\\"greenFont\\\",\\\"rev_from_col\\\":\\\"blackFont\\\",\\\"previous\\\":\\\"0.6%\\\",\\\"forecast\\\":\\\"0.0%\\\",\\\"actual\\\":\\\"0.4%\\\",\\\"rev_from\\\":\\\"\\\"}\"}"]'
}
  g++;
*/
data = data.toString();
if(data.includes('event-')){ 
  let event = data.split('event-');
  event = event[1].slice(0,6);
  if(breath.includes(event)){
    let index = breath.indexOf(event);
    if(actual[index] == 'xxx'){
      let f = '';
      for(let i = 0; i < data.length; i++){
        if(data[i] !== "\\" )
          { f = f + data[i]; }
      }
      let inv = f.split('"actual":"');
      actual[index] = parseFloat(inv[1]);
      if(!actual.includes('xxx')){
       // console.log(actual)
       console.log(new Date(new Date().getTime() + 10800000));
       console.log('inv-5');
     }
   }
 } 
}
});


