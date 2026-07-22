import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { useGamification } from '@/shared/components/features/gamification';
import { GameMilions } from '@/shared/components/games/game-millions';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

import { ToastFeedback } from '../shared/components/features/toast-feedback/toast-feedback';

const MODALS = {
  QUESTION_1_SUCCESS: 'modal-correct-activity-q1',
  QUESTION_1_WRONG: 'modal-wrong-activity-q1',
  QUESTION_2_SUCCESS: 'modal-correct-activity-q2',
  QUESTION_2_WRONG: 'modal-wrong-activity-q2',
  QUESTION_3_SUCCESS: 'modal-correct-activity-q3',
  QUESTION_3_WRONG: 'modal-wrong-activity-q3',
  QUESTION_4_SUCCESS: 'modal-correct-activity-q4',
  QUESTION_4_WRONG: 'modal-wrong-activity-q4',
  QUESTION_5_SUCCESS: 'modal-correct-activity-q5',
  QUESTION_5_WRONG: 'modal-wrong-activity-q5'
};

const LENGTH_ANSWERS = 5;

const Ova29p13 = () => {
  const {
    Modal: ModalGamification,
    Stars,
    notifyReset,
    reportResult
  } = useGamification({
    id: 'gr-1-91-2025-1-sld-15',
    total: LENGTH_ANSWERS
  });

  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [money, setMoney] = useState(0);

  /**
   * Función que se encarga de manejar el resultado
   * de una pregunta y renderizar el feedback correspondiente.
   * @param {object} result - Resultado de la pregunta.
   * @param {string} questionKey - Identificador de la pregunta.
   */
  const handleResult = ({ result }: { result: boolean }, questionKey: string) => {
    if (result) {
      setIsOpen(MODALS[`${questionKey}_SUCCESS` as keyof typeof MODALS]);
      setMoney(money + 1_000_000);
    } else {
      setIsOpen(MODALS[`${questionKey}_WRONG` as keyof typeof MODALS]);
    }

    reportResult({ success: result, correct: LENGTH_ANSWERS, total: LENGTH_ANSWERS });
  };

  const closeModal = () => setIsOpen(null);

  return (
    <>
      <Panel stars={Stars}>
        <Panel.Section
          interpreter={{
            a11yURL: 'descriptives/vid_int_des_ova-91_sld-15_1.mp4',
            contentURL: 'content/vid_int_ova-91_sld-15_1.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-91_sld-15_1.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-91_sld-15_1.mp3" />

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 3.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onMoneyChange={setMoney}
                onResult={({ result }) => handleResult({ result }, 'QUESTION_1')}
                question="1. ¿Cuál es la principal finalidad del modelo CDIO en la formación de ingeniería?">
                <GameMilions.Element
                  name="option-1"
                  id="option-1-1"
                  state="wrong"
                  label="a: Fomentar la especialización temprana en software."
                />

                <GameMilions.Element
                  name="option-1"
                  id="option-1-2"
                  state="wrong"
                  label="B: Garantizar que los estudiantes memoricen fórmulas."
                />

                <GameMilions.Element
                  name="option-1"
                  id="option-1-3"
                  label="C: Integrar el conocimiento técnico con habilidades prácticas en contextos reales."
                  state="success"
                />

                <GameMilions.Element
                  name="option-1"
                  id="option-1-4"
                  state="wrong"
                  label="D: Reducir la duración de los proyectos de grado."
                />

                <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                  <GameMilions.Button type="check">
                    <Button variant="check" label="Comprobar" />
                  </GameMilions.Button>

                  <GameMilions.Button type="reset">
                    <Button variant="reset" onClick={notifyReset} label="Reintentar" addClass="js-modal-wrong" />
                  </GameMilions.Button>
                </Row>
              </GameMilions>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_1_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/content/aud_ova-29_sld-14 (Correcto).mp3">
            <p>
              ¡Muy bien! El modelo CDIO busca formar ingenieros capaces de Concebir, Diseñar, Implementar y Operar
              soluciones reales, combinando teoría y práctica.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_1_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-29__sld-14 (incorrecto).mp3">
            <p>
              Recuerda que el CDIO no se basa en la memorización o en reducir tiempos, sino en fortalecer el desarrollo
              de competencias integrales aplicadas a contextos reales.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'descriptives/vid_int_des_ova-91_sld-15_2.mp4',
            contentURL: 'content/vid_int_ova-91_sld-15_2.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-91_sld-15_2.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-91_sld-15_2.mp3" />

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 3.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, 'QUESTION_2')}
                onMoneyChange={setMoney}
                question="2. ¿Cuál de las siguientes fases de la modulación CDIO se enfoca en transformar el diseño en un sistema funcional y diseñar la construcción y pruebas?">
                <GameMilions.Element name="option-2" id="option-2-1" state="wrong" label="a. Concebir." />
                <GameMilions.Element name="option-2" id="option-2-2" state="wrong" label="b. Diseñar." />
                <GameMilions.Element name="option-2" id="option-2-3" state="wrong" label="c. Operar." />
                <GameMilions.Element name="option-2" id="option-2-4" state="success" label="d. Implementar." />
                <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                  <GameMilions.Button type="check">
                    <Button variant="check" label="Comprobar" />
                  </GameMilions.Button>

                  <GameMilions.Button type="reset">
                    <Button variant="reset" onClick={notifyReset} label="Reintentar" addClass="js-modal-wrong" />
                  </GameMilions.Button>
                </Row>
              </GameMilions>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_2_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/content/aud_ova-29_sld-14 (Correcto).mp3">
            <p>
              El desarrollo del prototipo es parte de la fase de implementación, no de la planeación. La planeación se
              enfoca en organizar lo que se va a hacer, cuándo y cómo.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_2_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-29__sld-14 (incorrecto).mp3">
            <p>
              Recuerda que la planeación precede al desarrollo. El prototipo se construye después de planear los
              recursos, actividades y objetivos.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'descriptives/vid_int_des_ova-91_sld-15_3.mp4',
            contentURL: 'content/vid_int_ova-91_sld-15_3.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-91_sld-15_3.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-91_sld-15_3.mp3" />

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 3.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, 'QUESTION_3')}
                onMoneyChange={setMoney}
                question="3. ¿Qué metodología es más adecuada para proyectos con requerimientos cambios y entregas frecuentes?">
                <GameMilions.Element name="option-3" id="option-3-1" state="wrong" label="a. Cascada." />
                <GameMilions.Element name="option-3" id="option-3-2" state="wrong" label="b. Enfoque cuantitativo." />
                <GameMilions.Element name="option-3" id="option-3-3" state="success" label="c. SCRUM." />
                <GameMilions.Element name="option-3" id="option-3-4" state="wrong" label="d. Híbrida." />
                <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                  <GameMilions.Button type="check">
                    <Button variant="check" label="Comprobar" />
                  </GameMilions.Button>

                  <GameMilions.Button type="reset">
                    <Button variant="reset" onClick={notifyReset} label="Reintentar" addClass="js-modal-wrong" />
                  </GameMilions.Button>
                </Row>
              </GameMilions>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_3_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/content/aud_ova-29_sld-14 (Correcto).mp3">
            <p>SCRUM es una metodología ágil diseñada para entornos cambiantes con entregas incrementales.</p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_3_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-29__sld-14 (incorrecto).mp3">
            <p>
              Cascada es lineal y rígida, poco flexible ante cambios. El enfoque cuantitativo se refiere a métodos de
              investigación, no a gestión de proyectos. El enfoque híbrido mezcla metodologías, pero SCRUM es más
              específico para estos entornos.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'descriptives/vid_int_des_ova-91_sld-15_4.mp4',
            contentURL: 'content/vid_int_ova-91_sld-15_4.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-91_sld-15_4.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-91_sld-15_4.mp3" />

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 3.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, 'QUESTION_4')}
                onMoneyChange={setMoney}
                question="4. ¿Cuál es una ventaja del enfoque adaptativo frente a otros metodológicos?">
                <GameMilions.Element
                  name="option-4"
                  id="option-4-1"
                  state="wrong"
                  label="a. Seguimiento estricto de fases secuenciales."
                />
                <GameMilions.Element
                  name="option-4"
                  id="option-4-2"
                  state="success"
                  label="b. Alta capacidad de adaptación ante la incertidumbre."
                />
                <GameMilions.Element
                  name="option-4"
                  id="option-4-3"
                  state="wrong"
                  label="c. Facilitada para documentar el proyecto."
                />
                <GameMilions.Element
                  name="option-4"
                  id="option-4-4"
                  state="wrong"
                  label="d. Claridad en requisitos desde el inicio."
                />
                <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                  <GameMilions.Button type="check">
                    <Button variant="check" label="Comprobar" />
                  </GameMilions.Button>

                  <GameMilions.Button type="reset">
                    <Button variant="reset" onClick={notifyReset} label="Reintentar" addClass="js-modal-wrong" />
                  </GameMilions.Button>
                </Row>
              </GameMilions>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_4_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/content/aud_ova-29_sld-14 (Correcto).mp3">
            <p>El enfoque adaptativo permite ajustarse rápidamente a entornos cambiantes y requisitos inciertos.</p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_4_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-29__sld-14 (incorrecto).mp3">
            <p>
              El seguimiento estricto es característico de metodologías como cascada. Aunque documenta, no es su
              principal fortaleza. Los requisitos claros desde el inicio se asocian más a la metodología cascada.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'descriptives/vid_int_des_ova-91_sld-15_5.mp4',
            contentURL: 'content/vid_int_ova-91_sld-15_5.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-91_sld-15_5.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-91_sld-15_5.mp3" />

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 3.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, 'QUESTION_5')}
                onMoneyChange={setMoney}
                question="5. ¿En qué fase del modelo CDIO se recomienda aplicar un enfoque híbrido que combine planificación y ejecución y el análisis y la evaluación?">
                <GameMilions.Element name="option-4" id="option-4-1" state="success" label="a. Concebir." />
                <GameMilions.Element name="option-4" id="option-4-2" state="wrong" label="b. Implementar." />
                <GameMilions.Element name="option-4" id="option-4-3" state="wrong" label="c. Operar." />
                <GameMilions.Element name="option-4" id="option-4-4" state="wrong" label="d. Evaluar." />
                <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                  <GameMilions.Button type="check">
                    <Button variant="check" label="Comprobar" />
                  </GameMilions.Button>

                  <GameMilions.Button type="reset">
                    <Button variant="reset" onClick={notifyReset} label="Reintentar" addClass="js-modal-wrong" />
                  </GameMilions.Button>
                </Row>
              </GameMilions>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_5_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/content/aud_ova-29_sld-14 (Correcto).mp3">
            <p>
              En la fase “Concebir”, el enfoque híbrido permite una planificación estructurada sin perder adaptabilidad.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_5_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-29__sld-14 (incorrecto).mp3">
            <p>
              Aunque se puede usar enfoque híbrido en “Implementar”, es más común utilizar ágiles y adaptativos.
              “Operar” se asocia a mantenimiento, y suele requerir adaptabilidad o estructura según el entorno. La fase
              “Evaluar” no forma parte del ciclo CDIO estándar.
            </p>
          </ToastFeedback>
        </Panel.Section>
      </Panel>

      <ModalGamification
        audio="assets/audios/aud_ova-29_sld-14_modal_gamification.mp3"
        interpreter={{ contentURL: '' }}
      />
    </>
  );
};

export default Ova29p13;
