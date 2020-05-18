const { exec } = require("child_process");
module.exports = () => {
  return new Promise((resolve, reject) => {
    exec("git rev-parse HEAD", (err, stdout) => {
      if (err) {
        return reject(err);
      }
      resolve(stdout.replace("\n", ""));
    });
  });
};
