<script setup>
seo({
    title: 'Felix - Jonathan Walters',
});
</script>

<template>
    <div class="felix max-w-prose w-full flex mx-auto py-8">
        <div class="flex flex-wrap gap-tile">
            <a
                href="https://youtube.com"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/youtube.png" class="object-contain group-hover:animate-wiggle" />
            </a>

            <a
                href="https://www.roblox.com/discover"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/roblox.png" class="object-contain group-hover:animate-wiggle" />
            </a>

            <a
                href="https://www.roblox.com/games/262014008/Movie-Maker-3-OPEN-Beta"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/robloxmm3.png" class="object-cover group-hover:animate-wiggle" />
            </a>

            <a
                href="https://scratch.mit.edu/"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/scratch.png" class="object-contain group-hover:animate-wiggle" />
            </a>

            <a
                href="https://musiclab.chromeexperiments.com/"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/musicbox.png" class="object-contain group-hover:animate-wiggle" />
            </a>

            <a
                href="https://neal.fun/infinite-craft/"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/infinite-craft.png" class="object-contain group-hover:animate-wiggle" />
            </a>

            <a
                href="steam://steam"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/steam.png" class="object-contain group-hover:animate-wiggle" />
            </a>

            <a
                href="https://chess.com"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/chesswhite.webp" class="group-hover:opacity-0 object-contain transition-opacity group-hover:animate-wiggle" />
                <img src="/kiddos/chess.webp" class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity object-contain group-hover:animate-wiggle" />
            </a>

            <a
                href="https://thirtydollar.website/"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/thirtydollar.png" class="object-contain group-hover:animate-wiggle" />
            </a>

            <a
                href="https://pixelsfighting.com/"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/pixels.png" class="object-contain group-hover:animate-wiggle" />
            </a>

            <a
                href="https://crazygames.com/"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/crazygames.svg" class="p-2 object-contain group-hover:animate-wiggle" />
            </a>

            <a
                href="https://me.meshcapade.com/editor"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/meshcapade.png" class="mix-blend-difference object-contain group-hover:animate-wiggle" />
            </a>

            <a
                href="https://conwaylife.com/"
                class="group"
                target="_blank"
            >
                <img src="/kiddos/conwaylifecom.png" class="mix-blend-difference object-contain group-hover:animate-wiggle" />
            </a>
        </div>
    </div>

    <div class="fixed right-2 bottom-2">
        <p class="text-gray-400 text-sm">Version 0.5.2</p>
    </div>
</template>

<style>
    body {
        background: url("/kiddos/monalisa.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
    }
    .felix a {
        @apply rounded-lg border bg-white prose-tile flex items-center justify-center p-1 shadow hover:shadow-lg relative;
    }
</style>
