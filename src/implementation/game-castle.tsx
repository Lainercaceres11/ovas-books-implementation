import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { data } from '@/data/ova-22-sld-4-data';
import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';
import { GameCastle } from '@/shared/components/games/game-castle';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

const MODALS = {
  QUESTION_1_SUCCESS: 'modal-correct-activity-q1',
  QUESTION_1_WRONG: 'modal-wrong-activity-q1',
  QUESTION_2_SUCCESS: 'modal-correct-activity-q2',
  QUESTION_2_WRONG: 'modal-wrong-activity-q2',
  QUESTION_3_SUCCESS: 'modal-correct-activity-q3',
  QUESTION_3_WRONG: 'modal-wrong-activity-q3',
  QUESTION_4_SUCCESS: 'modal-correct-activity-q4',
  QUESTION_4_WRONG: 'modal-wrong-activity-q4'
};

const LENGTH_ANSWERS = 4;

const Ova22p04 = () => {
  const {
    Modal: ModalQuiz,
    Stars,
    notifyReset,
    reportResult
  } = useGamification({
    id: 'gr-1-22-2005-1-sld-4',
    total: LENGTH_ANSWERS
  });
  // Controlamos los modales de la actividad.
  const [isOpen, setIsOpen] = useState<string | null>(null);

  /**
   * Función que se encarga de validar
   * el valor proporcionado por Selects.
   * @param {object[]} result
   */
  const handleValidate =
    (questionKey: string) =>
    ({ result }: { result: boolean }) => {
      const activityResult = result ? `${questionKey}_SUCCESS` : `${questionKey}_WRONG`;
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
        interpreter={{ a11yURL: 'vid_int_des_ova-22_sld-4_1.mp4', contentURL: 'vid_int_ova-22_sld-4_1.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-22_sld-4_1.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="8" hd="11" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-22_sld-4_1.mp3" />
            <p className="u-text-center">
              A continuación, realizaremos la autoevaluación de conocimientos adquiridos en este recurso a través de una
              actividad interactiva. En este juego, tu misión es construir un castillo eligiendo los bloques correctos.
              ¡Cada respuesta correcta te acerca más a completar el castillo! Responde cada pregunta seleccionando el
              bloque adecuado para avanzar en la construcción.
            </p>
            <GameCastle>
              <GameCastle.Level
                intro
                label="Haz clic en la opción que lleva la palabra correcta para cada oración."
                title="Animación 3."
                alt="Actividad de presaberes."
              />
            </GameCastle>
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section
        interpreter={{ a11yURL: 'vid_int_des_ova-22_sld-4_2.mp4', contentURL: 'vid_int_ova-22_sld-4_2.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-22_sld-4_2.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="8" hd="11" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-22_sld-4_2.mp3" />
            <p className="u-text-center">
              A continuación, realizaremos la autoevaluación de conocimientos adquiridos en este recurso a través de una
              actividad interactiva. En este juego, tu misión es construir un castillo eligiendo los bloques correctos.
              ¡Cada respuesta correcta te acerca más a completar el castillo! Responde cada pregunta seleccionando el
              bloque adecuado para avanzar en la construcción.
            </p>
            <GameCastle onResult={(result) => handleValidate('QUESTION_1')({ result })} question={data[0]}>
              <GameCastle.Level title="Animación 3." alt="Actividad de presaberes." />
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameCastle.Button>
                  <Button variant="check" label="Comprobar" />
                </GameCastle.Button>

                <GameCastle.Button type="reset">
                  <Button variant="reset" label="Reiniciar" onClick={notifyReset} />
                </GameCastle.Button>
              </Row>
            </GameCastle>
          </Col>
        </Row>

        <ToastFeedback
          label="¡Excelente!"
          type="success"
          isOpen={isOpen === MODALS.QUESTION_1_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-22_sld-4_1_correcto.mp3">
          <p>Lo ambiental es uno de los tres pilares clave de la sostenibilidad.</p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_1_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-22_sld-4_1_incorrecto.mp3">
          <p>La sostenibilidad no incluye ese aspecto como pilar central.</p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{ a11yURL: 'vid_int_des_ova-22_sld-4_3.mp4', contentURL: 'vid_int_ova-22_sld-4_3.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-22_sld-4_3.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="8" hd="11" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-22_sld-4_3.mp3" />
            <p className="u-text-center">
              A continuación, realizaremos la autoevaluación de conocimientos adquiridos en este recurso a través de una
              actividad interactiva. En este juego, tu misión es construir un castillo eligiendo los bloques correctos.
              ¡Cada respuesta correcta te acerca más a completar el castillo! Responde cada pregunta seleccionando el
              bloque adecuado para avanzar en la construcción.
            </p>
            <GameCastle onResult={(result) => handleValidate('QUESTION_2')({ result })} question={data[1]}>
              <GameCastle.Level title="Animación 3." alt="Actividad de presaberes." />
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameCastle.Button>
                  <Button variant="check" label="Comprobar" />
                </GameCastle.Button>

                <GameCastle.Button type="reset">
                  <Button variant="reset" label="Reiniciar" onClick={notifyReset} />
                </GameCastle.Button>
              </Row>
            </GameCastle>
          </Col>
        </Row>

        <ToastFeedback
          label="¡Excelente!"
          type="success"
          isOpen={isOpen === MODALS.QUESTION_2_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-22_sld-4_2_correcto.mp3">
          <p>El estándar P5 del GPM es clave para la gestión sostenible de proyectos.</p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_2_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-22_sld-4_2_incorrecto.mp3">
          <p>Esa metodología no incluye estos impactos en los proyectos.</p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{ a11yURL: 'vid_int_des_ova-22_sld-4_4.mp4', contentURL: 'vid_int_ova-22_sld-4_4.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-22_sld-4_4.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="8" hd="11" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-22_sld-4_4.mp3" />
            <p className="u-text-center">
              A continuación, realizaremos la autoevaluación de conocimientos adquiridos en este recurso a través de una
              actividad interactiva. En este juego, tu misión es construir un castillo eligiendo los bloques correctos.
              ¡Cada respuesta correcta te acerca más a completar el castillo! Responde cada pregunta seleccionando el
              bloque adecuado para avanzar en la construcción.
            </p>
            <GameCastle onResult={(result) => handleValidate('QUESTION_3')({ result })} question={data[2]}>
              <GameCastle.Level title="Animación 3." alt="Actividad de presaberes." />
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameCastle.Button>
                  <Button variant="check" label="Comprobar" />
                </GameCastle.Button>

                <GameCastle.Button type="reset">
                  <Button variant="reset" label="Reiniciar" onClick={notifyReset} />
                </GameCastle.Button>
              </Row>
            </GameCastle>
          </Col>
        </Row>

        <ToastFeedback
          label="¡Excelente!"
          type="success"
          isOpen={isOpen === MODALS.QUESTION_3_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-22_sld-4_3_correcto.mp3">
          <p>Corresponde a la definición de sostenibilidad, según el Informe Brundtland (1987).</p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_3_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-22_sld-4_3_incorrecto.mp3">
          <p>La rentabilidad e innovación son importantes, pero no definen el desarrollo sostenible.</p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{ a11yURL: 'vid_int_des_ova-22_sld-4_4.mp4', contentURL: 'vid_int_ova-22_sld-4_4.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-22_sld-4_4.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="8" hd="11" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-22_sld-4_4.mp3" />
            <p className="u-text-center">
              A continuación, realizaremos la autoevaluación de conocimientos adquiridos en este recurso a través de una
              actividad interactiva. En este juego, tu misión es construir un castillo eligiendo los bloques correctos.
              ¡Cada respuesta correcta te acerca más a completar el castillo! Responde cada pregunta seleccionando el
              bloque adecuado para avanzar en la construcción.
            </p>
            <GameCastle onResult={(result) => handleValidate('QUESTION_4')({ result })} question={data[3]}>
              <GameCastle.Level title="Animación 3." alt="Actividad de presaberes." />
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameCastle.Button>
                  <Button variant="check" label="Comprobar" />
                </GameCastle.Button>

                <GameCastle.Button type="reset">
                  <Button variant="reset" label="Reiniciar" onClick={notifyReset} />
                </GameCastle.Button>
              </Row>
            </GameCastle>
          </Col>
        </Row>

        <ToastFeedback
          label="¡Excelente!"
          type="success"
          isOpen={isOpen === MODALS.QUESTION_4_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-22_sld-4_4_correcto.mp3">
          <p>
            PRiSM (Projects integrating Sustainable Methods) es una metodología centrada en la sostenibilidad desde el
            inicio hasta el cierre del proyecto.
          </p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_4_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-22_sld-4_4_incorrecto.mp3">
          <p>Esta metodología no está diseñada específicamente para integrar principios de sostenibilidad.</p>
        </ToastFeedback>
      </Panel.Section>
      <ModalQuiz audio="assets/audios/aud_ova-22_sld-4_bien.mp3" interpreter={{ contentURL: '', a11yURL: '' }} />
    </Panel>
  );
};

export default Ova22p04;
