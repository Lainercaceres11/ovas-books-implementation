import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { Radios } from '@/shared/components/activities/radio-activity';
import { Avatar } from '@/shared/components/features/avatar';
import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

import type { Option } from '@/shared/components/activities/radio-activity/types/types';
import { AvatarVariation } from '@/shared/components/features/avatar/types/type';

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
  QUESTION_2_4_WRONG: 'modal-incorrect-activity-q2-4'
};

const OvaTemplatep01 = () => {
  const { Modal, Stars, notifyReset, reportResult } = useGamification({
    id: 'gr-2-68-2024-2-sld-4',
    total: 2
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

      reportResult({ success: selectedOption.state === 'success', correct: 2, total: 2 });
    };

  const closeModal = () => setIsOpen(null);
  return (
    <>
      <Panel>
        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_68_sld-4_1.mp4',
            contentURL: 'vid_int_68_sld-4_1.mp4'
          }}>
          <Audio a11y src="assets/audios/a11y/aud_des_68_sld-4_1.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <div className="u-d-flex u-justify-between ">
                <Audio addClass="u-m-0" src="assets/audios/aud_68_sld-4_1.mp3" />
                {Stars}
              </div>
              <p>Antes de comenzar, quisiera invitarles a reflexionar sobre estas preguntas:</p>

              <p>
                <strong className="u-font-bold u-text-upper">Pregunta 1</strong>
                <br />
                Cuando pensamos en calidad de vida, ¿qué aspecto consideramos más importante?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('1')}>
                  <Radios.Radio
                    id="1-1"
                    label="a. El acceso a bienes materiales y al consumo individual."
                    name="option-1"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="1-2"
                    label="b. El equilibrio entre bienestar personal, comunidad y naturaleza."
                    name="option-1"
                    state="success"
                  />
                  <Radios.Radio
                    id="1-3"
                    label="c. El crecimiento económico de un país."
                    name="option-1"
                    state="wrong"
                  />
                  <Radios.Radio
                    id="1-4"
                    label="d. La innovación tecnológica y la modernización constante."
                    name="option-1"
                    state="wrong"
                  />
                  <Row justifyContent="center" alignItems="center" style={{ gap: '1rem' }}>
                    <Radios.Button>
                      <Button label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button label="Reintentar" onClick={notifyReset} />
                    </Radios.Button>
                  </Row>
                </Radios>
              </div>
            </Col>
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar
                addClass="u-do-flip"
                variation={AvatarVariation.THINKING}
                size="20rem"
                title="Figura 3."
                alt="Avatar."
              />
            </Col>
          </Row>

          <ToastFeedback
            type="success"
            isOpen={isOpen === MODALS.QUESTION_1_SUCCESS}
            onClose={closeModal}
            audio="assets/audios/aud_ova-99_g2_sld-15_2 (Correcto).mp3">
            <p>
              En la cosmovisión indígena, el Buen Vivir se entiende como una vida armónica, en la que el bienestar se
              mide en relación con la comunidad y el entorno natural.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_1_1_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-99_g2_sld-15_2 (Incorrecto a).mp3">
            <p>
              Esta visión es limitada, porque reduce la calidad de vida a lo material. El Buen Vivir plantea que
              acumular no garantiza bienestar integral.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_1_3_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-99_g2_sld-15_2 (Incorrecto b).mp3">
            <p>
              Aunque el crecimiento económico puede generar recursos, no siempre se traduce en calidad de vida, ya que
              muchas veces profundiza desigualdades y deterioro ambiental.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_1_4_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-99_g2_sld-15_2 (Incorrecto d).mp3">
            <p>
              La tecnología puede mejorar la vida, pero si no está acompañada de valores comunitarios y respeto
              ambiental, termina reforzando un modelo insostenible.
            </p>
          </ToastFeedback>
        </Panel.Section>

        <Panel.Section
          interpreter={{
            a11yURL: 'vid_int_des_68_sld-4_2.mp4',
            contentURL: 'vid_int_68_sld-4_2.mp4'
          }}>
          <Audio a11y src="assets/audios/a11y/aud_des_68_sld-4_2.mp3" />
          <Row justifyContent="center" alignItems="center">
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Avatar variation={AvatarVariation.THINKING} size="20rem" title="Figura 3." alt="Avatar." />
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <div className="u-d-flex u-justify-between ">
                <Audio addClass="u-m-0" src="assets/audios/aud_68_sld-4_1.mp3" />
                {Stars}
              </div>

              <p>
                <strong className="u-font-bold u-text-upper">Pregunta 2</strong>
                <br />
                ¿Cuál de los siguientes valores se asocia más con el bienestar de una comunidad?
              </p>
              <div className={`u-grid`} style={{ '--grid-gap': '1rem', '--grid-min': '1fr' } as React.CSSProperties}>
                <Radios onResult={handleValidate('2')}>
                  <Radios.Radio
                    id="2-1"
                    label="a. La cooperación y la solidaridad entre sus miembros."
                    name="option-2"
                    state="success"
                  />
                  <Radios.Radio
                    id="2-2"
                    label="b. La competencia individual para alcanzar metas."
                    name="option-2"
                    state="wrong"
                  />
                  <Radios.Radio id="2-3" label="c. La acumulación de riqueza personal." name="option-2" state="wrong" />
                  <Radios.Radio
                    id="2-4"
                    label="d. La centralización de las decisiones en pocas personas."
                    name="option-2"
                    state="wrong"
                  />
                  <Row justifyContent="center" alignItems="center" style={{ gap: '1rem' }}>
                    <Radios.Button>
                      <Button label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button label="Reintentar" onClick={notifyReset} />
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
            audio="assets/audios/aud_ova-99_g2_sld-15_2 (Correcto).mp3">
            <p>
              Estos valores son centrales en el Buen Vivir, ya que fortalecen el tejido comunitario y garantizan una
              vida en equilibrio con la naturaleza.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_2_2_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-99_g2_sld-15_2 (Incorrecto a).mp3">
            <p>
              Aunque la competencia puede motivar, cuando se convierte en eje central debilita la cooperación y genera
              desigualdad.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_2_3_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-99_g2_sld-15_2 (Incorrecto b).mp3">
            <p>
              Esta idea responde a un modelo individualista y extractivista, contrario al Buen Vivir, que se centra en
              el bienestar colectivo.
            </p>
          </ToastFeedback>

          <ToastFeedback
            type="wrong"
            isOpen={isOpen === MODALS.QUESTION_2_4_WRONG}
            onClose={closeModal}
            audio="assets/audios/aud_ova-99_g2_sld-15_2 (Incorrecto d).mp3">
            <p>
              Esto limita la participación comunitaria y la autodeterminación de los pueblos. El Buen Vivir promueve la
              inclusión y la democracia participativa.
            </p>
          </ToastFeedback>
        </Panel.Section>
      </Panel>

      {Modal}
    </>
  );
};

export default OvaTemplatep01;
