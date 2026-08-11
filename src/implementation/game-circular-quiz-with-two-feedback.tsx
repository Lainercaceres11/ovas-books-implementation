import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';
import { GameCircularQuiz } from '@/shared/components/games/game-circular-quiz/game-circular-quiz';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

import type { Option } from '@/shared/components/games/game-circular-quiz/types/types';

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

const Ova155p13 = () => {
  const {
    Modal: ModalQuiz,
    Stars,
    notifyReset,
    reportResult
  } = useGamification({
    id: 'gr-1-104-2025-1-sld-4',
    total: LENGTH_ANSWERS
  });

  // Controlamos los modales de la actividad.
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [validatedQuestions, setValidatedQuestions] = useState<Record<number, 'success' | 'wrong'>>({});

  /**
   * Función que se encarga de validar
   * el valor proporcionado por Selects.
   * @param {object[]} result
   */
  const handleValidate =
    (questionKey: string, questionId: number) =>
    ({ result }: { result: boolean; options: Option[] }) => {
      const activityResult = result ? `${questionKey}_SUCCESS` : `${questionKey}_WRONG`;

      setIsOpen(MODALS[activityResult as keyof typeof MODALS]);

      setValidatedQuestions((prev) => ({
        ...prev,
        [questionId]: result ? 'success' : 'wrong'
      }));

      reportResult({
        success: result,
        correct: LENGTH_ANSWERS,
        total: LENGTH_ANSWERS
      });
    };

  const resetQuestion = (questionId: number) => {
    setValidatedQuestions((prev) => {
      const updated = { ...prev };
      delete updated[questionId];
      return updated;
    });
  };

  const closeModal = () => setIsOpen(null);
  return (
    <Panel stars={Stars}>
      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-155_sld-13_1.mp4',
          contentURL: 'content/vid_int_ova-155_sld-13_1.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-155_sld-13_1.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-155_sld-13_1.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_1', 1)} totalQuestion={5}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Animación 5.</strong> Actividad de aprendizaje.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="La complejidad del sector salud demanda líderes que:"
                  questionTitle="Pregunta 1">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="1-1"
                    label="a. Inspiren, adapten y movilicen equipos hacia soluciones éticas y efectivas."
                    name="option-1"
                    state="success"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="1-2"
                    label="b. Ocasionalmente se involucren en los procesos de cambio e innovación."
                    name="option-1"
                    state="wrong"
                  />
                </GameCircularQuiz.GameCicularQuizQuestion>
              </GameCircularQuiz.GameCircularWrapper>

              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameCircularQuiz.GameCircularQuizButton>
                  <Button variant="check" label="Comprobar" />
                </GameCircularQuiz.GameCircularQuizButton>

                <GameCircularQuiz.GameCircularQuizButton type="reset">
                  <Button
                    onClick={() => {
                      notifyReset();
                      resetQuestion(1);
                    }}
                    variant="reset"
                    label="Reintentar"
                  />
                </GameCircularQuiz.GameCircularQuizButton>
              </Row>
            </GameCircularQuiz>
          </Col>
        </Row>

        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS.QUESTION_1_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/content/aud_ova-104_sld-4_55corre13to.mp3">
          <p>
            ¡Muy bien! En un entorno de salud cada vez más desafiante, se necesitan líderes transformacionales capaces
            de afrontar las exigencias del sistema y orientar a sus equipos con empatía, adaptabilidad y una visión
            común que impulse mejoras reales.
          </p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_1_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_incorrecto.mp3">
          <p>
            Un líder transformacional no participa de manera ocasional, sino que impulsa activamente el cambio y la
            innovación, guiando al equipo con constancia y visión.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-155_sld-13_2.mp4',
          contentURL: 'content/vid_int_ova-155_sld-13_2.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-155_sld-13_2.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-155_sld-13_2.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_2', 2)} totalQuestion={5}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Animación 5.</strong> Actividad de aprendizaje.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="Un líder transformacional en el sector salud se caracteriza por:"
                  questionTitle="Pregunta 2">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="2-1"
                    label="a. Limitarse a asignar tareas y supervisar el cumplimiento sin fomentar la participación del equipo."
                    name="option-2"
                    state="wrong"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="2-2"
                    label="b. Motivar a su equipo para enfrentar desafíos, promoviendo la innovación y el trabajo colaborativo."
                    name="option-2"
                    state="success"
                  />
                </GameCircularQuiz.GameCicularQuizQuestion>
              </GameCircularQuiz.GameCircularWrapper>

              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameCircularQuiz.GameCircularQuizButton>
                  <Button variant="check" label="Comprobar" />
                </GameCircularQuiz.GameCircularQuizButton>

                <GameCircularQuiz.GameCircularQuizButton type="reset">
                  <Button
                    onClick={() => {
                      notifyReset();
                      resetQuestion(2);
                    }}
                    variant="reset"
                    label="Reintentar"
                  />
                </GameCircularQuiz.GameCircularQuizButton>
              </Row>
            </GameCircularQuiz>
          </Col>
        </Row>

        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS.QUESTION_2_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/content/aud_ova-104_sld-4_55corre13to.mp3">
          <p>
            Un líder transformacional impulsa la motivación, la creatividad y la participación del equipo, favoreciendo
            la mejora continua y la adaptación en el entorno sanitario.
          </p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_2_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_incorrecto.mp3">
          <p>
            Este estilo refleja un liderazgo tradicional y directivo que no promueve la innovación ni el compromiso del
            equipo, elementos esenciales del liderazgo transformacional.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-155_sld-13_3.mp4',
          contentURL: 'content/vid_int_ova-155_sld-13_3.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-155_sld-13_3.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-155_sld-13_3.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_3', 3)} totalQuestion={5}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Animación 5.</strong> Actividad de aprendizaje.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="En el sector salud, el liderazgo transformacional se caracteriza por promover:"
                  questionTitle="Pregunta 3">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="3-1"
                    label="a. La competencia individual entre los miembros del equipo."
                    name="option-3"
                    state="wrong"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="3-2"
                    label="b. El trabajo colaborativo y la mejora continua."
                    name="option-3"
                    state="success"
                  />
                </GameCircularQuiz.GameCicularQuizQuestion>
              </GameCircularQuiz.GameCircularWrapper>

              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameCircularQuiz.GameCircularQuizButton>
                  <Button variant="check" label="Comprobar" />
                </GameCircularQuiz.GameCircularQuizButton>

                <GameCircularQuiz.GameCircularQuizButton type="reset">
                  <Button
                    onClick={() => {
                      notifyReset();
                      resetQuestion(3);
                    }}
                    variant="reset"
                    label="Reintentar"
                  />
                </GameCircularQuiz.GameCircularQuizButton>
              </Row>
            </GameCircularQuiz>
          </Col>
        </Row>

        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS.QUESTION_3_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/content/aud_ova-104_sld-4_55corre13to.mp3">
          <p>
            El liderazgo transformacional impulsa la colaboración, el aprendizaje conjunto y la mejora permanente,
            elementos esenciales para fortalecer la calidad y la seguridad en los servicios de salud.
          </p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_3_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_incorrecto.mp3">
          <p>
            La competencia individual va en contra de los principios del liderazgo transformacional, ya que limita la
            cooperación y dificulta la construcción de equipos enfocados en objetivos comunes.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-155_sld-13_4.mp4',
          contentURL: 'content/vid_int_ova-155_sld-13_4.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-155_sld-13_4.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-155_sld-13_4.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_4', 4)} totalQuestion={5}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Animación 5.</strong> Actividad de aprendizaje.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="¿Cuál de las siguientes opciones reúne correctamente los factores que caracterizan al liderazgo transformacional en el sector salud?"
                  questionTitle="Pregunta 4">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="4-1"
                    label="a. Consideración individual, estimulación intelectual, motivación/inspiración, influencia idealizada y tolerancia psicológica."
                    name="option-4"
                    state="success"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="4-2"
                    label="b. Atención personal básica, estímulo cognitivo simple, motivación general e influencia referencial."
                    name="option-4"
                    state="wrong"
                  />
                </GameCircularQuiz.GameCicularQuizQuestion>
              </GameCircularQuiz.GameCircularWrapper>

              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameCircularQuiz.GameCircularQuizButton>
                  <Button variant="check" label="Comprobar" />
                </GameCircularQuiz.GameCircularQuizButton>

                <GameCircularQuiz.GameCircularQuizButton type="reset">
                  <Button
                    onClick={() => {
                      notifyReset();
                      resetQuestion(4);
                    }}
                    variant="reset"
                    label="Reintentar"
                  />
                </GameCircularQuiz.GameCircularQuizButton>
              </Row>
            </GameCircularQuiz>
          </Col>
        </Row>

        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS.QUESTION_4_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/content/aud_ova-104_sld-4_55corre13to.mp3">
          <p>
            ¡Excelente! Estos corresponden a los factores del liderazgo transformacional; los cuatro primeros
            desarrollados por Bass y Avolio y el último por las teorías contemporáneas.
          </p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_4_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_incorrecto.mp3">
          <p>
            Recuerda revisar nuevamente los factores del liderazgo transformacional, ya que estos permiten desarrollar
            habilidades pertinentes para contextos de cambio como el sector sanitario.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-155_sld-13_5.mp4',
          contentURL: 'content/vid_int_ova-155_sld-13_5.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-155_sld-13_5.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-155_sld-13_5.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_5', 5)} totalQuestion={5}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Animación 5.</strong> Actividad de aprendizaje.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="¿Cuál de las siguientes opciones no corresponde a un beneficio del liderazgo transformacional en el sector salud?"
                  questionTitle="Pregunta 5">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="5-1"
                    label="a. Fomenta el trabajo en equipo, aunque limita la toma de decisiones y supervisa el uso de herramientas tecnológicas emergentes."
                    name="option-5"
                    state="success"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="5-2"
                    label="b. Promueve el pensamiento crítico, el uso de tecnologías emergentes y estimula la creatividad del equipo."
                    name="option-5"
                    state="wrong"
                  />
                </GameCircularQuiz.GameCicularQuizQuestion>
              </GameCircularQuiz.GameCircularWrapper>

              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameCircularQuiz.GameCircularQuizButton>
                  <Button variant="check" label="Comprobar" />
                </GameCircularQuiz.GameCircularQuizButton>

                <GameCircularQuiz.GameCircularQuizButton type="reset">
                  <Button
                    onClick={() => {
                      notifyReset();
                      resetQuestion(5);
                    }}
                    variant="reset"
                    label="Reintentar"
                  />
                </GameCircularQuiz.GameCircularQuizButton>
              </Row>
            </GameCircularQuiz>
          </Col>
        </Row>

        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS.QUESTION_5_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/content/aud_ova-104_sld-4_55corre13to.mp3">
          <p>
            Esta opción <strong>no</strong> corresponde a un beneficio del liderazgo transformacional. Limitar la
            autonomía del equipo y restringir el uso de tecnologías va en contra de los principios transformacionales,
            que promueven la participación, la innovación y la toma de decisiones compartida.
          </p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_5_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_incorrecto.mp3">
          <p>
            Esta afirmación sí representa beneficios propios del liderazgo transformacional, ya que este estilo impulsa
            la innovación, el análisis crítico y el aprovechamiento de herramientas que fortalecen los procesos en el
            sector salud.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <ModalQuiz audio="assets/audios/aud_ova-106_sld-4_bien.mp3" interpreter={{ contentURL: '', a11yURL: '' }} />
    </Panel>
  );
};

export default Ova155p13;
