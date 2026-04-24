import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';
import { GameFish } from '@/shared/components/games/game-fish';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

const MODALS = {
  QUESTION_SUCCESS: 'modal-correct-activity',
  QUESTION_WRONG: 'modal-wrong-activity'
};

const LENGTH_ANSWERS = 1;

const Ova106p15 = () => {
  const {
    Modal: ModalQuiz,
    Stars,
    notifyReset,
    reportResult
  } = useGamification({
    id: 'gr-1-106-2024-1-sld-15',
    total: LENGTH_ANSWERS
  });

  // Controlamos los modales de la actividad.
  const [isOpen, setIsOpen] = useState<string | null>(null);

  /**
   * Función que se encarga de validar
   * el valor proporcionado por Selects.
   * @param {object[]} result
   */
  const handleValidate = ({ result }: { result: boolean }) => {
    const activityResult = result ? `QUESTION_SUCCESS` : `QUESTION_WRONG`;
    setIsOpen(MODALS[activityResult as keyof typeof MODALS]);

    reportResult({
      success: result,
      correct: LENGTH_ANSWERS,
      total: LENGTH_ANSWERS
    });
  };

  const closeModal = () => setIsOpen(null);

  return (
    <Panel stars={Stars}>
      <Panel.Section
        interpreter={{ a11yURL: 'vid_int_des_ova-106_sld-15_1.mp4', contentURL: 'vid_int_ova-106_sld-15_1.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-106_sld-15_1.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="7" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-106_sld-15_1.mp3" />

            <p className="u-text-center">
              A continuación, encontrarás una actividad interactiva con cinco oraciones incompletas. Selecciona el pez
              que lleva la palabra correcta para cada oración. Los peces van nadando y debes presionar sobre el que
              lleva la palabra correcta.
            </p>
            <GameFish onResult={handleValidate}>
              <GameFish.Level label="La rentabilidad sobre el patrimonio se conoce como---------.">
                <GameFish.Fish id="question-1-1" name="question-1" label="liquidez" state="wrong" />
                <GameFish.Fish id="question-1-2" name="question-1" label="financieros" state="wrong" />
                <GameFish.Fish id="question-1-3" name="question-1" label="ROE" state="success" />
                <GameFish.Fish id="question-1-4" name="question-1" label="nivel" state="wrong" />
                <GameFish.Fish id="question-1-5" name="question-1" label="inventarios" state="wrong" />
              </GameFish.Level>

              <p className="u-text-center">
                <strong>Figura 8.</strong> Actividad de aprendizaje 1.
              </p>

              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameFish.Button>
                  <Button variant="check" label="Comprobar" />
                </GameFish.Button>

                <GameFish.Button type="reset">
                  <Button variant="reset" label="Reiniciar" onClick={notifyReset} />
                </GameFish.Button>
              </Row>
            </GameFish>
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section
        interpreter={{ a11yURL: 'vid_int_des_ova-106_sld-15_2.mp4', contentURL: 'vid_int_ova-106_sld-15_2.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-106_sld-15_2.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="7" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-106_sld-15_2.mp3" />

            <p className="u-text-center">
              A continuación, encontrarás una actividad interactiva con cinco oraciones incompletas. Selecciona el pez
              que lleva la palabra correcta para cada oración. Los peces van nadando y debes presionar sobre el que
              lleva la palabra correcta.
            </p>
            <GameFish onResult={handleValidate}>
              <GameFish.Level label="Los indicadores de --------------- miden la capacidad de la empresa para cumplir sus obligaciones de corto plazo.">
                <GameFish.Fish id="question-2-1" name="question-2" label="liquidez" state="success" />
                <GameFish.Fish id="question-2-2" name="question-2" label="financieros" state="wrong" />
                <GameFish.Fish id="question-2-3" name="question-2" label="ROE" state="wrong" />
                <GameFish.Fish id="question-2-4" name="question-2" label="nivel" state="wrong" />
                <GameFish.Fish id="question-2-5" name="question-2" label="inventarios" state="wrong" />
              </GameFish.Level>

              <p className="u-text-center">
                <strong>Figura 8.</strong> Actividad de aprendizaje 1.
              </p>

              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameFish.Button>
                  <Button variant="check" label="Comprobar" />
                </GameFish.Button>

                <GameFish.Button type="reset">
                  <Button variant="reset" label="Reiniciar" onClick={notifyReset} />
                </GameFish.Button>
              </Row>
            </GameFish>
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section
        interpreter={{ a11yURL: 'vid_int_des_ova-106_sld-15_3.mp4', contentURL: 'vid_int_ova-106_sld-15_3.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-106_sld-15_3.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="7" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-106_sld-15_3.mp3" />

            <p className="u-text-center">
              A continuación, encontrarás una actividad interactiva con cinco oraciones incompletas. Selecciona el pez
              que lleva la palabra correcta para cada oración. Los peces van nadando y debes presionar sobre el que
              lleva la palabra correcta.
            </p>
            <GameFish onResult={handleValidate}>
              <GameFish.Level label="El ---------- de endeudamiento muestra la proporción de los recursos de la empresa que provienen de pasivos.">
                <GameFish.Fish id="question-3-1" name="question-3" label="liquidez" state="wrong" />
                <GameFish.Fish id="question-3-2" name="question-3" label="financieros" state="wrong" />
                <GameFish.Fish id="question-3-3" name="question-3" label="ROE" state="wrong" />
                <GameFish.Fish id="question-3-4" name="question-3" label="nivel" state="success" />
                <GameFish.Fish id="question-3-5" name="question-3" label="inventarios" state="wrong" />
              </GameFish.Level>

              <p className="u-text-center">
                <strong>Figura 8.</strong> Actividad de aprendizaje 1.
              </p>

              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameFish.Button>
                  <Button variant="check" label="Comprobar" />
                </GameFish.Button>

                <GameFish.Button type="reset">
                  <Button variant="reset" label="Reiniciar" onClick={notifyReset} />
                </GameFish.Button>
              </Row>
            </GameFish>
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section
        interpreter={{ a11yURL: 'vid_int_des_ova-106_sld-15_4.mp4', contentURL: 'vid_int_ova-106_sld-15_4.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-106_sld-15_4.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="7" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-106_sld-15_4.mp3" />

            <p className="u-text-center">
              A continuación, encontrarás una actividad interactiva con cinco oraciones incompletas. Selecciona el pez
              que lleva la palabra correcta para cada oración. Los peces van nadando y debes presionar sobre el que
              lleva la palabra correcta.
            </p>
            <GameFish onResult={handleValidate}>
              <GameFish.Level label="La rotación de ---------- indica cuántas veces se venden y reponen los productos en un periodo.">
                <GameFish.Fish id="question-4-1" name="question-4" label="liquidez" state="wrong" />
                <GameFish.Fish id="question-4-2" name="question-4" label="financieros" state="wrong" />
                <GameFish.Fish id="question-4-3" name="question-4" label="ROE" state="wrong" />
                <GameFish.Fish id="question-4-4" name="question-4" label="nivel" state="wrong" />
                <GameFish.Fish id="question-4-5" name="question-4" label="inventarios" state="success" />
              </GameFish.Level>

              <p className="u-text-center">
                <strong>Figura 8.</strong> Actividad de aprendizaje 1.
              </p>

              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameFish.Button>
                  <Button variant="check" label="Comprobar" />
                </GameFish.Button>

                <GameFish.Button type="reset">
                  <Button variant="reset" label="Reiniciar" onClick={notifyReset} />
                </GameFish.Button>
              </Row>
            </GameFish>
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section
        interpreter={{ a11yURL: 'vid_int_des_ova-106_sld-15_5.mp4', contentURL: 'vid_int_ova-106_sld-15_5.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-106_sld-15_5.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="7" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-106_sld-15_5.mp3" />

            <p className="u-text-center">
              A continuación, encontrarás una actividad interactiva con cinco oraciones incompletas. Selecciona el pez
              que lleva la palabra correcta para cada oración. Los peces van nadando y debes presionar sobre el que
              lleva la palabra correcta.
            </p>
            <GameFish onResult={handleValidate}>
              <GameFish.Level label="Los indicadores financieros se calculan a partir de la información contenida en los estados --------.">
                <GameFish.Fish id="question-5-1" name="question-5" label="liquidez" state="wrong" />
                <GameFish.Fish id="question-5-2" name="question-5" label="financieros" state="success" />
                <GameFish.Fish id="question-5-3" name="question-5" label="ROE" state="wrong" />
                <GameFish.Fish id="question-5-4" name="question-5" label="nivel" state="wrong" />
                <GameFish.Fish id="question-5-5" name="question-5" label="inventarios" state="wrong" />
              </GameFish.Level>

              <p className="u-text-center">
                <strong>Figura 8.</strong> Actividad de aprendizaje 1.
              </p>

              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-4">
                <GameFish.Button>
                  <Button variant="check" label="Comprobar" />
                </GameFish.Button>

                <GameFish.Button type="reset">
                  <Button variant="reset" label="Reiniciar" onClick={notifyReset} />
                </GameFish.Button>
              </Row>
            </GameFish>
          </Col>
        </Row>
      </Panel.Section>

      <ToastFeedback
        type="success"
        isOpen={isOpen === MODALS.QUESTION_SUCCESS}
        onClose={closeModal}
        audio="assets/audios/aud_ova-106_sld-15_correcto.mp3">
        <p>
          ¡Muy bien! Lograste ubicar correctamente las palabras. Ahora reconoces algunos de los principales indicadores
          financieros: ROE, liquidez, endeudamiento, inventarios y financieros. Estos indicadores son herramientas clave
          para analizar la situación económica de una empresa y evaluar su capacidad de generar valor, cumplir
          obligaciones y administrar eficientemente sus recursos.
        </p>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.QUESTION_WRONG}
        onClose={closeModal}
        audio="assets/audios/aud_ova-106_sld-15_incorrecto.mp3">
        <p>
          Revisa nuevamente los conceptos: cada palabra está directamente relacionada con la definición propuesta y es
          importante que las domines para aplicarlas en la interpretación de los estados financieros.
        </p>
      </ToastFeedback>

      <ModalQuiz audio="assets/audios/aud_ova-106_sld-15_bien.mp3" interpreter={{ contentURL: '', a11yURL: '' }} />
    </Panel>
  );
};

export default Ova106p15;
