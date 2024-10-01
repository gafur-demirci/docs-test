import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    //   tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually

    docs: [
        {
            type: "doc",
            id: "superapp-documentation"
        },
        {
            type: "category",
            label: "SUPERAPP",
            className: "section-title introduction",
            items: [
                {
                    type: "doc",
                    id: "Superapp/superapp"
                }
            ],
            customProps: {
                icon: "fas fa-folder"
            }
        },
        {
            type: "category",
            label: "Giriş",
            className: "section-title introduction",
            items: [
                {
                    type: "doc",
                    id: "Introduction/Introduction"
                }
            ],
            customProps: {
                icon: "fas fa-folder"
            }
        },
        {
            type: "category",
            label: "Başlangıç",
            className: "section-title getting_started",
            items: [
                {
                    type: "doc",
                    id: "Getting-Started/getting-started"
                }
            ]
        },
        {
            type: "category",
            label: "UI Ekranları",
            className: "section-title uiscreens",
            items: [
                {
                    type: "doc",
                    id: "UI-Screens/ui-editor-overview"
                },
                {
                    type: "doc",
                    id: "UI-Screens/drag-drop"
                },
                {
                    type: "category",
                    label: "Komponentler",
                    items: [
                        {
                            type: "category",
                            label: "Basit komponentler",
                            items: [
                                {
                                    type: "category",
                                    label: "Vuetify Komponentleri",
                                    items: [
                                        "UI-Screens/Components/Basic-Components/Vuetify-Components/VAlert",
                                        "UI-Screens/Components/Basic-Components/Vuetify-Components/VAppBar",
                                        "UI-Screens/Components/Basic-Components/Vuetify-Components/VAvatar"
                                    ]
                                },
                                {
                                    type: "category",
                                    label: "Plateau UI Komponentleri",
                                    items: [
                                        "UI-Screens/Components/Basic-Components/Quick-Components/Captcha",
                                        "UI-Screens/Components/Basic-Components/Quick-Components/ReCaptcha"
                                    ]
                                }
                            ]
                        },

                    ]
                },
                {
                    type: "category",
                    label: "Hizalama ve Tasarım",
                    items: [
                        "UI-Screens/Layout-Design/layout",
                        "UI-Screens/Layout-Design/responsive-layout"
                    ]
                },
                {
                    type: "category",
                    label: "Lojik",
                    items: [
                        {
                            type: "doc",
                            id: "UI-Screens/Logic/typescript"
                        },
                        {
                            type: "doc",
                            id: "UI-Screens/Logic/page-lifecycle-management"
                        },
                        {
                            type: "doc",
                            id: "UI-Screens/Logic/backend-service-integration"
                        }
                    ]
                },
                {
                    type: "category",
                    label: "UI Ayarlar",
                    items: [
                        {
                            type: "doc",
                            id: "UI-Screens/UI-Settings/pipeline",
                        }
                    ]
                },
                {
                    type: "doc",
                    id: "UI-Screens/editor-shortcuts"
                }

            ]
        },
        {
            type: "category",
            label: "Nasıl Yapılır?",
            items: [
                {
                    type: "doc",
                    id: "How-to-Videos/youtube-tutorials"
                }
            ]
        },
        {
            type: "category",
            label: "Sürüm Notları",
            items: [
                "Release-Notes/Plateau Studio V1.10.0",
                "Release-Notes/Plateau Studio V1.9.0",
                "Release-Notes/Plateau Studio V1.8.1"
            ]
        }

    ],

};

export default sidebars;
