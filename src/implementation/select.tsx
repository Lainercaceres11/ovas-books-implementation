import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { Selects } from '@/shared/components/activities/select-activity';
import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';
import { Content } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

import css from '@/styles/ova-29.module.css';

const options_select = [
  { id: 'option-1', option: 'Optimización de anuncios' },
  { id: 'option-2', option: 'Personalización de mensajes' },
  { id: 'option-3', option: 'Generación de contenido' },
  { id: 'option-4', option: 'Chatbots y atención al cliente' },
  { id: 'option-5', option: 'Análisis de sentimiento' }
];

const MODALS = {
  TRUE: 'modal-correct-activity',
  FALSE: 'modal-wrong-activity'
};

const TOTAL_CORRECT = 1;

const Ova29p04 = () => {
  // Controlamos los modales de la actividad.
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const {
    reportResult,
    notifyReset,
    Stars,
    Modal: ModalGamification
  } = useGamification({
    id: 'gr-1-29-2025-1-sld-4',
    total: TOTAL_CORRECT
  });

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
      correct: TOTAL_CORRECT,
      total: TOTAL_CORRECT
    });
  };

  const closeModal = () => setIsOpen(null);

  return (
    <>
      <Content
        stars={Stars}
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-29_sld-4.mp4',
          contentURL: 'content/vid_int_ova-29_sld-4.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-29_sld-4.mp3" />

        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="10" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-29_sld-4.mp3" />
            <p className="u-font-bold u-text-center">
              A continuación, encontrarás una actividad de unir las columnas. Por favor une los nueve conceptos de la
              columna A y la columna B de acuerdo con lo que has aprendido en este recurso.
            </p>
            <Selects onResult={handleValidate}>
              <ol className={`u-flow ${css['list-bold']} `}>
                <li>
                  <div className={css['item-select']}>
                    <p>
                      Puede ayudar a redactar anuncios más efectivos y atractivos, basándose en las tendencias actuales
                      y el comportamiento del consumidor. Ejemplo: Hootsuite.
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
                      Utilizando datos de los clientes, se pueden generar mensajes personalizados que resuenen más con
                      cada individuo, aumentando la efectividad de las campañas de <em>marketing</em>. Ejemplo:
                      Chatbots.
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
                      Con IA se pueden crear textos para blogs, redes sociales, correos electrónicos y más, ayudando a
                      mantener una presencia constante y atractiva en línea. Ejemplo: Canva con IA.
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
                      Con esta función se puede responder preguntas frecuentes, guiar a los clientes a través de
                      procesos de compra y proporcionar soporte 24/7, mejorando la experiencia del usuario. Ejemplo:
                      Marketo engage.
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
                      Es posible analizar comentarios y opiniones de los clientes en redes sociales y otros canales para
                      entender mejor sus sentimientos y ajustar las estrategias de <em>marketing</em> en consecuencia.
                      Ejemplo: HubSpot.
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
        audio="assets/audios/aud_ova-29_sld-4_modal_correcto.mp3"
        interpreter={{
          contentURL: 'vid_int_ova-29_sld-4_modalcorrecto.mp4'
        }}>
        <p>
          Si los cinco conceptos se encuentran correctamente respondidos, tus conocimientos previos sobre el tema las
          herramientas de <em>marketing</em> digital apoyadas en IA son destacados y te permiten visualizar con claridad
          las tendencias para la innovación en <em>marketing</em>. Continúa por la misma ruta de interés en tu formación
          y dominio conceptual hacia la consolidación del aprendizaje.
        </p>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.FALSE}
        onClose={closeModal}
        audio="assets/audios/aud_ova-29_sld-4_modal_incorrecto.mp3"
        interpreter={{
          contentURL: 'vid_int_ova-29_sld-4_modalincorrecto.mp4'
        }}>
        <p>
          Si los conceptos no se identificaron de manera correcta, tus conocimientos previos sobre el tema se encuentran
          por debajo de lo esperado, por lo cual es necesario iniciar un proceso de fortalecimiento del aprendizaje, que
          te permitan ir adquiriendo el dominio de conocimientos propios de las nuevas tendencias del <em>marketing</em>{' '}
          digital, tanto conceptualmente como en competencias, que te harán un experto en el área, para proponer
          soluciones innovadoras en los contextos.
        </p>
      </ToastFeedback>

      <ModalGamification
        audio="assets/audios/aud_ova-29_sld-4_modal_gamification.mp3"
        interpreter={{ contentURL: '' }}
      />
    </>
  );
};

export default Ova29p04;
