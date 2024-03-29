<script>
import LZUTF8 from 'lzutf8';
import {response} from '~/components/tagpro/images-response.js';
import constants from '~/components/tagpro/constants.js';

import GravityPalette from '~/components/tagpro/GravityPalette.vue';
import PortalPalette from '~/components/tagpro/PortalPalette.vue';
import SpeedpadPalette from '~/components/tagpro/SpeedpadPalette.vue';
import SplatPalette from '~/components/tagpro/SplatPalette.vue';
import TilePalette from '~/components/tagpro/TilePalette.vue';

import ImgurUploader from '~/components/tagpro/ImgurUploader.vue';
import IngestForm from '~/components/tagpro/IngestForm.vue';

export default {
    components: {
        GravityPalette,
        PortalPalette,
        SpeedpadPalette,
        SplatPalette,
        TilePalette,
        ImgurUploader,
        IngestForm,
    },

    data() {
        return {
            ...constants,
            brushes: {},
            exportArr: [
                [], // 0 tiles
                [], // 1 speedpad
                [], // 2 speedpad red
                [], // 3 speedpad blue
                [], // 4 portal
                [], // 5 portal red
                [], // 6 portal blue
                [], // 7 splats
                [], // 8 gravity well
            ],
            importString: this.$route.query.theme
                ? this.$route.query.theme
                : null,
            uploadOpen: false,
        };
    },

    head: {
        title: 'Tagpro Themer',
    },

    computed: {
        brushKeys() {
            return Object.keys(this.brushes);
        },

        loadingImages() {
            if (this.brushKeys.length === 0) return true;

            return this.brushKeys.some((key) => this.brushes[key].loaded === false);
        },

        loading() {
            if (this.loadingImages) return true;

            return false;
        },

        brushesLoading() {
            // TODO this isn't quite right, probably can do in one pass
            const loadingBrushes = {};
            this.brushKeys.forEach((key) => {
                const {name} = this.brushes[key];
                loadingBrushes[name] = this.brushes[key].loaded;
            });

            return Object.entries(loadingBrushes)
                .filter(([, loaded]) => loaded === false)
                .map(([name]) => name)
                .sort((a, b) => a.localeCompare(b));
        },

        tileBrushes() {
            return this.brushKeys
                .filter((key) => this.brushes[key].type === this.TILES)
                .map((key) => this.brushes[key])
                .sort(this.brushSort);
        },

        speedBrushes() {
            return this.brushKeys
                .filter((key) => this.brushes[key].type === this.SPEEDPAD
                    || this.brushes[key].type === this.SPEEDPAD_RED
                    || this.brushes[key].type === this.SPEEDPAD_BLUE)
                .map((key) => this.brushes[key])
                .sort(this.brushSort);
        },

        portalBrushes() {
            return this.brushKeys
                .filter((key) => this.brushes[key].type === this.PORTAL
                    || this.brushes[key].type === this.PORTAL_RED
                    || this.brushes[key].type === this.PORTAL_BLUE)
                .map((key) => this.brushes[key])
                .sort(this.brushSort);
        },

        splatBrushes() {
            return this.brushKeys
                .filter((key) => this.brushes[key].type === this.SPLATS)
                .map((key) => this.brushes[key])
                .sort(this.brushSort);
        },

        gravityBrushes() {
            return this.brushKeys
                .filter((key) => this.brushes[key].type === this.GRAVITY_WELL)
                .map((key) => this.brushes[key])
                .sort(this.brushSort);
        },

        exportString() {
            return this.encode();
        },
    },

    watch: {
        loadingImages(loading) {
            if (loading === false) {
                this.afterImagesLoaded();
            }
        },
    },

    async mounted() {
        this.loadImages();
        window.addEventListener('beforeunload', this.beforeUnload);
    },

    beforeUnmount() {
        window.removeEventListener('beforeunload', this.beforeUnload);
    },

    methods: {
        beforeUnload(e) {
            const currTheme = this.$route.query.theme
                ? this.$route.query.theme
                : null;

            const isDefault = this.exportString === this.DEFAULT_EXPORT_STRING;
            const isLoaded = this.exportString === currTheme;

            if (this.exportString && !isDefault && !isLoaded) {
                e.preventDefault();
                e.returnValue = 'Are you sure?';
            }
        },

        brushSort({name: a}, {name: b}) {
            if (a.toLowerCase() === 'default') return -1;
            if (b.toLowerCase() === 'default') return 1;
            return a.localeCompare(b);
        },

        loadImages() {
            response.entities.forEach((entity) => {
                const {id} = entity;
                const {
                    name,
                    author,
                    type,
                    filename,
                } = entity.data;

                const img = new Image();

                this.brushes[id] = {
                    id,
                    loaded: false,
                    name,
                    author,
                    type,
                    img,
                };

                img.addEventListener('load', () => {
                    // The random timeout just makes the loading progress look nicer
                    const randTime = Math.floor(Math.random() * 10);
                    setTimeout(() => {
                        this.brushes[id] = {
                            ...this.brushes[id],
                            loaded: true,
                        };
                    }, randTime);
                });

                img.src = `/tagpro/${filename}`;
            });
        },

        afterImagesLoaded() {
            this.$refs.tilePalette.init();
            this.$refs.speedpadPalette.init();
            this.$refs.portalPalette.init();
            this.$refs.splatPalette.init();
            this.$refs.gravityPalette.init();
            this.importFromString();
        },

        reset() {
            this.importString = this.$route.query.theme
                ? this.$route.query.theme
                : null;
            this.afterImagesLoaded();
        },

        linkTheme() {
            this.updateUrl();
        },

        defaultReset() {
            this.importString = this.DEFAULT_EXPORT_STRING;
            this.afterImagesLoaded();
            this.updateUrl();
        },

        updateUrl() {
            const router = useRouter();
            router.replace({path: '/tpthemer', query: {theme: this.exportString}});
        },

        importFromString() {
            if (!this.importString) return;

            const decoded = this.decode(this.importString);

            if (decoded && decoded.length === 9) {
                this.$refs.tilePalette.paintImport(decoded[0]);
                this.$refs.speedpadPalette.paintImport(this.SPEEDPAD, decoded[1]);
                this.$refs.speedpadPalette.paintImport(this.SPEEDPAD_RED, decoded[2]);
                this.$refs.speedpadPalette.paintImport(this.SPEEDPAD_BLUE, decoded[3]);
                this.$refs.portalPalette.paintImport(this.PORTAL, decoded[4]);
                this.$refs.portalPalette.paintImport(this.PORTAL_RED, decoded[5]);
                this.$refs.portalPalette.paintImport(this.PORTAL_BLUE, decoded[6]);
                this.$refs.splatPalette.paintImport(decoded[7]);
                this.$refs.gravityPalette.paintImport(decoded[8]);
            }
        },

        encode() {
            let str = '';
            str += `${this.exportArr[0].join(',')}`; // tiles
            str += `.${this.exportArr[1].join(',')}`; // speedpad
            str += `.${this.exportArr[2].join(',')}`; // speedpad red
            str += `.${this.exportArr[3].join(',')}`; // speedpad blue
            str += `.${this.exportArr[4].join(',')}`; // portal
            str += `.${this.exportArr[5].join(',')}`; // portal red
            str += `.${this.exportArr[6].join(',')}`; // portal blue
            str += `.${this.exportArr[7].join(',')}`; // splats
            str += `.${this.exportArr[8].join(',')}`; // gravity well

            const ret = LZUTF8.compress(str, {outputEncoding: 'Base64'});
            return ret;
        },

        decode(str) {
            const decompressed = LZUTF8.decompress(str.trim(), {inputEncoding: 'Base64'});
            const split = decompressed.split('.');
            if (split.length !== 9) return false;

            return [
                split[0].split(',').map((x) => Number.parseInt(x, 10)),
                split[1].split(',').map((x) => Number.parseInt(x, 10)),
                split[2].split(',').map((x) => Number.parseInt(x, 10)),
                split[3].split(',').map((x) => Number.parseInt(x, 10)),
                split[4].split(',').map((x) => Number.parseInt(x, 10)),
                split[5].split(',').map((x) => Number.parseInt(x, 10)),
                split[6].split(',').map((x) => Number.parseInt(x, 10)),
                split[7].split(',').map((x) => Number.parseInt(x, 10)),
                split[8].split(',').map((x) => Number.parseInt(x, 10)),
            ];
        },

        onTileChange(e) {
            this.exportArr[0] = e;
        },

        onSpeedpadChange(type, value) {
            if (type === this.SPEEDPAD) {
                this.exportArr[1] = value;
            } else if (type === this.SPEEDPAD_RED) {
                this.exportArr[2] = value;
            } else if (type === this.SPEEDPAD_BLUE) {
                this.exportArr[3] = value;
            }
        },

        onPortalChange(type, value) {
            if (type === this.PORTAL) {
                this.exportArr[4] = value;
            } else if (type === this.PORTAL_RED) {
                this.exportArr[5] = value;
            } else if (type === this.PORTAL_BLUE) {
                this.exportArr[6] = value;
            }
        },

        onSplatChange(e) {
            this.exportArr[7] = e;
        },

        onGravityChange(e) {
            this.exportArr[8] = e;
        },

        scrollToPostfix() {
            document.getElementById('postfix').scrollIntoView({behavior: 'smooth'});
        },

        upload() {
            this.updateUrl();
            this.uploadOpen = !this.uploadOpen;
        },
    },
};
</script>

<template>
    <div>
        <ImgurUploader
            v-model:open="uploadOpen"
            :export-string="exportString"
            tile-palette-ref="tilePalette"
            speedpad-palette-ref="speedpadPalette"
            portal-palette-ref="portalPalette"
            splat-palette-ref="splatPalette"
            gravity-palette-ref="gravityPalette"
        />

        <div v-if="loading" class="animate-pulse prose text-center mx-auto">
            <p>Loading ...</p>
            <p v-for="name in brushesLoading" :key="name">{{ name }}</p>
        </div>

        <div v-show="!loading" class="themer">
            <div class="menu">
                <a
                    :href="`/tpthemer?theme=${exportString}`"
                    class="flex-grow pillar-word"
                    @click.prevent="linkTheme"
                >
                    LINK TO THIS THEME
                </a>

                <a
                    :href="`/tpthemer?theme=${exportString}`"
                    class="pillar-word"
                    @click.prevent="upload"
                >
                    UPLOAD TO IMGUR
                </a>

                <a
                    href="#"
                    class="pillar-word"
                    @click.prevent="reset"
                >
                    RESET
                </a>

                <a
                    :href="`/tpthemer?theme=${DEFAULT_EXPORT_STRING}`"
                    class="pillar-word"
                    @click.prevent="defaultReset"
                >
                    DEFAULTS
                </a>
            </div>

            <div class="prose max-w-none my-8">
                <p>Chalksy's <a href="https://tagpro.gg">TAGPRO</a> Themer!</p>
                <p>About, TODO, and Ingest <a href="#" @click.prevent="scrollToPostfix">at the bottom of this page</a></p>
            </div>

            <TilePalette
                ref="tilePalette"
                :brushes="tileBrushes"
                @change="onTileChange"
            />

            <SpeedpadPalette
                ref="speedpadPalette"
                :brushes="speedBrushes"
                @change="onSpeedpadChange"
            />

            <PortalPalette
                ref="portalPalette"
                :brushes="portalBrushes"
                @change="onPortalChange"
            />

            <SplatPalette
                ref="splatPalette"
                :brushes="splatBrushes"
                @change="onSplatChange"
            />

            <GravityPalette
                ref="gravityPalette"
                :brushes="gravityBrushes"
                @change="onGravityChange"
            />

            <div id="postfix" class="prose max-w-none my-8">
                <hr />

                <h1 class="pillar-word">ABOUT</h1>
                <p>Select texture tilesets and mix and match them to your heart's content. New in this version of the themer is quick and easy export. You can directly link to your theme mixup as well. Reset resets you back to the last loaded thing. I dunno, you'll figure it out. Left click to paint with the currently selected texture. Right click and save as an image if you really want to. Double click to delete a cell. Do other things too like go and look at <a href="https://github.com/Chalks/jdw.me/tree/master/src/pages/tpthemer">the source code</a>. Whatever you want. The only limit is yourself<a href="https://zombo.com">.</a></p>
                <hr />

                <h1 class="pillar-word">TODO</h1>
                <ul class="my-5">
                    <li>Ingest texture packs that aren't published on tagpro.gg (see 'INGEST' below!)</li>
                    <li>Allow users to use local textures that haven't been published here</li>
                    <li>Automatically ingest new texture packs instead of the manual process</li>
                    <li>Track and publish the packs uploaded to imgur to prevent duplicates</li>
                </ul>
                <hr />

                <h1 class="pillar-word">INGEST</h1>
                <IngestForm />
            </div>
        </div>
    </div>
</template>

<style>
    .themer {
        @apply flex flex-col mx-auto relative;
        width: 840px;
        margin-top: 31px;
    }

    .menu {
        @apply flex z-30;
        position: fixed;
        top: 0;
        width: 840px;

        a {
            @apply text-center transition-colors;

            margin: 0 !important;
            padding: 2px 16px 0 16px;

            line-height: 31px;
            font-size: 20px;
            letter-spacing: 2px;
        }

        a { @apply mx-1 !important; }
        a:first-child { @apply ml-0 !important; }
        a:last-child { @apply mr-0 !important; }
    }

    .palette-container {
        @apply flex flex-col mb-12;
    }

    .palette {
        @apply flex overflow-auto my-4;

        .brush {
            @apply opacity-50 cursor-pointer relative mx-2 transition-opacity;

            &:first-child {
                @apply ml-0;
            }

            &:last-child {
                @apply mr-0;
            }

            &.selected, &:hover {
                @apply opacity-100;
            }

            width: 144px;

            .name, .author {
                @apply text-ellipsis whitespace-nowrap overflow-hidden text-xs;
            }

            .name {
                @apply font-bold;
            }

            .author {
                @apply absolute right-0 bottom-0 bg-white opacity-50 transition-opacity;

                &:hover {
                    @apply opacity-100;
                }
            }

            img {
                max-width: 144px;
                max-height: 99px;
            }
        }

        .tp-controls {
            @apply flex mt-px flex-wrap items-start space-x-2 text-xs;
            max-width: 144px;

            a {
                @apply border border-white text-center transition-colors;
                margin: 0 !important;
                width: 48px;
                padding: 2px 0 0 0;
                line-height: 18px;
                font-size: 11px;
                letter-spacing: 1px;
            }
        }
    }

    .canvas {
        @apply flex justify-center;
    }

    #postfix {
        .pillar-word {
            @apply bg-yellow-500;
        }
    }
</style>
