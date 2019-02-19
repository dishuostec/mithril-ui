import m from 'mithril';

const ModalModel = {
  isMarkdown: false,
  title: null,
  content: null,
  operations: [],

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
    ModalModel.isMarkdown = false;
    ModalModel.title = null;
    ModalModel.content = null;
    ModalModel.operations = [];

    redrew && m.redraw();
  },
};

export default ModalModel;
