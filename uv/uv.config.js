self.__uv$config = {
    prefix: '/service/',
    bare: ['https://geoquiz.gq/bare/', 'https://uv.holyubofficial.net/bare3/', 'https://uv.holyubofficial.net/bare2/'],
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js'
};