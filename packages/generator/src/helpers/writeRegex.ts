import path from 'path';
import log from './log';
import writeFile from './writeFile';

const REGEX_FOLDER = path.resolve(__dirname, '../../../regex');

export default function writeRegex(
  name: string,
  pattern: RegExp | string,
  flags: string = '',
): Promise<string> {
  log.info('regex', `Creating ${name} regex pattern`);

  return writeFile(REGEX_FOLDER, name, `module.exports = /${pattern}/${flags};\n`);
}
