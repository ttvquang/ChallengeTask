const { httpGet } = require("./mockHttpService");

const getMessageFromDevin = async (urls) => {
  
  let result = [];

  var promiseArray = urls.map(async (url) => {
    let response = await httpGet(url);
    // let response =  httpGet(urls[i]);
    let oResponseBody = JSON.parse(response.body);
    let newObject = {};
    
    if (response.status === 200) {
      // console.log('====== Status code = 200 ======')
      newObject['Devin Nguyen'] = Object.values(oResponseBody).toString();
    }
    
    else {
      // console.log('======= Status code is not equal 200 =======')
      newObject['FAILED'] = Object.values(oResponseBody).toString();
    }   
  
    result.push(newObject);   
  })

  await Promise.all(promiseArray);

  return result;

}

// const getMessageFromDevin = async (urls) => {
//   let result = [];
  
//   for (let i=0; i<urls.length; i++) {

//     let response = await httpGet(urls[i]);
//     // let response =  httpGet(urls[i]);
//     let oResponseBody = JSON.parse(response.body);
//     let newObject = {};
    
//     // console.log('response value: ' + Object.values(oResponseBody).toString());    
//     // console.log('response value type: ' + typeof(Object.values(oResponseBody).toString()));    
  
//     if (response.status === 200) {
//       // console.log('====== Status code = 200 ======')
//       newObject['Devin Nguyen'] = Object.values(oResponseBody).toString();
//       // console.log('New Object key: ' + Object.keys(newObject));
//       // console.log('New Object value: ' + Object.values(newObject[0]));
//       // console.log('New Object value: ' + Object.values(newObject)[0]);
//       // console.log('New Object value data type: ' + typeof(Object.values(newObject)[0]));
//     }
    
//     if (response.status !== 200) {
//       // console.log('======= Status code is not equal 200 =======')
//       newObject['FAILED'] = Object.values(oResponseBody).toString();
//     }   

//     result[i] = newObject;
//   } 

//   return result;

// };

module.exports = {
  getMessageFromDevin,
};
