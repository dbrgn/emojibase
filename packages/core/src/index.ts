/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import fetchFromCDN from './fetchFromCDN';
import flattenEmojiData from './flattenEmojiData';
import fromCodepointToUnicode from './fromCodepointToUnicode';
import fromHexcodeToCodepoint from './fromHexcodeToCodepoint';
import fromUnicodeToHexcode from './fromUnicodeToHexcode';
import generateEmoticonPermutations from './generateEmoticonPermutations';
import stripHexcode from './stripHexcode';

export * from './constants';

export {
  fetchFromCDN,
  flattenEmojiData,
  fromCodepointToUnicode,
  fromHexcodeToCodepoint,
  fromUnicodeToHexcode,
  generateEmoticonPermutations,
  stripHexcode,
};
