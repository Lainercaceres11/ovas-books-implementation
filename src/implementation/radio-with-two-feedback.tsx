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
  QUESTION_5_WRONG: 'modal-wrong-activity-q5',
  QUESTION_6_SUCCESS: 'modal-correct-activity-q6',
  QUESTION_6_WRONG: 'modal-wrong-activity-q6',
  QUESTION_7_SUCCESS: 'modal-correct-activity-q7',
  QUESTION_7_WRONG: 'modal-wrong-activity-q7',
  QUESTION_8_SUCCESS: 'modal-correct-activity-q8',
  QUESTION_8_WRONG: 'modal-wrong-activity-q8',
  QUESTION_9_SUCCESS: 'modal-correct-activity-q9',
  QUESTION_9_WRONG: 'modal-wrong-activity-q9',
  QUESTION_10_SUCCESS: 'modal-correct-activity-q10',
  QUESTION_10_WRONG: 'modal-wrong-activity-q10'
};

const LENGTH_ANSWERS = 10;

const Ova70p04 = () => {
  const { Modal, Stars, notifyReset, reportResult } = useGamification({
    id: 'gr-1-70-2024-1-sld-4',
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
            a11yURL: 'vid_int_des_ova-70_sld-4_1.mp4',
            contentURL: 'vid_int_ova-70_sld-4_1.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-4_1.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="4" addClass="u-flow">
              <Avatar variation={AvatarVariation.PRESENTING} title="Figura 3." />
            </Col>
            <Col xs="11" mm="10" md="9" lg="5" hd="6" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/aud_ova-70_sld-4_1.mp3" />
              <p>
                <strong>Introducción:</strong> la siguiente actividad permite la activación de los conocimientos previos
                del estudiante con respecto al tema de las cadenas productivas y la asociatividad en el sector
                agroindustrial, mediante diez preguntas con opciones múltiples. Cada pregunta está acompañada de una
                realimentación explicativa que ayudará a reforzar conceptos clave, aclarar dudas y conectar experiencias
                con los contenidos que trabajaremos más adelante. No se trata de evaluar, sino de reconocer los saberes
                iniciales y abrir espacio para nuevos aprendizajes de forma reflexiva y participativa.
              </p>

              <p>
                <strong>Actividad:</strong> la actividad consiste en un cuestionario de diez preguntas de selección
                múltiple con única respuesta, basada en los conceptos básicos de cadenas productivas agroindustriales y
                la asociatividad para la generación de valor agregado regional, el encadenamiento productivo y la
                proyección global.
              </p>

              <p>
                <strong>Instrucción:</strong> acceder por medio del enlace de la actividad; pulsar en iniciar y proceder
                seleccionando la respuesta correcta a cada uno de los interrogantes planteados, con base en el contenido
                de contexto previo a cada una de las preguntas. Esta actividad se puede desarrollar cuantas veces se
                desee para generar mayor aprendizaje, por lo tanto, se puede proceder sin temor a equivocarse, pues no
                se trata de evaluar un conocimiento sino más bien de abordar contenidos para encontrar presaberes que
                puedan ser fortalecidos por medio de este recurso de aprendizaje.
              </p>
            </Col>
          </Row>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-4_2.mp4',
            contentURL: 'vid_int_ova-70_sld-4_2.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-4_2.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/aud_ova-70_sld-4_2.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 1</strong>
                <br />
                <strong>Contexto:</strong> en el sector agropecuario, los productos no llegan al consumidor directamente
                desde el campo. Existen procesos y actores que intervienen en su transformación y comercialización.
                Pregunta: ¿Qué es una cadena productiva?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_1')}>
                  <Radios.Radio
                    id="1-1"
                    label="a.Un conjunto de leyes que regulan la producción agrícola."
                    name="option-1"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="1-2"
                    label="b. Un sistema de transporte de productos agrícolas al consumidor final."
                    name="option-1"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="1-3"
                    label="c. Es la organización de actores y etapas desde la producción hasta la venta de un producto."
                    name="option-1"
                    state="success"
                  />
                  <Radios.Radio
                    id="1-4"
                    label="d. Una forma de almacenar productos agrícolas para exportación."
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
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar variation={AvatarVariation.THINKING} title="Figura 4." />
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_1_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_1_correcto.mp3">
            <p>
              Muy bien. La respuesta es correcta. Una cadena productiva articula todos los eslabones que intervienen en
              la transformación de un producto, desde el productor primario hasta el consumidor final. Esta organización
              permite identificar oportunidades de mejora, agregar valor y fortalecer la competitividad del sector.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_1_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_1_incorrecto.mp3">
            <p>
              La respuesta es incorrecta. Una cadena productiva no se limita a leyes, transporte o almacenamiento. Es un
              sistema que conecta procesos y actores desde el origen del producto hasta su venta, generando valor en
              cada etapa.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-4_3.mp4',
            contentURL: 'vid_int_ova-70_sld-4_3.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-4_3.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar
                addClass="u-do-flip"
                variation={AvatarVariation.THINKING}
                size="430px"
                title="Figura 4."
                alt="Avatar."
              />
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/aud_ova-70_sld-4_3.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 2</strong>
                <br />
                <strong>Contexto:</strong> los productores rurales enfrentan desafíos como bajos precios y escaso acceso
                a tecnología. La asociatividad surge como una estrategia para fortalecer su posición. Pregunta: ¿Cuál es
                el objetivo principal de la asociatividad en el agro?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_2')}>
                  <Radios.Radio id="2-1" label="a. Disminuir la calidad del producto." name="option-2" state="wrong" />
                  <Radios.Radio
                    id="2-2"
                    label="b. Mejorar la capacidad de negociación."
                    name="option-2"
                    state="success"
                  />
                  <Radios.Radio id="2-3" label="c. Evitar el pago de impuestos." name="option-2" state="wrong" />
                  <Radios.Radio
                    id="2-4"
                    label="d. Eliminar la competencia entre productores."
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
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_2_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_2_correcto.mp3">
            <p>
              Muy bien. La respuesta es correcta. La asociatividad permite que los productores se unan para negociar
              mejores condiciones, acceder a insumos, compartir infraestructura y fortalecer su presencia en el mercado.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_2_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_2_incorrecto.mp3">
            <p>
              La respuesta es incorrecta. La asociatividad no busca evadir obligaciones ni eliminar competencia. Su
              propósito es unir esfuerzos para mejorar condiciones de negociación, acceso a mercados y sostenibilidad
              económica.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-4_4.mp4',
            contentURL: 'vid_int_ova-70_sld-4_4.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-4_4.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/aud_ova-70_sld-4_4.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 3</strong>
                <br />
                <strong>Contexto:</strong> para que los productos agropecuarios sean sostenibles y rentables, deben
                competir en calidad, precio y acceso a mercados. Pregunta: ¿Qué favorece la competitividad en el agro?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_3')}>
                  <Radios.Radio
                    id="3-1"
                    label="a. Reducir la producción y evitar la innovación."
                    name="option-3"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="3-2"
                    label="b. Agregar valor, asociarse y acceder a mercados."
                    name="option-3"
                    state="success"
                  />
                  <Radios.Radio
                    id="3-3"
                    label="c. Aislarse de los mercados internacionales."
                    name="option-3"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="3-4"
                    label="d. Vender sin certificaciones ni estándares."
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
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar variation={AvatarVariation.THINKING} title="Figura 4." />
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_3_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_3_correcto.mp3">
            <p>
              Muy bien. La respuesta es correcta. Estas acciones permiten que los productos agropecuarios se posicionen
              mejor, generen mayor rentabilidad y respondan a las exigencias del mercado.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_3_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_3_incorrecto.mp3">
            <p>
              La respuesta es incorrecta. La competitividad se construye con valor agregado, alianzas estratégicas y
              acceso a mercados. Aislarse o evitar la innovación limita el crecimiento del sector.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-4_5.mp4',
            contentURL: 'vid_int_ova-70_sld-4_5.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-4_5.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar
                addClass="u-do-flip"
                variation={AvatarVariation.THINKING}
                size="430px"
                title="Figura 4."
                alt="Avatar."
              />
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/aud_ova-70_sld-4_5.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 4</strong>
                <br />
                <strong>Contexto:</strong> en el agro, los productos pueden transformarse en bienes de consumo mediante
                procesos que involucran varios actores y etapas. Pregunta: ¿Qué son los encadenamientos productivos?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_4')}>
                  <Radios.Radio
                    id="4-1"
                    label="a. Actividades financieras que apoyan el agro."
                    name="option-4"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="4-2"
                    label="b. Actividades económicas que transforman productos del agro en bienes de consumo."
                    name="option-4"
                    state="success"
                  />
                  <Radios.Radio
                    id="4-3"
                    label="c. Normas legales para exportar productos."
                    name="option-4"
                    state="wrong"
                  />
                  <Radios.Radio id="4-4" label="d. Sistemas de transporte rural." name="option-4" state="wrong" />
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
            isOpen={isOpen === MODALS.QUESTION_4_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_4_correcto.mp3">
            <p>
              Muy bien. La respuesta es correcta. Los encadenamientos productivos permiten que los productos
              agropecuarios se conviertan en bienes con valor agregado, como alimentos procesados, textiles o
              bioproductos, fortaleciendo el desarrollo económico.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_4_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_4_incorrecto.mp3">
            <p>
              La respuesta es incorrecta. Los encadenamientos productivos no se limitan a normas o transporte. Son
              procesos que transforman la producción primaria en bienes de consumo, generando empleo y dinamismo
              económico.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-4_6.mp4',
            contentURL: 'vid_int_ova-70_sld-4_6.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-4_6.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/aud_ova-70_sld-4_6.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 5</strong>
                <br />
                <strong>Contexto:</strong> en las cadenas productivas, existen organizaciones que brindan servicios
                técnicos, logísticos o financieros para fortalecer a los productores. Pregunta: ¿Qué es una unidad de
                apoyo?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_5')}>
                  <Radios.Radio
                    id="5-1"
                    label="a. Organización que presta servicios para mejorar la producción o poder de negociación."
                    name="option-5"
                    state="success"
                  />
                  <Radios.Radio
                    id="5-2"
                    label="b. Empresa que vende maquinaria agrícola."
                    name="option-5"
                    state="wrong"
                  />
                  <Radios.Radio id="5-3" label="c. Grupo de consumidores rurales." name="option-5" state="wrong" />
                  <Radios.Radio
                    id="5-4"
                    label="d. Sistema de transporte para exportación."
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
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar variation={AvatarVariation.THINKING} title="Figura 4." />
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_5_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_5_correcto.mp3">
            <p>
              Muy bien. La respuesta es correcta. Las unidades de apoyo pueden ser cooperativas, centros técnicos,
              entidades públicas o privadas que fortalecen la capacidad productiva, comercial y organizativa de los
              actores rurales.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_5_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_5_incorrecto.mp3">
            <p>
              La respuesta es incorrecta. Las unidades de apoyo no se limitan a ventas o transporte. Son organizaciones
              que brindan asistencia técnica, capacitación, servicios financieros y acompañamiento estratégico a los
              productores.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-4_7.mp4',
            contentURL: 'vid_int_ova-70_sld-4_7.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-4_7.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar
                addClass="u-do-flip"
                variation={AvatarVariation.THINKING}
                size="430px"
                title="Figura 4."
                alt="Avatar."
              />
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/aud_ova-70_sld-4_7.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 6</strong>
                <br />
                <strong>Contexto:</strong> a competitividad depende de múltiples factores, pero algunos son
                especialmente determinantes en el contexto agroindustrial. Pregunta: ¿Qué es un factor clave para la
                competitividad?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_6')}>
                  <Radios.Radio id="6-1" label="a. Producción sin control de calidad." name="option-6" state="wrong" />
                  <Radios.Radio
                    id="6-2"
                    label="b. La innovación y la calidad de los productos."
                    name="option-6"
                    state="success"
                  />
                  <Radios.Radio id="6-3" label="c. Aislamiento de los productores." name="option-6" state="wrong" />
                  <Radios.Radio id="6-4" label="d. Reducción de la productividad." name="option-6" state="wrong" />
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
            isOpen={isOpen === MODALS.QUESTION_6_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_6_correcto.mp3">
            <p>
              Muy bien. La respuesta es correcta. La innovación permite desarrollar productos diferenciados, mejorar
              procesos y adaptarse a las demandas del mercado. La calidad garantiza confianza y fidelización de los
              consumidores.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_6_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_6_incorrecto.mp3">
            <p>
              La respuesta es incorrecta. La competitividad no se logra con improvisación ni baja calidad. Requiere
              innovación constante, cumplimiento de estándares y estrategias que generen valor real.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-4_8.mp4',
            contentURL: 'vid_int_ova-70_sld-4_8.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-4_8.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/aud_ova-70_sld-4_8.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 7</strong>
                <br />
                <strong>Contexto:</strong> cada etapa en la transformación de un producto agropecuario representa un
                eslabón dentro de la cadena productiva. Pregunta: ¿Qué es un eslabón de la cadena productiva?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_7')}>
                  <Radios.Radio
                    id="7-1"
                    label="a. Actividad que transforma la materia prima en producto final."
                    name="option-7"
                    state="success"
                  />
                  <Radios.Radio id="7-2" label="b. Punto de venta rural." name="option-7" state="wrong" />
                  <Radios.Radio id="7-3" label="c. Sistema de transporte agrícola." name="option-7" state="wrong" />
                  <Radios.Radio id="7-4" label="d. Normativa para exportación." name="option-7" state="wrong" />
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
              <Avatar variation={AvatarVariation.THINKING} title="Figura 4." />
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_7_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_7_correcto.mp3">
            <p>
              Muy bien. La respuesta es correcta. Los eslabones incluyen producción, transformación, empaque,
              distribución y comercialización. Cada uno agrega valor y permite que el producto llegue al consumidor
              final.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_7_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_7_incorrecto.mp3">
            <p>
              La respuesta es incorrecta. Un eslabón no es solo transporte o normativa. Es una etapa concreta en la
              cadena donde se transforma o se agrega valor al producto agropecuario.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-4_9.mp4',
            contentURL: 'vid_int_ova-70_sld-4_9.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-4_9.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar
                addClass="u-do-flip"
                variation={AvatarVariation.THINKING}
                size="430px"
                title="Figura 4."
                alt="Avatar."
              />
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/aud_ova-70_sld-4_9.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 8</strong>
                <br />
                <strong>Contexto:</strong> la competitividad bien gestionada genera impactos positivos en la economía
                rural, el empleo y el acceso a mercados. Pregunta: ¿Cuál es un beneficio de la competitividad en el
                sector agropecuario?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_8')}>
                  <Radios.Radio
                    id="8-1"
                    label="a. Disminución de la calidad de vida rural."
                    name="option-8"
                    state="wrong"
                  />
                  <Radios.Radio id="8-2" label="b. Pérdida de acceso a mercados." name="option-8" state="wrong" />
                  <Radios.Radio
                    id="8-3"
                    label="c. Acceso a nuevos mercados y mejores ingresos."
                    name="option-8"
                    state="success"
                  />
                  <Radios.Radio id="8-4" label="d. Aumento de la informalidad." name="option-8" state="wrong" />
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
            isOpen={isOpen === MODALS.QUESTION_8_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_8_correcto.mp3">
            <p>
              Muy bien. La respuesta es correcta. La competitividad permite que los productores accedan a mejores
              mercados, aumenten sus ingresos y generen empleo local, contribuyendo al desarrollo rural y la
              sostenibilidad.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_8_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_8_incorrecto.mp3">
            <p>
              La respuesta es incorrecta. La competitividad no perjudica la calidad de vida ni fomenta la informalidad.
              Bien gestionada, mejora los ingresos, abre oportunidades y fortalece el tejido económico rural.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-4_10.mp4',
            contentURL: 'vid_int_ova-70_sld-4_10.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-4_10.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/aud_ova-70_sld-4_10.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 9</strong>
                <br />
                <strong>Contexto:</strong> en el entorno de los agronegocios, los productores enfrentan desafíos comunes
                como el acceso limitado a mercados, la debilidad en la negociación individual y la falta de
                infraestructura. La asociatividad surge como una estrategia clave para superar estos obstáculos mediante
                el trabajo colaborativo. Pregunta: ¿Qué es la asociatividad en los agronegocios?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_9')}>
                  <Radios.Radio
                    id="9-1"
                    label="a. Es una competencia entre productores que buscan dominar el mercado."
                    name="option-9"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="9-2"
                    label="b. Permite unir esfuerzos para negociar mejor y acceder a mercados."
                    name="option-9"
                    state="success"
                  />
                  <Radios.Radio
                    id="9-3"
                    label="c. Es una estrategia para evitar regulaciones comerciales."
                    name="option-9"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="9-4"
                    label="d. Es una forma de producción individual sin colaboración."
                    name="option-9"
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
              <Avatar variation={AvatarVariation.THINKING} title="Figura 4." />
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_9_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_9_correcto.mp3">
            <p>
              Muy bien. La respuesta es correcta. La asociatividad en los agronegocios permite que los productores se
              organicen en grupos, cooperativas o asociaciones para fortalecer su capacidad de negociación, compartir
              recursos, acceder a mercados más exigentes y mejorar su rentabilidad. Esta estrategia promueve la equidad,
              la eficiencia y el desarrollo sostenible en el sector agropecuario.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_9_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_9_incorrecto.mp3">
            <p>
              La respuesta es incorrecta. La asociatividad no busca competir ni evitar regulaciones. Al contrario, es
              una estrategia colaborativa que permite a los productores unir esfuerzos, negociar en bloque y acceder a
              mejores condiciones de mercado. Esta forma de organización fortalece la sostenibilidad y el impacto
              económico del sector.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-4_11.mp4',
            contentURL: 'vid_int_ova-70_sld-4_11.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-4_11.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar
                addClass="u-do-flip"
                variation={AvatarVariation.THINKING}
                size="430px"
                title="Figura 4."
                alt="Avatar."
              />
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/aud_ova-70_sld-4_11.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 10</strong>
                <br />
                <strong>Contexto:</strong> las cadenas productivas no funcionan de manera aislada. Requieren la
                participación coordinada de diversos actores que aportan desde distintos niveles: producción,
                transformación, comercialización y regulación. Pregunta: ¿Cuáles son los actores que participan en las
                cadenas productivas?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('QUESTION_10')}>
                  <Radios.Radio id="10-1" label="a. Solo los productores rurales." name="option-10" state="wrong" />
                  <Radios.Radio
                    id="10-2"
                    label="b. El trabajo conjunto entre gobierno, productores, comercializadores y consumidores."
                    name="option-10"
                    state="success"
                  />
                  <Radios.Radio
                    id="10-3"
                    label="c. Únicamente los exportadores internacionales."
                    name="option-10"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="10-4"
                    label="d. Las entidades financieras y bancarias."
                    name="option-10"
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
            isOpen={isOpen === MODALS.QUESTION_10_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_10_correcto.mp3">
            <p>
              Muy bien. La respuesta es correcta. Las cadenas productivas requieren la articulación de múltiples
              actores: los productores generan la materia prima, los comercializadores la distribuyen, los consumidores
              la demandan y el gobierno regula, apoya y promueve condiciones favorables para el desarrollo del sector.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_10_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-102_sld-4_10_incorrecto.mp3">
            <p>
              La respuesta es incorrecta. Las cadenas productivas no dependen de un solo actor. Funcionan gracias a la
              colaboración entre productores, comercializadores, consumidores y entidades gubernamentales, cada uno con
              un rol clave en la generación de valor y sostenibilidad.
            </p>
          </ToastFeedback>
        </Panel.Section>
      </Panel>
      {Modal}
    </>
  );
};

export default Ova70p04;
