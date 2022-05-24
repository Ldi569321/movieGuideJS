const btnClick = document.querySelectorAll("input");
const movie_video = document.getElementById("back_movie");




const Shinkai_Makoto = {
    name: '신카이 마코토',
    brith: '1973년생',
    country: '국적: 일본',
    information: function () {
        document.querySelector("img").style.background = "url(https://drive.google.com/uc?export=download&id=16UX0RBVQSQxcIupM-bxzcgNQvwrUQ2pP)";
        document.getElementById("movie_name").innerText = Shinkai_Makoto.name;
        document.getElementById("movie_release").innerText = Shinkai_Makoto.brith;
        document.getElementById("movie_genre").innerText = Shinkai_Makoto.country;
        document.getElementById("content").innerText = "빛을 가장 아름답게 활용하는 감독. 빛의 마술사"

    },
};

const The_Garden_of_Words = {
    name: '언어의 정원',
    release: 2013,
    genre: '애니메이션, 로맨스',
    information: function () {
        document.querySelector("img").style.background = "rgb(95, 170, 87)";
        document.querySelector("img").style.background = "linear-gradient(90deg, rgba(95, 170, 87, 1) 0%, rgba(28, 52, 56, 1) 100%)";
        document.querySelector("img").style.background = "url(https://drive.google.com/uc?export=download&id=1jJfseKlIk3wV3zhim1EOo3erzlJl3AgQ)";
        document.getElementById("movie_name").innerText = The_Garden_of_Words.name;
        document.getElementById("movie_release").innerText = The_Garden_of_Words.release;
        document.getElementById("movie_genre").innerText = The_Garden_of_Words.genre;
        movie_video.src = 'https://drive.google.com/uc?export=download&id=1uShqTA1daYOJcKow-yAU-BFIG5Z0SPMM';
        movie_video.load();
        movie_video.play();
        document.getElementById("box").style.background = "rgb(95, 170, 87)";
        document.getElementById("box").style.background = "linear-gradient(270deg, rgba(95, 170, 87, 1) 0%, rgba(28, 52, 56, 1) 100%)";
        document.getElementById("box").style.color = "white"
        document.getElementById("content").innerText = "'사랑', 그 이전의 사랑 이야기\n'愛あい'よりも昔、'孤悲こい'のものがたり。"
    },
};

const Your_name = {
    name: '너의 이름은',
    release: 2017,
    genre: '애니메이션, 로맨스, 판타지, 재난',
    information: function () {
        document.querySelector("img").style.background = "url(https://drive.google.com/uc?export=download&id=1hRcgwlLuWsS4yFMzTpLSfrvz7-lp1RwT)";
        document.getElementById("movie_name").innerText = Your_name.name;
        document.getElementById("movie_release").innerText = Your_name.release;
        document.getElementById("movie_genre").innerText = Your_name.genre;
        movie_video.src = 'https://drive.google.com/uc?export=download&id=14zvDs-XuwUPnVF2fBRf3ywYqL5AgXZhF';
        movie_video.load();
        movie_video.play();
        document.getElementById("box").style.background = "rgb(79,151,209)";
        document.getElementById("box").style.background = "linear-gradient(360deg, rgba(79,151,209,1) 0%, rgba(163,77,112,1) 65%, rgba(43,38,138,1) 100%)";
        document.getElementById("box").style.color = "white"
        document.getElementById("content").innerText = "아직 만난 적 없는 너를, 찾고 있어.\nまだ会ったことのない君を、探している。"
    },
};

const Weathering_With_You = {
    name: '날씨의 아이',
    release: 2019,
    genre: '애니메이션, 로맨스, 판타지, 재난, 드라마, 세카이계',
    information: function () {
        document.querySelector("img").style.background = "url(https://drive.google.com/uc?export=download&id=1yd5GXRulNfAtOiWFh3u_tHqEuWbdXpE2)";
        document.getElementById("movie_name").innerText = Weathering_With_You.name;
        document.getElementById("movie_release").innerText = Weathering_With_You.release;
        document.getElementById("movie_genre").innerText = Weathering_With_You.genre;
        movie_video.src = 'https://drive.google.com/uc?export=download&id=1DkH_KIiv1AsC6OIPGSUXnbG91lKeTrN_';
        movie_video.load();
        movie_video.play();
        document.getElementById("box").style.background = "rgb(121,140,138)";
        document.getElementById("box").style.background = "linear-gradient(360deg, rgba(121,140,138,1) 0%, rgba(102,169,212,1) 100%)";
        document.getElementById("box").style.color = "white"
        document.getElementById("content").innerText = "이것은 나와 그녀만이 알고 있는,\n세계의 비밀에 대한 이야기.\nこれは僕と彼女だけが知っている、\n世界の秘密についての物語。"
    },

};

const Suzumes_Door_Locking = {
    name: '스즈메의 문단속',
    release: 2022,
    genre: '애니메이션, 액션, 판타지, 포스트 아포칼립스',
    information: function () {
        document.querySelector("img").style.background = "url(https://drive.google.com/uc?export=download&id=1CCeYmscr50ON483-4ws9E_THVaVI6Qkc)";
        document.getElementById("movie_name").innerText = Suzumes_Door_Locking.name;
        document.getElementById("movie_release").innerText = Suzumes_Door_Locking.release;
        document.getElementById("movie_genre").innerText = Suzumes_Door_Locking.genre;
        movie_video.src = 'https://drive.google.com/uc?export=download&id=15S2k_RIs8-Nwbdie3HBfOY6V5JhTuMlp';
        movie_video.load();
        movie_video.play();
        document.getElementById("box").style.background = "rgb(142,172,183)";
        document.getElementById("box").style.background = "linear-gradient(360deg, rgba(142,172,183,1) 0%, rgba(61,143,190,1) 100%)";
        document.getElementById("box").style.color = "white"
        document.getElementById("content").innerText = "문의 건너편에는, 모든 시간이 존재했다.\n扉の向こうには、すべての時間があった。"
    },
};

btnClick[0].addEventListener("click", Shinkai_Makoto.information);
btnClick[1].addEventListener("click", The_Garden_of_Words.information);
btnClick[2].addEventListener("click", Your_name.information);
btnClick[3].addEventListener("click", Weathering_With_You.information);
btnClick[4].addEventListener("click", Suzumes_Door_Locking.information);