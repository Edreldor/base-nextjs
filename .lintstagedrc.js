module.exports = {
  // Type check Typescript files
  // '**/*.{ts|tsx}': () => 'yarn tsc --noEmit',

  // Lint then format Typescript and Javascript files
  '**/*.{js,jsx,ts,tsx}': (filenames) => [
    `yarn next lint --fix --file ${filenames.join(' --file ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown, JSON and HTML files
  '**/*.{md,json,html}': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
};
