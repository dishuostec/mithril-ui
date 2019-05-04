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
      ToastModel.clean();
    }

    ToastModel.content = value;

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
    redrew && m.redraw();
  },
};
