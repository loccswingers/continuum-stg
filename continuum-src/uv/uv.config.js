/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/continuum-src/uv/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/continuum-src/uv.handler.js',
    client: '/continuum-src/uv.client.js',
    bundle: '/continuum-src/uv.bundle.js',
    config: '/continuum-src/uv.config.js',
    sw: '/continuum-src/uv.sw.js',
};
