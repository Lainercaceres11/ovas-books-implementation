import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': importSort,
      'unused-imports': unusedImports
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports'
        }
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. React y Bibliotecas externas (node_modules)
            ['^react', '^@?\\w'],
          
            // 2. Aliases internos (@shared, @/, @pages, etc)
            ['^@shared', '^@/', '^@pages', '^@router', '^@styles'],
            
            // 3. Imports relativos parent (..)
            ['^\\.\\.'],
            
            // 4. Imports relativos mismo nivel (.)
            ['^\\./'],
            
            // 5. Tipos
            ['^.+\\.types$', '^.*type'],
            
            // 6. Estilos (siempre último)
            ['^.+\\.(css|scss|sass|less)$']
          ]
        }
      ],
      'simple-import-sort/exports': 'error'
    },
  },
)
