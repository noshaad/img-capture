const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
exports.getHello = (req, res, next) => {
  let stop = (id) => {
    clearInterval(id);
  };
  // setInterval(()=>{

  let links = [];
  axios
    .get("https://www.nexcrypto.trade/social-media")

    // Show response data
    .then((res) => {
      let i = 0;
      links = res.data;
      console.log(links);
      let findlinkInterval = setInterval(() => {
        console.log(i);
        console.log('links[i]');
        console.log(links[i]);
        if (!links[i]) {
          stop(findlinkInterval);
          return false;
        }

        const mypromis = new Promise((res,rej)=>{
          const puppeteer = require("puppeteer");

          puppeteer
             .launch({
               defaultViewport: {
                 width: 1500,
                 height: 800,
               },
             })
             .then(async (browser) => {
               const page = await browser.newPage();
               console.log(links[i])
               await page.goto(links[i]);
               await page.waitForSelector("#readyForSave");
               await page.screenshot({
                 path: "./screenshots/screenShot" + i + ".png",
               });
   
   
               await browser.close();

              
               let readStream = fs.createReadStream("./screenshots/screenShot" + i + ".png");
               let form = new FormData();
                 form.append("photo", readStream);
                 
               axios({
                 method: 'post',
                 url:"https://api.telegram.org/bot5903252156:AAGCrwAMP2her1FIUou61hyzPte6vBhoIEM/sendPhoto?chat_id=@nexcrypto_trade&text=hello",
                 data:form,
               }).then((res) => {
                 console.log(res)
               }).catch((err) => console.log(err));
               i++;
             
             })
        })

          
        
      
      }, 30000);
    })
    .catch((err) => console.log(err));

  console.log(2222222222222222);

  //   console.log(puppeteer)
  let hour = 1000 * 60 * 60 * 60;
  // },1)
  res.send("<h1>Hello</h1>");
};


// exports.getHello = (req, res, next) => {
            // console.count()
            // let readStream = fs.createReadStream("./screenshots/screenShot1.png");
            // let form = new FormData();
            //   form.append("photo", readStream);
              
            // axios({
            //   method: 'post',
            //   url:"https://api.telegram.org/bot5903252156:AAGCrwAMP2her1FIUou61hyzPte6vBhoIEM/sendPhoto?chat_id=@nexcrypto_trade&text=hello",
            //   data:form,
            // }).then((res) => {
            //   console.log(res)
            // }).catch((err) => console.log(err));
   
        
    
  
   
// };

