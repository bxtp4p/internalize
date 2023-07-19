# Overview

Internalize is a simple script to convert all private repos to internal. 

Built using GitHub Copilot.

## Usage

First run `npm install` to install dependencies.

Then, to use:

```bash
$ node internalize.js <organization> <token>
```

### Parameters

- `organization` - The name of the organization
- `token` - Administrator GitHub token with `repo` scope for all repos in the organization.

## Example

```bash
$ node internalize.js octodemo my-token
```
