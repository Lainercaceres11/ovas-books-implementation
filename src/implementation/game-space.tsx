import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';
import { GameSpace } from '@/shared/components/games/game-space';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

const MODALS = {
  QUESTION_1_SUCCESS: 'modal-correct-activity-q1',
  QUESTION_1_WRONG: 'modal-wrong-activity-q1',
  QUESTION_2_SUCCESS: 'modal-correct-activity-q2',
  QUESTION_2_WRONG: 'modal-wrong-activity-q2',
  QUESTION_3_SUCCESS: 'modal-correct-activity-q3',
  QUESTION_3_WRONG: 'modal-wrong-activity-q3',
  QUESTION_4_SUCCESS: 'modal-correct-activity-q4',
  QUESTION_4_WRONG: 'modal-wrong-activity-q4',
  QUESTION_5_SUCCESS: 'modal-correct-activity-q5',
  QUESTION_5_WRONG: 'modal-wrong-activity-q5'
};
const LENGTH_QUESTION = 5;

const Ova74p16 = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const { Modal, Stars, notifyReset, reportResult } = useGamification({
    id: 'gr-2-74-2025-1-sld-16',
    total: LENGTH_QUESTION
  });

  const handleValidate =
    (questionKey: string) =>
    ({ result }: { result: boolean }) => {
      const activityResult = result ? `${questionKey}_SUCCESS` : `${questionKey}_WRONG`;
      setIsOpen(MODALS[activityResult as keyof typeof MODALS]);

      reportResult({
        success: result,
        correct: LENGTH_QUESTION,
        total: LENGTH_QUESTION
      });
    };

  const closeModal = () => setIsOpen(null);
  return (
    <Panel stars={Stars}>
      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-74_sld-16_1.mp4',
          contentURL: 'content/vid_int_ova-74_sld-16_1.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-74_sld-16_1.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-74_sld-16_1.mp3" />

            <p className="u-font-bold u-text-center">
              Now it’s your turn to practice comparatives. Read the sentences and select the correct option by clicking
              on the small circle next to it.
            </p>

            <GameSpace onResult={handleValidate('QUESTION_1')}>
              <GameSpace.Galaxy question="1. The countryside is _______ than the city when you want peace and quiet.">
                <GameSpace.Radio id="option-1-1" name="question-1" label="A. quieter." state="success" />
                <GameSpace.Radio id="option-1-2" name="question-1" label="B. more quiet." state="wrong" />
                <GameSpace.Radio id="option-1-3" name="question-1" label="C. quiet." state="wrong" />
              </GameSpace.Galaxy>

              <p className="u-text-center">
                <strong>Animation 3.</strong> Learning Activity.
              </p>
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6">
                <GameSpace.Button>
                  <Button label="Check" variant="check" />
                </GameSpace.Button>
                <GameSpace.Button type="reset">
                  <Button label="Reset" variant="reset" onClick={notifyReset} />
                </GameSpace.Button>
              </Row>
            </GameSpace>
          </Col>
        </Row>

        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS.QUESTION_1_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_correcto.mp3">
          <p>Excellent choice! ‘quieter’ correctly shows that the countryside has more peace than the city.</p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_1_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_incorrecto.mp3">
          <p>
            That answer isn’t quite right—remember to add -er for one-syllable adjectives when comparing two things.{' '}
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-74_sld-16_2.mp4',
          contentURL: 'content/vid_int_ova-74_sld-16_2.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-74_sld-16_2.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-74_sld-16_2.mp3" />

            <p className="u-font-bold u-text-center">
              Now it’s your turn to practice comparatives. Read the sentences and select the correct option by clicking
              on the small circle next to it.
            </p>
            <GameSpace onResult={handleValidate('QUESTION_2')}>
              <GameSpace.Galaxy question="2. Life in the city is often _______ than life in rural areas because there’s more to do.">
                <GameSpace.Radio id="option-2-1" name="question-2" label="A. busier." state="success" />
                <GameSpace.Radio id="option-2-2" name="question-2" label="B. more busier." state="wrong" />
                <GameSpace.Radio id="option-2-3" name="question-2" label="C. more busy." state="wrong" />
              </GameSpace.Galaxy>

              <p className="u-text-center">
                <strong>Animation 3.</strong> Learning Activity.
              </p>
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6">
                <GameSpace.Button>
                  <Button label="Check" variant="check" />
                </GameSpace.Button>
                <GameSpace.Button type="reset">
                  <Button label="Reset" variant="reset" onClick={notifyReset} />
                </GameSpace.Button>
              </Row>
            </GameSpace>
          </Col>
        </Row>

        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS.QUESTION_2_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_correcto.mp3">
          <p>Great job! ‘busier’ accurately conveys that city life has more activity compared with rural life.</p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_2_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_incorrecto.mp3">
          <p>Not quite—‘more busy’ is incorrect because for onesyllable adjectives we add -er: busy → busier.</p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-74_sld-16_3.mp4',
          contentURL: 'content/vid_int_ova-74_sld-16_3.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-74_sld-16_3.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-74_sld-16_3.mp3" />

            <p className="u-font-bold u-text-center">
              Now it’s your turn to practice comparatives. Read the sentences and select the correct option by clicking
              on the small circle next to it.
            </p>
            <GameSpace onResult={handleValidate('QUESTION_3')}>
              <GameSpace.Galaxy question="3. ¿Houses in the city tends to be _______ than in the countryside.">
                <GameSpace.Radio id="option-3-1" name="question-3" label="A. smaller." state="success" />
                <GameSpace.Radio id="option-3-2" name="question-3" label="B. more smaller." state="wrong" />
                <GameSpace.Radio id="option-3-3" name="question-3" label="C. more small." state="wrong" />
              </GameSpace.Galaxy>

              <p className="u-text-center">
                <strong>Animation 3.</strong> Learning Activity.
              </p>
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6">
                <GameSpace.Button>
                  <Button label="Check" variant="check" />
                </GameSpace.Button>
                <GameSpace.Button type="reset">
                  <Button label="Reset" variant="reset" onClick={notifyReset} />
                </GameSpace.Button>
              </Row>
            </GameSpace>
          </Col>
        </Row>

        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS.QUESTION_3_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_correcto.mp3">
          <p>Well done! ‘smaller’ nicely expresses that city homes are usually more compact than countryside homes.</p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_3_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_incorrecto.mp3">
          <p>
            Close—but not correct. For one-syllable adjectives use the -er form. So the correct is ‘smaller’, not ‘more
            smaller’.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-74_sld-16_4.mp4',
          contentURL: 'content/vid_int_ova-74_sld-16_4.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-74_sld-16_4.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-74_sld-16_4.mp3" />

            <p className="u-font-bold u-text-center">
              Now it’s your turn to practice comparatives. Read the sentences and select the correct option by clicking
              on the small circle next to it.
            </p>
            <GameSpace onResult={handleValidate('QUESTION_4')}>
              <GameSpace.Galaxy question="4. The air outside the city is usually _______ than the air in urban areas.">
                <GameSpace.Radio id="option-4-1" name="question-4" label="A. fresher." state="success" />
                <GameSpace.Radio id="option-4-2" name="question-4" label="B. more fresher." state="wrong" />
                <GameSpace.Radio id="option-4-3" name="question-4" label="C. Fresh." state="wrong" />
              </GameSpace.Galaxy>

              <p className="u-text-center">
                <strong>Animation 3.</strong> Learning Activity.
              </p>
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6">
                <GameSpace.Button>
                  <Button label="Check" variant="check" />
                </GameSpace.Button>
                <GameSpace.Button type="reset">
                  <Button label="Reset" variant="reset" onClick={notifyReset} />
                </GameSpace.Button>
              </Row>
            </GameSpace>
          </Col>
        </Row>

        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS.QUESTION_4_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_correcto.mp3">
          <p>Good work! ‘fresher’ properly compares the cleaner countryside air to the city air.</p>
        </ToastFeedback>

        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_4_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-106_sld-4_1_incorrecto.mp3">
          <p>
            Think again!—remember to use the comparative form (-er) for one-syllable adjectives, not ‘more fresher’.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-74_sld-16_5.mp4',
          contentURL: 'content/vid_int_ova-74_sld-16_5.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-74_sld-16_5.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="8" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-74_sld-16_5.mp3" />

            <p className="u-font-bold u-text-center">
              Now it’s your turn to practice comparatives. Read the sentences and select the correct option by clicking
              on the small circle next to it.
            </p>
            <GameSpace onResult={handleValidate('QUESTION_5')}>
              <GameSpace.Galaxy question="5. ¿Living costs in big cities are typically _______ than in the countryside.">
                <GameSpace.Radio id="option-5-1" name="question-5" label="A. higher." state="success" />
                <GameSpace.Radio id="option-5-2" name="question-5" label="B. more higher." state="wrong" />
                <GameSpace.Radio id="option-5-3" name="question-5" label="C. more high." state="wrong" />
              </GameSpace.Galaxy>

              <p className="u-text-center">
                <strong>Animation 3.</strong> Learning Activity.
              </p>
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6">
                <GameSpace.Button>
                  <Button label="Check" variant="check" />
                </GameSpace.Button>
                <GameSpace.Button type="reset">
                  <Button label="Reset" variant="reset" onClick={notifyReset} />
                </GameSpace.Button>
              </Row>
            </GameSpace>
          </Col>
        </Row>
      </Panel.Section>

      <ToastFeedback
        type="success"
        isOpen={isOpen === MODALS.QUESTION_5_SUCCESS}
        onClose={closeModal}
        audio="assets/audios/aud_ova-106_sld-4_1_correcto.mp3">
        <p>Excellent! ‘higher’ effectively shows that city living costs tend to be greater than countryside costs.</p>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.QUESTION_5_WRONG}
        onClose={closeModal}
        audio="assets/audios/aud_ova-106_sld-4_1_incorrecto.mp3">
        <p>
          Try again—‘more high’ is incorrect because we don’t say ‘more’ with this one–syllable adjective. Use ‘higher’
          instead.
        </p>
      </ToastFeedback>

      <Modal audio="assets/audios/content/aud_gr1_ova-8_sld-16 (Bien).mp3" />
    </Panel>
  );
};

export default Ova74p16;
