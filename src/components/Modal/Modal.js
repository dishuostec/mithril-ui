import m from 'mithril';
import classNames from 'classnames';
import Button from '../../elements/Button/Button';
import Card from '../Card/Card';
import CardContent from '../Card/CardContent';
import CardHeader from '../Card/CardHeader';
import CardOperations from '../Card/CardOperations';
import ModalModel from './ModalModel';
import './Modal.scss';

const Modal = {
  view: ({ attrs: { class: className }, children }) => (
    <div class={classNames('modal', className, { 'is-active': ModalModel.content })}>
      <div class="modal-background" />
      <div class="modal-content">

        <Card>

          {ModalModel.title && (
            <CardHeader class="is-centered"
              title={ModalModel.title}
            />
          )}

          <CardContent>
            {ModalModel.isMarkdown
              ? 'markdown'
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

      </div>
    </div>
  ),
};

export default Modal;
