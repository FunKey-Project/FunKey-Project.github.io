This repository contains the FunKey Project documentation project.

The
"[source](https://github.com/FunKey-Project/FunKey-Project.github.io/tree/source)"
branch contains the source documents; they are processed by MkDocs to
generate the resulting static site in the
"[master](https://github.com/FunKey-Project/FunKey-Project.github.io/tree/master)"
branch that is accessible through Github Pages at
https://funkey-project.github.io/FunKey-Project.github.io/

## Local Build

In order to build le documentation locally, you need to have a Python
3.x installed on your machine.

You will need to isntall the mkdocs-material package and some required
plugins using the following command

```pip install mkdocs-material mkdocs-minify-plugin mkdocs-section-index mkdocs-exclude mkdocs-redirects```

On Unix machines, you will probably need to install it as root user, using:

```sudo pip install mkdocs-material mkdocs-minify-plugin mkdocs-section-index mkdocs-exclude mkdocs-redirects```

## Local Tests

You can launch a local test server that will track all source file
changes and generate a static site on the fly using the following command:

```mkdocs serve```

The test server is then accessible at:

http://localhost:8000/
