import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { Radios } from '@/shared/components/activities/radio-activity';
import { Avatar } from '@/shared/components/features/avatar';
import { useGamification } from '@/shared/components/features/gamification';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

import { ToastFeedback } from '../shared/components/features/toast-feedback/toast-feedback';

import { AvatarVariation } from '@/shared/components/features/avatar/types/type';

import css from '@/styles/ova-34.module.css';

const MODALS = {
  TRUE: 'modal-correct-activity',
  FALSE: 'modal-wrong-activity'
};

const LENGTH_ANSWERS = 4;

const Ova34p04 = () => {
  const {
    Modal: ModalQuiz,
    Stars,
    notifyReset,
    reportResult
  } = useGamification({
    id: 'ad-34-2034-1604-sld-4',
    total: LENGTH_ANSWERS
  });

  // Controlamos los modales de la actividad.
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const handleValidate = ({ result }: { result: boolean }) => {
    const activityResult = result.toString().toUpperCase();
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
            a11yURL: 'vid_int_des_ova-34_sld-4_1.mp4',
            contentURL: 'vid_int_ova-34_sld-4_1.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-34_sld-4_1.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar variation={AvatarVariation.THINKING} title="Figura 6." />
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="4" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_ova-34_sld-4_1.mp3" />

              <p>
                La prueba de presaberes se compone de cuatro preguntas de selección múltiple con única respuesta, las
                cuales versan sobre los conceptos básicos relacionados con el fenómeno de los{' '}
                <strong>refugiados:</strong>
              </p>

              <p className="u-font-bold">Presiona cada botón para ir a las preguntas.</p>

              <div className={css['panel__buttons']}>
                <Panel.Button section={1}>
                  <Button variant="check" label="Pregunta 1" />
                </Panel.Button>

                <Panel.Button section={2}>
                  <Button variant="check" label="Pregunta 2" />
                </Panel.Button>

                <Panel.Button section={3}>
                  <Button variant="check" label="Pregunta 3" />
                </Panel.Button>

                <Panel.Button section={4}>
                  <Button variant="check" label="Pregunta 4" />
                </Panel.Button>
              </div>
            </Col>
          </Row>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-34_sld-4_1.mp4',
            contentURL: 'vid_int_ova-34_sld-4_1.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-34_sld-4_1.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar variation={AvatarVariation.THINKING} title="Figura 6." />
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_ova-34_sld-4_1.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 1</strong>
                <br />
                ¿Qué es la CELAC (Comunidad de Estados Latinoamericanos y Caribeños)?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate}>
                  <Radios.Radio
                    id="1-1"
                    label="a. Una organización económica de América del Norte."
                    name="option-1"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="1-2"
                    label="b. Un mecanismo intergubernamental de diálogo y concertación política entre países de América Latina y el Caribe."
                    name="option-1"
                    state="success"
                  />
                  <Radios.Radio
                    id="1-3"
                    label="c. Un bloque de integración militar en el Caribe."
                    name="option-1"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="1-4"
                    label="d. Un tratado de libre comercio entre países del hemisferio sur."
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
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-34_sld-4_2.mp4',
            contentURL: 'vid_int_ova-34_sld-4_2.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-34_sld-4_2.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_ova-34_sld-4_2.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 2</strong>
                <br />
                ¿Cuál de los siguientes temas ha sido una prioridad en la agenda de Colombia durante su presidencia{' '}
                <em>pro tempore</em> de la CELAC en 2025?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate}>
                  <Radios.Radio
                    id="2-1"
                    label="a. La reducción del turismo internacional."
                    name="option-2"
                    state="wrong"
                  />
                  <Radios.Radio id="2-2" label="b. La cooperación militar con la OTAN." name="option-2" state="wrong" />
                  <Radios.Radio
                    id="2-3"
                    label="c. La transformación digital con enfoque inclusivo."
                    name="option-2"
                    state="success"
                  />
                  <Radios.Radio
                    id="2-4"
                    label="d. La firma de acuerdos bilaterales con Europa."
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
              <Avatar addClass="u-do-flip" variation={AvatarVariation.THINKING} title="Figura 6." />
            </Col>
          </Row>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-34_sld-4_3.mp4',
            contentURL: 'vid_int_ova-34_sld-4_3.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-34_sld-4_3.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar variation={AvatarVariation.THINKING} title="Figura 6." />
            </Col>
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_ova-34_sld-4_3.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 3</strong>
                <br />
                ¿Cuál es el propósito principal de la presidencia <em>pro tempore</em> dentro de la CELAC?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate}>
                  <Radios.Radio
                    id="3-1"
                    label="a. Aprobar leyes migratorias para todos los países miembros."
                    name="option-3"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="3-2"
                    label="b. Representar al bloque en el Consejo de Seguridad de la ONU."
                    name="option-3"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="3-3"
                    label="c. Coordinar los trabajos del organismo, promover consensos y facilitar la cooperación regional."
                    name="option-3"
                    state="success"
                  />
                  <Radios.Radio
                    id="3-4"
                    label="d. Controlar la economía de los países miembros."
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
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_ova-34_sld-4_4.mp4',
            contentURL: 'vid_int_ova-34_sld-4_4.mp4'
          }}>
          <Audio a11y src="assets/audios/descriptives/aud_des_ova-34_sld-4_4.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <Audio addClass="u-m-0" src="assets/audios/content/aud_ova-34_sld-4_4.mp3" />

              <p>
                <strong className="u-subtitle u-text-upper">Pregunta 4</strong>
                <br />
                ¿Qué representa el liderazgo de Colombia en la CELAC para la política exterior del país?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate}>
                  <Radios.Radio
                    id="4-1"
                    label="a. Una oportunidad para retirarse de los organismos multilaterales."
                    name="option-4"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="4-2"
                    label="b. Una estrategia para reducir las exportaciones de petróleo."
                    name="option-4"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="4-3"
                    label="c. Un espacio para fortalecer su papel como articulador regional y promotor del multilateralismo."
                    name="option-4"
                    state="success"
                  />
                  <Radios.Radio
                    id="4-4"
                    label="d. Una forma de cerrar sus fronteras y priorizar asuntos internos."
                    name="option-4"
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
              <Avatar addClass="u-do-flip" variation={AvatarVariation.THINKING} title="Figura 6." />
            </Col>
          </Row>
        </Panel.Section>
      </Panel>

      <ToastFeedback
        type="success"
        isOpen={isOpen === MODALS.TRUE}
        onClose={closeModal}
        audio="assets/audios/aud_ova-34_sld-4_5_correcto.mp3">
        <p>
          ¡Buen trabajo! Has seleccionado la respuesta correcta. Sigue así, estás avanzando en la dirección correcta.
          Cada paso cuenta para consolidar tu proceso de aprendizaje.
        </p>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.FALSE}
        onClose={closeModal}
        audio="assets/audios/aud_ova-34_sld-4_5_incorrecto.mp3">
        <p>
          ¡Casi lo logras! No te preocupes, equivocarse es parte del aprendizaje. Revisa nuevamente el material y sigue
          intentando, ¡todavía puedes mejorar!
        </p>
      </ToastFeedback>
      <ModalQuiz audio="assets/audios/aud_ova-34_sld-4_bien.mp3" interpreter={{ contentURL: '', a11yURL: '' }} />
    </>
  );
};

export default Ova34p04;
