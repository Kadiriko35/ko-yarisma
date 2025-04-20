const { contextBridge } = require('electron');
const fs = require('fs');
const path = require('path');

contextBridge.exposeInMainWorld('api', {
  getQuestions: () => {
    const data = fs.readFileSync(path.join(__dirname, 'data/questions.json'));
    return JSON.parse(data);
  },
  getRewards: () => {
    const data = fs.readFileSync(path.join(__dirname, 'data/rewards.json'));
    return JSON.parse(data);
  }
});
