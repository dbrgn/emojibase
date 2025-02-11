import { PermutationOptions } from './generateEmoticonPermutations';
import { Presentation, Gender, SkinTone, SkinToneKey, GroupKey } from './types';

export const SEQUENCE_REMOVAL_PATTERN = /200D|FE0E|FE0F/g;

// Use numbers instead of string values, as the filesize is greatly reduced.

export const TEXT: Presentation = 0;
export const EMOJI: Presentation = 1;

export const FEMALE: Gender = 0;
export const MALE: Gender = 1;

export const LIGHT_SKIN: SkinTone = 1;
export const MEDIUM_LIGHT_SKIN: SkinTone = 2;
export const MEDIUM_SKIN: SkinTone = 3;
export const MEDIUM_DARK_SKIN: SkinTone = 4;
export const DARK_SKIN: SkinTone = 5;

export const GROUP_KEY_SMILEYS_EMOTION: GroupKey = 'smileys-emotion';
export const GROUP_KEY_PEOPLE_BODY: GroupKey = 'people-body';
export const GROUP_KEY_ANIMALS_NATURE: GroupKey = 'animals-nature';
export const GROUP_KEY_FOOD_DRINK: GroupKey = 'food-drink';
export const GROUP_KEY_TRAVEL_PLACES: GroupKey = 'travel-places';
export const GROUP_KEY_ACTIVITIES: GroupKey = 'activities';
export const GROUP_KEY_OBJECTS: GroupKey = 'objects';
export const GROUP_KEY_SYMBOLS: GroupKey = 'symbols';
export const GROUP_KEY_FLAGS: GroupKey = 'flags';
export const GROUP_KEY_COMPONENT: GroupKey = 'component';

export const SKIN_KEY_LIGHT: SkinToneKey = 'light';
export const SKIN_KEY_MEDIUM_LIGHT: SkinToneKey = 'medium-light';
export const SKIN_KEY_MEDIUM: SkinToneKey = 'medium';
export const SKIN_KEY_MEDIUM_DARK: SkinToneKey = 'medium-dark';
export const SKIN_KEY_DARK: SkinToneKey = 'dark';

// Important release versions and locales in generating accurate data.

export const LATEST_EMOJI_VERSION = '12.1';
export const LATEST_UNICODE_VERSION = '12.1.0';
export const LATEST_CLDR_VERSION = '36';
export const FIRST_UNICODE_EMOJI_VERSION = '6.0.0';
export const EMOJI_VERSIONS = ['1.0', '2.0', '3.0', '4.0', '5.0', '11.0', '12.0', '12.1'];

export const SUPPORTED_LOCALES = [
  'da', // Danish
  'de', // German
  'en', // English
  'en-gb', // English (Great Britain)
  'es', // Spanish
  'es-mx', // Spanish (Mexico)
  'fr', // French
  'it', // Italian
  'ja', // Japanese
  'ko', // Korean
  'ms', // Malay
  'nl', // Dutch
  'pl', // Polish
  'pt', // Portuguese
  'ru', // Russian
  'sv', // Swedish
  'th', // Thai
  'zh', // Chinese
  'zh-hant', // Chinese (Traditional)
];

// Special options for emoticon permutations.

export const EMOTICON_OPTIONS: { [emoticon: string]: PermutationOptions } = {
  // 🧙‍♂️ man mage
  ':{>': { withNose: false },
  // 💔 broken heart
  '</3': { isFace: false },
  // ❤️ red heart
  '<3': { isFace: false },
  // 🤘 sign of the horns
  '\\m/': { isFace: false },
  // 👹 ogre
  '0)': { withNose: false },
};
