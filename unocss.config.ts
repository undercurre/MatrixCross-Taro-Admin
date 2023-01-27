import presetWeapp from 'unocss-preset-weapp';
import {
    transformerAttributify,
    transformerClass,
} from 'unocss-preset-weapp/transformer';

export default {
    exclude: [
        'node_modules',
        '.git',
        '.husky',
        '.vscode',
        'dist',
        'public',
        'build',
        'mock',
        './stats.html',
    ],
    presets: [
        presetWeapp({
            isH5: process.env.TARO_ENV === 'h5',
            platform: 'taro',
            // 通过设置 taroWebpack 版本，指定 rem 策略
            // webpack4 webpack5
            taroWebpack: 'webpack5',
        }),
    ],
    shortcuts: {
        'wh-full': 'w-full h-full',
        'flex-center': 'flex justify-center items-center',
        'flex-col-center': 'flex-center flex-col',
        'flex-x-center': 'flex justify-center',
        'flex-y-center': 'flex items-center',
        'i-flex-center': 'inline-flex justify-center items-center',
        'i-flex-x-center': 'inline-flex justify-center',
        'i-flex-y-center': 'inline-flex items-center',
        'b-flex-col': 'flex flex-col',
        'flex-col-stretch': 'b-flex-col items-stretch',
        'i-flex-col': 'inline-flex flex-col',
        'i-flex-col-stretch': 'i-flex-col items-stretch',
        'flex-1-hidden': 'flex-1 overflow-hidden',
        'absolute-lt': 'absolute left-0 top-0',
        'absolute-lb': 'absolute left-0 bottom-0',
        'absolute-rt': 'absolute right-0 top-0',
        'absolute-rb': 'absolute right-0 bottom-0',
        'absolute-tl': 'absolute-lt',
        'absolute-tr': 'absolute-rt',
        'absolute-bl': 'absolute-lb',
        'absolute-br': 'absolute-rb',
        'absolute-center': 'absolute-lt flex-center wh-full',
        'fixed-lt': 'fixed left-0 top-0',
        'fixed-lb': 'fixed left-0 bottom-0',
        'fixed-rt': 'fixed right-0 top-0',
        'fixed-rb': 'fixed right-0 bottom-0',
        'fixed-tl': 'fixed-lt',
        'fixed-tr': 'fixed-rt',
        'fixed-bl': 'fixed-lb',
        'fixed-br': 'fixed-rb',
        'fixed-center': 'fixed left-0 top-0 flex-center wh-full',
        'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
        'ellipsis-text': 'nowrap-hidden text-ellipsis',
        'transition-base': 'transition-all duration-300 ease-in-out',
    },
    theme: {
        colors: {
            primary: '#1890ff',
        },
    },
    transformers: [
        transformerAttributify(),
        // options https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
        transformerClass(),
    ],
};
