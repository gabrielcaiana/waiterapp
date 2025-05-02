export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'declaration-colon-space-after': null,
    'max-empty-lines': 2,
    indentation: 2,
    'at-rule-no-unknown': null,
    'no-empty-source': null,
  },
};
