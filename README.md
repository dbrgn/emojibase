# emoji-database
[![Build Status](https://travis-ci.org/milesj/emoji-database.svg?branch=master)](https://travis-ci.org/milesj/emoji-database)

A collection of up-to-date, pre-generated, specification compliant, emoji datasets and
regex patterns. Data is generated with [unicode-emoji-data][unicode-emoji-data],
[unicode-emoji-annotations][unicode-emoji-annotations] and [emojione][emojione] packages,
for increased accuracy and customizability.

## Installation

```
npm install emoji-database --save
// Or
yarn add emoji-database
```

## Usage

Simply import the JSON files and use them!

```javascript
import json from 'emoji-database/data/extra/shortname-to-unicode.json';

const data = JSON.parse(json);
```

> Imports will need to be parsed with JSON unless otherwise configured by a build process.

## Documentation

* [Datasets](#datasets)
  * [Structure](#structure)
  * [Formats](#formats)
* [Regex Patterns](#regex-patterns)
  * [Unicode](#unicode)
* [Filesizes](#filesizes)

### Datasets

Emoji's are generated into files called datasets. Each file is customized to provide
a subset of data in a specific format. This provides multiple options, so choose the best dataset
for your application.

* `data/<format>/list.json` - A list of emoji objects in the specified format.
* `data/<format>/map.json` - A map of `hexcode`s to emoji objects in the specified format.
* `data/<format>/by-category.json` - A list of emoji objects in the specified format, grouped by
  their `category`.

> Replace `<format>` with the format of your choosing.

```javascript
import emoji from 'emoji-database/data/compact/list.json';
```

For more specialized and granular use cases (like reduced filesizes),
the following extra datasets are also available.

* `data/extra/unicode.json` - A list of emoji `unicode` characters.
* `data/extra/hexcodes.json` - A list of emoji `hexcode` characters.
* `data/extra/hexcode-to-shortname.json` - A map of `hexcode`s to `shortname`s.
* `data/extra/shortnames.json` - A list of emoji shortnames.
* `data/extra/shortname-to-unicode.json` - A map of `shortname`s to `unicode` characters.

```javascript
import hexcodes from 'emoji-database/data/extra/hexcodes.json';
```

#### Structure

Emoji object's within a dataset are composed of the following properties.

* `name` (string) - The name of the emoji character.
* `emoji` (string) - The emoji presentation unicode character.
* `text` (string) - The text presentation unicode character.
* `unicode` (string) - The emoji or text unicode character depending on `display`.
  *Only available in non-expanded formats.*
* `hexcode` (string) - The hexadecimal representation of the unicode character,
  separated by dashes. *Does not include zero-width-joiner or variation selectors.*
* `codepoint` (number[]) - An array of code points, parsed from the `hexcode` property.
* `display` (string) - The default presentation of the emoji character, either "emoji" or "text".
* `skin` (number) - If applicable, the skin tone, between 1 and 5.
  *Only exists for emojis that support skin tones.*
* `gender` (string) - If applicable, the gender of the emoji, either "male" or "female".
  *Only exists for emojis that support genders.*

The following are provided by [EmojiOne][emojione] or automatically generated.

* `order` (number) - The sort order of all emoji characters.
* `category` (string) - The category the emoji character is grouped under.
* `shortnames` (string[]) - Short word representations of the emoji character.
  *Does not include surrounding colons.*
* `tags` (string[]) - Tags relevant to the emoji character.

> Properties with null values are omitted from the generated dataset.

#### Formats

Datasets are grouped into 3 different formats, with each composed of a subset of properties.

* `compact` - Includes the `unicode`, `hexcode`, and `shortname` properties.
* `standard` - Includes the `unicode`, `hexcode`, `shortname`, `codepoint`, and `name` properties.
* `expanded` - Includes all properties mentioned above.

### Regex Patterns

To match emojis and shortnames within a string, multiple regex patterns are available for import.
All imports return a `RegExp` object, with no flags, and no outer capture group.

* `index` - Matches both emoji and text presentation characters.
* `emoji` - Matches emoji presentation characters.
* `text` - Matches text presentation characters.
* `shortname` - Matches emoji shortnames.

```javascript
import EMOJI_REGEX from 'emoji-database/regex';
import SHORTNAME_REGEX from 'emoji-database/regex/shortname';

'🦍'.match(EMOJI_REGEX); // Matches Harambe!
```

To compose new regex patterns, simply use the `source` property.

```javascript
const EMOJI_SHORTNAME_REGEX = new RegExp(`^${EMOJI_REGEX.source}|${SHORTNAME_REGEX.source}$`, 'g');
```

> The `u` (unicode) and `g` (global) flags are not required when using these patterns.

#### Unicode

By default, regex patterns are generated into UCS-2 surrogate pairs. If desired, ES2015+
unicode aware regex patterns can be used, which can be found in the `regex/es` directory.

```javascript
import UNICODE_EMOJI_REGEX from 'emoji-database/regex/es';
import SHORTNAME_REGEX from 'emoji-database/regex/shortname';
```

> The unicode aware regex patterns are only supported in Node.js and modern browsers.

### Filesizes

The filesizes of all datasets and regex patterns can be found below, in ascending order.

| File | Filesize | Gzipped |
| --- | --- | --- |
| regex/shortname.js | 30 B | 50 B |
| regex/text.js | 1.11 KB | 476 B |
| regex/es/text.js | 1.28 KB | 492 B |
| regex/emoji.js | 5.75 KB | 1.47 KB |
| regex/index.js | 5.77 KB | 1.48 KB |
| regex/es/emoji.js | 6.37 KB | 1.5 KB |
| regex/es/index.js | 6.38 KB | 1.51 KB |
| data/extra/unicode.json | 26.63 KB | 6.4 KB |
| data/extra/hexcodes.json | 28.63 KB | 5.85 KB |
| data/extra/shortnames.json | 38.26 KB | 9.16 KB |
| data/extra/shortname-to-unicode.json | 64.89 KB | 15.72 KB |
| data/extra/hexcode-to-shortname.json | 66.9 KB | 15.55 KB |
| data/compact/map.json | 149.52 KB | 24.29 KB |
| data/compact/list.json | 172.85 KB | 24.02 KB |
| data/compact/by-category.json | 172.95 KB | 24.07 KB |
| data/standard/map.json | 317.57 KB | 45.19 KB |
| data/standard/list.json | 340.9 KB | 45.65 KB |
| data/standard/by-category.json | 341 KB | 45.64 KB |
| data/expanded/by-category.json | 553.12 KB | 73.12 KB |
| data/expanded/map.json | 576.93 KB | 74.43 KB |
| data/expanded/list.json | 600.26 KB | 74.03 KB |

[emojione]: https://github.com/Ranks/emojione
[unicode-emoji-data]: https://github.com/dematerializer/unicode-emoji-data
[unicode-emoji-annotations]: https://github.com/dematerializer/unicode-emoji-annotations
