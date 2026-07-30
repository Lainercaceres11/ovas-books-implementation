import { useState } from "react";
import { Audio, Col, Row } from "books-ui";

import { useGamification } from "@features/gamification";
import { ToastFeedback } from "@features/toast-feedback";
import { RaceCard } from "@games/game-race-card";
import { Avatar, AvatarVariation } from "@/shared/components/features/avatar";
import { Panel } from "@/shared/components/layouts";

const MODALS = {
  QUESTION_1_SUCCESS: "modal-correct-activity-q1",
  QUESTION_1_WRONG: "modal-wrong-activity-q1",
  QUESTION_2_SUCCESS: "modal-correct-activity-q2",
  QUESTION_2_WRONG: "modal-wrong-activity-q2",
  QUESTION_3_SUCCESS: "modal-correct-activity-q3",
  QUESTION_3_WRONG: "modal-wrong-activity-q3",
  QUESTION_4_SUCCESS: "modal-correct-activity-q4",
  QUESTION_4_WRONG: "modal-wrong-activity-q4",
  QUESTION_5_SUCCESS: "modal-correct-activity-q5",
  QUESTION_5_WRONG: "modal-wrong-activity-q5",
};

const LENGTH_QUESTION = 5;

const Ova107p04 = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const {
    Modal: ModalQuiz,
    Stars,
    notifyReset,
    reportResult,
  } = useGamification({
    id: "gr-2-107-2025-1-sld-4",
    total: LENGTH_QUESTION,
  });

  const handleValidate =
    (questionKey: string) =>
    ({ result }: { result: boolean }) => {
      const activityResult = result
        ? `${questionKey}_SUCCESS`
        : `${questionKey}_WRONG`;
      setIsOpen(MODALS[activityResult as keyof typeof MODALS]);

      reportResult({
        success: result,
        correct: LENGTH_QUESTION,
        total: LENGTH_QUESTION,
      });
    };

  const closeModal = () => setIsOpen(null);
  return (
    <RaceCard questionCount={LENGTH_QUESTION}>
      <Panel stars={Stars}>
        <Panel.Section
          interpreter={{
            a11yURL: "descriptives/vid_int_des_ova-107_sld-4_1.mp4",
            contentURL: "content/vid_int_ova-107_sld-4_1.mp4",
          }}
        >
          <Audio
            a11y
            src="assets/audios/descriptives/aud_des_ova-107_sld-4_1.mp3"
          />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5">
              <Avatar
                title="Figura 3."
                variation={AvatarVariation.PRESENTING_RIGHT}
              />
            </Col>

            <Col xs="11" mm="10" md="9" lg="5" hd="6" addClass="u-flow">
              <Audio
                addClass="u-m-0"
                src="assets/audios/content/aud_ova-107_sld-4_1.mp3"
              />

              <p>
                Te damos la bienvenida a esta actividad de presaberes del curso
                Servicios Socioambientales. Con esta prueba diagnóstica se busca
                identificar tus conocimientos previos sobre los conceptos,
                características y gestión de los servicios socioambientales en
                diferentes contextos. Este paso es fundamental para orientar el
                proceso de aprendizaje y fortalecer los temas que requieran
                mayor comprensión.
              </p>

              <p>
                Responde las siguientes cinco preguntas de selección múltiple
                con única respuesta. Cada pregunta presenta cuatro opciones,
                pero solo una es correcta. Al finalizar cada pregunta,
                encontrarás una retroalimentación que explica la respuesta
                adecuada y amplía la comprensión del tema. Esta actividad
                diagnóstica no tiene calificación, su objetivo es apoyar tu
                proceso de aprendizaje y prepararte para el desarrollo del
                curso.
              </p>
            </Col>
          </Row>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: "descriptives/vid_int_des_ova-107_sld-4_2.mp4",
            contentURL: "content/vid_int_ova-107_sld-4_2.mp4",
          }}
        >
          <Audio
            a11y
            src="assets/audios/descriptives/aud_des_ova-107_sld-4_2.mp3"
          />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-107_sld-4_2.mp3" />

              <figure className="u-flow">
                <RaceCard.Scene
                  onResult={handleValidate("QUESTION_1")}
                  notifyReset={notifyReset}
                  question="1. ¿Qué son los servicios socioambientales?"
                  id="question-svg-1"
                  drivers={{ machine: "Corredor 2" }}
                >
                  <RaceCard.Radio
                    id="1-1"
                    name="option-1"
                    label="A. Son únicamente los servicios económicos derivados del ambiente."
                    state="wrong"
                  />
                  <RaceCard.Radio
                    id="1-2"
                    name="option-1"
                    label="B. Son acciones que integran dimensiones sociales y ambientales para promover el bienestar humano y la sostenibilidad."
                    state="success"
                  />
                  <RaceCard.Radio
                    id="1-3"
                    name="option-1"
                    label="C. Son servicios relacionados con el turismo ambiental."
                    state="wrong"
                  />
                  <RaceCard.Radio
                    id="1-4"
                    name="option-1"
                    label="D. Son únicamente servicios de saneamiento básico."
                    state="wrong"
                  />
                </RaceCard.Scene>
                <figcaption>
                  <p className="u-text-center">
                    <strong>Animación 1.</strong> Actividad de presaberes.
                  </p>
                </figcaption>
              </figure>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_1_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_1_correcto.mp3"
          >
            <p>
              ¡Excelente! Has elegido la opción correcta. Los servicios
              socioambientales integran lo social y lo ambiental, buscando
              generar bienestar humano y equilibrio ecológico mediante acciones
              sostenibles.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_1_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_1_incorrecto.mp3"
          >
            <p>
              No te preocupes si no acertaste en esta ocasión. Esta actividad
              tiene como propósito identificar tus conocimientos previos y
              orientarte en los aspectos que necesitas fortalecer. Recuerda que
              los servicios socioambientales integran lo social y lo ambiental,
              buscando generar bienestar humano y equilibrio ecológico mediante
              acciones sostenibles.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: "descriptives/vid_int_des_ova-107_sld-4_3.mp4",
            contentURL: "content/vid_int_ova-107_sld-4_3.mp4",
          }}
        >
          <Audio
            a11y
            src="assets/audios/descriptives/aud_des_ova-107_sld-4_3.mp3"
          />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-107_sld-4_3.mp3" />

              <figure className="u-flow">
                <RaceCard.Scene
                  onResult={handleValidate("QUESTION_2")}
                  notifyReset={notifyReset}
                  question="2. ¿Cuál de los siguientes enunciados describe un servicio ambiental?"
                  id="question-svg-2"
                  drivers={{ machine: "Corredor 2" }}
                >
                  <RaceCard.Radio
                    id="2-1"
                    name="option-2"
                    label="A. Un bosque que regula el ciclo del agua y captura carbono."
                    state="success"
                  />
                  <RaceCard.Radio
                    id="2-2"
                    name="option-2"
                    label="B. Un programa de atención al cliente."
                    state="wrong"
                  />
                  <RaceCard.Radio
                    id="2-3"
                    name="option-2"
                    label="C. Una empresa de mensajería."
                    state="wrong"
                  />
                  <RaceCard.Radio
                    id="2-4"
                    name="option-2"
                    label="D. Un evento de responsabilidad social empresarial."
                    state="wrong"
                  />
                </RaceCard.Scene>
                <figcaption>
                  <p className="u-text-center">
                    <strong>Animación 1.</strong> Actividad de presaberes.
                  </p>
                </figcaption>
              </figure>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_2_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_2_correcto.mp3"
          >
            <p>
              ¡Excelente! Has elegido la opción correcta. Un bosque que regula
              el agua o captura carbono presta un servicio ambiental esencial
              para la sostenibilidad ecológica.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_2_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_2_incorrecto.mp3"
          >
            <p>
              No te preocupes si no acertaste en esta ocasión. Un bosque que
              regula el agua o captura carbono presta un servicio ambiental
              esencial para la sostenibilidad ecológica.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: "descriptives/vid_int_des_ova-107_sld-4_4.mp4",
            contentURL: "content/vid_int_ova-107_sld-4_4.mp4",
          }}
        >
          <Audio
            a11y
            src="assets/audios/descriptives/aud_des_ova-107_sld-4_4.mp3"
          />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-107_sld-4_4.mp3" />

              <figure className="u-flow">
                <RaceCard.Scene
                  onResult={handleValidate("QUESTION_3")}
                  notifyReset={notifyReset}
                  question="3. ¿Qué instrumento económico busca incentivar la conservación de ecosistemas mediante compensaciones?"
                  id="question-svg-3"
                  drivers={{ machine: "Corredor 2" }}
                >
                  <RaceCard.Radio
                    id="3-1"
                    name="option-3"
                    label="A. Programa de reforestación urbana."
                    state="wrong"
                  />
                  <RaceCard.Radio
                    id="3-2"
                    name="option-3"
                    label="B. Pago por Servicios Ambientales (PSA)."
                    state="success"
                  />
                  <RaceCard.Radio
                    id="3-3"
                    name="option-3"
                    label="C. Sistema de reciclaje comunitario."
                    state="wrong"
                  />
                  <RaceCard.Radio
                    id="3-4"
                    name="option-3"
                    label="D. Certificación de calidad ambiental."
                    state="wrong"
                  />
                </RaceCard.Scene>
                <figcaption>
                  <p className="u-text-center">
                    <strong>Animación 1.</strong> Actividad de presaberes.
                  </p>
                </figcaption>
              </figure>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_3_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_3_correcto.mp3"
          >
            <p>
              ¡Excelente! Has elegido la opción correcta. El PSA reconoce
              económicamente a quienes conservan ecosistemas que generan
              beneficios ambientales y sociales.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_3_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_3_incorrecto.mp3"
          >
            <p>
              No te preocupes si no acertaste en esta ocasión. Esta actividad
              tiene como propósito identificar tus conocimientos previos y
              orientarte en los aspectos que necesitas fortalecer. Recuerda, el
              PSA reconoce económicamente a quienes conservan ecosistemas que
              generan beneficios ambientales y sociales.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: "descriptives/vid_int_des_ova-107_sld-4_5.mp4",
            contentURL: "content/vid_int_ova-107_sld-4_5.mp4",
          }}
        >
          <Audio
            a11y
            src="assets/audios/descriptives/aud_des_ova-107_sld-4_5.mp3"
          />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-107_sld-4_5.mp3" />

              <figure className="u-flow">
                <RaceCard.Scene
                  onResult={handleValidate("QUESTION_4")}
                  notifyReset={notifyReset}
                  question="4. ¿Qué relación existe entre el bienestar social y el equilibrio ambiental?"
                  id="question-svg-4"
                  drivers={{ machine: "Corredor 2" }}
                >
                  <RaceCard.Radio
                    id="4-1"
                    name="option-4"
                    label="A. Son aspectos independientes que no tienen influencia entre sí."
                    state="wrong"
                  />
                  <RaceCard.Radio
                    id="4-2"
                    name="option-4"
                    label="B. El bienestar social depende únicamente del desarrollo económico."
                    state="wrong"
                  />
                  <RaceCard.Radio
                    id="4-3"
                    name="option-4"
                    label="C. El bienestar social y el equilibrio ambiental están interrelacionados, ya que la calidad de vida depende de un entorno sano y sostenible."
                    state="success"
                  />
                  <RaceCard.Radio
                    id="4-4"
                    name="option-4"
                    label="D. El equilibrio ambiental solo beneficia a los ecosistemas naturales, no a las personas."
                    state="wrong"
                  />
                </RaceCard.Scene>
                <figcaption>
                  <p className="u-text-center">
                    <strong>Animación 1.</strong> Actividad de presaberes.
                  </p>
                </figcaption>
              </figure>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_4_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_4_correcto.mp3"
          >
            <p>
              ¡Excelente! Has elegido la opción correcta. El bienestar social y
              el equilibrio ambiental están estrechamente vinculados; una
              sociedad saludable requiere ecosistemas funcionales y recursos
              naturales bien gestionados.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_4_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_4_incorrecto.mp3"
          >
            <p>
              No te preocupes si no acertaste en esta ocasión. Esta actividad
              tiene como propósito identificar tus conocimientos previos y
              orientarte en los aspectos que necesitas fortalecer. Recuerda, el
              bienestar social y el equilibrio ambiental están estrechamente
              vinculados: una sociedad saludable requiere ecosistemas
              funcionales y recursos naturales bien gestionados.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: "descriptives/vid_int_des_ova-107_sld-4_6.mp4",
            contentURL: "content/vid_int_ova-107_sld-4_6.mp4",
          }}
        >
          <Audio
            a11y
            src="assets/audios/descriptives/aud_des_ova-107_sld-4_6.mp3"
          />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-107_sld-4_6.mp3" />

              <figure className="u-flow">
                <RaceCard.Scene
                  onResult={handleValidate("QUESTION_5")}
                  notifyReset={notifyReset}
                  question="5. ¿Cuál de los siguientes ejemplos refleja una acción con impacto socioambiental positivo?"
                  id="question-svg-5"
                  drivers={{ machine: "Corredor 2" }}
                >
                  <RaceCard.Radio
                    id="5-1"
                    name="option-5"
                    label="A. La deforestación para ampliar zonas agrícolas."
                    state="wrong"
                  />
                  <RaceCard.Radio
                    id="5-2"
                    name="option-5"
                    label="B. La implementación de huertas comunitarias urbanas."
                    state="success"
                  />
                  <RaceCard.Radio
                    id="5-3"
                    name="option-5"
                    label="C. El uso indiscriminado de plásticos de un solo uso."
                    state="wrong"
                  />
                  <RaceCard.Radio
                    id="5-4"
                    name="option-5"
                    label="D. El vertimiento de aguas residuales sin tratamiento."
                    state="wrong"
                  />
                </RaceCard.Scene>
                <figcaption>
                  <p className="u-text-center">
                    <strong>Animación 1.</strong> Actividad de presaberes.
                  </p>
                </figcaption>
              </figure>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_5_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_4_correcto.mp3"
          >
            <p>
              ¡Excelente! Has elegido la opción correcta. Las huertas
              comunitarias urbanas integran aspectos sociales (participación y
              seguridad alimentaria) y ambientales (reciclaje orgánico,
              vegetación, sostenibilidad).
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_5_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_4_incorrecto.mp3"
          >
            <p>
              No te preocupes si no acertaste en esta ocasión. Esta actividad
              tiene como propósito identificar tus conocimientos previos y
              orientarte en los aspectos que necesitas fortalecer. Recuerda, las
              huertas comunitarias urbanas integran aspectos sociales
              (participación y seguridad alimentaria) y ambientales (reciclaje
              orgánico, vegetación, sostenibilidad).
            </p>
          </ToastFeedback>
        </Panel.Section>

        <ModalQuiz
          audio="assets/audios/aud_ova-106_sld-4_bien.mp3"
          interpreter={{ contentURL: "" }}
        />
      </Panel>
    </RaceCard>
  );
};

export default Ova107p04;
