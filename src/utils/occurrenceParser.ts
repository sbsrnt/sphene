import { camelCase, toLower } from 'lodash';

import { occurrences } from '../constants/occurrences';

export const occurrenceParser = (occurrence: string) =>
  occurrences.find((o) => toLower(camelCase(o.label)) === toLower(camelCase(occurrence)));
