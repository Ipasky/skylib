<template>
    <div class="animations_container" id="animations_container_ID">
        <div class="animations_title">Simulacions</div>

        <RouterLink to="/internetprotocols" class="animations_iternetprotocols_container">
            <div class="animations_iternetprotocols_title">Internet Protocols</div>
            <div class="animations_iternetprotocols_boxes">
                <RouterLink to="/internetprotocols/tcpip" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    TCP/IP
                </RouterLink>
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    BGP/RIP
                </RouterLink>
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    DNS
                </RouterLink>
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    Routing Queues
                </RouterLink>
            </div>
        </RouterLink>

        <hr class="animations_separator_hr"/>

        <RouterLink to="/" class="animations_codingtheory_container">
            <div class="animations_codingtheory_title">Coding Theory</div>
            <div class="animations_codingtheory_boxes">
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    Reed-Solomon
                </RouterLink>
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    BCH
                </RouterLink>
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    ZIP
                </RouterLink>
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    JPEG
                </RouterLink>
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    H.264
                </RouterLink>
            </div>
        </RouterLink>

        <hr class="animations_separator_hr"/>

        <RouterLink to="/cryptography" class="animations_cryptography_container">
            <div class="animations_cryptography_title">Cryptography</div>
            <div class="animations_cryptography_boxes">
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    RSA
                </RouterLink>
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    Diffie-Hellman
                </RouterLink>
            </div>
        </RouterLink>

        <hr class="animations_separator_hr"/>

        <RouterLink to="/cybersecurity" class="animations_cybersecurity_container">
            <div class="animations_cybersecurity_title">Cybersecurity</div>
            <div class="animations_cybersecurity_boxes">
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    Nmap
                </RouterLink>
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
                    Buffer Overflow
                </RouterLink>
                <RouterLink to="/" class="animations_box">
                    <img class="animations_box_img" src="../assets/tcpip_box_img.jpg">
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

    onMounted(() => {
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