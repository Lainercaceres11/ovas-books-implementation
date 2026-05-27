import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { useGamification } from '@features/gamification';
import { ToastFeedback } from '@features/toast-feedback';
import { Button } from '@ui';
import { Content } from '@/shared/components/layouts';

import { CrosswordActivity, CrosswordInput, useCrossWordState } from '../components/crossword-input';

import { Crossword } from './svg__/crossword/crossword';

const MODALS = {
  SUCCESS: 'right',
  WRONG: 'wrong'
};

type ResultState = {
  word: string;
  answer?: string;
  array: string[];
  isReady?: boolean;
};

const LENGTH_QUESTION = 5;
const Ova25p13 = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const {
    answers,
    currentQuestionId,
    validation,
    disabledButton,
    setAnswers,
    handleValidation,
    handleReset,
    handleWordClick,
    checked,
    showCrosswordInput
  } = useCrossWordState(LENGTH_QUESTION);

  const { Modal, notifyReset, reportResult } = useGamification({
    id: 'gr-1-25-2025-1-sld-13',
    total: LENGTH_QUESTION
  });

  const handleValidate = (positionOption: number) => {
    const resultActivity = handleValidation(positionOption);
    setIsOpen(resultActivity);

    reportResult({
      success: !!resultActivity,
      correct: LENGTH_QUESTION,
      total: LENGTH_QUESTION
    });
  };

  const onAnswers = (value: ResultState, numberQuestion: string) => {
    const nextAnswers = { ...answers };
    nextAnswers[`question${numberQuestion}`] = { ...value, isReady: value.isReady ?? false };
    setAnswers(nextAnswers);
  };

  const resetActivity = () => {
    handleReset();
    notifyReset();
  };

  const closeModal = () => setIsOpen(null);
  return (
    <>
      <Content interpreter={{ a11yURL: 'vid_int_des_ova-25_sld-12.mp4', contentURL: 'vid_int_ova-25_sld-12.mp4' }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-25_sld-12.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-25_sld-12.mp3" />
            <CrosswordActivity
              background="assets/images/crossword-bg.webp"
              title={
                <>
                  <strong>Animación 10.</strong> Actividad de aprendizaje.
                </>
              }>
              <Crossword isChecked={checked} validation={validation} words={answers} />
              {currentQuestionId === 1 && showCrosswordInput && (
                <>
                  <CrosswordInput
                    addClass="u-mb-3"
                    number="1"
                    label="Costo que influye en decisiones futuras."
                    rightAnswer="relevante"
                    length={9}
                    currentQuestionId={currentQuestionId}
                    arrayQuantity={LENGTH_QUESTION}
                    handleWordClick={handleWordClick}
                    validation={validation}
                    onAnswer={(value) => onAnswers(value, '1')}
                  />
                  <CrosswordActivity.Button>
                    <Button
                      label="Comprobar"
                      variant="check"
                      disabled={disabledButton.button}
                      onClick={() => handleValidate(0)}
                    />
                    <Button
                      label="Reintentar"
                      variant="reset"
                      disabled={disabledButton.reset}
                      onClick={resetActivity}
                    />
                  </CrosswordActivity.Button>
                </>
              )}

              {currentQuestionId === 2 && showCrosswordInput && (
                <>
                  <CrosswordInput
                    number="2"
                    label="No varía con el nivel de produción."
                    rightAnswer="variable"
                    length={8}
                    currentQuestionId={currentQuestionId}
                    arrayQuantity={LENGTH_QUESTION}
                    handleWordClick={handleWordClick}
                    validation={validation}
                    onAnswer={(value) => onAnswers(value, '2')}
                  />
                  <CrosswordActivity.Button>
                    <Button
                      label="Comprobar"
                      variant="check"
                      disabled={disabledButton.button}
                      onClick={() => handleValidate(1)}
                    />
                    <Button
                      label="Reintentar"
                      variant="reset"
                      disabled={disabledButton.reset}
                      onClick={resetActivity}
                    />
                  </CrosswordActivity.Button>
                </>
              )}

              {currentQuestionId === 3 && showCrosswordInput && (
                <>
                  <CrosswordInput
                    number="3"
                    label="Asignable directamente aun producto/proyecto."
                    rightAnswer="hundido"
                    length={7}
                    currentQuestionId={currentQuestionId}
                    arrayQuantity={LENGTH_QUESTION}
                    handleWordClick={handleWordClick}
                    validation={validation}
                    onAnswer={(value) => onAnswers(value, '3')}
                  />
                  <CrosswordActivity.Button>
                    <Button
                      label="Comprobar"
                      variant="check"
                      disabled={disabledButton.button}
                      onClick={() => handleValidate(2)}
                    />
                    <Button
                      label="Reintentar"
                      variant="reset"
                      disabled={disabledButton.reset}
                      onClick={resetActivity}
                    />
                  </CrosswordActivity.Button>
                </>
              )}

              {currentQuestionId === 4 && showCrosswordInput && (
                <>
                  <CrosswordInput
                    number="4"
                    label="Cambia según el volumen producido."
                    rightAnswer="fijo"
                    length={4}
                    currentQuestionId={currentQuestionId}
                    arrayQuantity={LENGTH_QUESTION}
                    handleWordClick={handleWordClick}
                    validation={validation}
                    onAnswer={(value) => onAnswers(value, '4')}
                  />
                  <CrosswordActivity.Button>
                    <Button
                      label="Comprobar"
                      variant="check"
                      disabled={disabledButton.button}
                      onClick={() => handleValidate(3)}
                    />
                    <Button
                      label="Reintentar"
                      variant="reset"
                      disabled={disabledButton.reset}
                      onClick={resetActivity}
                    />
                  </CrosswordActivity.Button>
                </>
              )}

              {currentQuestionId === 5 && showCrosswordInput && (
                <>
                  <CrosswordInput
                    number="5"
                    label="Gasto ya incurrido que no se puede recuperar."
                    rightAnswer="directo"
                    length={7}
                    currentQuestionId={currentQuestionId}
                    arrayQuantity={LENGTH_QUESTION}
                    handleWordClick={handleWordClick}
                    validation={validation}
                    onAnswer={(value) => onAnswers(value, '5')}
                  />
                  <CrosswordActivity.Button>
                    <Button
                      label="Comprobar"
                      variant="check"
                      disabled={disabledButton.button}
                      onClick={() => handleValidate(4)}
                    />
                    <Button
                      label="Reintentar"
                      variant="reset"
                      disabled={disabledButton.reset}
                      onClick={resetActivity}
                    />
                  </CrosswordActivity.Button>
                </>
              )}
            </CrosswordActivity>
          </Col>
        </Row>
      </Content>

      <Modal audio="assets/audios/content/aud_bien.mp3" interpreter={{ contentURL: '' }} />

      <ToastFeedback type="success" isOpen={isOpen === MODALS.SUCCESS} onClose={closeModal}>
        <p>Felicitaciones.</p>
      </ToastFeedback>

      <ToastFeedback type="wrong" isOpen={isOpen === MODALS.WRONG} onClose={closeModal}>
        <p>No te preocupes. Podemos volver a intentarlo.</p>
      </ToastFeedback>
    </>
  );
};

export default Ova25p13;
