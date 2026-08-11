import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { Selects } from '@/shared/components/activities/select-activity';
import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';
import { Content } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

import css from '@/styles/ova-37.module.css';

const options_select = [
  { id: 'option-1', option: 'integridad' },
  { id: 'option-2', option: 'análisis' },
  { id: 'option-3', option: 'gestor' },
  { id: 'option-4', option: 'bases de datos' },
  { id: 'option-5', option: 'búsqueda' },
  { id: 'option-6', option: 'estado del arte' },
  { id: 'option-7', option: 'plagio' }
];

const MODALS = {
  TRUE: 'modal-correct-activity',
  FALSE: 'modal-wrong-activity'
};

const TOTAL_CORRECT = 1;

const Ova37p17 = () => {
  // Controlamos los modales de la actividad.
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const {
    reportResult,
    notifyReset,
    Stars,
    Modal: ModalGamification
  } = useGamification({
    id: 'AD-37-2206-sld-17',
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
          a11yURL: 'descriptives/vid_int_des_ova-37_sld-17.mp4',
          contentURL: 'content/vid_int_ova-37_sld-17.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-37_sld-17.mp3" />

        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="8" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-37_sld-17.mp3" />
            <p className="u-font-bold u-text-center">
              Lea cuidadosamente el siguiente texto y complete los espacios en blanco identificando los conceptos clave
              relacionados con herramientas digitales, búsqueda académica y análisis bibliográfico en investigación en
              bioética. Analice el contexto de cada frase y escriba el término que considere más adecuado para completar
              el sentido del párrafo.
            </p>
            <Selects onResult={handleValidate}>
              <div className={css['selects-wrapper']}>
                <p>
                  El desarrollo de investigaciones en bioética requiere procesos sistemáticos que permitan acceder y
                  analizar información científica de manera organizada y ética. Inicialmente, el investigador debe
                  realizar una adecuada
                </p>
                <Selects.Select
                  addClass={css.select}
                  placeholder="Seleccionar"
                  options={options_select}
                  correctAnswer="option-5"
                  label="Primer concepto de apoyo técnico"
                  name="concepto-01"
                />
                <p>
                  de información para localizar estudios relacionados con su tema de interés. Este proceso generalmente
                  se realiza mediante
                </p>

                <Selects.Select
                  addClass={css.select}
                  placeholder="Seleccionar"
                  options={options_select}
                  correctAnswer="option-4"
                  label="Segundo concepto de apoyo técnico"
                  name="concepto-02"
                />

                <p>
                  científicas que almacenan artículos, libros y otros recursos especializados. Posteriormente, la
                  información recuperada debe organizarse mediante un
                </p>

                <Selects.Select
                  addClass={css.select}
                  placeholder="Seleccionar"
                  options={options_select}
                  correctAnswer="option-3"
                  label="Tercer concepto de apoyo técnico"
                  name="concepto-03"
                />

                <p>
                  , herramienta que facilita el almacenamiento y administración de referencias académicas. Una vez
                  organizadas las fuentes, se realiza un
                </p>

                <Selects.Select
                  addClass={css.select}
                  placeholder="Seleccionar"
                  options={options_select}
                  correctAnswer="option-2"
                  label="Cuarto concepto de apoyo técnico"
                  name="concepto-04"
                />

                <p>
                  bibliográfico que permite examinar tendencias, perspectivas y vacíos investigativos. Dicho proceso
                  fortalece la construcción del
                </p>

                <Selects.Select
                  addClass={css.select}
                  placeholder="Seleccionar"
                  options={options_select}
                  correctAnswer="option-1"
                  label="Quinto concepto de apoyo técnico"
                  name="concepto-05"
                />

                <p>
                  , el cual aporta bases teóricas para el desarrollo del proyecto. Todo procedimiento investigativo debe
                  realizarse con criterios de
                </p>

                <Selects.Select
                  addClass={css.select}
                  placeholder="Seleccionar"
                  options={options_select}
                  correctAnswer="option-6"
                  label="sexto concepto de apoyo técnico"
                  name="concepto-06"
                />

                <p>académica para garantizar transparencia y responsabilidad científica, evitando situaciones de</p>
                <Selects.Select
                  addClass={css.select}
                  placeholder="Seleccionar"
                  options={options_select}
                  correctAnswer="option-7"
                  label="septimo concepto de apoyo técnico"
                  name="concepto-07"
                />

                <p>que afecten la credibilidad del conocimiento producido.</p>
              </div>

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
        audio="assets/audios/content/aud_ova-37_sld-17_correcto.mp3"
        interpreter={{
          contentURL: 'content/vid_int_ova-37_sld-17_correcto.mp4'
        }}>
        <p>
          Si identificó correctamente la mayoría de los conceptos, cuenta con bases importantes sobre búsqueda
          científica, análisis bibliográfico y herramientas digitales aplicadas a la investigación en bioética. Si
          presentó dificultades, el OVA le permitirá fortalecer estas competencias y desarrollar habilidades
          investigativas con rigor científico y ética académica.
        </p>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.FALSE}
        onClose={closeModal}
        audio="assets/audios/content/aud_ova-37_sld-17_incorrecto.mp3"
        interpreter={{
          contentURL: 'content/vid_int_ova-37_sld-17_incorrecto.mp4'
        }}>
        <p>Vuelva a intentarlo.</p>
      </ToastFeedback>

      <ModalGamification
        audio="assets/audios/aud_ova-29_sld-4_modal_37mific17tion.mp3"
        interpreter={{ contentURL: 'content/vid_int_ova-37_sld-17_bien.mp4' }}
      />
    </>
  );
};

export default Ova37p17;
