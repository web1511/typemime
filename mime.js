const mime = require("mime");

module.exports = (name) => {
  let mimeType = mime.getType(name);

  console.log(`文件类型是：${mimeType}`);
};
