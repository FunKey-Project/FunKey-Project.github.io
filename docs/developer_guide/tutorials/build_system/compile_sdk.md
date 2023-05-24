Starting from version 2.0.0, the pre-compiled FunKey SDK is available
on [Github][1], and it is also compiled automatically as a first step
when building the [full FunKey-OS distribution][2].

However, if you want to compile the SDK only, here are the
instructions below:

## On a Physical Machine / In a Virtual Machine

You may now build the SDK with:

```bash
$ make sdk
```

This may take a while (~1h), so consider getting yourself
a cup, a glass or a bottle of your favorite beverage ;-)

<ins>Note</ins>: you will need to have access to the network, since
buildroot will download the package sources.

After building, you should obtain the SDK file
`FunKey-sdk-X.Y.Z.tar.gz` in the `images` directory.

## In a Docker Container

You may now build your FunKey with:
```bash
$ docker run --name funkey-os funkeyproject/funkey-os make sdk -C /home/funkey/FunKey-OS
```

Or alternatively, you can run it in the background with:
```bash
$ docker run -d --name funkey-os funkeyproject/funkey-os make sdk -C /home/funkey/FunKey-OS
```

If you launch it in the background, you can still follow what is going on with either:
```bash
$ docker top funkey-os
```
Or:

```bash
$ docker logs funkey-os
```

This may take a while (~1h), so consider getting yourself a cup, a
glass or a bottle of your favorite beverage ;-)

<ins>Note</ins>: you will need to have access to the network, since
buildroot will download the package sources.

After building, you can copy the SDK file `FunKey-sdk-X.Y.tar.gz` from
the container into the host current directory:

```bash
$ mkdir images
$ docker cp funkey-os:/home/funkey/FunKey-OS/images/FunKey-sdk-X.Y.Z.tar.gz images/
```

[1]: https://github.com/DrUm78/FunKey-OS/releases/
[2]: ../compile_distribution

--8<--
includes/glossary.md
--8<--
