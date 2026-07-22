# Shelterluv Design System for Tailwind CSS

This package adds [Shelterluv Design System](https://www.figma.com/proto/YOEU6z7434jdxUBGTEI3B8/Shelterluv-Design-System) colors and typography to the Tailwind CSS theme.

When using this package, you can use palette classes like `bg-sl-green-600`, as well as semantic status colors that map to Shelterluv concepts — for example `bg-sl-adopted-500`, `text-sl-denied-500`, or `bg-sl-pending-review-100`.

Check out [theme.css](./theme.css) for a complete list of colors.

## Installation

This package is published to GitHub Packages. First, point the `@shelterluv` scope at the GitHub registry in your project's `.npmrc`:

```ini
@shelterluv:registry=https://npm.pkg.github.com
```

GitHub Packages requires authentication even for installs, so you'll also need a token with `read:packages` scope available (e.g. `//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}` in your `.npmrc`).

Then install the package:

```bash
npm install -D @shelterluv/tailwind-sl-theme
```

### Tailwind CSS v3

Edit your `tailwind.config.js` and install the plugin:

```js
module.exports = {
  // ...

  plugins: [
    // ...

    require('@shelterluv/tailwind-sl-theme'),
  ],
};
```

> **Note:** if you installed via the git URL (`npm add -D github:shelterluv/tailwind-sl-theme`) instead of the registry, the package resolves under its repo name — use `require('tailwind-sl-theme')`.

### Tailwind CSS v4

Tailwind CSS v4 uses a CSS-first approach — no plugin needed. Import the theme into your main CSS entry point:

```css
@import "tailwindcss";
@import "@shelterluv/tailwind-sl-theme/v4";
```

This will automatically add the SL design system colors to your `@theme` block, and load the DM Sans font (see below).

## Typography

The theme includes the [DM Sans](https://fonts.google.com/specimen/DM+Sans) font family, exposed as a `font-sl-dm-sans` utility (the prefix follows your `prefix` option in v3). The font files ship with this package via [`@fontsource/dm-sans`](https://fontsource.org/fonts/dm-sans) (weights 400, 500, 600, 700) — no Google Fonts request, no separate install.

**Tailwind v4:** nothing to do — `@import "@shelterluv/tailwind-sl-theme/v4"` already loads the font faces.

**Tailwind v3:** the plugin registers the `font-sl-dm-sans` utility, but Tailwind plugins can't load font files, so add one import to your CSS entry point:

```css
@import "@shelterluv/tailwind-sl-theme/font";
```

Example usage (the "Label/Medium" style from the design system):

```html
<span class="font-sl-dm-sans text-base font-bold">Adopted</span>
```

## Prefix Customization

By default, this plugin will prefix its utilities with `sl` — colors (e.g., `bg-sl-green-600` or `text-sl-blue-400`) and fonts (e.g., `font-sl-dm-sans`).

You can customize the prefix by passing in a configuration object when installing the plugin:

```js
require('@shelterluv/tailwind-sl-theme')({ prefix: 'shelterluv' })
```

This will result in utilities like `bg-shelterluv-green-600`, `text-shelterluv-blue-400`, and `font-shelterluv-dm-sans`.

> **Note:** prefix customization is only available in the Tailwind v3 plugin. The v4 `theme.css` uses the `sl` prefix.

## Versioning & Publishing

For maintainers:

1. Bump the `version` field in `package.json` (follow [semver](https://semver.org/): patch for fixes, minor for new tokens/utilities, major for renames or removals — renaming or removing a token is a breaking change for consumers).
2. Commit, tag, and push:

   ```bash
   git tag v1.1.0 && git push origin main --tags
   ```

3. Publish — `publishConfig` in `package.json` already routes the `@shelterluv` scope to GitHub Packages:

   ```bash
   npm publish
   ```

   You'll need a token with `write:packages` scope for the Shelterluv org.
