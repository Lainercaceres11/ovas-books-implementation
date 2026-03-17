import { useState } from 'react';
import { Panel } from '@layouts';
import { Button, Image } from '@ui';
import { Audio, Col, Row } from 'books-ui';

import { TrueFalseActivity } from '@/shared/components/activities/true-false-activity';
import { useGamification } from '@/shared/components/features/gamification';
import { ToastFeedback } from '@/shared/components/features/toast-feedback';

import type { OptionRadio } from '@/shared/components/activities/true-false-activity/types/types';

import css from '@styles/styles.css';

const MODALS = {
  QUESTION_1_SUCCESS: 'modal-correct-activity-q1',
  QUESTION_1_WRONG: 'modal-wrong-activity-q1',

  QUESTION_2_SUCCESS: 'modal-correct-activity-q2',
  QUESTION_2_WRONG: 'modal-wrong-activity-q2',

  QUESTION_3_SUCCESS: 'modal-correct-activity-q3',
  QUESTION_3_WRONG: 'modal-wrong-activity-q3'
};

const Ova75P04 = () => {
  const { reportResult, notifyReset, Stars, Modal } = useGamification({
    id: 'activity-01',
    total: 3
  });
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const handleValidate =
    (questionKey: string) =>
    ({ result, options }: { result: boolean; options: OptionRadio[] }) => {
      const activityResult = result ? `${questionKey}_SUCCESS` : `${questionKey}_WRONG`;
      setIsOpen(MODALS[activityResult as keyof typeof MODALS]);

      reportResult({
        success: result,
        correct: options.filter((o) => o.state === 'success').length,
        total: options.length
      });
    };

  const closeModal = () => setIsOpen(null);
  return (
    <Panel>
      <Panel.Section>
        <Audio a11y src="assets/audios/aud_des_ova-75.mp3" />
        <Row justifyContent="space-evenly" alignItems="center">
          <Col xs="11" mm="10" md="9" lg="5" hd="4" addClass="u-flow">
            <Audio addClass="u-m-0" src="assets/audios/aud_ova-75.mp3" />
            <p className="u-text-justify">
              En la siguiente actividad usted podrá evaluar sus conocimientos previos sobre la estrategia de fijación de
              precios basado en valor que le servirá de base para comprender mejor el concepto de valor para un cliente
              y la jerarquización de bondades o características más significativas en un producto o servicio.
            </p>
          </Col>
          <Col xs="11" mm="10" md="9" lg="5" hd="4">
            <Image
              src="assets/images/OVA_GR_1_75-2024-1_SLD_04.webp"
              size="34rem"
              title="Figura 3."
              alt="Presaberes necesarios para poder adquirir nuevos conocimientos relacionados."
            />
          </Col>
        </Row>
      </Panel.Section>

      <Panel.Section>
        <Audio a11y src="assets/audios/aud_des_ova-45_sld-17_2.mp3" />
        <Row justifyContent="center" alignItems="center">
          <TrueFalseActivity onResult={handleValidate('QUESTION_1')}>
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Image
                src="assets/images/OVA_GR_1_75-2024-1_SLD_04.1_0.webp"
                size="32rem"
                title="Figura 4."
                alt="Verdadero o falso."
              />
            </Col>
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <div className="u-d-grid u-grid-cols-2 u-justify-between">
                <Audio addClass="u-m-0 flex-1" src="assets/audios/aud_ova-45_ad3_sld-17_2.mp3" />
                {Stars}
              </div>

              <p>
                <strong>1. </strong>
                El test de verdadero o falso es un instrumento de evaluación objetiva en el que se presenta a los
                aprendices un planteamiento para someterlo a juicio y determinar su veracidad, con base en los
                conocimientos que se tienen sobre el tema de estudio.
              </p>
              <p>
                <strong>Contexto:</strong> es absolutamente necesario discriminar los conceptos de valor y precio. El{' '}
                <b>precio</b> es un valor financiero que se le fija a un producto o servicio para que alguien lo pueda
                comprar. Es el elemento final clave que analiza un potencial cliente antes de comprar; que promueve la
                decisión de compra y que determina la calidad del servicio, el peso de la marca y las expectativas de lo
                que el cliente va a recibir. El <b>valor</b> es una apreciación subjetiva de cada consumidor para
                conocer profundamente las necesidades y deseos. Esto define el valor a través de cinco beneficios: 1.
                Utilidad de forma: es lo que desean. 2. Utilidad de tiempo: es cuándo lo desean. 3. Utilidad de lugar:
                es dónde lo desean. 4. Utilidad de posesión: es la potestad de comprarlo y 5. Utilidad de información:
                es la sensación de que es lo mejor para ellos.
              </p>
              <p>
                <strong>Responda “verdadera o “falsa” a la siguiente afirmación:</strong> <br />
                Usted ofrece un producto de alta calidad a los clientes mediante una campaña en las que les presenta
                todas las características y beneficios, pero, no le compran. Luego de un tiempo, usted medita y se
                acuerda de su abuelo mercader que repetía “la intención de compra por parte de un cliente se concreta
                ofreciendo la solución a una necesidad real o creada, que sea percibida con mayor valor frente al precio
                fijado del producto o servicio”. ¿Cómo consideraría esa afirmación?
              </p>

              <div className="u-d-flex u-gap-4 u-justify-center">
                <TrueFalseActivity.Option
                  id="1-1"
                  state="success"
                  label="Verdadero"
                  name="option-1"
                  addClass={css['true-false__option']}
                />
                <TrueFalseActivity.Option
                  id="1-2"
                  state="wrong"
                  label="Falso"
                  name="option-1"
                  addClass={css['true-false__option']}
                />
              </div>
            </Col>
            <Col xs="12" mm="8" md="5" lg="5" hd="3" addClass="u-d-flex u-justify-between">
              <TrueFalseActivity.Button>
                <Button variant="check" label="Comprobar" />
              </TrueFalseActivity.Button>

              <TrueFalseActivity.Button type="reset">
                <Button onClick={notifyReset} label="Reintentar" variant="reset" addClass="js-modal-wrong" />
              </TrueFalseActivity.Button>
            </Col>
          </TrueFalseActivity>
        </Row>
        {Modal}
        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS.QUESTION_1_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-45_ad3_sld-17_2 (Correcto).mp3"
          interpreter={{ contentURL: 'vid_int_ova-03_sld-17_2_correcto.mp4' }}>
          <p className="u-text-justify">
            ¡Muy bien! La opción elegida es correcta, porque un producto o servicio necesita satisfacer una necesidad o
            resolver un problema para que la mente del cliente le dé su visto bueno y luego de evaluar el precio, acepte
            que el valor percibido sobre ese producto o servicio es mayor al precio fijado.
          </p>
        </ToastFeedback>
        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_1_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-45_ad3_sld-17_2 (Incorrecto).mp3"
          interpreter={{ contentURL: 'vid_int_ova-03_sld-17_2_incorrecto.mp4' }}>
          <p className="u-text-justify">
            ¡Intenta nuevamente! La opción elegida no es correcta, puesto que esa información considera la solución a
            una necesidad o un problema del cliente como la clave para concretar la compra.
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section>
        <Audio a11y src="assets/audios/aud_des_ova-45_sld-17_2.mp3" />
        <Row justifyContent="center" alignItems="center">
          <TrueFalseActivity onResult={handleValidate('QUESTION_2')}>
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <div className="u-d-grid u-grid-cols-2 u-justify-between">
                <Audio addClass="u-m-0 flex-1" src="assets/audios/aud_ova-45_ad3_sld-17_2.mp3" />
                {Stars}
              </div>

              <p>
                <strong>2. </strong>
                El test de verdadero o falso es un instrumento de evaluación objetiva donde se presenta a los aprendices
                un planteamiento para someterlo a juicio y determinar su veracidad, con base en los conocimientos que se
                tienen sobre el tema de estudio.
              </p>
              <p>
                <strong>Contexto:</strong> el valor percibido es el valor que los clientes están dispuestos a pagar por
                un producto o servicio de acuerdo con la apreciación que tienen sobre él, en cuanto a si este satisface
                sus necesidades y deseos, y no tanto por lo que realmente cuesta producirlo o realizarlo. En
                consecuencia, el <b>valor percibido</b> por el cliente correspondería a la diferencia entre el{' '}
                <b>valor total del cliente</b> y el <b>coste total del cliente</b>. El <b>valor total del cliente</b> es
                la percepción de lo que un cliente obtiene de un producto o servicio determinado en comparación con el
                precio de compra, mientras que el
                <b> coste total del cliente</b> es lo que le cuesta al cliente ese proceso de investigación, compra,
                obtención y mantenimiento de un producto o servicio.
              </p>
              <p>
                <strong>
                  Responda verdadero si se vendería la taza de café o falso si no se vendería la taza de café, en la
                  siguiente afirmación:
                </strong>{' '}
                <br />
                Si el precio fijado para una taza de café colombiano estándar es demasiado elevado y no se corresponde
                con el valor que percibe el consumidor, ¿usted considera que el producto se vendería?
              </p>

              <div className="u-d-flex u-gap-4 u-justify-center">
                <TrueFalseActivity.Option
                  id="2-1"
                  state="wrong"
                  label="Verdadero"
                  name="option-2"
                  addClass={css['true-false__option']}
                />
                <TrueFalseActivity.Option
                  id="2-2"
                  state="success"
                  label="Falso"
                  name="option-2"
                  addClass={css['true-false__option']}
                />
              </div>
            </Col>
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Image
                src="assets/images/OVA_GR_1_75-2024-1_SLD_04.1_0.webp"
                size="32rem"
                title="Figura 4."
                alt="Verdadero o falso."
              />
            </Col>

            <Col xs="12" mm="8" md="5" lg="5" hd="3" addClass="u-d-flex u-justify-between">
              <TrueFalseActivity.Button>
                <Button variant="check" label="Comprobar" />
              </TrueFalseActivity.Button>

              <TrueFalseActivity.Button type="reset">
                <Button onClick={notifyReset} label="Reintentar" variant="reset" addClass="js-modal-wrong" />
              </TrueFalseActivity.Button>
            </Col>
          </TrueFalseActivity>
        </Row>
        {Modal}
        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS.QUESTION_2_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-45_ad3_sld-17_2 (Correcto).mp3"
          interpreter={{ contentURL: 'vid_int_ova-03_sld-17_2_correcto.mp4' }}>
          <p className="u-text-justify">
            ¡Muy bien! La opción elegida es correcta. No se vendería la taza de café, puesto que el valor percibido por
            el cliente es inferior al precio fijado y el cliente no analiza rápidamente antes de comprar. Este aspecto
            es clave a la hora de diseñar la estrategia de precios de un producto o servicio, etc.
          </p>
        </ToastFeedback>
        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_2_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-45_ad3_sld-17_2 (Incorrecto).mp3"
          interpreter={{ contentURL: 'vid_int_ova-03_sld-17_2_incorrecto.mp4' }}>
          <p className="u-text-justify">
            ¡Intenta nuevamente! La opción elegida no es correcta, puesto que la percepción de valor percibido por el
            cliente siempre deberá ser superior al valor fijado por el vendedor para asegurar la venta. Esa percepción
            incluye el sabor, el aroma y presentación de la taza de café, la hora y ubicación del local, el ambiente que
            se respire en ese local y muchos otros aspectos
          </p>
        </ToastFeedback>
      </Panel.Section>

      <Panel.Section>
        <Audio a11y src="assets/audios/aud_des_ova-45_sld-17_2.mp3" />
        <Row justifyContent="center" alignItems="center">
          <TrueFalseActivity onResult={handleValidate('QUESTION_3')}>
            <Col xs="11" mm="10" md="9" lg="5" hd="4">
              <Image
                src="assets/images/OVA_GR_1_75-2024-1_SLD_04.1_0.webp"
                size="32rem"
                title="Figura 4."
                alt="Verdadero o falso."
              />
            </Col>
            <Col xs="11" mm="10" md="9" lg="6" hd="5" addClass="u-flow">
              <div className="u-d-grid u-grid-cols-2 u-justify-between">
                <Audio addClass="u-m-0 flex-1" src="assets/audios/aud_ova-45_ad3_sld-17_2.mp3" />
                {Stars}
              </div>

              <p>
                <strong>3. </strong>
                El test de verdadero o falso es un instrumento de evaluación objetiva donde se presenta a los aprendices
                un planteamiento para someterlo a juicio y determinar su veracidad, con base en los conocimientos que se
                tienen sobre el tema de estudio.
              </p>
              <p>
                <strong>Contexto:</strong> es absolutamente necesario discriminar los conceptos de valor y precio. El
                <b> precio</b> es un valor financiero que se le fija a un producto o servicio para que alguien lo pueda
                comprar. Es el elemento final clave que analiza un potencial cliente antes de comprar, promueve la
                decisión de compra y que determina la calidad del servicio, el peso de la marca y las expectativas de lo
                que el cliente va a recibir. El <b>valor</b> es una apreciación subjetiva de cada consumidor para
                conocer profundamente las necesidades y deseos. Estos definen el valor a través de cinco beneficios: 1.
                Utilidad de forma: es lo que desean. 2. Utilidad de tiempo: es cuándo lo desean. 3. Utilidad de lugar:
                es dónde lo desean. 4. Utilidad de posesión: es la potestad de comprarlo y 5. Utilidad de información:
                es la sensación de que es lo mejor para ellos.
              </p>
              <p>
                <strong>Responda “verdadera o “falsa” a la siguiente afirmación:</strong> <br />
                La satisfacción del cliente se logra entendiendo sus necesidades y comportamientos.
              </p>

              <div className="u-d-flex u-gap-4 u-justify-center">
                <TrueFalseActivity.Option
                  id="3-1"
                  state="success"
                  label="Verdadero"
                  name="option-3"
                  addClass={css['true-false__option']}
                />
                <TrueFalseActivity.Option
                  id="3-2"
                  state="wrong"
                  label="Falso"
                  name="option-3"
                  addClass={css['true-false__option']}
                />
              </div>
            </Col>
            <Col xs="12" mm="8" md="5" lg="5" hd="3" addClass="u-d-flex u-justify-between">
              <TrueFalseActivity.Button>
                <Button variant="check" label="Comprobar" />
              </TrueFalseActivity.Button>

              <TrueFalseActivity.Button type="reset">
                <Button onClick={notifyReset} label="Reintentar" variant="reset" addClass="js-modal-wrong" />
              </TrueFalseActivity.Button>
            </Col>
          </TrueFalseActivity>
        </Row>

        {Modal}

        <ToastFeedback
          type="success"
          isOpen={isOpen === MODALS.QUESTION_3_SUCCESS}
          onClose={closeModal}
          audio="assets/audios/aud_ova-45_ad3_sld-17_2 (Correcto).mp3"
          interpreter={{ contentURL: 'vid_int_ova-03_sld-17_2_correcto.mp4' }}>
          <p className="u-text-justify">
            ¡Muy bien! La opción elegida es correcta, porque las empresas deben mantener una evaluación constante del
            consumidor a través de la investigación de mercado y programas de gestión de relaciones con el cliente,
            compartiendo y coordinando la información de este para su uso en la planificación estratégica.
          </p>
        </ToastFeedback>
        <ToastFeedback
          type="wrong"
          isOpen={isOpen === MODALS.QUESTION_3_WRONG}
          onClose={closeModal}
          audio="assets/audios/aud_ova-45_ad3_sld-17_2 (Incorrecto).mp3"
          interpreter={{ contentURL: 'vid_int_ova-03_sld-17_2_incorrecto.mp4' }}>
          <p className="u-text-justify">
            ¡Intenta nuevamente! La opción elegida no es correcta, puesto que si la empresa logra entender las
            necesidades y comportamiento de los clientes, entonces podrá diseñar productos y servicios que generen un
            valor percibido superior al costo percibido frente a las necesidades o problemas, representando una ventaja
            competitiva.
          </p>
        </ToastFeedback>
      </Panel.Section>
    </Panel>
  );
};
export default Ova75P04;
