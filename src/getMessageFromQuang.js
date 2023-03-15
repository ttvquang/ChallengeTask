const { httpGet } = require("./mockHttpService");

// const urlPrefix = `http://www.devinnguyen.vn`;
// let url = ['http://www.devinnguyen.vn/devin0']


const getMessageFromDevin = async (urls) => {
  
  let response = await httpGet(urls);
  let oResponseBody = JSON.parse(response.body);
  let newObject = {};
  
  // console.log('response key: ' + Object.keys(oResponseBody));
  // console.log('response value: ' + Object.values(oResponseBody));    

  if (response.status === 200) {
    console.log('====== Status code = 200 ======')
    newObject['Devin Nguyen'] = Object.values(oResponseBody);
    console.log('New Object key: ' + Object.keys(newObject));
    console.log('New Object value: ' + Object.values(newObject));
  }
  
  if (response.status !== 200) {
    console.log('====== FAILED! Status code = 500 ======')
   
  }
  

  return response;
  

};

module.exports = {
  getMessageFromDevin,
};
