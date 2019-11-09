export const API_DELAY = 3;
export const delay = (delaySec = API_DELAY) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, delaySec * 1000);
  });
