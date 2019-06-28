import m from 'mithril';
import { Button } from '../../elements/Button/Button';
import { Card } from '../Card/Card';
import { CardContent } from '../Card/CardContent';
import { CardHeader } from '../Card/CardHeader';
import { CardOperations } from '../Card/CardOperations';
import { Markdown } from '../Markdown/Markdown';
import { ModalBase } from './ModalBase';
import { ModalModel } from './ModalModel';
import './Modal.scss';

export const Modal = {
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
              typeof ModalModel.content === 'string'
                ? (
                  <p class="has-text-centered">{ModalModel.content}</p>
                )
                : ModalModel.content
            )}
        </CardContent>

        <CardOperations>
          {(ModalModel.operations.length
              ? ModalModel.operations
              : (
                <Button
                  onclick={ModalModel.hide}
                  class="is-primary"
                >
                  {ModalModel.DEFAULT_BUTTON}
                </Button>
              )
          )}
        </CardOperations>

      </Card>
    </ModalBase>
  ),
};
