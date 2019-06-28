import m from 'mithril';

export const ModalModel = {
  DEFAULT_BUTTON: 'OK',
  class: null,
  isMarkdown: false,
  title: null,
  content: null,
  onClose: null,
  operations: [],

  setClass: (value) => {
    ModalModel.class = value;
  },
  setTitle: (value) => {
    ModalModel.title = value;
  },
  setContent: (value) => {
    ModalModel.content = value;
  },
  setIsMarkdown: () => {
    ModalModel.isMarkdown = true;
  },
  addOperation: (value) => {
    ModalModel.operations.push(value);
  },
  setOnClose: (value) => {
    ModalModel.onClose = value;
  },

  display: () => {
    m.redraw();
  },
  hide: (redrew) => {
    ModalModel.class = null;
    ModalModel.isMarkdown = false;
    ModalModel.title = null;
    ModalModel.content = null;
    ModalModel.operations = [];
    if (ModalModel.onClose) {
      ModalModel.onClose();
      ModalModel.onClose = null;
    }

    redrew && m.redraw();
  },
};
