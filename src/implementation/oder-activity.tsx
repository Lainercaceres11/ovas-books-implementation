import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { OrderPhraseActivity } from '@/shared/components/activities/order-phrase-activity';
import { Avatar, AvatarVariation } from '@/shared/components/features/avatar';
import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';
import { Content } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

import css from '@/styles/ova-74.module.css';

const MODALS = {
  TRUE: 'modal-correct-activity',
  FALSE: 'modal-wrong-activity'
};

const LENGTH_ANSWERS = 1;

const Ova74p18 = () => {
  // Controlamos los modales de la actividad.
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const {
    Modal: ModalQuiz,
    Stars,
    notifyReset,
    reportResult
  } = useGamification({
    id: 'gr-2-74-2025-1-sld-18',
    total: LENGTH_ANSWERS
  });

  /**
   * Función que se encarga de validar
   * el valor proporcionado por Selects.
   * @param {object[]} result
   */
  const handleValidate = ({ result }: { result: boolean }) => {
    const activityResult = result.toString().toUpperCase();
    console.log('🚀 ~ handleValidate ~ activityResult:', activityResult);
    setIsOpen(MODALS[activityResult as keyof typeof MODALS]);
    reportResult({
      success: result,
      correct: LENGTH_ANSWERS,
      total: LENGTH_ANSWERS
    });
  };

  const closeModal = () => setIsOpen(null);
  return (
    <Content
      stars={Stars}
      interpreter={{
        a11yURL: 'descriptives/vid_int_des_ova-74_sld-18.mp4',
        contentURL: 'content/vid_int_ova-74_sld-18.mp4'
      }}>
      <Audio a11y src="assets/audios/descriptives/aud_des_ova-74_sld-18.mp3" />
      <Row justifyContent="center" alignItems="center">
        <Col xs="11" mm="10" md="9" lg="5" hd="4" addClass="u-flow">
          <Avatar variation={AvatarVariation.THINKING} size="34.375rem" title="Figure 13." />
        </Col>
        <Col xs="11" mm="10" md="9" lg="5" hd="5" addClass="u-flow">
          <Audio src="assets/audios/content/aud_ova-74_sld-18.mp3" />
          <p className="u-font-bold u-text-center u-text-upper">Life changes</p>
          <p className="u-font-bold u-text-center">
            Based on the story about Lisa's life. Read each chunk of information below. Then, rearrange them in the
            correct order to show a coherent text.{' '}
          </p>

          <OrderPhraseActivity onResult={handleValidate}>
            <OrderPhraseActivity.sentence
              addClass={css['order-element']}
              sentence={{
                id: 1,
                words: [
                  '1. In the city, I am always tired. In the countryside, life is slower and easier.',
                  '2. I sometimes miss the city, but I feel happier and healthier in the countryside.',
                  '3. Sometimes, I visit the countryside. It is quiet, clean, and peaceful.',
                  '4. My name is Lisa. I live in the city. It is busy, noisy, and expensive.',
                  '5. Sometimes, I visit the countryside. It is quiet, clean, and peaceful.'
                ],
                answer:
                  '4. My name is Lisa. I live in the city. It is busy, noisy, and expensive. 5. Sometimes, I visit the countryside. It is quiet, clean, and peaceful. 1. In the city, I am always tired. In the countryside, life is slower and easier. 3. Sometimes, I visit the countryside. It is quiet, clean, and peaceful. 2. I sometimes miss the city, but I feel happier and healthier in the countryside.'
              }}
            />
            <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
              <OrderPhraseActivity.Button>
                <Button variant="check" label="Check" />
              </OrderPhraseActivity.Button>

              <OrderPhraseActivity.Button type="reset">
                <Button onClick={notifyReset} variant="reset" label="Reset" />
              </OrderPhraseActivity.Button>
            </Row>
          </OrderPhraseActivity>
        </Col>
      </Row>

      <ToastFeedback
        type="success"
        isOpen={isOpen === MODALS.TRUE}
        onClose={closeModal}
        audio="assets/audios/aud_ova-74_sld-18_modal_correcto.mp3"
        interpreter={{
          contentURL: 'vid_int_ova-74_sld-18_modalcorrecto.mp4'
        }}
      />

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.FALSE}
        onClose={closeModal}
        audio="assets/audios/aud_ova-74_sld-18_modal_incorrecto.mp3"
        interpreter={{
          contentURL: 'vid_int_ova-74_sld-18_modalincorrecto.mp4'
        }}
      />

      <ModalQuiz audio="assets/audios/aud_ova-74_sld-18_bien.mp3" interpreter={{ contentURL: '', a11yURL: '' }} />
    </Content>
  );
};

export default Ova74p18;
