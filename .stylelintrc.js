module.exports = {
  extends: ['@sxwy/stylelint-config'],
  rules: {
    'no-empty-source': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'export']
      }
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['constant', 'v-bind']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin']
      }
    ]
  }
}
