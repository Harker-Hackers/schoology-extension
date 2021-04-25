# Harker Schoology Extension

Website: [https://harker-hackers.github.io/schoology-extension](https://harker-hackers.github.io/schoology-extension).

## Developing

#### Extension files

These files are directly part of the installed chrome extension.

-   `pdfview.js` changes `/course/*/materials/gp/*` to use chrome's PDF viewer.
-   `pdfHeaderRemover.js` changes Schoology-hosted PDF's headers and mimetypes.
-   `manifest.json` contains the configuration, permissions, and scripts of the extension.
-   `main.js` applies to all schoology routes.
-   `lunch.js` retrieves and displayes the lunch PDF at `/lunch`.
-   `jQuery.js` is the [jquery library](https://jquery.com).
-   `chart.js` is the [chart.js library](https://jquery.com/).
-   `background.js` is the background script of this extenison.
-   `popup/*` are the popup files of this extension, activated when clicking the extension.

#### Download server

These files make up the [download server](http://schoology-extension.herokuapp.com/), where users download the ZIP from.

-   `download/main.py` is the main flask server.
-   `download/Procfile` contains Heroku deployment instructions.
-   `download/requirements.txt` contains the pip requierements.

#### NPM

These files contain dependencies and more. They don't directly affect the extension.

-   `package.json` contains NPM dependencies and scripts.
-   `package-lock.json` contains the versions of the NPM packages.

#### Website

These files and directories are the [website](https://harker-hackers.github.io/schoology-extension)'s source files

-   `docs/index.md` is the text body of the website, which is converted to HTML on build.
-   `docs/favicon.ico` is the favicon of the site.
-   `docs/_config.yml` is the Github Pages configuration.
-   `docs/images/*` have the images (including GIFs) that are in the website.

#### Continous Integration

These files make up the continious integration of the repository.

-   `.github/workflows/format-code.yml` beautifies code on PRs.
-   `.github/workflows/verify-images.yml` checks for corrupted images in the repo on image changes.
-   `.github/workflows/verify-manifest.yml` verifies that the `manifest.json`'s file paths exist on manifest changes.
-   `.github/workflows/verify-versions.yml` checks that the latest GitHub release matches the manifest's version.
-   `.github/file-exists.py` is executed in "Verify manifest" action to check if files exist.
-   `.github/versions.py` is executed in "Verify versions" action to verify versions.
-   `.github/requirements.txt` have the python requierements for CI.
-   `.prettierrc` contains the configuration for "Format code" action.
-   `.prettierignore` contains the files to be ingored in "Format code" action.

#### Git

These files are configuration for git.

-   `.gitignore` contains the files not to be checked in.
-   `.gitattributes` tell's GitHub which files should be taken into account in the linguist.

#### Visual Studio

These files contain vscode enviroment recommendations.

-   `.vscode/extensions.json` has the recommended vscode extensions.
