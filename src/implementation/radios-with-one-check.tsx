import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { Radios } from '@/shared/components/activities/radio-activity';
import { Avatar, AvatarVariation } from '@/shared/components/features/avatar';
import { useGamification } from '@/shared/components/features/gamification';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

import { ToastFeedback } from '../shared/components/features/toast-feedback/toast-feedback';

import { SvgP04 } from './svg__/svg-p04';

import type { Option } from '@/shared/components/activities/radio-activity/types/types';

import css from '@/styles/ova-25.module.css';

const MODALS = {
  TRUE: 'modal-correct-activity',
  FALSE: 'modal-wrong-activity'
};

const LENGTH_ANSWERS = 1;

const Ova25p04 = () => {
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
  const handleValidate = ({ options }: { options: Option[] }) => {
    const correctAnswers = options.filter((option) => option.state === 'success').length;
    console.log(options);

    const isSuccess = correctAnswers === 3;

    setIsOpen(isSuccess ? MODALS.TRUE : MODALS.FALSE);

    reportResult({
      success: isSuccess,
      correct: isSuccess ? 1 : 0,
      total: LENGTH_ANSWERS
    });
  };
  const closeModal = () => setIsOpen(null);
  return (
    <Panel stars={Stars}>
      <Panel.Section
        title="Presaberes: conceptos básicos de costos"
        interpreter={{ a11yURL: 'vid_int_des_ova-25_sld-4_1.mp4', contentURL: 'vid_int_ova-25_sld-4_1.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-25_sld-4_1.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="7" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-25_sld-4_1.mp3" />
            <figure>
              <SvgP04 />
              <figcaption>
                <p className="u-text-center">
                  {' '}
                  <strong>Animación 3.</strong> Personal de la empresa industrial.
                </p>
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section
        title="Actividad de presaberes"
        interpreter={{ a11yURL: 'vid_int_des_ova-25_sld-4_2.mp4', contentURL: 'vid_int_ova-25_sld-4_2.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-25_sld-4_2.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="10" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-25_sld-4_2.mp3" />
            <p className="u-text-center u-font-bold">
              Elige si es falsa o verdadera la siguiente aseveración de acuerdo con lo aprendido hasta el momento.
            </p>
            <Row justifyContent="center" alignItems="center">
              <Col xs="11" mm="10" md="9" lg="5" hd="7" addClass="u-flow">
                <Radios onResult={handleValidate} minSelected={3}>
                  <ol className={`u-flow u-m-0 ${css['list-bold']} `}>
                    <li className="u-flow">
                      <p>Los costos fijos desaparecen si la empresa deja de producir un mes.</p>
                      <div className={`${css['radio-container']}`}>
                        <Radios.Radio
                          addClass={css.radio}
                          id="1-1"
                          label="a. Verdadero."
                          name="option-1"
                          state="wrong"
                        />
                        <Radios.Radio addClass={css.radio} id="1-2" label="b. Falso." name="option-1" state="success" />
                      </div>
                    </li>

                    <li className="u-flow">
                      <p>El costo total es la resta de los costos fijos menos los variables.</p>
                      <div className={`${css['radio-container']}`}>
                        <Radios.Radio
                          addClass={css.radio}
                          id="2-1"
                          label="a. Verdadero."
                          name="option-2"
                          state="wrong"
                        />
                        <Radios.Radio addClass={css.radio} id="2-2" label="b. Falso." name="option-2" state="success" />
                      </div>
                    </li>

                    <li className="u-flow">
                      <p>Los costos variables como la materia prima aumentan si produces más.</p>
                      <div className={`${css['radio-container']}`}>
                        <Radios.Radio
                          addClass={css.radio}
                          id="3-1"
                          label="a. Verdadero."
                          name="option-3"
                          state="success"
                        />
                        <Radios.Radio addClass={css.radio} id="3-2" label="b. Falso." name="option-3" state="wrong" />
                      </div>
                    </li>
                  </ol>

                  <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                    <Radios.Button>
                      <Button variant="check" label="Comprobar" />
                    </Radios.Button>

                    <Radios.Button type="reset">
                      <Button onClick={notifyReset} variant="reset" label="Reintentar" />
                    </Radios.Button>
                  </Row>
                </Radios>
              </Col>

              <Col xs="11" mm="10" md="9" lg="5" hd="5" addClass="u-flow">
                <Avatar title="Figura 1." variation={AvatarVariation.THINKING} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Panel.Section>

      <ToastFeedback
        type="success"
        isOpen={isOpen === MODALS.TRUE}
        onClose={closeModal}
        audio="assets/audios/aud_ova-25_sld-4_correcto.mp3">
        <div className="u-flow">
          <p>
            1. Falsa: Los costos fijos como el alquiler o los salarios se pagan siempre, aunque la producción sea cero.
          </p>
          <p>2. Falsa: en realidad, el costo total es la suma de ambos: Costo Total = Fijos + Variables.</p>
          <p>
            3. Verdadera: las variables dependen del volumen de producción. Ejemplo: más pizzas = más queso y harina.
          </p>
        </div>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.FALSE}
        onClose={closeModal}
        audio="assets/audios/aud_ova-25_sld-4_incorrecto.mp3">
        <p>No te preocupes. Podemos volver a intentarlo.</p>
      </ToastFeedback>

      <ModalQuiz audio="assets/audios/aud_ova-25_sld-4 bien.mp3" interpreter={{ contentURL: '' }} />
    </Panel>
  );
};

export default Ova25p04;
