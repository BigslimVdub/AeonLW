// Configuration for your app

module.exports = function (ctx) {
    return {
        // app plugins (/src/plugins)
        plugins: [
            "i18n",
            "axios",
            "vuelidate",
            "gateway",
            "timeago"
        ],
        css: [
            "app.styl"
        ],
        extras: [
            ctx.theme.mat ? "roboto-font" : null,
            "material-icons" // optional, you are not bound to it
            // "ionicons",
            // "mdi",
            // "fontawesome"
        ],
        supportIE: false,
        build: {
            scopeHoisting: true,
            vueRouterMode: "history",
            // vueCompiler: true,
            // gzip: true,
            // analyze: true,
            // extractCSS: false,
            extendWebpack (cfg) {
                /*
                cfg.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules|quasar)/
                })
                */
            }
        },
        devServer: {
            // https: true,
            // port: 8080,
            open: true // opens browser window automatically
        },
        // framework: "all" --- includes everything; for dev only!
        framework: {
            components: [
                "QLayout",
                "QLayoutHeader",
                "QLayoutFooter",
                "QLayoutDrawer",
                "QPageContainer",
                "QPage",
                "QToolbar",
                "QToolbarTitle",
                "QTooltip",
                "QField",
                "QInput",
                "QRadio",
                "QBtn",
                "QBtnToggle",
                "QIcon",
                "QTabs",
                "QTab",
                "QRouteTab",
                "QBtnDropdown",
                "QPopover",
                "QModal",
                "QModalLayout",
                "QStep",
                "QStepper",
                "QStepperNavigation",
                "QSpinner",
                "QList",
                "QListHeader",
                "QItem",
                "QItemMain",
                "QItemSeparator",
                "QItemSide",
                "QItemTile",
                "QSelect",
                "QToggle",
                "QPageSticky",
                "QCollapsible",
                "QCheckbox",
                "QInnerLoading",
                "QInfiniteScroll",
                "QDatetime",
                "QContextMenu"
            ],
            directives: [
                "Ripple",
                "CloseOverlay"
            ],
            // Quasar plugins
            plugins: [
                "Notify",
                "Loading",
                "LocalStorage",
                "Dialog"
            ]
            // iconSet: ctx.theme.mat ? "material-icons" : "ionicons"
            // i18n: "de" // Quasar language
        },
        // animations: "all" --- includes all animations
        animations: [],
        pwa: {
            // workboxPluginMode: "InjectManifest",
            // workboxOptions: {},
            manifest: {
                // name: "Quasar App",
                // short_name: "Quasar-PWA",
                // description: "Best PWA App in town!",
                display: "standalone",
                orientation: "portrait",
                background_color: "#ffffff",
                theme_color: "#1ba7fd",
                icons: [{
                        "src": "statics/icons/icon_128x128.png",
                        "sizes": "128x128",
                        "type": "image/png"
                    },
                    {
                        "src": "statics/icons/icon_192x192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "statics/icons/icon_256x256.png",
                        "sizes": "256x256",
                        "type": "image/png"
                    },
                    {
                        "src": "statics/icons/icon_512x512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ]
            }
        },
        cordova: {
            // id: "org.cordova.quasar.app"
        },
        electron: {
            bundler: "builder", // or "packager"
            extendWebpack(cfg) {
                // do something with Electron process Webpack cfg
            },
            packager: {
                // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

                // OS X / Mac App Store
                // appBundleId: "",
                // appCategoryType: "",
                // osxSign: "",
                // protocol: "myapp://path",

                // Window only
                // win32metadata: { ... }

                extraResource: [
                    "bin",
                ]
            },
            builder: {
                // https://www.electron.build/configuration/configuration

                appId: "com.aeon.wallet",
                productName: "AeonLW",
                copyright: "Copyright © 2014-2020 Aeon Currency Project",
                copyright: "Copyright © 2019-2020 BigSlimVdub",

                // directories: {
                //     buildResources: "src-electron/build"
                // },
                publish: "github",
                files: [
                    "!dev-app-update.yml"
                ],

                win: {
                  icon: 'src-electron/icons/icon.ico'
                },
                
                linux: {
                    target: ["deb"],
                    icon: "src-electron/icons/linux-512x512.png",
                    category: "Finance"
                },

                mac: {
                    icon: "src-electron/icons/icon.icns",
                    category: "public.app-category.finance"
                },

                dmg: {
                    icon: "src-electron/icons/icon.icns",
                    background: "src-electron/build/aeon-dmg.tiff"
                },

                nsis: {
                    oneClick: false,
                    allowToChangeInstallationDirectory: true

                },

                extraResources: [
                    "bin"
                ]
            }
        }
    }
}
