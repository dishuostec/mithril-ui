import m from 'mithril';

export const ModalModel = {
  class: null,
  isMarkdown: false,
  title: null,
  content: null,
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

  display: () => {
    m.redraw();
  },
  hide: (redrew) => {
    ModalModel.class = null;
    ModalModel.isMarkdown = false;
    ModalModel.title = null;
    ModalModel.content = null;
    ModalModel.operations = [];

    redrew && m.redraw();
  },
};
