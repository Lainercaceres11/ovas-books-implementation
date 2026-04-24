import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { Radios } from '@/shared/components/activities/radio-activity';
import { Avatar } from '@/shared/components/features/avatar';
import { useGamification } from '@/shared/components/features/gamification';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

import { ToastFeedback } from '../shared/components/features/toast-feedback/toast-feedback';

import type { Option } from '@/shared/components/activities/radio-activity/types/types';
import { AvatarVariation } from '@/shared/components/features/avatar/types/type';

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

const Ova106p04 = () => {
  const {
    Modal: ModalQuiz,
    Stars,
    notifyReset,
    reportResult
  } = useGamification({
    id: 'gr-1-106-2024-1-sld-4',
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
    ({ result }: { result: boolean; options: Option[] }) => {
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
    <>
      <Panel stars={Stars}>
        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-106_sld-4_1.mp4',
            contentURL: 'vid_int_ova-106_sld-4_1.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-106_sld-4_1.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar variation={AvatarVariation.THINKING} title="Figura 2." />
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_ova-106_sld-4_1.mp3" />

              <p className="u-font-bold">
                A continuación, realizarás la autoevaluación de conocimientos adquiridos en este recurso. Consiste en
                responder cinco preguntas de selección múltiple con única respuesta.
              </p>

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 1</strong>
                <br />
                ¿Qué es un mercado de capitales?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_1')}>
                  <Radios.Radio
                    id="1-1"
                    label="a. Un espacio donde se negocian únicamente bienes y servicios."
                    name="option-1"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="1-2"
                    label="b. Un mercado donde se intercambian instrumentos financieros como acciones y bonos."
                    name="option-1"
                    state="success"
                  />
                  <Radios.Radio
                    id="1-3"
                    label="c. Un sistema exclusivo de ahorro bancario."
                    name="option-1"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="1-4"
                    label="d. Un mecanismo de compraventa de divisas extranjeras."
                    name="option-1"
                    state="wrong"
                  />
                  <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                    <Radios.Button>
                      <Button variant="check" label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button onClick={notifyReset} variant="reset" label="Reintentar" />
                    </Radios.Button>
                  </Row>
                </Radios>
              </div>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_1_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_1_correcto.mp3">
            <p>
              ¡Muy bien! El mercado de capitales es donde se negocian instrumentos financieros como acciones, bonos y
              derivados. Es clave para el financiamiento de empresas y gobiernos.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_1_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_1_incorrecto.mp3">
            <p>
              Recuerda que el mercado de capitales no se limita a bienes, divisas o ahorro bancario. Se centra en
              instrumentos financieros como acciones y bonos.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-106_sld-4_2.mp4',
            contentURL: 'vid_int_ova-106_sld-4_2.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-106_sld-4_2.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_ova-106_sld-4_2.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 2</strong>
                <br />
                La diversificación en una cartera de inversión busca principalmente:
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_2')}>
                  <Radios.Radio
                    id="2-1"
                    label="a. Incrementar al máximo la rentabilidad sin importar el riesgo."
                    name="option-2"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="2-2"
                    label="b. Reducir el riesgo distribuyendo la inversión en diferentes activos."
                    name="option-2"
                    state="success"
                  />
                  <Radios.Radio
                    id="2-3"
                    label="c. Evitar completamente las pérdidas en los mercados financieros."
                    name="option-2"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="2-4"
                    label="d.  Invertir únicamente en activos de renta fija."
                    name="option-2"
                    state="wrong"
                  />
                  <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                    <Radios.Button>
                      <Button variant="check" label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button onClick={notifyReset} variant="reset" label="Reintentar" />
                    </Radios.Button>
                  </Row>
                </Radios>
              </div>
            </Col>

            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar addClass="u-do-flip" variation={AvatarVariation.THINKING} title="Figura 2." />
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_2_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_2_correcto.mp3">
            <p>
              ¡Muy bien! Diversificar significa no “poner todos los huevos en la misma canasta”, lo cual disminuye el
              impacto de pérdidas en un solo activo.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_2_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_2_incorrecto.mp3">
            <p>
              La diversificación no elimina por completo el riesgo ni se centra solo en renta fija; busca balancear
              rentabilidad y riesgo a través de diferentes activos.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-106_sld-4_3.mp4',
            contentURL: 'vid_int_ova-106_sld-4_3.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-106_sld-4_3.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar variation={AvatarVariation.THINKING} title="Figura 2." />
            </Col>
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_ova-106_sld-4_3.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 3</strong>
                <br />
                En finanzas, el término “riesgo” hace referencia a:
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_3')}>
                  <Radios.Radio
                    id="3-1"
                    label="a. Incrementar al máximo la rentabilidad sin importar el riesgo."
                    name="option-3"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="3-2"
                    label="b. Reducir el riesgo distribuyendo la inversión en diferentes activos."
                    name="option-3"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="3-3"
                    label="c. La posibilidad de que los resultados de la inversión difieran de lo esperado."
                    name="option-3"
                    state="success"
                  />
                  <Radios.Radio
                    id="3-4"
                    label="d. Invertir únicamente en activos de renta fija."
                    name="option-3"
                    state="wrong"
                  />
                  <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                    <Radios.Button>
                      <Button variant="check" label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button onClick={notifyReset} variant="reset" label="Reintentar" />
                    </Radios.Button>
                  </Row>
                </Radios>
              </div>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_3_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_3_correcto.mp3">
            <p>
              El riesgo refleja la incertidumbre de que los resultados reales no coincidan con lo proyectado, pudiendo
              ser mejores o peores.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_3_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_3_incorrecto.mp3">
            <p>
              El riesgo no es certeza de pérdida ni solo costo de oportunidad, sino la posibilidad de variabilidad en
              los resultados.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-106_sld-4_4.mp4',
            contentURL: 'vid_int_ova-106_sld-4_4.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-106_sld-4_4.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_ova-106_sld-4_4.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 4</strong>
                <br />
                ¿Cuál de los siguientes instrumentos pertenece al mercado de capitales?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_4')}>
                  <Radios.Radio
                    id="4-1"
                    label="a. Certificado de Depósito a Término (CDT)."
                    name="option-4"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="4-2"
                    label="b. Acciones ordinarias de una empresa."
                    name="option-4"
                    state="success"
                  />
                  <Radios.Radio id="4-3" label="c. Cuentas de ahorro en un banco." name="option-4" state="wrong" />
                  <Radios.Radio id="4-4" label="d. Tarjetas de crédito." name="option-4" state="wrong" />
                  <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                    <Radios.Button>
                      <Button variant="check" label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button onClick={notifyReset} variant="reset" label="Reintentar" />
                    </Radios.Button>
                  </Row>
                </Radios>
              </div>
            </Col>

            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar addClass="u-do-flip" variation={AvatarVariation.THINKING} title="Figura 2." />
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_4_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_4_correcto.mp3">
            <p>
              ¡Muy bien! Las acciones son instrumentos típicos del mercado de capitales, pues representan participación
              en una empresa.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_4_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_4_incorrecto.mp3">
            <p>
              Los CDT, cuentas de ahorro y tarjetas de crédito pertenecen al sistema financiero, pero no al mercado de
              capitales.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-106_sld-4_5.mp4',
            contentURL: 'vid_int_ova-106_sld-4_5.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-106_sld-4_5.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar variation={AvatarVariation.THINKING} title="Figura 2." />
            </Col>
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_ova-106_sld-4_5.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 5</strong>
                <br />
                Un portafolio eficiente se caracteriza por:
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_5')}>
                  <Radios.Radio
                    id="5-1"
                    label="a. Minimizar el riesgo manteniendo la rentabilidad esperada."
                    name="option-5"
                    state="success"
                  />
                  <Radios.Radio
                    id="5-2"
                    label="b. Maximizar el riesgo para obtener mayores rendimientos."
                    name="option-5"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="5-3"
                    label="c. Invertir en un único activo que ofrezca seguridad."
                    name="option-5"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="5-4"
                    label="d. Mantener liquidez únicamente en efectivo."
                    name="option-5"
                    state="wrong"
                  />
                  <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                    <Radios.Button>
                      <Button variant="check" label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button onClick={notifyReset} variant="reset" label="Reintentar" />
                    </Radios.Button>
                  </Row>
                </Radios>
              </div>
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_5_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_5_correcto.mp3">
            <p>
              ¡Muy bien! Un portafolio eficiente logra el equilibrio entre riesgo y rentabilidad esperada, optimizando
              la inversión.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_5_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-106_sld-4_5_incorrecto.mp3">
            <p>
              Recuerda que eficiencia no es maximizar el riesgo ni concentrar todo en un solo activo, sino balancear las
              variables.
            </p>
          </ToastFeedback>
        </Panel.Section>
      </Panel>
      <ModalQuiz audio="assets/audios/aud_ova-106_sld-4_bien.mp3" interpreter={{ contentURL: '', a11yURL: '' }} />
    </>
  );
};

export default Ova106p04;
