## On a Physical Machine / In a Virtual Machine

You may now build your FunKey with:

```bash
$ make
```
This may take a while (~30 minutes), so consider getting yourself
a cup, a glass or a bottle of your favorite beverage ;-)

<ins>Note</ins>: you will need to have access to the network, since
buildroot will download the package sources.

After building, you should obtain the SD Card image
`FunKey-sdcard-X.Y.Z.img`, the SDK file `FunKey-sdk-X.Y.Z.tar.gz` and
the firmware update file `FunKey-rootfs-X.Y.fwu` in the `images`
directory.

## In a Docker Container

You may now build your FunKey with:

```bash
$ docker run --name funkey-os funkeyproject/funkey-os
```

Or alternatively, you can run it in the background with:

```bash
$ docker run -d --name funkey-os funkeyproject/funkey-os
```

If you launch it in the background, you can still follow what is going
on with either:

```bash
$ docker top funkey-os
```
Or:

```bash
$ docker logs funkey-os
```

This may take a while (~1h30), so consider getting yourself a cup, a
glass or a bottle of your favorite beverage ;-)

<ins>Note</ins>: you will need to have access to the network, since
buildroot will download the package sources.

After building, you can copy the SD Card image `sdcard.img`, the SDK
file `FunKey-sdk-X.Y.tar.gz` and the firmware update file
`FunKey-rootfs-X.Y.fwu` from the container into the host current
directory:

```bash
$ mkdir images
$ docker cp funkey-os:/home/funkey/FunKey-OS/images/FunKey-sdcard-X.Y.Z.img images/
$ docker cp funkey-os:/home/funkey/FunKey-OS/images/FunKey-sdk-X.Y.Z.tar.gz images/
$ docker cp funkey-os:/home/funkey/FunKey-OS/images/FunKey-rootfs-X.Y.Z.fwu images/
```

--8<--
includes/glossary.md
--8<--
