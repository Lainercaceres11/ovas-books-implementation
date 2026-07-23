import { useRef, useState } from 'react';
import { Audio, Col, Row } from 'books-ui';
import { DragAndDrop } from 'books-ui';

import { DndActivity } from '@activities/dnd-activity';
import { useGamification } from '@features/gamification';
import { ToastFeedback } from '@features/toast-feedback';
import { Button } from '@ui';
import { currentParagraph } from '@shared/utils/current-paragraph';
import { Avatar, AvatarVariation } from '@/shared/components/features/avatar';
import { Content } from '@/shared/components/layouts';

const MODALS = {
  SUCCESS: 'modal-correct-activity',
  WRONG: 'modal-wrong-activity'
};

const LENGTH_QUESTION = 4;

const Ova48p15 = () => {
  const refTextWrapperUno = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const { Modal, Stars, notifyReset, reportResult } = useGamification({
    id: 'gr-2-105-2024-2-sld-15',
    total: 1
  });

  const handleValidate = ({ result }: { result: boolean }) => {
    const activityResult = result ? 'SUCCESS' : 'WRONG';
    setIsOpen(MODALS[activityResult as keyof typeof MODALS]);

    reportResult({
      success: result,
      correct: LENGTH_QUESTION,
      total: LENGTH_QUESTION
    });
  };

  const closeModal = () => setIsOpen(null);
  return (
    <Content
      stars={Stars}
      interpreter={{
        a11yURL: 'descriptives/vid_int_des_ova-48_sld-15.mp4',
        contentURL: 'content/vid_int_ova-48_sld-15.mp4'
      }}>
      <Audio a11y src="assets/audios/descriptives/aud_des_ova-48_sld-15.mp3" />
      <Row justifyContent="center" alignItems="center">
        <Col xs="11" mm="10" md="9" lg="5" hd="6" addClass="u-flow">
          <Audio addClass="u-m-0" src="assets/audios/content/aud_ova-48_sld-15.mp3" />

          <p>
            La economía agraria es una rama de la economía que estudia la forma en que se organizan, utilizan y asignan
            los recursos productivos en el sector agropecuario, con el propósito de analizar los procesos de producción,
            distribución, intercambio y consumo de bienes agrícolas y pecuarios. Su objeto de estudio incluye tanto las
            actividades productivas del campo como las relaciones económicas, sociales e institucionales que influyen en
            el desarrollo rural.
          </p>

          <p className="u-font-bold">
            A continuación, encontrarás un párrafo en el que hay cuatro espacios sin llenar; por favor, arrastrar el
            término correcto a cada uno de los espacios para completar el enunciado.
          </p>

          <DndActivity
            id="ova-08-dnd-1"
            minCorrectDrags={4}
            announcements={() => currentParagraph({ id: 'paragraph-activity', container: refTextWrapperUno?.current })}
            onResult={handleValidate}>
            <DragAndDrop.Container id="general-1" label="Conjunto de palabras" addClass="u-grid u-grid-cols-3">
              <DragAndDrop.Drag id="01" label="políticas">
                <span>políticas</span>
              </DragAndDrop.Drag>
              <DragAndDrop.Drag id="02" label="productividad">
                <span>productividad</span>
              </DragAndDrop.Drag>

              <DragAndDrop.Drag id="03" label="necesidades">
                <span>necesidades</span>
              </DragAndDrop.Drag>

              <DragAndDrop.Drag id="04" label="bienestar">
                <span>bienestar</span>
              </DragAndDrop.Drag>
            </DragAndDrop.Container>

            <span ref={refTextWrapperUno} className={`u-text-justify u-leading-loose u-block u-m-3  `}>
              La economía agraria se interesa por temas como la <strong>1.</strong>
              <DragAndDrop.Drop id="drop1-1" validate={['02']} label="primer espacio" addClass="u-m-1" />
              agrícola, la tenencia de la tierra, los sistemas de producción, los mercados agroalimentarios, las{' '}
              <strong>2.</strong>
              <DragAndDrop.Drop id="drop1-2" validate={['01']} label="segundo espacio" addClass="u-m-1" /> y aumenta
              públicas rurales y el desarrollo sostenible. Su objetivo principal es comprender cómo se satisfacen las{' '}
              <strong>3.</strong>{' '}
              <DragAndDrop.Drop id="drop1-3" validate={['03']} label="tercer espacio" addClass="u-m-1" /> alimentarias
              de la sociedad y cómo se generan ingresos y <strong>4.</strong>{' '}
              <DragAndDrop.Drop id="drop1-4" validate={['04']} label="cuarto espacio" addClass="u-m-1" /> en el sector
              rural.
            </span>

            <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6">
              <DndActivity.Button>
                <Button label="Comprobar" variant="check" />
              </DndActivity.Button>
              <DndActivity.Button type="reset">
                <Button label="Reintentar" variant="reset" onClick={notifyReset} />
              </DndActivity.Button>
            </Row>
          </DndActivity>
        </Col>

        <Col xs="11" mm="10" md="9" lg="6" hd="3">
          <Avatar title="Figura 1." variation={AvatarVariation.THINKING} />
        </Col>
      </Row>

      <Modal audio="assets/audios/content/aud_gr1_ova-8_sld-4 (Bien).mp3" />

      <ToastFeedback
        type="success"
        isOpen={isOpen === MODALS.SUCCESS}
        onClose={closeModal}
        interpreter={{ contentURL: 'vid_int_ova-08_sld-4 (Correcto).mp4' }}
        audio="assets/audios/content/aud_gr1_ova-8_sld-4 (Correcto).mp3">
        <p>Has emparejado exitosamente los términos. ¡Bien hecho!</p>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.WRONG}
        onClose={closeModal}
        interpreter={{ contentURL: 'vid_int_ova-08_sld-4 (Incorrecto).mp4' }}
        audio="assets/audios/content/aud_gr1_ova-8_sld-4 (Incorrecto).mp3">
        <div className="u-flow">
          <p>Intenta de nuevo y busca la combinación correcta. ¡Tú puedes!</p>
        </div>
      </ToastFeedback>
    </Content>
  );
};

export default Ova48p15;
