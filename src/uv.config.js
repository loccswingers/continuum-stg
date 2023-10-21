/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/conti.handler.js',
    client: '/conti.client.js',
    bundle: '/conti.bundle.js',
    config: '/conti.config.js',
    sw: '/conti.sw.js',
};
