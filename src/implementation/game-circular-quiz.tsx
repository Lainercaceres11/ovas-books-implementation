
//https://demos.booksandbooksdigital.com.co/300-ovas-2026/ovas/ECBTI/GR-1-104-2025-1/#/page-4
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
  QUESTION_WRONG: 'modal-wrong-activity-q1',
  QUESTION_2_SUCCESS: 'modal-correct-activity-q2',
  QUESTION_3_SUCCESS: 'modal-correct-activity-q3',
  QUESTION_4_SUCCESS: 'modal-correct-activity-q4',
  QUESTION_5_SUCCESS: 'modal-correct-activity-q5',
  QUESTION_6_SUCCESS: 'modal-correct-activity-q6',
  QUESTION_7_SUCCESS: 'modal-correct-activity-q7',
  QUESTION_8_SUCCESS: 'modal-correct-activity-q8',
  QUESTION_9_SUCCESS: 'modal-correct-activity-q9'
};

const LENGTH_ANSWERS = 9;

const Ova104p04 = () => {
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
      const activityResult = result ? `${questionKey}_SUCCESS` : 'QUESTION_WRONG';

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
          a11yURL: 'descriptives/vid_int_des_ova-104_sld-4_1.mp4',
          contentURL: 'content/vid_int_ova-104_sld-4_1.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-104_sld-4_1.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-104_sld-4_1.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_1', 1)} totalQuestion={9}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Figura 2.</strong> Actividad de presaberes.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question=" Según la Resolución 631 de 2015, <br/> <strong>¿cuál es la principal diferencia entre un vertimiento puntual y uno
                  difuso?</strong>"
                  questionTitle="Pregunta 1">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="1-1"
                    label="a. El caudal del vertimiento."
                    name="option-1"
                    state="wrong"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="1-2"
                    label="b. La facilidad de control del vertimiento."
                    name="option-1"
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
          audio="assets/audios/aud_ova-104_sld-4_1_correcto.mp3">
          <p>
            La Resolución 631 de 2015, en su glosario y disposiciones generales, define vertimiento puntual así: es
            aquel que se realiza desde un punto específico identificable. Mientras que vertimiento difuso es aquel que
            no se origina en un punto específico, sino que resulta de escorrentía o procesos dispersos sobre una
            superficie lo que dificulta su control y monitoreo. Por tanto, la principal diferencia entre ambos tipos de
            vertimiento es su facilidad de control, ya que los vertimientos puntuales pueden ser medidos y regulados
            directamente, mientras que los difusos son difíciles de cuantificar y controlar. El caudal es independiente
            de si un vertimiento es puntual o difuso.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-104_sld-4_2.mp4',
          contentURL: 'content/vid_int_ova-104_sld-4_2.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-104_sld-4_2.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-104_sld-4_2.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_2', 2)} totalQuestion={9}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Figura 2.</strong> Actividad de presaberes.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="<strong>¿Qué es un coagulante en el tratamiento de aguas residuales?</strong>"
                  questionTitle="Pregunta 2">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="2-1"
                    label="a. Un producto químico utilizado para reducir la turbidez del agua."
                    name="option-2"
                    state="wrong"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="2-2"
                    label="b. Un tipo de bacteria utilizada en el tratamiento biológico."
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
          audio="assets/audios/aud_ova-104_sld-4_2_correcto.mp3">
          <p>
            Un coagulante es un producto químico que se añade al agua residual para neutralizar las cargas eléctricas de
            partículas coloidales o sólidos suspendidos y permitir su aglomeración en flóculos más grandes, que luego
            pueden separarse mediante sedimentación o flotación. Su principal función es reducir la turbidez, al
            eliminar sólidos suspendidos y coloides finos.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-104_sld-4_3.mp4',
          contentURL: 'content/vid_int_ova-104_sld-4_3.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-104_sld-4_3.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-104_sld-4_3.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_3', 3)} totalQuestion={9}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Figura 2.</strong> Actividad de presaberes.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="En un efluente con altos niveles de grasas y aceites, <strong>¿qué combinación de procesos garantizaría una mayor eficiencia en su remoción?</strong>"
                  questionTitle="Pregunta 3">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="3-1"
                    label="a. Uso de trampas de grasa y sedimentación primaria."
                    name="option-3"
                    state="success"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="3-2"
                    label="b. Flotación por aire disuelto y trampas de grasa."
                    name="option-3"
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
          audio="assets/audios/aud_ova-104_sld-4_3_correcto.mp3">
          <p>
            Estas tecnologías son específicas para la separación de grasas y aceites antes del tratamiento biológico.
            Las trampas de grasa eliminan aceites y grasas flotantes, y la flotación por aire disuelto (DAF) es efectiva
            para remover sólidos suspendidos y grasas emulsionadas. A diferencia de la sedimentación primaria que busca
            eliminar sólidos suspendidos y materia orgánica mediante la gravedad, las partículas sólidas más densas que
            el agua se depositan en el fondo de un tanque de sedimentación.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-104_sld-4_4.mp4',
          contentURL: 'content/vid_int_ova-104_sld-4_4.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-104_sld-4_4.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-104_sld-4_4.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_4', 4)} totalQuestion={9}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Figura 2.</strong> Actividad de presaberes.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="En una planta procesadora de carne se observa un aumento repentino en la DBO (demanda bioquímica de oxígeno). <strong>¿Cuál podría ser el factor principal de este aumento?</strong>"
                  questionTitle="Pregunta 4">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="4-1"
                    label="a. Incremento en la concentración de metales pesados."
                    name="option-4"
                    state="wrong"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="4-2"
                    label="b. Vertido de aceites y grasas."
                    name="option-4"
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
          audio="assets/audios/aud_ova-104_sld-4_4_correcto.mp3">
          <p>
            En plantas procesadoras de carne, es común que el efluente contenga altas cargas de materia orgánica
            biodegradable como: sangre, proteínas, grasas animales y restos cárnicos. El vertido de aceites y grasas
            contribuye significativamente al aumento de la DBO5, ya que son compuestos parcialmente biodegradables que
            consumen oxígeno durante su descomposición. Las grasas pueden formar capas flotantes que interfieren con
            procesos biológicos si no son removidas, así como también pueden aumentar la carga orgánica biodegradable
            cuando no son interceptadas por trampas de grasa o flotación. Los metales pesados como: Cd, Pb, Hg y Cr no
            aumentan la DBO, ya que no son biodegradables ni consumen oxígeno durante su degradación, pues no se
            degradan.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-104_sld-4_5.mp4',
          contentURL: 'content/vid_int_ova-104_sld-4_5.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-104_sld-4_5.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-104_sld-4_5.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_5', 5)} totalQuestion={9}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Figura 2.</strong> Actividad de presaberes.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="En un sistema de flotación por aire disuelto (DAF), la eficiencia en la remoción de grasas ha disminuido. <strong>¿Qué ajuste operativo es más adecuado?</strong>"
                  questionTitle="Pregunta 5">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="5-1"
                    label="a. Incrementar la presión del sistema."
                    name="option-5"
                    state="success"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="5-2"
                    label="b. Reducir la tasa de recirculación."
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
          audio="assets/audios/aud_ova-104_sld-4_5_correcto.mp3">
          <p>
            Una mayor presión mejora la generación de microburbujas, optimizando la separación de grasas. Incrementar la
            presión aumenta la solubilidad del aire en el agua, formando más microburbujas que mejoran la flotación de
            grasas. Reducir la tasa de recirculación disminuye la cantidad de burbujas formadas, lo que reduce la
            eficiencia de flotación y remoción de grasas.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-104_sld-4_6.mp4',
          contentURL: 'content/vid_int_ova-104_sld-4_6.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-104_sld-4_6.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-104_sld-4_6.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_6', 6)} totalQuestion={9}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Figura 2.</strong> Actividad de presaberes.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="En una región agrícola de Colombia, los vertimientos contienen altos niveles de nitratos. <strong>¿Qué alternativa de tratamiento terciario es más efectiva?</strong>"
                  questionTitle="Pregunta 6">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="6-1"
                    label="a. Precipitación química."
                    name="option-6"
                    state="wrong"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="6-2"
                    label="b. Desnitrificación biológica."
                    name="option-6"
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
                      resetQuestion(6);
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
          isOpen={isOpen === MODALS.QUESTION_6_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-104_sld-4_6_correcto.mp3">
          <p>
            La desnitrificación convierte nitratos en nitrógeno gaseoso, reduciendo el impacto ambiental. La
            desnitrificación biológica es el método más eficiente para eliminar nitratos. La precipitación química es
            útil para remover fosfatos, metales pesados y algunos sólidos disueltos, pero no es eficaz para eliminar
            nitratos, ya que estos son altamente solubles y no forman precipitados fácilmente en condiciones normales.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-104_sld-4_7.mp4',
          contentURL: 'content/vid_int_ova-104_sld-4_7.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-104_sld-4_7.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-104_sld-4_7.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_7', 7)} totalQuestion={9}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Figura 2.</strong> Actividad de presaberes.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="En una industria procesadora de bebidas, los niveles de pH del efluente están fuera del rango permisible. <strong>¿Qué proceso es más adecuado para ajustarlo?</strong>"
                  questionTitle="Pregunta 7">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="7-1"
                    label="a. Adsorción en carbón activado."
                    name="option-7"
                    state="wrong"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="7-2"
                    label="b. Neutralización química."
                    name="option-7"
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
                      resetQuestion(7);
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
          isOpen={isOpen === MODALS.QUESTION_7_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-104_sld-4_7_correcto.mp3">
          <p>
            La neutralización química es el método estándar para ajustar el pH de un efluente industrial dentro del
            rango normativo exigido en Colombia según la Resolución 0631 de 2015 que es entre 6,0 y 9,0 para
            vertimientos puntuales a cuerpos de agua superficiales. La adsorción en carbón activado se utiliza para
            remover compuestos orgánicos traza como colorantes, pesticidas, compuestos fenólicos y sustancias
            responsables del sabor y el olor. Sin embargo, no tiene una función efectiva en la modificación del pH del
            efluente. Aunque el carbón activado puede influir ligeramente en el pH, no se emplea como método de ajuste
            de pH, ya que sería ineficiente y costoso para este propósito.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-104_sld-4_8.mp4',
          contentURL: 'content/vid_int_ova-104_sld-4_8.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-104_sld-4_8.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-104_sld-4_8.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_8', 8)} totalQuestion={9}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Figura 2.</strong> Actividad de presaberes.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="<strong>¿Qué se entiende por 'lodos' en el contexto del tratamiento de aguas residuales?</strong>"
                  questionTitle="Pregunta 8">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="8-1"
                    label="a. Suspensión de un sólido en un líquido proveniente de los procesos del tratamiento de aguas residuales."
                    name="option-8"
                    state="success"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="8-2"
                    label="b. Microorganismos utilizados en el tratamiento biológico."
                    name="option-8"
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
                      resetQuestion(8);
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
          isOpen={isOpen === MODALS.QUESTION_8_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-104_sld-4_8_correcto.mp3">
          <p>
            Los lodos son una mezcla semisólida compuesta principalmente por agua y sólidos suspendidos o sedimentados,
            generada como subproducto de procesos físicos, químicos o biológicos. Si bien algunos lodos pueden tener
            microorganismos, no todos los lodos presentan actividad biológica.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-104_sld-4_9.mp4',
          contentURL: 'content/vid_int_ova-104_sld-4_9.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-104_sld-4_9.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio addClass="u-mb-3" src="assets/audios/content/aud_ova-104_sld-4_9.mp3" />

            <GameCircularQuiz onResult={handleValidate('QUESTION_9', 9)} totalQuestion={9}>
              <GameCircularQuiz.GameCircularWrapper
                validatedQuestions={validatedQuestions}
                alt="<strong>Figura 2.</strong> Actividad de presaberes.">
                <GameCircularQuiz.GameCicularQuizQuestion
                  question="<strong>¿Qué es la 'nitrificación' en el tratamiento de aguas residuales?</strong>"
                  questionTitle="Pregunta 9">
                  <GameCircularQuiz.GameCircularQuizElement
                    id="9-1"
                    label="a. La conversión de amonio en nitrato por bacterias."
                    name="option-9"
                    state="success"
                  />
                  <GameCircularQuiz.GameCircularQuizElement
                    id="9-2"
                    label="b. La eliminación de sólidos suspendidos."
                    name="option-9"
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
                      resetQuestion(9);
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
          isOpen={isOpen === MODALS.QUESTION_9_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-104_sld-4_9_correcto.mp3">
          <p>
            La nitrificación es un proceso biológico aeróbico en el que ciertas bacterias oxidan el amonio (NH4 + )
            hasta nitrato (NO3 - ). Por otra parte, la eliminación de sólidos suspendidos ocurre en etapas como el
            tratamiento primario mediante la sedimentación, y de pretratamiento como el tamizado y el desarenado.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.QUESTION_WRONG}
        onClose={closeModal}
        audio="assets/audios/aud_ova-104_sld-4_incorrecto.mp3">
        <p>Inténtalo nuevamente.</p>
      </ToastFeedback>
      <ModalQuiz audio="assets/audios/aud_ova-104_sld-4_bien.mp3" interpreter={{ contentURL: '', a11yURL: '' }} />
    </Panel>
  );
};

export default Ova104p04;
