import m from 'mithril';

export const ToastModel = {
  timer: null,
  class: null,
  content: null,

  setClass: (value) => {
    ToastModel.class = value;
  },
  setContent: (value, displayTime = 3000) => {
    if (ToastModel.timer) {
      clearTimeout(ToastModel.timer);
      ToastModel.timer = null;
    }

    ToastModel.content = value;

    ToastModel.timer = setTimeout(() => {
      ToastModel.timer = null;
      ToastModel.hide(true);
    }, displayTime);
  },

  display: () => {
    m.redraw();
  },
  hide: (redrew) => {
    ToastModel.content = null;
    ToastModel.class = null;

    redrew && m.redraw();
  },
};
