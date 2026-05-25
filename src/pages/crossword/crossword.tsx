type Answer = {
  word: string;
  array: string[];
  answer?: string;
  isReady: boolean;
};

type AnswersState = Record<string, Answer>;

import css from './crossword.module.css';

const COLOR_SUCCESS = '#96ca3f';
const COLOR_WRONG = '#d46153';
const DEFAULT_COLOR = 'gray';

interface Props {
  isChecked: Record<string, boolean>;
  validation: string[];
  words: AnswersState;
}

export const Crossword = ({ isChecked, validation, words }: Props) => {
  const setBackgroundColor = (position: number | number[]) => {
    if (!isChecked) return DEFAULT_COLOR;

    if (Array.isArray(position)) {
      return position.every((element) => validation[element] === 'right') ? COLOR_SUCCESS : COLOR_WRONG;
    }

    return validation[position] === 'right' ? COLOR_SUCCESS : COLOR_WRONG;
  };

  return (
    <svg
      id="svg-p20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1067 500">
      <defs>
        <style>
          {
            '.st2,.st3,.st4,.st5{isolation:isolate}.st3{font-weight:700}.st2{font-size:19px}.st3{font-size:26px}.st5{font-size:22px;font-weight:600}'
          }
        </style>
      </defs>
      <image className="st4" width={1067} height={500} xlinkHref="assets/images/fondo_crossword.webp" id="fondo" />

      <image
        className="st4"
        width={695}
        height={479}
        transform="translate(15 9)"
        xlinkHref="assets/images/crossword.webp"
        id="Capa_14"
      />

      <g
        id="question-1"
        className={
          setBackgroundColor(0) === COLOR_SUCCESS && words.question1?.isReady === true
            ? css['color-success']
            : setBackgroundColor(0) === COLOR_WRONG && words.question1?.isReady === true
              ? css['color-wrong']
              : css['color-normal']
        }>
        {words.question1?.isReady && <rect x={167.85 - 12} y={57.04 - 12} width="438" height="45" opacity={0.7} />}

        <text x="180.1" y="70.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question1?.array[0] || ' '}
        </text>

        <text x="220.1" y="70.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question1?.array[1] || ' '}
        </text>

        <text x="270.1" y="70.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question1?.array[2] || ' '}
        </text>

        <text x="320.1" y="70.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question1?.array[3] || ' '}
        </text>

        <text x="375.1" y="70.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question1?.array[4] || ' '}
        </text>

        <text x="420.1" y="70.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question1?.array[5] || ' '}
        </text>

        <text x="470.1" y="70.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question1?.array[6] || ' '}
        </text>

        <text x="520.1" y="70.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question1?.array[7] || ' '}
        </text>

        <text x="570.1" y="70.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question1?.array[8] || ' '}
        </text>
      </g>

      <g
        id="question-2"
        className={
          setBackgroundColor(1) === COLOR_SUCCESS && words.question2?.isReady === true
            ? css['color-success']
            : setBackgroundColor(1) === COLOR_WRONG && words.question2?.isReady === true
              ? css['color-wrong']
              : css['color-normal']
        }>
        {words.question2?.isReady && <rect x={360.85 - 12} y={55.04 - 12} width="55" height="390" opacity={0.7} />}
        <text x="375.1" y="72.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question2?.array[0] || ' '}
        </text>

        <text x="375.1" y="120.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question2?.array[1] || ''}
        </text>

        <text x="375.1" y="165.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question2?.array[2] || ' '}
        </text>

        <text x="375.1" y="215.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question2?.array[3] || ' '}
        </text>

        <text x="375.1" y="260.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question2?.array[4] || ' '}
        </text>

        <text x="375.1" y="310.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question2?.array[5] || ' '}
        </text>

        <text x="375.1" y="360.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question2?.array[6] || ' '}
        </text>

        <text x="375.1" y="410.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question2?.array[7] || ' '}
        </text>
      </g>

      <g
        id="question-3"
        className={
          setBackgroundColor(2) === COLOR_SUCCESS && words.question3?.isReady === true
            ? css['color-success']
            : setBackgroundColor(2) === COLOR_WRONG && words.question3?.isReady === true
              ? css['color-wrong']
              : css['color-normal']
        }>
        {words.question3?.isReady && <rect x={218.85 - 12} y={152.04 - 12} width="46" height="342" opacity={0.7} />}
        <text x="230.1" y="165.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question3?.array[0] || ' '}
        </text>

        <text x="230.1" y="215.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question3?.array[1] || ' '}
        </text>

        <text x="230.1" y="265.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question3?.array[2] || ' '}
        </text>

        <text x="230.1" y="315.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question3?.array[3] || ' '}
        </text>

        <text x="230.1" y="365.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question3?.array[4] || ' '}
        </text>

        <text x="230.1" y="410.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question3?.array[5] || ' '}
        </text>

        <text x="230.1" y="460.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question3?.array[6] || ' '}
        </text>
      </g>

      <g
        id="question-4"
        className={
          setBackgroundColor(3) === COLOR_SUCCESS && words.question4?.isReady === true
            ? css['color-success']
            : setBackgroundColor(3) === COLOR_WRONG && words.question4?.isReady === true
              ? css['color-wrong']
              : css['color-normal']
        }>
        {words.question4?.isReady && <rect x={315.85 - 12} y={200.04 - 12} width="196" height="47" opacity={0.7} />}
        <text x="327.1" y="215.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question4?.array[0] || ' '}
        </text>

        <text x="375.1" y="215.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question4?.array[1] || ' '}
        </text>

        <text x="425.1" y="215.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question4?.array[2] || ' '}
        </text>

        <text x="470.1" y="215.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question4?.array[3] || ' '}
        </text>
      </g>

      <g
        id="question-5"
        className={
          setBackgroundColor(4) === COLOR_SUCCESS && words.question5?.isReady === true
            ? css['color-success']
            : setBackgroundColor(4) === COLOR_WRONG && words.question5?.isReady === true
              ? css['color-wrong']
              : css['color-normal']
        }>
        {words.question5?.isReady && <rect x={217.85 - 12} y={395.04 - 12} width="340" height="47" opacity={0.7} />}
        <text x="231.1" y="408.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question5?.array[0] || ' '}
        </text>

        <text x="281.1" y="408.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question5?.array[1] || ' '}
        </text>

        <text x="331.1" y="408.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question5?.array[2] || ' '}
        </text>

        <text x="375.1" y="408.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question5?.array[3] || ' '}
        </text>

        <text x="431.1" y="408.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question5?.array[4] || ' '}
        </text>

        <text x="481.1" y="408.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question5?.array[5] || ' '}
        </text>

        <text x="531.1" y="408.6" textAnchor="middle" dominantBaseline="middle" fontSize="32" fill="black">
          {words.question5?.array[6] || ' '}
        </text>
      </g>

      <g id="NUMEROS">
        <g className="st4">
          <text className="st3" transform="translate(135.85 72.04)">
            <tspan x={0} y={0}>
              {'1'}
            </tspan>
          </text>
        </g>

        <g className="st4">
          <text className="st3" transform="translate(368.08 35.23)">
            <tspan x={0} y={0}>
              {'2'}
            </tspan>
          </text>
        </g>

        <g className="st4">
          <text className="st3" transform="translate(220.87 132.04)">
            <tspan x={0} y={0}>
              {'3'}
            </tspan>
          </text>
        </g>
        <g className="st4">
          <text className="st3" transform="translate(280.27 218.04)">
            <tspan x={0} y={0}>
              {'4'}
            </tspan>
          </text>
        </g>

        <g className="st4">
          <text className="st3" transform="translate(185.33 412.23)">
            <tspan x={0} y={0}>
              {'5'}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
};
