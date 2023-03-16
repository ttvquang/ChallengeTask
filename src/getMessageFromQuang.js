const { httpGet } = require("./mockHttpService");

// const urlPrefix = `http://www.devinnguyen.vn`;
// let url = ['http://www.devinnguyen.vn/devin0']


const getMessageFromDevin = async (urls) => {
  let result = [];
  
  for (let i=0; i<urls.length; i++) {

    let response = await httpGet(urls[i]);
    let oResponseBody = JSON.parse(response.body);
    let newObject = {};
    
    console.log('response value: ' + Object.values(oResponseBody).toString());    
    console.log('response value type: ' + typeof(Object.values(oResponseBody).toString()));    
  
    if (response.status === 200) {
      console.log('====== Status code = 200 ======')
      newObject['Devin Nguyen'] = Object.values(oResponseBody).toString();
      // console.log('New Object key: ' + Object.keys(newObject));
      // console.log('New Object value: ' + Object.values(newObject[0]));
      // console.log('New Object value: ' + Object.values(newObject)[0]);
      // console.log('New Object value data type: ' + typeof(Object.values(newObject)[0]));
    }
    
    if (response.status !== 200) {
      console.log('====== Status code is not equal 200 ======')
      newObject['FAILED'] = Object.values(oResponseBody).toString();
    }   

    result[i] = newObject;
  } 

  return result;

};

module.exports = {
  getMessageFromDevin,
};
