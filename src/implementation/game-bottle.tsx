import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';
import { GameBottle } from '@/shared/components/games/game-bottles';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

const MODALS_BOTTLE = {
  QUESTION_SUCCESS_BOTTLE: 'modal-correct-activity_bottle',
  QUESTION_WRONG_BOTTLE: 'modal-wrong-activity_bottle'
};

const LENGTH_ANSWERS = 6;

const Ova106p15 = () => {
  const {
    Modal: ModalQuiz,
    Stars,
    notifyReset,
    reportResult
  } = useGamification({
    id: 'gr-1-106-2024-1-sld-15',
    total: LENGTH_ANSWERS
  });

  // Controlamos los modales de la actividad.
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const handleValidateBottle = (result: boolean) => {
    const activityResult = result ? `QUESTION_SUCCESS_BOTTLE` : `QUESTION_WRONG_BOTTLE`;
    setIsOpen(MODALS_BOTTLE[activityResult as keyof typeof MODALS_BOTTLE]);

    reportResult({
      success: result,
      correct: LENGTH_ANSWERS,
      total: LENGTH_ANSWERS
    });
  };

  const closeModal = () => setIsOpen(null);

  return (
    <Panel stars={Stars}>
      <Panel.Section
        interpreter={{ a11yURL: 'vid_int_des_ova-106_sld-15_6.mp4', contentURL: 'vid_int_ova-106_sld-15_6.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-106_sld-15_6.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-106_sld-15_6.mp3" />

            <p className="u-text-center">
              A continuación, encontrarás una actividad interactiva en la cual verás unas letras dentro de unas
              botellas. Tendrás que seleccionar las letras para organizarlas y encontrar las palabras que formarán una
              frase.
            </p>
            <div className="u-flow">
              <GameBottle onResult={(result) => handleValidateBottle(result)}>
                <GameBottle.Word key="activity-bottle" />
                <GameBottle.Letters word="activosfinancieros" />

                <GameBottle.Description>
                  <p className="u-mt-2" style={{ fontStyle: 'normal' }}>
                    <strong>Figura 9.</strong> Actividad de aprendizaje 2.
                  </p>
                </GameBottle.Description>

                <GameBottle.Actions type="validation">
                  <Button label="Comprobar" variant="check" />
                </GameBottle.Actions>

                <GameBottle.Actions type="reset">
                  <Button label="Reiniciar" variant="reset" onClick={notifyReset} />
                </GameBottle.Actions>
              </GameBottle>
            </div>
          </Col>
        </Row>

        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS_BOTTLE.QUESTION_SUCCESS_BOTTLE}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-15_6_correcto.mp3">
          <p>
            ¡Muy bien! Has formado la frase <strong>ACTIVOS FINANCIEROS</strong>, que hace referencia a los instrumentos
            que representan derechos de propiedad o de cobro, como acciones, bonos o títulos de deuda, fundamentales
            para el análisis y gestión en los mercados de capitales.
          </p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS_BOTTLE.QUESTION_WRONG_BOTTLE}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-15_6_incorrecto.mp3">
          <p>Revisa nuevamente el orden de las letras.</p>
        </ToastFeedback>
      </Panel.Section>

      <ModalQuiz audio="assets/audios/aud_ova-106_sld-15_bien.mp3" interpreter={{ contentURL: '', a11yURL: '' }} />
    </Panel>
  );
};

export default Ova106p15;
