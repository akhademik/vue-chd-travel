export const delayAction = (action, timer) => {
  const timerID = setTimeout(() => {
    action();
    clearTimeout(timerID);
  }, timer);
};
