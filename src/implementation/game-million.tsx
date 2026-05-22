import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { useGamification } from '@/shared/components/features/gamification';
import { GameMilions } from '@/shared/components/games/game-millions';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

import { ToastFeedback } from '../shared/components/features/toast-feedback/toast-feedback';

const MODALS = {
  QUESTION_SUCCESS: 'QUESTION_SUCCESS',
  QUESTION_WRONG: 'QUESTION_WRONG'
};

const LENGTH_ANSWERS = 5;

const Ova29p13 = () => {
  const {
    Modal: ModalGamification,
    Stars,
    notifyReset,
    reportResult
  } = useGamification({
    id: 'gr-1-29-2025-1-sld-13',
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
  const handleResult = ({ result }: { result: boolean }) => {
    if (result) {
      setIsOpen(MODALS[`QUESTION_SUCCESS` as keyof typeof MODALS]);
      setMoney(money + 1_000_000);
    } else {
      setIsOpen(MODALS[`QUESTION_WRONG` as keyof typeof MODALS]);
    }

    reportResult({ success: result, correct: LENGTH_ANSWERS, total: LENGTH_ANSWERS });
  };

  const closeModal = () => setIsOpen(null);

  return (
    <>
      <Panel stars={Stars}>
        <Panel.Section
          interpreter={{
            a11yURL: 'descriptives/vid_int_des_ova-29_sld-13_1.mp4',
            contentURL: 'content/vid_int_ova-29_sld-13_1.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-29_sld-13_1.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-29_sld-13_1.mp3" />

              <p className="u-text-center">
                La siguiente actividad de aprendizaje, permite medir el grado de aprehensión de los conceptos estudiados
                con relación a los diferentes usos de la IA en las estrategias de <em>marketing</em> digital, haciendo
                énfasis en su aplicabilidad a las innovaciones en cuanto a los nuevos requerimientos del mercado.
              </p>

              <p className="u-text-center">
                <strong>Descripción de la actividad:</strong> El cuestionario planteado consta de cinco ítems y gira en
                torno a los conocimientos dinamizados a lo largo del presente OVA (objeto virtual de aprendizaje). Se
                plantean cinco preguntas de selección múltiple con única respuesta.
              </p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onMoneyChange={setMoney}
                onResult={handleResult}
                question="1. ¿Cuál es uno de los principales beneficios de utilizar IA en el marketing digital?">
                <GameMilions.Element
                  name="option-1"
                  id="option-1-1"
                  state="success"
                  label="a: Mejora en la segmentación de audiencias."
                />

                <GameMilions.Element
                  name="option-1"
                  id="option-1-2"
                  state="wrong"
                  label="B: Reducción de costos operativos."
                />

                <GameMilions.Element
                  name="option-1"
                  id="option-1-3"
                  label="C: Aumento de la cantidad de anuncios."
                  state="wrong"
                />

                <GameMilions.Element
                  name="option-1"
                  id="option-1-4"
                  state="wrong"
                  label="D: Disminución de la interacción con los clientes."
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
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'descriptives/vid_int_des_ova-29_sld-13_2.mp4',
            contentURL: 'content/vid_int_ova-29_sld-13_2.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-29_sld-13_2.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-29_sld-13_2.mp3" />

              <p className="u-text-center">
                La siguiente actividad de aprendizaje, permite medir el grado de aprehensión de los conceptos estudiados
                con relación a los diferentes usos de la IA en las estrategias de <em>marketing</em> digital, haciendo
                énfasis en su aplicabilidad a las innovaciones en cuanto a los nuevos requerimientos del mercado.
              </p>

              <p className="u-text-center">
                <strong>Descripción de la actividad:</strong> El cuestionario planteado consta de cinco ítems y gira en
                torno a los conocimientos dinamizados a lo largo del presente OVA (objeto virtual de aprendizaje). Se
                plantean cinco preguntas de selección múltiple con única respuesta.
              </p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={handleResult}
                onMoneyChange={setMoney}
                question="2. ¿Qué herramienta de IA se utiliza comúnmente para mejorar la experiencia del cliente en marketing digital?">
                <GameMilions.Element name="option-2" id="option-2-1" state="wrong" label="a. Algoritmos de búsqueda." />
                <GameMilions.Element name="option-2" id="option-2-2" state="wrong" label="b. Redes sociales." />
                <GameMilions.Element name="option-2" id="option-2-3" state="success" label="c. Chatbots." />
                <GameMilions.Element name="option-2" id="option-2-4" state="wrong" label="d. Publicidad en línea." />
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
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'descriptives/vid_int_des_ova-29_sld-13_3.mp4',
            contentURL: 'content/vid_int_ova-29_sld-13_3.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-29_sld-13_3.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-29_sld-13_3.mp3" />

              <p className="u-text-center">
                La siguiente actividad de aprendizaje, permite medir el grado de aprehensión de los conceptos estudiados
                con relación a los diferentes usos de la IA en las estrategias de <em>marketing</em> digital, haciendo
                énfasis en su aplicabilidad a las innovaciones en cuanto a los nuevos requerimientos del mercado.
              </p>

              <p className="u-text-center">
                <strong>Descripción de la actividad:</strong> El cuestionario planteado consta de cinco ítems y gira en
                torno a los conocimientos dinamizados a lo largo del presente OVA (objeto virtual de aprendizaje). Se
                plantean cinco preguntas de selección múltiple con única respuesta.
              </p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={handleResult}
                onMoneyChange={setMoney}
                question="3. ¿Cómo ayuda la IA en la automatización de procesos de marketing digital?">
                <GameMilions.Element
                  name="option-3"
                  id="option-3-1"
                  state="wrong"
                  label="a. Creando contenido manualmente."
                />
                <GameMilions.Element
                  name="option-3"
                  id="option-3-2"
                  state="success"
                  label="b. Gestionando campañas publicitarias automáticamente."
                />
                <GameMilions.Element
                  name="option-3"
                  id="option-3-3"
                  state="wrong"
                  label="c. Disminuyendo la cantidad de datos."
                />
                <GameMilions.Element
                  name="option-3"
                  id="option-3-4"
                  state="wrong"
                  label="d. Aumentando el tiempo de respuesta."
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
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'descriptives/vid_int_des_ova-29_sld-13_4.mp4',
            contentURL: 'content/vid_int_ova-29_sld-13_4.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-29_sld-13_4.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-29_sld-13_4.mp3" />

              <p className="u-text-center">
                La siguiente actividad de aprendizaje, permite medir el grado de aprehensión de los conceptos estudiados
                con relación a los diferentes usos de la IA en las estrategias de <em>marketing</em> digital, haciendo
                énfasis en su aplicabilidad a las innovaciones en cuanto a los nuevos requerimientos del mercado.
              </p>

              <p className="u-text-center">
                <strong>Descripción de la actividad:</strong> El cuestionario planteado consta de cinco ítems y gira en
                torno a los conocimientos dinamizados a lo largo del presente OVA (objeto virtual de aprendizaje). Se
                plantean cinco preguntas de selección múltiple con única respuesta.
              </p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={handleResult}
                onMoneyChange={setMoney}
                question="4. ¿Qué técnica de IA se utiliza para analizar grandes volúmenes de datos y mejorar la toma de decisiones en marketing digital?">
                <GameMilions.Element
                  name="option-4"
                  id="option-4-1"
                  state="wrong"
                  label="a. Procesamiento de lenguaje natural."
                />
                <GameMilions.Element name="option-4" id="option-4-2" state="wrong" label="b. Visión por computadora." />
                <GameMilions.Element name="option-4" id="option-4-3" state="wrong" label="c. Robótica." />
                <GameMilions.Element
                  name="option-4"
                  id="option-4-4"
                  state="success"
                  label="d. Aprendizaje automático."
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
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'descriptives/vid_int_des_ova-29_sld-13_5.mp4',
            contentURL: 'content/vid_int_ova-29_sld-13_5.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-29_sld-13_5.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/content/aud_ova-29_sld-13_5.mp3" />

              <p className="u-text-center">
                La siguiente actividad de aprendizaje, permite medir el grado de aprehensión de los conceptos estudiados
                con relación a los diferentes usos de la IA en las estrategias de <em>marketing</em> digital, haciendo
                énfasis en su aplicabilidad a las innovaciones en cuanto a los nuevos requerimientos del mercado.
              </p>

              <p className="u-text-center">
                <strong>Descripción de la actividad:</strong> El cuestionario planteado consta de cinco ítems y gira en
                torno a los conocimientos dinamizados a lo largo del presente OVA (objeto virtual de aprendizaje). Se
                plantean cinco preguntas de selección múltiple con única respuesta.
              </p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={handleResult}
                onMoneyChange={setMoney}
                question="5. ¿Cuál es un desafío común al implementar IA en estrategias de marketing digital?">
                <GameMilions.Element
                  name="option-4"
                  id="option-4-1"
                  state="wrong"
                  label="a. Exceso de interacción con los clientes."
                />
                <GameMilions.Element name="option-4" id="option-4-2" state="wrong" label="b. Reducción de costos." />
                <GameMilions.Element
                  name="option-4"
                  id="option-4-3"
                  state="wrong"
                  label="c. Aumento de la cantidad de anuncios."
                />
                <GameMilions.Element
                  name="option-4"
                  id="option-4-4"
                  state="success"
                  label="d. Falta de datos de alta calidad."
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
        </Panel.Section>
      </Panel>

      <ToastFeedback
        type="success"
        isOpen={isOpen === MODALS.QUESTION_SUCCESS}
        onClose={closeModal}
        audio="assets/audios/content/aud_ova-29_sld-14 (Correcto).mp3">
        <p>
          Este resultado refleja la claridad y comprensión alcanzada en el aprendizaje de las temáticas de estudio, la
          cual puede ser revisada para refuerzo en el momento en que desees acceder a ella y tomarla como base para el
          aprendizaje de los conceptos, usos y elementos de la IA para la innovación, con énfasis en las estrategias de{' '}
          <em>marketing</em> digital.
        </p>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.QUESTION_WRONG}
        onClose={closeModal}
        audio="assets/audios/aud_ova-29__sld-14 (incorrecto).mp3">
        <p>
          Es preciso retomar la temática de estudio, para ser abordada con mayor claridad. Tus conocimientos previos
          sobre el tema se encuentran por debajo de lo esperado, por lo cual es necesario iniciar un proceso de
          fortalecimiento del aprendizaje, que te permitan ir adquiriendo el dominio de conocimientos propios de las
          nuevas tendencias del <em>marketing</em> digital.
        </p>
      </ToastFeedback>

      <ModalGamification
        audio="assets/audios/aud_ova-29_sld-14_modal_gamification.mp3"
        interpreter={{ contentURL: '' }}
      />
    </>
  );
};

export default Ova29p13;
