import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { useGamification } from '@features/gamification';
import { ToastFeedback } from '@features/toast-feedback';
import { GameBalloons } from '@games/game-balloons';
import { Button } from '@ui';
import { Panel } from '@/shared/components/layouts';

const MODALS = {
  SUCCESS: 'modal-correct-activity',
  WRONG: 'modal-wrong-activity'
};
const LENGTH_ANSWERS = 3;

const Ova135p14 = () => {
  const {
    Modal: ModalQuiz,
    Stars,
    notifyReset,
    reportResult
  } = useGamification({
    id: 'gr-1-135-2025-1-sld-14',
    total: LENGTH_ANSWERS
  });

  // Controlamos los modales de la actividad.
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const handleValidate = ({ result }: { result: boolean }) => {
    const activityResult = result ? 'SUCCESS' : 'WRONG';
    setIsOpen(MODALS[activityResult as keyof typeof MODALS]);

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
        interpreter={{ a11yURL: 'vid_int_des_ova-135_sld-14_1.mp4', contentURL: 'vid_int_ova-135_sld-14_1.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-135_sld-14_1.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-135_sld-14_1.mp3" />

            <p className="u-text-center">
              A continuación, encontrarás una actividad interactiva con unos globos aerostáticos que cargan palabras en
              desorden, de una frase que tiene que ver con los contenidos de este recurso. El objetivo es hacer clic en
              los globos en el orden correcto para formar la frase adecuada.
            </p>
            <div className="u-flow">
              <GameBalloons onResult={handleValidate}>
                <GameBalloons.Level
                  words={[
                    'sostiene que',
                    'independientemente',
                    'de la',
                    'humana.',
                    'hay cosas',
                    'conciencia',
                    'existen',
                    'El realismo'
                  ]}
                  sentence="El realismo sostiene que hay cosas existen independientemente de la conciencia humana."
                />

                <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6 u-mt-5">
                  <GameBalloons.Button>
                    <Button label="Comprobar" variant="check" />
                  </GameBalloons.Button>

                  <GameBalloons.Button type="reset">
                    <Button label="Reintentar" variant="reset" onClick={notifyReset} />
                  </GameBalloons.Button>
                </Row>
              </GameBalloons>
            </div>
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section
        interpreter={{ a11yURL: 'vid_int_des_ova-135_sld-14_2.mp4', contentURL: 'vid_int_ova-135_sld-14_2.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-135_sld-14_2.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-135_sld-14_2.mp3" />

            <div className="u-flow">
              <GameBalloons onResult={handleValidate}>
                <GameBalloons.Level
                  words={[
                    'de las ideas',
                    'trascendentes.',
                    'son objetos',
                    'El mundo',
                    'las ideas',
                    'porque',
                    'del objetivismo',
                    'es un ejemplo'
                  ]}
                  sentence="El mundo de las ideas es un ejemplo del objetivismo porque las ideas son objetos trascendentes."
                />

                <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6 u-mt-5">
                  <GameBalloons.Button>
                    <Button label="Comprobar" variant="check" />
                  </GameBalloons.Button>

                  <GameBalloons.Button type="reset">
                    <Button label="Reintentar" variant="reset" onClick={notifyReset} />
                  </GameBalloons.Button>
                </Row>
              </GameBalloons>
            </div>
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section
        interpreter={{ a11yURL: 'vid_int_des_ova-135_sld-14_3.mp4', contentURL: 'vid_int_ova-135_sld-14_3.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-135_sld-14_3.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-135_sld-14_3.mp3" />

            <div className="u-flow">
              <GameBalloons onResult={handleValidate}>
                <GameBalloons.Level
                  words={['es útil.', 'que el', 'conocimiento', 'considera', 'más que', 'El pragmatismo', 'válido']}
                  sentence="El pragmatismo considera que el conocimiento más que válido es útil."
                />

                <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6 u-mt-5">
                  <GameBalloons.Button>
                    <Button label="Comprobar" variant="check" />
                  </GameBalloons.Button>

                  <GameBalloons.Button type="reset">
                    <Button label="Reintentar" variant="reset" onClick={notifyReset} />
                  </GameBalloons.Button>
                </Row>
              </GameBalloons>
            </div>
          </Col>
        </Row>
      </Panel.Section>

      <ToastFeedback
        type="success"
        isOpen={isOpen === MODALS.SUCCESS}
        onClose={closeModal}
        audio="assets/audios/content/aud_incorrecto.mp3">
        <p>¡Muy bien!</p>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.WRONG}
        onClose={closeModal}
        audio="assets/audios/content/aud_correcto.mp3">
        <p>¡Vuelve a intentarlo!</p>
      </ToastFeedback>

      <ModalQuiz audio="assets/audios/aud_ova-135_sld-14_bien.mp3" interpreter={{ contentURL: '', a11yURL: '' }} />
    </Panel>
  );
};

export default Ova135p14;
