<template>
    <div class="animations_container" id="animations_container_ID">
        <div class="animations_title">Simulacions</div>

        <RouterLink to="/internetprotocols" class="animations_iternetprotocols_container" @click="burger_menu(1)">
            <div class="animations_iternetprotocols_title">Protocols TCP/IP</div>
            <div class="animations_iternetprotocols_boxes">
                <RouterLink to="/internetprotocols/tcpip" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img.jpg">
                    HTTP
                </RouterLink>
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    TCP/UDP
                </RouterLink>
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    DNS
                </RouterLink>
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    ARP
                </RouterLink>
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    BGP
                </RouterLink>
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    Routing
                </RouterLink>
            </div>
        </RouterLink>

        <hr class="animations_separator_hr"/>

        <RouterLink to="/" class="animations_codingtheory_container" @click="burger_menu(1)">
            <div class="animations_codingtheory_title">Coding Theory</div>
            <div class="animations_codingtheory_boxes">
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    Reed-Solomon
                </RouterLink>
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    BCH
                </RouterLink>
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    ZIP
                </RouterLink>
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    JPEG
                </RouterLink>
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    H.264
                </RouterLink>
            </div>
        </RouterLink>

        <hr class="animations_separator_hr"/>

        <RouterLink to="/" class="animations_cryptography_container" @click="burger_menu(1)">
            <div class="animations_cryptography_title">Cryptography</div>
            <div class="animations_cryptography_boxes">
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    RSA
                </RouterLink>
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    Diffie-Hellman
                </RouterLink>
            </div>
        </RouterLink>

        <hr class="animations_separator_hr"/>

        <RouterLink to="/" class="animations_cybersecurity_container" @click="burger_menu(1)">
            <div class="animations_cybersecurity_title">Cybersecurity</div>
            <div class="animations_cybersecurity_boxes">
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    Nmap
                </RouterLink>
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    Buffer Overflow
                </RouterLink>
                <RouterLink to="/" class="animations_box" @click="burger_menu(1)">
                    <img class="animations_box_img" src="/tcpip_box_img_gray.jpg">
                    DDoS
                </RouterLink>
            </div>
        </RouterLink>
    </div>
</template>
  
<script setup>
    import { ref, onMounted } from 'vue';
    import anime from 'animejs';
    import { RouterLink } from 'vue-router';
    import { inject } from 'vue';

    const change_theme = inject('change_theme');
    const burger_menu = inject('burger_menu');

    onMounted(() => {
        if(change_theme) change_theme(1);
        //change_theme(1);
        //document.getElementById('animations_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
    });
</script>

<style scoped>
    .animations_container{
        background: rgba(0, 0, 0, 0.5);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
        backdrop-filter: blur(8px);
        text-justify: inter-word;
        user-select: none;
    }
</style>