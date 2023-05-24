## On a Physical Machine / In a Virtual Machine

When using either physical Linux machine or virtual Linux machines
(VirtualBox or WSL2), you must clone the FunKey OS repository from
Github (here we place it into a `FunKey-OS` directory):

```bash
$ git clone https://github.com/DrUm78/FunKey-OS
```

Then enter into the newly created directory:

```bash
$ cd FunKey-OS
```
## In a Docker Container

When using a Docker container, you must first create a new directory
(here we create a `FunKey-OS` directory) and get the FunKey-OS
[Dockerfile][1] in it:

```bash
$ mkdir FunKey-OS
$ cd FunKey-OS
$ wget https://raw.githubusercontent.com/DrUm78/FunKey-OS/master/docker/Dockerfile -o Dockerfile
```

You must then build the docker image (don't forget the final dot!):

```bash
$ docker build -t funkeyproject/funkey-os .
```

[1]: https://github.com/DrUm78/FunKey-OS/blob/master/docker/Dockerfile

--8<--
includes/glossary.md
--8<--
