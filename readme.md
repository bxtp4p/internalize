# Overview

Internalize is a simple script to convert all private repos to internal. Built with GitHub Copilot.

## Usage

1. run `npm install` to install dependencies.
2. Set the following environment variables:
    - `ORGANIZATION` - The name of the organization
    - `TOKEN` - Administrator GitHub token with `repo` scope for all repos in the organization.
3. Run the script:

```bash
$ node internalize.js
```

## Containerized Usage

1. Build the image:

```bash
$ docker build -t internalize .
```

2. Run the image:

```bash
$ docker run -e ORGANIZATION=my-org TOKEN=my-token internalize
```
