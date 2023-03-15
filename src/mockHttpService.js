const urlPrefix = `http://www.devinnguyen.vn`;

const urlToResponseLookup = {
  [`${urlPrefix}/devin0`]: 'MY NAME IS DEVIN',
  [`${urlPrefix}/devin1`]: 'mynameisThang',
  [`${urlPrefix}/devin2`]: 'DiegoAndDevinAreBrother',
};

const httpRequestMockP = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const responseData = urlToResponseLookup[url];
    if (responseData) {
      resolve(responseData);
    } else {
      reject(new Error('The request has been failed'));
    }
  }, 200);
});

const httpGet = async (url) => {
  try {
    const message = await httpRequestMockP(url);
    return { status: 200, body: JSON.stringify({ message }) };
  } 
  catch (err) {
    return { status: 500, body: JSON.stringify({ message: err.message }) };
  }
};

module.exports = {
  httpGet,
};
