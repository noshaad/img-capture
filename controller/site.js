const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const crtypto = require("crypto");
const puppeteer = require('puppeteer');


exports.getHello = (req, res, next) => {
   
  let hash = crtypto
  .createHash("md5")
  .update(Math.floor(Math.random() * (999999 - 100000 + 1) + 100000).toString())
  .digest("hex");
  const Link = decodeURI(req.query.link);
  
  let screenShotUrl = req.rawHeaders[1];
  /*
  (async () => {
    const browser = await puppeteer.launch({
       executablePath: '/usr/bin/chromium-browser'
    });
    const page = await browser.newPage();
    await page.setViewport({width:  1500, height: 800});
    await page.goto(Link);
   	await page.waitForSelector("#readyForSave");
    await page.screenshot({
      path: "./screenshots/screenShot" + hash + ".png",
    });
    await browser.close();
    screenShotUrl += "/screenshots/screenShot" + hash + ".png";

    return res.send(screenShotUrl);
  })();
  
  */
  
  
  

  const mypromis = new Promise((res, rej) => {
  
    puppeteer
      .launch({
        defaultViewport: {
          width: 1500,
          height: 800,
        },
      })
      .then(async (browser) => {
        const page = await browser.newPage();
        console.log(Link);
        return res.send(screenShotUrl);
        await page.goto(Link);
        await page.waitForSelector("#readyForSave");
        await page.screenshot({
          path: "./screenshots/screenShot" + hash + ".png",
        });
        await browser.close();
        screenShotUrl += "/screenshots/screenShot" + hash + ".png";
        console.log(screenShotUrl)

         return res.send(screenShotUrl);
      });
  });
  
  
 
  //  let readStream = fs.createReadStream("./screenshots/screenShot" + i + ".png");
  //  let form = new FormData();
  //  form.append("photo", readStream);

  //  axios({
  //    method: 'post',
  //    url:"https://api.telegram.org/bot5903252156:AAGCrwAMP2her1FIUou61hyzPte6vBhoIEM/sendPhoto?chat_id=@nexcrypto_trade&text=hello",
  //    data:form,
  //  }).then((res) => {
  //    console.log(res)
  //  }).catch((err) => console.log(err));
};

/*
exports.getHello = (req, res, next) => {
  let stop = (id) => {
    clearInterval(id);
  };

  let link = res.get.url;
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
                 
              //  axios({
              //    method: 'post',
              //    url:"https://api.telegram.org/bot5903252156:AAGCrwAMP2her1FIUou61hyzPte6vBhoIEM/sendPhoto?chat_id=@nexcrypto_trade&text=hello",
              //    data:form,
              //  }).then((res) => {
              //    console.log(res)
              //  }).catch((err) => console.log(err));
               i++;
             
             })
        })

          
        
      
      }, 30000);
    })
    .catch((err) => console.log(err));

  console.log(2222222222222222);

  //   console.log(puppeteer)
  let hour = 1000 * 60 * 60 * 60;
  },1)
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
   

  exports.getIndex = (req, res, next) => {
    res.send("<h1>index</h1>");
  }
        
    
  
   
// };

*/
