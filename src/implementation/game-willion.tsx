import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { Avatar } from '@/shared/components/features/avatar';
import { useGamification } from '@/shared/components/features/gamification';
import { GameMilions } from '@/shared/components/games/game-millions';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

import { ToastFeedback } from '../shared/components/features/toast-feedback/toast-feedback';

import { AvatarVariation } from '@/shared/components/features/avatar/types/type';

const MODALS = {
  QUESTION_1_SUCCESS: 'QUESTION_1_SUCCESS',
  QUESTION_1_WRONG: 'QUESTION_1_WRONG',
  QUESTION_2_SUCCESS: 'QUESTION_2_SUCCESS',
  QUESTION_2_WRONG: 'QUESTION_2_WRONG',
  QUESTION_3_SUCCESS: 'QUESTION_3_SUCCESS',
  QUESTION_3_WRONG: 'QUESTION_3_WRONG',
  QUESTION_4_SUCCESS: 'QUESTION_4_SUCCESS',
  QUESTION_4_WRONG: 'QUESTION_4_WRONG',
  QUESTION_5_SUCCESS: 'QUESTION_5_SUCCESS',
  QUESTION_5_WRONG: 'QUESTION_5_WRONG',
  QUESTION_6_SUCCESS: 'QUESTION_6_SUCCESS',
  QUESTION_6_WRONG: 'QUESTION_6_WRONG',
  QUESTION_7_SUCCESS: 'QUESTION_7_SUCCESS',
  QUESTION_7_WRONG: 'QUESTION_7_WRONG',
  QUESTION_8_SUCCESS: 'QUESTION_8_SUCCESS',
  QUESTION_8_WRONG: 'QUESTION_8_WRONG',
  QUESTION_9_SUCCESS: 'QUESTION_9_SUCCESS',
  QUESTION_9_WRONG: 'QUESTION_9_WRONG',
  QUESTION_10_SUCCESS: 'QUESTION_10_SUCCESS',
  QUESTION_10_WRONG: 'QUESTION_10_WRONG',
  QUESTION_11_SUCCESS: 'QUESTION_11_SUCCESS',
  QUESTION_11_WRONG: 'QUESTION_11_WRONG'
};

const LENGTH_ANSWERS = 10;

const Ova70p12 = () => {
  const { Modal, Stars, notifyReset, reportResult } = useGamification({
    id: 'gr-1-70-2024-1-sld-12',
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
      setIsOpen(MODALS[`QUESTION_${questionKey}_SUCCESS` as keyof typeof MODALS]);
      setMoney(money + 1_000_000);
    } else {
      setIsOpen(MODALS[`QUESTION_${questionKey}_WRONG` as keyof typeof MODALS]);
    }

    reportResult({ success: result, correct: LENGTH_ANSWERS, total: LENGTH_ANSWERS });
  };

  const closeModal = () => setIsOpen(null);

  return (
    <>
      <Panel stars={Stars}>
        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-12_1.mp4',
            contentURL: 'vid_int_ova-70_sld-12_1.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-12_1.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="6" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/aud_ova-70_sld-12_1.mp3" />
              <p>
                <strong>Introducción:</strong> en el contexto del desarrollo agropecuario, comprender los conceptos de
                cadenas productivas, asociatividad y competitividad es fundamental para fortalecer la gestión rural,
                mejorar el acceso a mercados y promover el trabajo colaborativo. Esta actividad busca identificar los
                saberes previos que se poseen sobre estos temas, permitiendo conectar las experiencias con los
                contenidos que se abordarán en profundidad durante el proceso formativo. Mediante preguntas reflexivas y
                retroalimentaciones explicativas, se podrá afianzar su comprensión y prepararse para aplicar estos
                conocimientos en escenarios reales.
              </p>

              <p>
                <strong>Actividad:</strong> a continuación, se encontrará un cuestionario de selección múltiple con
                única respuesta, compuesto por diez preguntas clave sobre cadenas productivas, asociatividad,
                agronegocios y competitividad agropecuaria. Cada pregunta está acompañada de opciones de respuesta y una
                retroalimentación formativa que permitirá reforzar conceptos, aclarar dudas y ampliar la visión sobre el
                funcionamiento del sector agroindustrial. Esta actividad no busca evaluar, sino activar los
                conocimientos previos y generar un punto de partida para el aprendizaje colaborativo.
              </p>

              <p>
                <strong>Instrucción:</strong> leer con atención cada pregunta y seleccionar la opción que se considere
                correcta. Luego, revisar la retroalimentación correspondiente para comprender mejor el concepto
                abordado, tanto si se acertó como si no. La retroalimentación está diseñada para explicar el contenido
                de fondo de manera clara y respetuosa. No se debe preocupar por equivocaciones; cada respuesta es una
                oportunidad para aprender. Al finalizar, se reflexionará sobre los temas que resultaron más familiares y
                aquellos que se desean profundizar en las siguientes sesiones.
              </p>
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="4" addClass="u-flow">
              <Avatar
                addClass="u-do-flip"
                variation={AvatarVariation.PRESENTING}
                size="430px"
                title="Figura 3."
                alt="Avatar."
              />
            </Col>
          </Row>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-12_2.mp4',
            contentURL: 'vid_int_ova-70_sld-12_2.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-12_2.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/aud_ova-70_sld-12_2.mp3" />

              <p className="u-text-center u-font-bold">Selecciona la respuesta que consideres correcta.</p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onMoneyChange={setMoney}
                onResult={({ result }) => handleResult({ result }, '1')}
                question="Contexto: en el sector agropecuario, los productos no llegan al consumidor directamente desde el campo. Existen procesos y actores que intervienen en su transformación y comercialización. Pregunta 1: ¿Qué es una cadena productiva?">
                <GameMilions.Element
                  name="option-1"
                  id="option-1-1"
                  state="wrong"
                  label="a. Un conjunto de leyes que regula la producción agrícola."
                />

                <GameMilions.Element
                  name="option-1"
                  id="option-1-2"
                  state="wrong"
                  label="b. Un sistema de transporte de productos agrícolas al consumidor final."
                />

                <GameMilions.Element
                  name="option-1"
                  id="option-1-3"
                  label="c. Un proceso organizado que integra diferentes actores desde la producción hasta la comercialización de
                  productos agrícolas."
                  state="success"
                />

                <GameMilions.Element
                  name="option-1"
                  id="option-1-4"
                  state="wrong"
                  label="d. Una forma de almacenar productos agrícolas para exportación."
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
            audio="assets/audios/aud_ova-70_sld-12_1_(Correcto).mp3">
            <p>
              Muy bien. La respuesta es correcta. Una cadena productiva es una estructura organizada que articula a
              productores, transformadores, comercializadores y otros actores, permitiendo agregar valor al producto y
              mejorar su competitividad en el mercado.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_1_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70__sld-12_1_(incorrecto).mp3">
            <p>
              La respuesta es incorrecta. Una cadena productiva no se limita a leyes, transporte o almacenamiento. Es un
              proceso integral que conecta a diversos actores desde la producción hasta la comercialización, generando
              valor en cada etapa.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-12_3.mp4',
            contentURL: 'vid_int_ova-70_sld-12_3.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-12_3.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/aud_ova-70_sld-12_3.mp3" />

              <p className="u-text-center u-font-bold">Selecciona la respuesta que consideres correcta.</p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, '2')}
                onMoneyChange={setMoney}
                question="Contexto: en zonas rurales, los productores enfrentan desafíos como bajos precios, falta de acceso a tecnología y debilidad en la negociación individual. Pregunta 2: ¿Cuál es el principal objetivo de la asociatividad entre productores rurales?">
                <GameMilions.Element
                  name="option-2"
                  id="option-2-1"
                  state="wrong"
                  label="a. Disminuir la cantidad de productos agrícolas producidos."
                />
                <GameMilions.Element
                  name="option-2"
                  id="option-2-2"
                  state="wrong"
                  label="b.Trabajar de forma individual para obtener mayores ingresos."
                />
                <GameMilions.Element
                  name="option-2"
                  id="option-2-3"
                  state="success"
                  label="c. Fortalecer la capacidad de negociación y acceso a mercados mediante el trabajo conjunto."
                />
                <GameMilions.Element
                  name="option-2"
                  id="option-2-4"
                  state="wrong"
                  label="d. Evitar la transformación de los productos agrícolas."
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
            isOpen={isOpen === MODALS.QUESTION_2_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70_sld-12_2_(Correcto).mp3">
            <p>
              Muy bien. La respuesta es correcta. La asociatividad permite que los productores se unan para negociar
              mejores condiciones, acceder a insumos, compartir infraestructura y fortalecer su presencia en el mercado.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_2_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70__sld-12_2_(incorrecto).mp3">
            <p>
              La respuesta es incorrecta. La asociatividad busca fortalecer el trabajo colectivo, no reducir producción
              ni evitar la transformación. Su objetivo es mejorar la capacidad de negociación y acceso a oportunidades
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-12_4.mp4',
            contentURL: 'vid_int_ova-70_sld-12_4.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-12_4.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/aud_ova-70_sld-12_4.mp3" />

              <p className="u-text-center u-font-bold">Selecciona la respuesta que consideres correcta.</p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, '3')}
                onMoneyChange={setMoney}
                question="Contexto: la competitividad en el agro no depende solo de producir más, sino de hacerlo mejor, con calidad, innovación y estrategias colaborativas. Pregunta 3: ¿Qué factor contribuye a mejorar la competitividad del sector agropecuario colombiano?">
                <GameMilions.Element
                  name="option-3"
                  id="option-3-1"
                  state="wrong"
                  label="a. Producir sin estándares de calidad."
                />
                <GameMilions.Element
                  name="option-3"
                  id="option-3-2"
                  state="wrong"
                  label="b. Aumentar costos de producción sin control."
                />
                <GameMilions.Element
                  name="option-3"
                  id="option-3-3"
                  state="success"
                  label="c. Implementar tecnologías, asociarse y agregar valor a los productos."
                />
                <GameMilions.Element
                  name="option-3"
                  id="option-3-4"
                  state="wrong"
                  label="d. Vender los productos sin intermediarios ni alianzas."
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
            isOpen={isOpen === MODALS.QUESTION_3_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70_sld-12_3_(Correcto).mp3">
            <p>
              Muy bien. La respuesta es correcta. La competitividad se fortalece mediante el uso de tecnologías, la
              organización entre productores y la transformación de productos básicos en bienes con valor agregado que
              respondan a las exigencias del mercado.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_3_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70__sld-12_2_(incorrecto).mp3">
            <p>
              La respuesta es incorrecta. La competitividad no se logra con improvisación ni aislamiento. Requiere
              innovación, trabajo colaborativo y estrategias que permitan diferenciar los productos y acceder a mercados
              exigentes.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-12_5.mp4',
            contentURL: 'vid_int_ova-70_sld-12_5.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-12_5.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/aud_ova-70_sld-12_5.mp3" />

              <p className="u-text-center u-font-bold">Selecciona la respuesta que consideres correcta.</p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, '4')}
                onMoneyChange={setMoney}
                question="Contexto: el sector agropecuario no solo produce alimentos, también genera actividades económicas que involucran transformación, comercialización y servicios. Pregunta 4: ¿Qué son los agronegocios?">
                <GameMilions.Element
                  name="option-4"
                  id="option-4-1"
                  state="wrong"
                  label="a. Préstamos bancarios para agricultores."
                />
                <GameMilions.Element
                  name="option-4"
                  id="option-4-2"
                  state="wrong"
                  label="b. Empresas que venden maquinaria agrícola únicamente."
                />
                <GameMilions.Element
                  name="option-4"
                  id="option-4-3"
                  state="success"
                  label="c. Actividades económicas relacionadas con la producción, transformación y comercialización de productos agropecuarios."
                />
                <GameMilions.Element
                  name="option-4"
                  id="option-4-4"
                  state="wrong"
                  label="d. Normas legales para exportar productos."
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
            audio="assets/audios/aud_ova-70_sld-12_4_(Correcto).mp3">
            <p>
              Muy bien. La respuesta es correcta. Los agronegocios abarcan todas las actividades económicas vinculadas
              al sector agropecuario, desde la producción hasta la comercialización, incluyendo servicios, tecnología y
              logística.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_4_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70__sld-12_4_(incorrecto).mp3">
            <p>
              La respuesta es incorrecta. Los agronegocios no se limitan a préstamos o maquinaria. Son un conjunto de
              actividades que integran producción, transformación y comercialización, generando valor y dinamismo
              económico.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-12_6.mp4',
            contentURL: 'vid_int_ova-70_sld-12_6.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-12_6.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/aud_ova-70_sld-12_6.mp3" />

              <p className="u-text-center u-font-bold">Selecciona la respuesta que consideres correcta.</p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, '5')}
                onMoneyChange={setMoney}
                question="Contexto: la articulación de cadenas productivas y el fortalecimiento de la asociatividad requieren apoyo institucional y comunitario. Pregunta 5: ¿Qué actor es clave para apoyar la organización de cadenas productivas y promover la asociatividad?">
                <GameMilions.Element
                  name="option-5"
                  id="option-5-1"
                  state="wrong"
                  label="a. Los consumidores finales."
                />
                <GameMilions.Element
                  name="option-5"
                  id="option-5-2"
                  state="success"
                  label="b. El Gobierno y las comunidades agrícolas."
                />
                <GameMilions.Element
                  name="option-5"
                  id="option-5-3"
                  state="wrong"
                  label="c. Los exportadores internacionales."
                />
                <GameMilions.Element
                  name="option-5"
                  id="option-5-4"
                  state="wrong"
                  label="d. Los distribuidores minoristas."
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
            isOpen={isOpen === MODALS.QUESTION_5_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70_sld-12_5_(Correcto).mp3">
            <p>
              Muy bien. La respuesta es correcta. El Gobierno y las comunidades agrícolas son fundamentales para
              impulsar políticas, brindar asistencia técnica y fomentar la organización colectiva que fortalece las
              cadenas productivas.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_5_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70__sld-12_5_(incorrecto).mp3">
            <p>
              La respuesta es incorrecta. Aunque otros actores participan, el gobierno y las comunidades agrícolas son
              clave para estructurar cadenas productivas, promover la asociatividad y garantizar condiciones equitativas
              para los productores.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-12_7.mp4',
            contentURL: 'vid_int_ova-70_sld-12_7.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-12_7.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/aud_ova-70_sld-12_7.mp3" />

              <p className="u-text-center u-font-bold">Selecciona la respuesta que consideres correcta.</p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, '6')}
                onMoneyChange={setMoney}
                question="Contexto: en mercados exigentes, la calidad y la capacidad de innovar son factores decisivos para posicionar productos agropecuarios. Pregunta 6: ¿Qué elemento es clave para la competitividad en los agronegocios?">
                <GameMilions.Element
                  name="option-6"
                  id="option-6-1"
                  state="wrong"
                  label="a. La improvisación de procesos."
                />
                <GameMilions.Element
                  name="option-6"
                  id="option-6-2"
                  state="success"
                  label="b. La innovación y calidad de los productos."
                />
                <GameMilions.Element
                  name="option-6"
                  id="option-6-3"
                  state="wrong"
                  label="c. El aislamiento de los productores."
                />
                <GameMilions.Element
                  name="option-6"
                  id="option-6-4"
                  state="wrong"
                  label="d. El bajo precio sin control de calidad."
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
            isOpen={isOpen === MODALS.QUESTION_6_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70_sld-12_6_(Correcto).mp3">
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
            audio="assets/audios/aud_ova-70__sld-12_6_(incorrecto).mp3">
            <p>
              La respuesta es incorrecta. La competitividad no se basa en improvisación ni precios bajos sin calidad.
              Requiere innovación constante, cumplimiento de estándares y estrategias que generen valor real.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-12_8.mp4',
            contentURL: 'vid_int_ova-70_sld-12_8.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-12_8.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/aud_ova-70_sld-12_8.mp3" />

              <p className="u-text-center u-font-bold">Selecciona la respuesta que consideres correcta.</p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, '7')}
                onMoneyChange={setMoney}
                question="Contexto: la eficiencia en una cadena productiva se refleja en la coordinación entre actores, la calidad del producto y el valor generado en cada etapa. Pregunta 7: ¿Qué implica una cadena productiva eficiente?">
                <GameMilions.Element
                  name="option-7"
                  id="option-7-1"
                  state="wrong"
                  label="a. Falta de coordinación entre actores."
                />
                <GameMilions.Element
                  name="option-7"
                  id="option-7-2"
                  state="wrong"
                  label="b. Producción sin estándares de calidad."
                />
                <GameMilions.Element
                  name="option-7"
                  id="option-7-3"
                  state="success"
                  label="c. Articulación de procesos y valor agregado."
                />
                <GameMilions.Element
                  name="option-7"
                  id="option-7-4"
                  state="wrong"
                  label="d. Trabajo individual sin alianzas."
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
            isOpen={isOpen === MODALS.QUESTION_7_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70_sld-12_7_(Correcto).mp3">
            <p>
              Muy bien. La respuesta es correcta. Una cadena eficiente articula procesos desde la producción hasta la
              comercialización, incorporando valor agregado, estándares de calidad y colaboración entre actores.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_7_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70__sld-12_7_(incorrecto).mp3">
            <p>
              La respuesta es incorrecta. La eficiencia no se logra con desarticulación ni trabajo aislado. Se requiere
              coordinación, calidad y valor agregado para que la cadena funcione de manera competitiva y sostenible.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-12_9.mp4',
            contentURL: 'vid_int_ova-70_sld-12_9.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-12_9.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/aud_ova-70_sld-12_9.mp3" />

              <p className="u-text-center u-font-bold">Selecciona la respuesta que consideres correcta.</p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, '8')}
                onMoneyChange={setMoney}
                question="Contexto: la competitividad bien gestionada genera impactos positivos en la economía rural, el empleo y el acceso a mercados. Pregunta 8: ¿Cuál es un beneficio de la competitividad en el sector agropecuario?">
                <GameMilions.Element
                  name="option-8"
                  id="option-8-1"
                  state="wrong"
                  label="a. Disminución de la calidad de vida rural."
                />
                <GameMilions.Element
                  name="option-8"
                  id="option-8-2"
                  state="wrong"
                  label="b. Pérdida de acceso a mercados."
                />
                <GameMilions.Element
                  name="option-8"
                  id="option-8-3"
                  state="success"
                  label="c. Mejora de ingresos y generación de empleo."
                />
                <GameMilions.Element
                  name="option-8"
                  id="option-8-4"
                  state="wrong"
                  label="d. Aumento de la informalidad."
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
            isOpen={isOpen === MODALS.QUESTION_8_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70_sld-12_8_(Correcto).mp3">
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
            audio="assets/audios/aud_ova-70__sld-12_8_(incorrecto).mp3">
            <p>
              La respuesta es incorrecta. La competitividad no perjudica la calidad de vida ni fomenta la informalidad.
              Bien gestionada, mejora los ingresos, abre oportunidades y fortalece el tejido económico rural.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-12_10.mp4',
            contentURL: 'vid_int_ova-70_sld-12_10.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-12_10.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/aud_ova-70_sld-12_10.mp3" />

              <p className="u-text-center u-font-bold">Selecciona la respuesta que consideres correcta.</p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, '9')}
                onMoneyChange={setMoney}
                question="Contexto: en el entorno de los agronegocios, los productores enfrentan desafíos como el acceso limitado a mercados, la debilidad en la negociación individual y la falta de infraestructura. La asociatividad surge como una estrategia clave para superar estos obstáculos mediante el trabajo colaborativo. Pregunta: 9 ¿Qué papel cumple la asociatividad en los agronegocios?">
                <GameMilions.Element
                  name="option-9"
                  id="option-9-1"
                  state="wrong"
                  label="a. Promueve la competencia interna destructiva."
                />
                <GameMilions.Element
                  name="option-9"
                  id="option-9-2"
                  state="wrong"
                  label="b. Fomenta la desorganización de productores."
                />
                <GameMilions.Element
                  name="option-9"
                  id="option-9-3"
                  state="success"
                  label="c. Permite unir esfuerzos para negociar mejor."
                />
                <GameMilions.Element
                  name="option-9"
                  id="option-9-4"
                  state="wrong"
                  label="d. Genera aislamiento entre comunidades."
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
            isOpen={isOpen === MODALS.QUESTION_9_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70_sld-12_9_(Correcto).mp3">
            <p>
              Muy bien. La respuesta es correcta. La asociatividad permite que los productores se organicen en grupos,
              cooperativas o asociaciones para fortalecer su capacidad de negociación, compartir recursos, acceder a
              mercados más exigentes y mejorar su rentabilidad. Esta estrategia promueve la equidad, la eficiencia y el
              desarrollo sostenible en el sector agropecuario.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_9_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70__sld-12_9_(incorrecto).mp3">
            <p>
              La respuesta es incorrecta. La asociatividad no busca dividir ni desorganizar a los productores. Al
              contrario, es una estrategia colaborativa que permite unir esfuerzos, negociar en bloque y acceder a
              mejores condiciones de mercado. Esta forma de organización fortalece la sostenibilidad y el impacto
              económico del sector.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-70_sld-12_11.mp4',
            contentURL: 'vid_int_ova-70_sld-12_11.mp4'
          }}>
          <Audio a11y src="assets/audios/aud_des_ova-70_sld-12_11.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
              <Audio src="assets/audios/aud_ova-70_sld-12_11.mp3" />

              <p className="u-text-center u-font-bold">Selecciona la respuesta que consideres correcta.</p>

              <GameMilions
                alt={
                  <p>
                    <strong>Animación 1.</strong> Actividad de aprendizaje.
                  </p>
                }
                money={money}
                onResult={({ result }) => handleResult({ result }, '10')}
                onMoneyChange={setMoney}
                question="Contexto: las cadenas productivas requieren coordinación entre actores clave para funcionar de manera eficiente. La colaboración entre productores, instituciones y empresas permite mejorar procesos, agregar valor y acceder a mercados más competitivos. Pregunta 10: ¿Cuál es un factor que fortalece las cadenas productivas?">
                <GameMilions.Element
                  name="option-10"
                  id="option-10-1"
                  state="wrong"
                  label="a. La desarticulación de actores clave."
                />
                <GameMilions.Element
                  name="option-10"
                  id="option-10-2"
                  state="wrong"
                  label="b. La falta de tecnología."
                />
                <GameMilions.Element
                  name="option-10"
                  id="option-10-3"
                  state="success"
                  label="c. La colaboración entre productores y Gobierno."
                />
                <GameMilions.Element
                  name="option-10"
                  id="option-10-4"
                  state="wrong"
                  label="d. La ausencia de alianzas estratégicas."
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
            isOpen={isOpen === MODALS.QUESTION_10_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70_sld-12_10_(Correcto).mp3">
            <p>
              Muy bien. La respuesta es correcta. La colaboración entre productores, Gobierno y empresas permite
              articular esfuerzos, mejorar la infraestructura, facilitar el acceso a tecnología y fortalecer la
              competitividad de toda la cadena productiva. Esta sinergia es clave para el desarrollo territorial y
              económico.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_10_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-70__sld-12_10_(incorrecto).mp3">
            <p>
              ndizaje. ¡INCORRECTO! La respuesta es incorrecta. Las cadenas productivas no se fortalecen con
              desarticulación ni aislamiento. Al contrario, requieren colaboración activa entre actores clave para
              mejorar procesos, generar valor agregado y responder a las demandas del mercado de forma eficiente y
              sostenible.
            </p>
          </ToastFeedback>
        </Panel.Section>
      </Panel>

      {Modal}
    </>
  );
};

export default Ova70p12;
