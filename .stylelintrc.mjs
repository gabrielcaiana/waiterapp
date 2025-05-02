export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null,
    'no-empty-source': null,
  },
};
