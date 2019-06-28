import m from 'mithril';

export const ToastModel = {
  timer: null,
  class: null,
  content: null,

  setClass: (value) => {
    ToastModel.class = value;
  },

  setContent: (value, displayTime = null) => {
    if (ToastModel.timer) {
      clearTimeout(ToastModel.timer);
      ToastModel.clean();
    }

    ToastModel.content = value;
    if (displayTime === null) {
      displayTime = 3000;
      displayTime += Array.isArray(value)
        ? value.length * 500
        : value.length * 80;
    }

    ToastModel.timer = setTimeout(() => {
      ToastModel.timer = null;
      ToastModel.hide(true);
    }, displayTime);
  },

  clean: () => {
    ToastModel.timer = null;
    ToastModel.class = null;
    ToastModel.content = null;
  },

  display: () => {
    m.redraw();
  },
  hide: (redrew) => {
    ToastModel.clean();
    if (redrew) {
      console.log('!!!!!!!!!!!!!! do hide', window.m === m);
      m.redraw();
    }
  },
};
