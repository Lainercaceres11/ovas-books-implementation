import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { Selects } from '@/shared/components/activities/select-activity';
import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';
import { Content } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

import css from '@/styles/ova-43.module.css';

const options_select = [
  { id: 'option-1', option: 'Paria' },
  { id: 'option-2', option: 'Éxodo' },
  { id: 'option-3', option: 'Genocidio' },
  { id: 'option-4', option: 'Industria del Holocausto' },
  { id: 'option-5', option: 'Solidaridad racional' }
];

const MODALS = {
  TRUE: 'modal-correct-activity',
  FALSE: 'modal-wrong-activity'
};

const Ova06p10 = () => {
  // Controlamos los modales de la actividad.
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const { reportResult, notifyReset, Stars, Modal } = useGamification({ id: 'act-01', total: 1 });

  /**
   * Función que se encarga de validar
   * el valor proporcionado por Selects.
   * @param {object[]} result
   */
  const handleValidate = ({ result }: { result: boolean }) => {
    const activityResult = result.toString().toUpperCase();
    setIsOpen(MODALS[activityResult as keyof typeof MODALS]);
    reportResult({
      success: result,
      correct: 1,
      total: 1
    });
  };

  const closeModal = () => setIsOpen(null);

  return (
    <>
      <Content stars={Stars}>
        <Audio a11y src="assets/audios/aud_des_ova-06_sld-10.mp3" />

        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" addClass="u-flow">
            <Audio src="assets/audios/aud_ova-06_sld-10.mp3" />
            <p className="u-font-bold u-text-center">
              En la actividad de presaberes encontrarás cinco conceptos para relacionar. Selecciona la palabra del menú
              que corresponda al enunciado.
            </p>
            <Selects onResult={handleValidate}>
              <ol className="u-flow">
                <li>
                  <div className={css['item-select']}>
                    <p>
                      <strong>Concepto 1. </strong>Sujeto excluido de todo vínculo social, legal y político, convertido
                      en invisible ante los sistemas institucionales y despojado del derecho a pertenecer.
                    </p>
                    <Selects.Select
                      options={options_select}
                      correctAnswer="option-1"
                      label="Primer concepto de apoyo técnico"
                      name="concepto-01"
                    />
                  </div>
                </li>
                <li>
                  <div className={css['item-select']}>
                    <p>
                      <strong>Concepto 2. </strong>Desplazamiento masivo forzado de una población, caracterizado por la
                      pérdida de territorio, comunidad e identidad.
                    </p>
                    <Selects.Select
                      options={options_select}
                      correctAnswer="option-2"
                      label="Segundo concepto de apoyo técnico"
                      name="concepto-02"
                    />
                  </div>
                </li>
                <li>
                  <div className={css['item-select']}>
                    <p>
                      <strong>Concepto 3. </strong>Exterminio sistemático de un grupo humano con el objetivo de eliminar
                      su existencia física, cultural o simbólica.
                    </p>
                    <Selects.Select
                      options={options_select}
                      correctAnswer="option-3"
                      label="Tercer concepto de apoyo técnico"
                      name="concepto-03"
                    />
                  </div>
                </li>
                <li>
                  <div className={css['item-select']}>
                    <p>
                      <strong>Concepto 4. </strong>Uso político del recuerdo del Holocausto para justificar prácticas
                      contemporáneas de opresión, invisibilizando otras memorias.
                    </p>
                    <Selects.Select
                      options={options_select}
                      correctAnswer="option-4"
                      label="Cuarto concepto de apoyo técnico"
                      name="concepto-04"
                    />
                  </div>
                </li>

                <li>
                  <div className={css['item-select']}>
                    <p>
                      <strong>Concepto 5. </strong>Compromiso ético activo con el otro, basado en la razón y no en
                      emociones pasajeras, como fundamento de una humanidad inclusiva.
                    </p>
                    <Selects.Select
                      options={options_select}
                      correctAnswer="option-5"
                      label="Cuarto concepto de apoyo técnico"
                      name="concepto-05"
                    />
                  </div>
                </li>
              </ol>

              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-5">
                <Selects.Button>
                  <Button label="Comprobar" variant="check" />
                </Selects.Button>

                <Selects.Button type="reset">
                  <Button label="Reintentar" onClick={notifyReset} variant="reset" />
                </Selects.Button>
              </Row>
            </Selects>
          </Col>
        </Row>
      </Content>

      <ToastFeedback
        type="success"
        isOpen={isOpen === MODALS.TRUE}
        onClose={closeModal}
        audio="assets/audios/aud_ova-06_sld-10_modal_correcto.mp3"
        interpreter={{
          contentURL: 'vid_int_ova-06_sld-10_modalcorrecto.mp4'
        }}>
        <p>
          Buen trabajo. Has seleccionado la respuesta correcta. Sigue así, estás avanzando en la dirección adecuada.
          Cada paso cuenta para consolidar tu proceso de aprendizaje.
        </p>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.FALSE}
        onClose={closeModal}
        audio="assets/audios/aud_ova-06_sld-10_modal_incorrecto.mp3"
        interpreter={{
          contentURL: 'vid_int_ova-06_sld-10_modalincorrecto.mp4'
        }}>
        <p>
          asi lo logras. No te preocupes; equivocarse es parte del aprendizaje. Revisa nuevamente el material y sigue
          intentando. ¡Todavía puedes mejorar!
        </p>
      </ToastFeedback>

      {Modal}
    </>
  );
};

export default Ova06p10;
