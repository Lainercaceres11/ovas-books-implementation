import { useState } from 'react';
import { Selects } from '@activities/select-activity';
import { useGamification } from '@features/gamification';
import { ToastFeedback } from '@features/toast-feedback';
import { Content } from '@layouts';
import { Button } from '@ui';
import { Audio, Col, Row } from 'books-ui';

import css from '@/styles/ova-80.module.css';

const options = [
  { id: 'option-3', option: 'Fundamenta la importancia y relevancia del estudio.' },
  { id: 'option-2', option: 'Propósito principal que guía el proyecto.' },
  { id: 'option-5', option: 'Estrategias para recopilar y analizar datos.' },
  { id: 'option-4', option: 'Recoge teorías y antecedentes relacionados.' },
  { id: 'option-1', option: 'Describe la situación que se busca abordar o transformar.' }
];

const LENGTH_QUESTION = 5;

const MODALS = {
  GENERAL_SUCCESS: 'GENERAL_SUCCESS',
  GENERAL_WRONG: 'GENERAL_WRONG'
};

const Ova80p16 = () => {
  const [modalState, setModalState] = useState<string | null>(null);

  const { Stars, Modal, notifyReset, reportResult } = useGamification({
    id: 'act-02',
    total: 1
  });

  const closeModal = () => setModalState(null);

  const handleValidate = ({ result }: { result: boolean }) => {
    reportResult({
      success: result,
      correct: result ? LENGTH_QUESTION : 0,
      total: LENGTH_QUESTION
    });

    if (result) {
      setModalState(MODALS.GENERAL_SUCCESS);
    } else {
      setModalState(MODALS.GENERAL_WRONG);
    }
  };

  const handleReset = () => {
    closeModal();
    notifyReset();
  };

  return (
    <>
      <Content
        stars={Stars}
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-43_sld-4.mp4',
          contentURL: 'content/vid_int_ova-43_sld-4.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_gr1_ova-43_sld-4.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" addClass="u-flow">
            <Audio src="assets/audios/content/aud_gr1_ova-43_sld-4.mp3" />
            <p className="u-text-center">
              A continuación, encontrarás una tabla con dos columnas. En la Columna A se presentan conceptos clave que
              forman parte de un proyecto de investigación, y en la Columna B se describen definiciones o elementos
              relacionados con ellos. Tu tarea es relacionar correctamente cada concepto de la Columna A con su
              definición correspondiente de la Columna B.
            </p>
            <p className="u-text-center u-font-bold">Relacionar conceptos de un proyecto de Investigación:</p>
          </Col>
          <Col xs="11" mm="10" md="9" lg="7" addClass="u-flow u-mt-5">
            <Selects onResult={handleValidate}>
              <div className={css['grid-container']}>
                {/* ENCABEZADOS */}
                <p className="u-font-bold u-text-center">COLUMNA A</p>
                <p className="u-font-bold u-text-center">COLUMNA B</p>

                {/* FILA 1: Planteamiento del problema */}
                <p>
                  <strong>A. </strong>Planteamiento del problema
                </p>
                <div className={css['select-cell']}>
                  <Selects.Select
                    id="select-1"
                    options={options}
                    correctAnswer="option-1"
                    label="Concepto 1"
                    name="1-1"
                  />
                  <Selects.Feedback
                    id="select-1"
                    success={{
                      feedback:
                        'El planteamiento define qué situación problemática existe y por qué merece ser investigada.',
                      audio: 'assets/audios/content/aud_ova-173_sld-10 (Correcto 1).mp3'
                    }}
                    wrong={{ feedback: '', audio: '' }}
                  />
                </div>

                {/* FILA 2: Objetivo general */}
                <p>
                  <strong>B. </strong>Objetivo general
                </p>
                <div className={css['select-cell']}>
                  <Selects.Select
                    id="select-2"
                    options={options}
                    correctAnswer="option-2"
                    label="Concepto 2"
                    name="1-2"
                  />
                  <Selects.Feedback
                    id="select-2"
                    success={{
                      feedback: 'Resume lo que se quiere lograr de manera global con el proyecto.',
                      audio: 'assets/audios/content/aud_ova-173_sld-10 (Correcto 2).mp3'
                    }}
                    wrong={{ feedback: '', audio: '' }}
                  />
                </div>

                {/* FILA 3: Justificación */}
                <p>
                  <strong>C. </strong>Justificación
                </p>
                <div className={css['select-cell']}>
                  <Selects.Select
                    id="select-3"
                    options={options}
                    correctAnswer="option-3"
                    label="Concepto 3"
                    name="1-3"
                  />
                  <Selects.Feedback
                    id="select-3"
                    success={{
                      feedback: 'Explica por qué es necesario realizar el estudio y qué aportes genera.',
                      audio: 'assets/audios/content/aud_ova-173_sld-10 (Correcto 3).mp3'
                    }}
                    wrong={{ feedback: '', audio: '' }}
                  />
                </div>

                {/* FILA 4: Marco referencial */}
                <p>
                  <strong>D. </strong>Marco referencial
                </p>
                <div className={css['select-cell']}>
                  <Selects.Select
                    id="select-4"
                    options={options}
                    correctAnswer="option-4"
                    label="Concepto 4"
                    name="1-4"
                  />
                  <Selects.Feedback
                    id="select-4"
                    success={{
                      feedback: 'Proporciona sustento teórico y empírico al estudio, contextualizándolo.',
                      audio: 'assets/audios/content/aud_ova-173_sld-10 (Correcto 4).mp3'
                    }}
                    wrong={{ feedback: '', audio: '' }}
                  />
                </div>

                {/* FILA 5: Diseño metodológico */}
                <p>
                  <strong>E. </strong>Diseño conceptual
                </p>
                <div className={css['select-cell']}>
                  <Selects.Select
                    id="select-5"
                    options={options}
                    correctAnswer="option-5"
                    label="Concepto 5"
                    name="1-5"
                  />
                  <Selects.Feedback
                    id="select-5"
                    success={{
                      feedback: 'Indica cómo se desarrollará técnicamente la investigación.',
                      audio: 'assets/audios/content/aud_ova-173_sld-10 (Correcto 5).mp3'
                    }}
                    wrong={{ feedback: '', audio: '' }}
                  />
                </div>
              </div>

              {/* Botones de acción */}
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-5">
                <Selects.Button>
                  <Button label="Comprobar" variant="check" />
                </Selects.Button>

                <Selects.Button type="reset">
                  <Button label="Reintentar" onClick={handleReset} variant="reset" />
                </Selects.Button>
              </Row>
            </Selects>
          </Col>
        </Row>
      </Content>

      {/* --- RETROALIMENTACIÓN GENERAL (TOASTS) --- */}
      <ToastFeedback
        type="success"
        isOpen={modalState === MODALS.GENERAL_SUCCESS}
        onClose={closeModal}
        audio="assets/audios/content/aud_gr1_ova-43_sld-12 (Correcto).mp3"
        interpreter={{
          contentURL: 'content/vid_int_ova-43_sld-12 (Correcto).mp4'
        }}>
        <p className="u-text-justify">
          ¡Excelente trabajo! Has logrado relacionar correctamente los conceptos clave que componen una propuesta de
          grado. Esto demuestra una comprensión clara de la estructura lógica y funcional del documento académico.
          Reconocer cómo se conecta el problema con los objetivos, y cómo la metodología da respuesta a estos, es
          esencial para el desarrollo exitoso de tu proyecto en telesalud.
        </p>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={modalState === MODALS.GENERAL_WRONG}
        onClose={closeModal}
        audio="assets/audios/content/aud_gr1_ova-43_sld-12 (Incorrecto).mp3"
        interpreter={{
          contentURL: 'content/vid_int_ova-43_sld-12 (Incorrecto).mp4'
        }}>
        <p className="u-text-justify">
          Te sugiero que revises nuevamente el recurso educativo, prestando especial atención a los datos específicos.
          <br />
          Has avanzado en la identificación de los componentes de una propuesta de grado, pero es importante reforzar la
          comprensión de cómo se articulan entre sí.
        </p>
      </ToastFeedback>

      {/* Modal de felicitación por estrellas (Gamificación) */}
      {Modal && (
        <Modal
          audio="assets/audios/content/aud_gr1_ova-43_sld-4 (Bien).mp3"
          interpreter={{ contentURL: 'content/vid_int_ova-43_sld-4 (Bien).mp4' }}
        />
      )}
    </>
  );
};

export default Ova80p16;
