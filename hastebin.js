const axios = require("axios");
var qs = require("qs");

class Hastebin {

  async newPaste(paste_code) {
    if (!paste_code) {
      throw new Error("Paste code is required");
    }
    let data = paste_code;

    let config = {
      method: "post",
      url: "https://www.toptal.com/developers/hastebin/documents",
      headers: {
        "Content-Type": "text/plain",
      },
      data: data,
    };
    const response = await axios(config).catch(function (error) {
      console.log(error);
      return;
    });
    return response.data.key;
  }
  async getPaste(paste_key) {
    let data = qs.stringify({
      '': '' 
    });
    let config = {
      method: 'get',
      url: 'https://www.toptal.com/developers/hastebin/raw/' + paste_key,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    const response = await axios(config).catch(function (error) {
      console.log(error);
      return;
    });
    return response.data;
  }
}
module.exports = Hastebin;
