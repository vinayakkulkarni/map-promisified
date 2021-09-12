# map-promisified 🖖

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/map-promisified/ci?logo=github-actions)](https://github.com/vinayakkulkarni/map-promisified/actions/workflows/ci.yml)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/map-promisified/Ship%20js%20trigger?label=⛴%20Ship.js%20trigger)](https://github.com/vinayakkulkarni/map-promisified/actions/workflows/shipjs-trigger.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vinayakkulkarni/map-promisified?sort=semver&logo=github)](https://github.com/vinayakkulkarni/map-promisified/releases)
[![npm](https://img.shields.io/npm/v/@vinayakkulkarni/map-promisified?logo=npm)](https://www.npmjs.com/package/map-promisified)
[![npm](https://img.shields.io/npm/dm/@vinayakkulkarni/map-promisified?logo=npm)](http://npm-stat.com/charts.html?package=map-promisified)
[![npm bundle size (version)](https://img.shields.io/bundlephobia/min/@vinayakkulkarni/map-promisified/latest)](https://bundlephobia.com/package/map-promisified@latest)
[![npm type definitions](https://img.shields.io/npm/types/@vinayakkulkarni/map-promisified)](https://github.com/vinayakkulkarni/map-promisified/blob/master/package.json)
[![DeepScan grade](https://deepscan.io/api/teams/9055/projects/18563/branches/457764/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9055&pid=18563&bid=457764)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/vinayakkulkarni/map-promisified)](https://snyk.io/test/github/vinayakkulkarni/map-promisified)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/vinayakkulkarni/map-promisified?logo=lgtm)](https://lgtm.com/projects/g/vinayakkulkarni/map-promisified/alerts/)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/vinayakkulkarni/map-promisified?logo=lgtm)](https://lgtm.com/projects/g/vinayakkulkarni/map-promisified/context:javascript)
[![GitHub contributors](https://img.shields.io/github/contributors/vinayakkulkarni/map-promisified)](https://github.com/vinayakkulkarni/map-promisified/graphs/contributors)

[![eslint](https://img.shields.io/npm/dependency-version/map-promisified/dev/eslint?logo=eslint)](https://eslint.org/)
[![prettier](https://img.shields.io/npm/dependency-version/map-promisified/dev/prettier?logo=prettier)](https://prettier.io/)
[![rollup](https://img.shields.io/npm/dependency-version/map-promisified/dev/rollup?logo=rollup.js)](https://rollupjs.org/guide/en/)
[![typescript](https://img.shields.io/npm/dependency-version/map-promisified/dev/typescript?logo=TypeScript)](https://www.typescriptlang.org/)

## Features

* Wrapper for Mapbox Gl JS library that gives nice Promise-based API to asynchronous map functions

## Table of Contents

- [map-promisified 🖖](#map-promisified-)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
    - [Installation](#installation)
    - [Build Setup](#build-setup)
  - [Usage:](#usage)
  - [Built with](#built-with)
  - [Contributing](#contributing)
  - [Author](#author)

## Requirements

* [mapbox-gl](https://docs.mapbox.com/mapbox-gl-js/api/) `^1.13.x`

### Installation

```sh
npm install --save map-promisified
npm install --save-dev @vue/composition-api
```

CDN: [UNPKG](https://unpkg.com/map-promisified/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/map-promisified/dist/) (available as `window.VOffline`)

### Build Setup

``` bash
# install dependencies
$ npm ci

# package the library
$ npm run build
```

## Usage:
```javascript
import promisify from 'map-promisified'
import Mapbox from 'mapbox-gl'

const map = new Mapbox.Map({
  // … map properties …
})

// promisify single method:
const flyToPromisified = promisify(map, 'flyTo')

async function flyToPosition () {
  const newPosition = await flyToPromisified([10, 20])
  console.log(newPosition)
  // ⇒ { bearing: 0
  //​      center: Object { lng: …, lat: … },
  //      pitch: 0,
  //      zoom: 9
  //    }
}

// promisify all async map methods:
const actions = promisify(map)

async function flyToPositionAction () {
  const newPosition = await actions.flyTo([10, 20])
  console.log(newPosition)
  // ⇒ { bearing: 0
  //​      center: Object { lng: …, lat: … },
  //      pitch: 0,
  //      zoom: 9
  //    }
}
```

Promisified methods:
  * setCenter
  * panBy
  * panTo
  * setZoom
  * zoomTo
  * zoomIn
  * zoomOut
  * setBearing
  * rotateTo
  * resetNorth
  * snapToNorth
  * setPitch
  * fitBounds
  * fitScreenCoordinates
  * jumpTo
  * easeTo
  * flyTo

## Built with

- [TypeScript](https://www.typescriptlang.org/)

## Contributing 

1. Fork it ( [https://github.com/vinayakkulkarni/map-promisified/fork](https://github.com/vinayakkulkarni/map-promisified/fork))
2. Create your feature branch (`git checkout -b feat/new-feature`)
3. Commit your changes (`git commit -Sam 'feat: add feature'`)
4. Push to the branch (`git push origin feat/new-feature`)
5. Create a new [Pull Request](https://github.com/vinayakkulkarni/map-promisified/compare)

_Note_: 
1. Please contribute using [Github Flow](https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_


## Author

**map-promisified** &copy; [Vinayak](https://vinayakkulkarni.dev), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/map-promisified/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)
