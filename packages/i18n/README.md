# `@vakansia/i18n` package

This package contains the internationalization (i18n) configuration and translations for the project. It does not use any external i18n library to be abstract. So this package can be used in `next.js`, `server`, `expo` apps with just extending with their own related `i18n` libraries or even without any library at all.

## Structure

### `src/config.ts`

This file contains the configuration for the i18n library. It exports the `FALLBACK_LOCALE`, `LOCALES`, `LANGUAGES` constants and the `Locale` type. All applications should follow the same supported locales.

### `src/utils.ts`

This file contains the utility functions for the i18n library. It exports the `isLocale`, `getLocale`, `getMessages` functions.

### `src/messages`

This directory contains the translations for the project. It contains the `en`, `az` files that export the translations for the project. It can be extended with more locales by adding more files with the same structure.

