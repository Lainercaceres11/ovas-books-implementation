import { useState } from 'react';
import { useGamification } from '@features/gamification';
import { ToastFeedback } from '@features/toast-feedback';
import { Audio, Col, Row } from 'books-ui';

import { MemoryCardActivity } from '@/components/memory-card';
import { memoryImages } from '@/data/ova-107-sld-5-data';
import { Content } from '@/shared/components/layouts';

import css from '@/styles/ova-107.module.css';

const MODALS = {
  SUCCESS: 'modal-correct-activity',
  WRONG: 'modal-wrong-activity'
};

const LENGTH_QUESTION = 1;

const Ova107p05 = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const { Modal, Stars, notifyReset, reportResult } = useGamification({
    id: 'gr-ova-107-p05-sld-5_4',
    total: LENGTH_QUESTION
  });

  const onResult = (result: boolean): boolean => {
    const activityResult = result ? 'SUCCESS' : 'WRONG';
    setIsOpen(MODALS[activityResult as keyof typeof MODALS]);

    reportResult({
      success: result,
      correct: 1,
      total: 1
    });
    return result;
  };

  const closeModal = () => setIsOpen(null);
  return (
    <Content
      stars={Stars}
      interpreter={{
        a11yURL: 'descriptives/vid_int_des_ova-107_sld-5_4.mp4',
        contentURL: 'content/vid_int_ova-107_sld-5_4.mp4'
      }}>
      <Audio a11y src="assets/audios/descriptives/aud_des_ova-107_sld-5_4.mp3" />
      <Row justifyContent="center" alignItems="center">
        <Col xs="11" mm="10" md="9" lg="5" hd="10" addClass="u-flow u-text-center">
          <Audio src="assets/audios/content/aud_ova-107_sld-5_4.mp3" />
          <h2>Actividad de aprendizaje 1</h2>

          <p>
            A continuación, encontrarás una actividad interactiva en la cual podrás realizar un juego de memoria, de
            reconocimiento de autores o pensadores representativos de la filosofía moderna y su aprendizaje.
          </p>

          <MemoryCardActivity
            notifyReset={notifyReset}
            background="assets/images/ova_107_sld_5_fondo.webp"
            addClass={css['memory-card']}
            onResult={onResult}
            memoryImages={memoryImages}>
            <p className="u-text-center">
              <strong>Animación 1.</strong> Actividad de aprendizaje - Juego de memoria.
            </p>
          </MemoryCardActivity>
        </Col>
      </Row>

      <Modal audio="assets/audios/content/aud_bien.mp3" />

      <ToastFeedback
        type="success"
        isOpen={isOpen === MODALS.SUCCESS}
        onClose={closeModal}
        audio="assets/audios/content/aud_correcto.mp3">
        <p>
          <strong>¡Excelente!</strong> Usted ha reconocido los autores, pensadores o filósofos más representativos de la
          filosofía moderna y su aprendizaje.
        </p>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.WRONG}
        onClose={closeModal}
        audio="assets/audios/content/aud_incorrecto.mp3">
        <p>
          <strong>¡Ánimo!</strong> Usted puede volver a intentar reconocer a los autores, pensadores o filósofos más
          representativos de la filosofía moderna y su aprendizaje..
        </p>
      </ToastFeedback>
    </Content>
  );
};

export default Ova107p05;
