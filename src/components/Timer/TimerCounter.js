import m from 'mithril';

const counterSet = new Map();
let timer;
let lastTick;

const pad0 = (number) => number < 10 ? '0' + number : number;

const formatTimer = (remainSeconds) => {
  let seconds = remainSeconds % 60;
  let minutes = (remainSeconds - seconds) / 60 % 60;
  let hours = Math.floor(remainSeconds / 3600);

  return `${pad0(hours)}:${pad0(minutes)}:${pad0(seconds)}`;
};

const remove = (id, skipOnExpiredCallback = false) => {
  if (!counterSet.has(id)) {
    return;
  }

  if (!skipOnExpiredCallback) {
    const [, onExpiredCallback] = counterSet.get(id);
    onExpiredCallback && onExpiredCallback();
  }

  counterSet.delete(id);

  m.redraw();
};

const start = (id, count, onExpiredCallback) => {
  counterSet.set(id, [count, onExpiredCallback]);

  if (count <= 0) {
    remove(id);
    return;
  }

  if (!timer) {
    lastTick = Date.now();
    timer = setTimeout(tick, 1000);
  }

  m.redraw();
};

const tick = () => {
  const duration = Math.floor((Date.now() - lastTick) / 1000);
  lastTick = Date.now();

  counterSet.forEach((counter, id) => {

    if (counter[0] > duration) {
      counter[0] -= duration;
    } else {
      remove(id);
    }
  });

  if (counterSet.size) {
    timer = setTimeout(tick, 1000);
  } else {
    timer = null;
  }

  m.redraw();
};

const get = (id) => counterSet.has(id) ? counterSet.get(id)[0] : 0;

const format = (id) => formatTimer(get(id));

export const TimerCounter = {
  start,
  remove,
  get,
  format,
};
