/**
 * Given 'LOCALES' array, define function 'createLocalesSettings' to return an object with locales settings.
 *
 * Expected:
 * {
 *  "EN": {id: 0, enabled: true},
 *  "GR": {id: 1, enabled: false},
 *  "FR": {id: 2, enabled: false},
 *  "IT": {id: 3, enabled: false},
 *  "PT": {id: 4, enabled: false},
 * }
 */

const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

export const createLocalesSettings = (locales) => {
  return locales.reduce((settings, locale, index) => {
    settings[locale] = { id: index, enabled: index === 0 };
    return settings;
  }, {});
};
