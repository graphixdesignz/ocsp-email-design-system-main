# HP Email development

This is a working directory for HTML module development.

## What's in here?

-   `modules` contains HTML files with a single module, usually with one or more additional variations. Each module is in a named folder, with `index.html` and a `README.md` - the `README.md` file should, at the very least, have a link to Litmus previews.
-   `recipes` are completed email templates using several modules. These are organized just like modules, with an `index.html` file and a `README.md` file.
-   `templates` contains the master layout template as well as various experiments and tests.

## Source of Truth

The email preview site should be considered the Source of Truth™ for all module and recipe HTML.

https://thesis-hp-email-system.netlify.app/

Ideally, any changes to the site will be back-replicated here. If you are looking for current HTML for a given modlue or recipe, always choose the recipe first.

## Master layout

Under the `templates` directory, find `layout/index.html`.

Any new modules should be developed within this layout.

Tests, prototypes, or experiments should also use the master layout template, just to ensure consistency.
