declare const _default:
  | import('./src/.umi/core/pluginConfig').IConfigFromPlugins
  | {
      [x: string]: any;
      alias?:
        | false
        | {
            [key: string]: string;
          }
        | undefined;
      analyze?: false | object | undefined;
      autoprefixer?: false | object | undefined;
      base?: string | false | undefined;
      chainWebpack?:
        | false
        | ((
            memo: import('webpack-chain'),
            args: {
              type: 'ssr' | 'csr';
              webpack: typeof import('@umijs/deps/compiled/webpack');
              env: 'development' | 'production';
              createCSSRule: import('dumi').ICreateCSSRule;
            },
          ) => void)
        | undefined;
      chunks?: false | string[] | undefined;
      cssLoader?: false | object | undefined;
      cssModulesTypescriptLoader?:
        | false
        | {
            mode?: 'verify' | 'emit' | undefined;
          }
        | undefined;
      cssnano?: false | object | undefined;
      copy?: false | (string | import('dumi').ICopy)[] | undefined;
      define?:
        | false
        | {
            [key: string]: any;
          }
        | undefined;
      devServer?: false | import('@umijs/server').IServerOpts | undefined;
      devtool?:
        | import('@umijs/deps/compiled/webpack').Options.Devtool
        | undefined;
      dynamicImport?:
        | false
        | {
            loading?: string | undefined;
          }
        | undefined;
      dynamicImportSyntax?: false | {} | undefined;
      exportStatic?:
        | false
        | {
            htmlSuffix?: boolean | undefined;
            dynamicRoot?: boolean | undefined;
            extraRoutePaths?: (() => Promise<string[]>) | undefined;
          }
        | undefined;
      externals?: any;
      extraBabelIncludes?: false | string[] | undefined;
      extraBabelPlugins?:
        | false
        | (string | Function | [string, any, (string | undefined)?])[]
        | undefined;
      extraBabelPresets?:
        | false
        | (string | Function | [string, any, (string | undefined)?])[]
        | undefined;
      extraPostCSSPlugins?: false | any[] | undefined;
      favicon?: string | false | undefined;
      forkTSChecker?: false | object | undefined;
      fastRefresh?: false | object | undefined;
      hash?: boolean | undefined;
      headScripts?: false | import('dumi').IScriptConfig | undefined;
      history?:
        | false
        | {
            type: 'hash' | 'browser' | 'memory';
            options?: object | undefined;
          }
        | undefined;
      runtimeHistory?: false | object | undefined;
      ignoreMomentLocale?: boolean | undefined;
      inlineLimit?: number | false | undefined;
      lessLoader?: false | object | undefined;
      links?: false | Partial<HTMLLinkElement>[] | undefined;
      manifest?: false | Partial<import('dumi').IManifest> | undefined;
      mfsu?:
        | false
        | {
            development?:
              | {
                  output?: string | undefined;
                }
              | undefined;
            production?:
              | {
                  output?: string | undefined;
                }
              | undefined;
            exportAllMembers?: Record<string, string[]> | undefined;
            mfName?: string | undefined;
            chunks?: string[] | undefined;
            ignoreNodeBuiltInModules?: boolean | undefined;
          }
        | undefined;
      metas?: false | Partial<HTMLMetaElement>[] | undefined;
      mpa?: false | object | undefined;
      mock?:
        | false
        | {
            exclude?: string[] | undefined;
          }
        | undefined;
      mountElementId?: string | false | undefined;
      nodeModulesTransform?:
        | false
        | {
            type: 'all' | 'none';
            exclude?: string[] | undefined;
          }
        | undefined;
      outputPath?: string | false | undefined;
      plugins?: false | (string | [string, any])[] | undefined;
      polyfill?:
        | false
        | {
            imports: string[];
          }
        | undefined;
      postcssLoader?: false | object | undefined;
      presets?: false | (string | [string, any])[] | undefined;
      proxy?: any;
      publicPath?: string | false | undefined;
      runtimePublicPath?: boolean | undefined;
      scripts?: false | import('dumi').IScriptConfig | undefined;
      singular?: boolean | undefined;
      ssr?: false | import('dumi').ISSR | undefined;
      styleLoader?: false | object | undefined;
      styles?: false | import('dumi').IStyleConfig | undefined;
      targets?: false | import('dumi').ITargets | undefined;
      terserOptions?: false | object | undefined;
      theme?: false | object | undefined;
      title?: string | false | undefined;
      webpack5?:
        | false
        | {
            lazyCompilation?: object | undefined;
          }
        | undefined;
    };
export default _default;
