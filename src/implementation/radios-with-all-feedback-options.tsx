import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { Radios } from '@/shared/components/activities/radio-activity';
import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';
import { Panel } from '@/shared/components/layouts';
import { Button, Image } from '@/shared/components/ui';

import type { Option } from '@/shared/components/activities/radio-activity/types/types';

const MODALS = {
  QUESTION_1_SUCCESS: 'modal-correct-activity-q1',
  QUESTION_1_1_WRONG: 'modal-incorrect-activity-q1-1',
  QUESTION_1_2_WRONG: 'modal-incorrect-activity-q1-2',
  QUESTION_1_3_WRONG: 'modal-incorrect-activity-q1-3',
  QUESTION_1_4_WRONG: 'modal-incorrect-activity-q1-4',
  QUESTION_2_SUCCESS: 'modal-correct-activity-q2',
  QUESTION_2_1_WRONG: 'modal-incorrect-activity-q2-1',
  QUESTION_2_2_WRONG: 'modal-incorrect-activity-q2-2',
  QUESTION_2_3_WRONG: 'modal-incorrect-activity-q2-3',
  QUESTION_2_4_WRONG: 'modal-incorrect-activity-q2-4',
  QUESTION_3_SUCCESS: 'modal-correct-activity-q3',
  QUESTION_3_1_WRONG: 'modal-incorrect-activity-q3-1',
  QUESTION_3_2_WRONG: 'modal-incorrect-activity-q3-2',
  QUESTION_3_3_WRONG: 'modal-incorrect-activity-q3-3',
  QUESTION_3_4_WRONG: 'modal-incorrect-activity-q3-4',
  QUESTION_4_SUCCESS: 'modal-correct-activity-q4',
  QUESTION_4_1_WRONG: 'modal-incorrect-activity-q4-1',
  QUESTION_4_2_WRONG: 'modal-incorrect-activity-q4-2',
  QUESTION_4_3_WRONG: 'modal-incorrect-activity-q4-3',
  QUESTION_4_4_WRONG: 'modal-incorrect-activity-q4-4',
  QUESTION_5_SUCCESS: 'modal-correct-activity-q5',
  QUESTION_5_1_WRONG: 'modal-incorrect-activity-q5-1',
  QUESTION_5_2_WRONG: 'modal-incorrect-activity-q5-2',
  QUESTION_5_3_WRONG: 'modal-incorrect-activity-q5-3',
  QUESTION_5_4_WRONG: 'modal-incorrect-activity-q5-4'
};

const LENGTH_QUESTION = 5;

const Ova105p04 = () => {
  const {
    Modal: ModalQuiz,
    Stars,
    notifyReset,
    reportResult
  } = useGamification({
    id: 'gr-2-105-2024-2-sld-4',
    total: LENGTH_QUESTION
  });
  const [isOpen, setIsOpen] = useState<string | null>(null);

  /**
   * Handles validation for a specific question by showing the corresponding feedback modal.
   * @param {string} questionKey - The question identifier (e.g., "1").
   */
  const handleValidate =
    (questionKey: string) =>
    ({ options }: { result: boolean; options: Option[] }) => {
      const selectedOption = options.find((opt) => opt.state === 'success' || opt.state === 'wrong');

      if (!selectedOption) return;

      if (selectedOption?.state === 'success') {
        setIsOpen(MODALS[`QUESTION_${questionKey}_SUCCESS` as keyof typeof MODALS]);
      } else if (selectedOption?.state === 'wrong') {
        const optionSuffix = selectedOption.id.split('-')[1];
        const modalKey = `QUESTION_${questionKey}_${optionSuffix}_WRONG` as keyof typeof MODALS;
        setIsOpen(MODALS[modalKey]);
      }

      reportResult({ success: selectedOption.state === 'success', correct: LENGTH_QUESTION, total: LENGTH_QUESTION });
    };

  const closeModal = () => setIsOpen(null);
  return (
    <>
      <Panel stars={Stars}>
        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-105_sld-4_1.mp4',
            contentURL: 'vid_int_ova-105_sld-4_1.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-105_sld-4_1.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_gr2_ova-105_sld-4_1.mp3" />

              <p>
                A continuación, realizaremos la autoevaluación de conocimientos adquiridos en este recurso. Consiste en
                responder cinco preguntas de selección múltiple con única respuesta.
              </p>

              <p className="u-font-bold">Selecciona la respuesta que sea correcta. </p>

              <p>
                <strong className="u-font-bold u-text-upper">1. </strong>
                ¿Cuál de las siguientes habilidades es clave para un gerente efectivo?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('1')}>
                  <Radios.Radio id="1-1" label="a. Dominio técnico exclusivo." name="option-1" state="wrong" />
                  <Radios.Radio
                    id="1-2"
                    label="b. Comunicación clara y habilidades interpersonales."
                    name="option-1"
                    state="success"
                  />
                  <Radios.Radio id="1-3" label="c. Conocimiento financiero avanzado." name="option-1" state="wrong" />
                  <Radios.Radio id="1-4" label="d. Estrategias de ventas." name="option-1" state="wrong" />
                  <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                    <Radios.Button>
                      <Button variant="check" label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button variant="reset" label="Reintentar" onClick={notifyReset} />
                    </Radios.Button>
                  </Row>
                </Radios>
              </div>
            </Col>
            <Col xs="11" mm="10" md="9" lg="5" hd="5">
              <Image
                src="assets/images/SLIDE_04.webp"
                size="600px"
                title="Figura 3."
                alt="Personas trabajando en equipo en una sala de juntas. El gerente mirando a la cámara y sonriendo de manera amable."
              />
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_1_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_1 (Correcto).mp3">
            <p>
              Muy bien. La comunicación y las habilidades interpersonales son fundamentales para influir, motivar y
              lograr resultados a través de los demás.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_1_1_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_1 (Incorrecto a).mp3">
            <p>
              Aunque el dominio técnico es importante, un gerente necesita habilidades interpersonales para liderar
              equipos y gestionar relaciones de manera efectiva.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_1_3_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_1 (Incorrecto c).mp3">
            <p>
              El conocimiento financiero es útil, pero no es suficiente para liderar equipos y fomentar la colaboración.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_1_4_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_1 (Incorrecto d).mp3">
            <p>
              Aunque las estrategias de ventas son valiosas en ciertas áreas, no son esenciales para un liderazgo
              efectivo en general.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-105_sld-4_2.mp4',
            contentURL: 'vid_int_ova-105_sld-4_2.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-105_sld-4_2.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="5">
              <Image
                src="assets/images/SLIDE_04.webp"
                size="600px"
                title="Figura 3."
                alt="Personas trabajando en equipo en una sala de juntas. El gerente mirando a la cámara y sonriendo de manera amable."
              />
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_gr2_ova-105_sld-4_2.mp3" />

              <p className="u-font-bold">Selecciona la respuesta que sea correcta. </p>

              <p>
                <strong className="u-font-bold u-text-upper">2. </strong>
                ¿Qué es lo más importante al resolver un conflicto en un equipo?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('2')}>
                  <Radios.Radio
                    id="2-1"
                    label="a. Evitar el problema para no generar tensión."
                    name="option-2"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="2-2"
                    label="b. Tomar decisiones unilaterales como líder."
                    name="option-2"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="2-3"
                    label="c. Escuchar activamente a las partes involucradas y fomentar un diálogo constructivo."
                    name="option-2"
                    state="success"
                  />
                  <Radios.Radio
                    id="2-4"
                    label="d. Delegar el problema a otra persona del equipo."
                    name="option-2"
                    state="wrong"
                  />
                  <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                    <Radios.Button>
                      <Button variant="check" label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button variant="reset" label="Reintentar" onClick={notifyReset} />
                    </Radios.Button>
                  </Row>
                </Radios>
              </div>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_2_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_2 (Correcto).mp3">
            <p>
              Muy bien. Escuchar y dialogar son las bases para resolver conflictos de manera constructiva y fortalecer
              relaciones.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_2_2_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_2 (Incorrecto b).mp3">
            <p>
              Las decisiones unilaterales pueden resolver el problema momentáneamente, pero no promueven la colaboración
              ni solucionan la raíz del conflicto.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_2_1_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_2 (Incorrecto a).mp3">
            <p>Evitar el conflicto puede agravar el problema y generar tensiones a largo plazo.</p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_2_4_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_2 (Incorrecto d).mp3">
            <p>Delegar un conflicto puede generar desconfianza y falta de liderazgo.</p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-105_sld-4_3.mp4',
            contentURL: 'vid_int_ova-105_sld-4_3.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-105_sld-4_3.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_gr2_ova-105_sld-4_3.mp3" />

              <p className="u-font-bold">Selecciona la respuesta que sea correcta. </p>

              <p>
                <strong className="u-font-bold u-text-upper">3. </strong>
                ¿Cuál de las siguientes herramientas se utiliza comúnmente para la gestión de proyectos?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('3')}>
                  <Radios.Radio id="3-1" label="a. Diagrama de Gantt." name="option-3" state="success" />
                  <Radios.Radio
                    id="3-2"
                    label="b. CRM (Customer Relationship Management)."
                    name="option-3"
                    state="wrong"
                  />
                  <Radios.Radio id="3-3" label="c. Matriz DOFA." name="option-3" state="wrong" />
                  <Radios.Radio id="3-4" label="d. Canvas de Modelo de Negocios." name="option-3" state="wrong" />
                  <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                    <Radios.Button>
                      <Button variant="check" label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button variant="reset" label="Reintentar" onClick={notifyReset} />
                    </Radios.Button>
                  </Row>
                </Radios>
              </div>
            </Col>
            <Col xs="11" mm="10" md="9" lg="5" hd="5">
              <Image
                src="assets/images/SLIDE_04.webp"
                size="600px"
                title="Figura 3."
                alt="Personas trabajando en equipo en una sala de juntas. El gerente mirando a la cámara y sonriendo de manera amable."
              />
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_3_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_3 (Correcto).mp3">
            <p>
              Muy bien. El diagrama de Gantt es una herramienta ampliamente utilizada para planificar y gestionar
              proyectos de manera visual.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_3_2_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_3 (Incorrecto b).mp3">
            <p>Un CRM se utiliza principalmente para gestionar relaciones con clientes, no proyectos.</p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_3_3_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_3 (Incorrecto c).mp3">
            <p>
              La matriz DOFA es útil para el análisis estratégico, pero no es una herramienta específica de gestión de
              proyectos.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_3_4_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_3 (Incorrecto d).mp3">
            <p>
              El Canvas se utiliza para diseñar modelos de negocio, pero no es una herramienta de gestión de proyectos.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-105_sld-4_4.mp4',
            contentURL: 'vid_int_ova-105_sld-4_4.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-105_sld-4_4.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="5">
              <Image
                src="assets/images/SLIDE_04.webp"
                size="600px"
                title="Figura 3."
                alt="Personas trabajando en equipo en una sala de juntas. El gerente mirando a la cámara y sonriendo de manera amable."
              />
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_gr2_ova-105_sld-4_4.mp3" />

              <p className="u-font-bold">Selecciona la respuesta que sea correcta. </p>

              <p>
                <strong className="u-font-bold u-text-upper">4. </strong>
                ¿Qué caracteriza a un buen análisis de datos en la toma de decisiones?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('4')}>
                  <Radios.Radio
                    id="4-1"
                    label="a. Basarse exclusivamente en percepciones personales."
                    name="option-4"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="4-2"
                    label="b. Utilizar datos actualizados y relevantes para el problema."
                    name="option-4"
                    state="success"
                  />
                  <Radios.Radio
                    id="4-3"
                    label="c. Evitar involucrar a otros miembros del equipo en el análisis."
                    name="option-4"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="4-4"
                    label="d.  Recolectar la mayor cantidad de datos sin un propósito definido."
                    name="option-4"
                    state="wrong"
                  />
                  <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                    <Radios.Button>
                      <Button variant="check" label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button variant="reset" label="Reintentar" onClick={notifyReset} />
                    </Radios.Button>
                  </Row>
                </Radios>
              </div>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_4_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_4 (Correcto).mp3">
            <p>
              ¡Bien hecho! Los datos relevantes y actualizados son esenciales para tomar decisiones informadas y
              estratégicas.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_4_1_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_4 (Incorrecto a).mp3">
            <p>
              Las percepciones pueden ser útiles, pero los datos objetivos son fundamentales para decisiones acertadas.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_4_3_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_4 (Incorrecto c).mp3">
            <p>Involucrar al equipo fomenta la colaboración y mejora la calidad del análisis.</p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_4_4_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_4 (Incorrecto d).mp3">
            <p>La cantidad no es tan importante como la calidad y relevancia de los datos para el problema.</p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-105_sld-4_5.mp4',
            contentURL: 'vid_int_ova-105_sld-4_5.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-105_sld-4_5.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_gr2_ova-105_sld-4_5.mp3" />

              <p className="u-font-bold">Selecciona la respuesta que sea correcta. </p>

              <p>
                <strong className="u-font-bold u-text-upper">5. </strong>
                ¿Cuál de los siguientes factores contribuye más a una cultura organizacional positiva?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('5')}>
                  <Radios.Radio
                    id="5-1"
                    label="a. La competencia interna entre equipos."
                    name="option-5"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="5-2"
                    label="b. La diversidad e inclusión en las prácticas organizacionales."
                    name="option-5"
                    state="success"
                  />
                  <Radios.Radio
                    id="5-3"
                    label="c. Evitar cambios para mantener la estabilidad."
                    name="option-5"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="5-4"
                    label="d. La adopción de tecnologías sin considerar a las personas."
                    name="option-5"
                    state="wrong"
                  />
                  <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                    <Radios.Button>
                      <Button variant="check" label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button variant="reset" label="Reintentar" onClick={notifyReset} />
                    </Radios.Button>
                  </Row>
                </Radios>
              </div>
            </Col>
            <Col xs="11" mm="10" md="9" lg="5" hd="5">
              <Image
                src="assets/images/SLIDE_04.webp"
                size="600px"
                title="Figura 3."
                alt="Personas trabajando en equipo en una sala de juntas. El gerente mirando a la cámara y sonriendo de manera amable."
              />
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_5_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_5 (Correcto).mp3">
            <p>¡Bien hecho! La diversidad e inclusión fomentan un entorno más colaborativo, innovador y respetuoso.</p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_5_1_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_5 (Incorrecto a).mp3">
            <p>
              Aunque la competencia puede ser útil en algunos contextos, a menudo genera tensiones y disminuye la
              colaboración.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_5_3_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_5 (Incorrecto c).mp3">
            <p>Evitar cambios puede llevar al estancamiento y dificultar la adaptación a nuevos desafíos.</p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_5_4_WRONG}
            onClose={closeModal}
            audio="assets/audios/content/aud_gr2_ova-105_sld-4_5 (Incorrecto d).mp3">
            <p>
              La tecnología es útil, pero debe implementarse considerando su impacto en las personas y la cultura
              organizacional.
            </p>
          </ToastFeedback>
        </Panel.Section>
      </Panel>

      <ModalQuiz
        audio="assets/audios/content/aud_gr2_ova-105_sld-4_5 (Bien 5).mp3"
        interpreter={{ contentURL: 'assets/videos/interprete/vid_int_ova-105_sld-4_modal_general.mp4' }}
      />
    </>
  );
};

export default Ova105p04;
