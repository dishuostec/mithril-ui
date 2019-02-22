import m from 'mithril';
import Button from '../../elements/Button/Button';
import Card from '../Card/Card';
import CardContent from '../Card/CardContent';
import CardHeader from '../Card/CardHeader';
import CardOperations from '../Card/CardOperations';
import Markdown from '../Markdown/Markdown';
import ModalBase from './ModalBase';
import ModalModel from './ModalModel';
import './Modal.scss';

const Modal = {
  view: () => (
    <ModalBase isActive={ModalModel.content}>
      <Card class={ModalModel.class}>

        {ModalModel.title && (
          <CardHeader class="is-centered"
            title={ModalModel.title}
          />
        )}

        <CardContent>
          {ModalModel.isMarkdown
            ? <Markdown content={ModalModel.content} />
            : (
              <p class="has-text-centered">{ModalModel.content}</p>
            )}
        </CardContent>

        <CardOperations>
          {(ModalModel.operations.length
              ? ModalModel.operations
              : <Button onclick={ModalModel.hide} class="is-primary">确定</Button>
          )}
        </CardOperations>

      </Card>
    </ModalBase>
  ),
};

export default Modal;
