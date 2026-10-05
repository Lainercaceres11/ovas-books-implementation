import { useState } from 'react';
import { Audio, Col, Row } from 'books-ui';

import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';
import { GameMoney } from '@/shared/components/games/game-money';
import { Panel } from '@/shared/components/layouts';
import { Button } from '@/shared/components/ui';

const MODALS = {
  SUCCESS: 'modal-correct-activity',
  WRONG: 'modal-wrong-activity'
};

const LENGTH_QUESTION = 5;

const Ova74p04 = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const { Modal, Stars, notifyReset, reportResult } = useGamification({
    id: 'gr-2-74-2025-1-sld-4',
    total: LENGTH_QUESTION
  });

  const handleValidate = ({ result }: { result: boolean }) => {
    const activityResult = result ? 'SUCCESS' : 'WRONG';
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
          a11yURL: 'descriptives/vid_int_des_ova-74_sld-4_1.mp4',
          contentURL: 'content/vid_int_ova-74_sld-4_1.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-74_sld-4_1.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-74_sld-4_1.mp3" />

            <p className="u-font-bold u-text-center">
              In this section, you will find an interactive activity where you will have to complete some sentences with
              a missing phrase. Select the correct phrase and move the man towards the corresponding option.
            </p>

            <GameMoney onResult={handleValidate} minSelected={1}>
              <GameMoney.Level label="Cities are usually _________ and a bit polluted.">
                <GameMoney.Radio id="option-1-1" name="option-1" label="noisy" state="success" />
                <GameMoney.Radio id="option-1-2" name="option-1" label="calm" state="wrong" />
              </GameMoney.Level>

              <p className="u-text-center">
                <strong>Animation 1.</strong> Pre-knowledge Activity.
              </p>
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6">
                <GameMoney.Button>
                  <Button label="Check" variant="check" />
                </GameMoney.Button>
                <GameMoney.Button type="reset">
                  <Button label="Reset" variant="reset" onClick={notifyReset} />
                </GameMoney.Button>
              </Row>
            </GameMoney>
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-74_sld-4_2.mp4',
          contentURL: 'content/vid_int_ova-74_sld-4_2.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-74_sld-4_2.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-74_sld-4_2.mp3" />

            <p className="u-font-bold u-text-center">
              In this section, you will find an interactive activity where you will have to complete some sentences with
              a missing phrase. Select the correct phrase and move the man towards the corresponding option.
            </p>
            <GameMoney onResult={handleValidate} minSelected={1}>
              <GameMoney.Level label="The countryside is usually cleaner and _________ than the city.">
                <GameMoney.Radio id="option-2-1" name="option-2" label="more peaceful" state="success" />
                <GameMoney.Radio id="option-2-2" name="option-2" label="more stressful" state="wrong" />
              </GameMoney.Level>

              <p className="u-text-center">
                <strong>Animation 1.</strong> Pre-knowledge Activity.
              </p>
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6">
                <GameMoney.Button>
                  <Button label="Check" variant="check" />
                </GameMoney.Button>
                <GameMoney.Button type="reset">
                  <Button label="Reset" variant="reset" onClick={notifyReset} />
                </GameMoney.Button>
              </Row>
            </GameMoney>
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-74_sld-4_3.mp4',
          contentURL: 'content/vid_int_ova-74_sld-4_3.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-74_sld-4_3.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-74_sld-4_3.mp3" />

            <p className="u-font-bold u-text-center">
              In this section, you will find an interactive activity where you will have to complete some sentences with
              a missing phrase. Select the correct phrase and move the man towards the corresponding option.
            </p>
            <GameMoney onResult={handleValidate} minSelected={1}>
              <GameMoney.Level label="Big cities have _________traffic jams during rush hour.">
                <GameMoney.Radio id="option-3-1" name="option-3" label="huge" state="success" />
                <GameMoney.Radio id="option-3-2" name="option-3" label="tiny" state="wrong" />
              </GameMoney.Level>

              <p className="u-text-center">
                <strong>Animation 1.</strong> Pre-knowledge Activity.
              </p>
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6">
                <GameMoney.Button>
                  <Button label="Check" variant="check" />
                </GameMoney.Button>
                <GameMoney.Button type="reset">
                  <Button label="Reset" variant="reset" onClick={notifyReset} />
                </GameMoney.Button>
              </Row>
            </GameMoney>
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-74_sld-4_4.mp4',
          contentURL: 'content/vid_int_ova-74_sld-4_4.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-74_sld-4_4.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-74_sld-4_4.mp3" />

            <p className="u-font-bold u-text-center">
              In this section, you will find an interactive activity where you will have to complete some sentences with
              a missing phrase. Select the correct phrase and move the man towards the corresponding option.
            </p>
            <GameMoney onResult={handleValidate} minSelected={1}>
              <GameMoney.Level label="Cities are _________ than the countryside.">
                <GameMoney.Radio id="option-4-1" name="option-4" label="more crowded" state="success" />
                <GameMoney.Radio id="option-4-2" name="option-4" label="smaller" state="wrong" />
              </GameMoney.Level>

              <p className="u-text-center">
                <strong>Animation 1.</strong> Pre-knowledge Activity.
              </p>
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6">
                <GameMoney.Button>
                  <Button label="Check" variant="check" />
                </GameMoney.Button>
                <GameMoney.Button type="reset">
                  <Button label="Reset" variant="reset" onClick={notifyReset} />
                </GameMoney.Button>
              </Row>
            </GameMoney>
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section
        interpreter={{
          a11yURL: 'descriptives/vid_int_des_ova-74_sld-4_5.mp4',
          contentURL: 'content/vid_int_ova-74_sld-4_5.mp4'
        }}>
        <Audio a11y src="assets/audios/descriptives/aud_des_ova-74_sld-4_5.mp3" />
        <Row justifyContent="center" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="9" addClass="u-flow">
            <Audio src="assets/audios/content/aud_ova-74_sld-4_5.mp3" />

            <p className="u-font-bold u-text-center">
              In this section, you will find an interactive activity where you will have to complete some sentences with
              a missing phrase. Select the correct phrase and move the man towards the corresponding option.
            </p>
            <GameMoney onResult={handleValidate} minSelected={1}>
              <GameMoney.Level label="People in the countryside tend to live a _______ life.">
                <GameMoney.Radio id="option-5-1" name="option-5" label="short" state="success" />
                <GameMoney.Radio id="option-5-2" name="option-5" label="long" state="wrong" />
              </GameMoney.Level>

              <p className="u-text-center">
                <strong>Animation 1.</strong> Pre-knowledge Activity.
              </p>
              <Row justifyContent="center" alignItems="center" addClass="u-gap-x-6">
                <GameMoney.Button>
                  <Button label="Check" variant="check" />
                </GameMoney.Button>
                <GameMoney.Button type="reset">
                  <Button label="Reset" variant="reset" onClick={notifyReset} />
                </GameMoney.Button>
              </Row>
            </GameMoney>
          </Col>
        </Row>
      </Panel.Section>

      <ToastFeedback
        type="success"
        isOpen={isOpen === MODALS.SUCCESS}
        onClose={closeModal}
        interpreter={{ contentURL: 'vid_int_ova-08_sld-4 (Correcto).mp4' }}
        audio="assets/audios/content/aud_gr1_ova-8_sld-4 (Correcto).mp3">
        <p>
          Excellent Job! You could apply what you know by following the explanations given in this tool and completing
          the text properly. Congratulations, you are a millionaire now.
        </p>
      </ToastFeedback>

      <ToastFeedback
        type="wrong"
        isOpen={isOpen === MODALS.WRONG}
        onClose={closeModal}
        interpreter={{ contentURL: 'vid_int_ova-08_sld-4 (Incorrecto).mp4' }}
        audio="assets/audios/content/aud_gr1_ova-8_sld-4 (Incorrecto).mp3">
        <div className="u-flow">
          <p>
            The answers you chose did not fit the parts of the sentences required. Please try to read the sentences
            carefully. I’m sure you can do it.
          </p>
        </div>
      </ToastFeedback>

      <Modal audio="assets/audios/content/aud_gr1_ova-8_sld-4 (Bien).mp3" />
    </Panel>
  );
};

export default Ova74p04;
