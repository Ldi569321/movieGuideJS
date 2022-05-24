const btnClick = document.querySelectorAll("input");
const movie_video = document.getElementById("back_movie");

const Shinkai_Makoto = {
    name: '신카이 마코토',
    brith: '1973년생',
    country: '국적: 일본',
    information: function () {
        document.querySelector("img").style.background = "url(./img/Shinkai_Makoto.png)";
        document.getElementById("movie_name").innerText = Shinkai_Makoto.name;
        document.getElementById("movie_release").innerText = Shinkai_Makoto.brith;
        document.getElementById("movie_genre").innerText = Shinkai_Makoto.country;
    },
};

const The_Garden_of_Words = {
    name: '언어의 정원',
    release: 2013,
    genre: '애니메이션, 로맨스',
    information: function () {
        document.querySelector("img").style.background = "url(./img/The_Garden_of_Words.jpg)";
        document.getElementById("movie_name").innerText = The_Garden_of_Words.name;
        document.getElementById("movie_release").innerText = The_Garden_of_Words.release;
        document.getElementById("movie_genre").innerText = The_Garden_of_Words.genre;
        movie_video.src = 'https://cdn.pixabay.com/video/2022/05/24/117930.mp4';
        movie_video.load();
        movie_video.play();
    },
};

const Your_name = {
    name: '너의 이름은',
    release: 2017,
    genre: '애니메이션, 로맨스, 판타지, 재난',
    information: function () {
        document.getElementById("box").style.fontFamily = "Arita-buri-SemiBold";
        document.querySelector("img").style.background = "url(./img/Your_name.jpg)";
        document.getElementById("movie_name").innerText = Your_name.name;
        document.getElementById("movie_release").innerText = Your_name.release;
        document.getElementById("movie_genre").innerText = Your_name.genre;
        movie_video.src = 'https://cdn.pixabay.com/video/2022/05/24/117928.mp4';
        movie_video.load();
        movie_video.play();
    },
};

const Weathering_With_You = {
    name: '날씨의 아이',
    release: 2019,
    genre: '애니메이션, 로맨스, 판타지, 재난, 드라마, 세카이계',
    information: function () {
        document.querySelector("img").style.background = "url(./img/Weathering_With_You.jpg)";
        document.getElementById("movie_name").innerText = Weathering_With_You.name;
        document.getElementById("movie_release").innerText = Weathering_With_You.release;
        document.getElementById("movie_genre").innerText = Weathering_With_You.genre;
        movie_video.src = 'https://cdn.pixabay.com/video/2022/05/24/117929.mp4';
        movie_video.load();
        movie_video.play();
    },

};

const Suzumes_Door_Locking = {
    name: '스즈메의 문단속',
    release: 2022,
    genre: '애니메이션, 액션, 판타지, 포스트 아포칼립스',
    information: function () {
        document.querySelector("img").style.background = "url(./img/Suzumes_Door_Locking.jpg)";
        document.getElementById("movie_name").innerText = Suzumes_Door_Locking.name;
        document.getElementById("movie_release").innerText = Suzumes_Door_Locking.release;
        document.getElementById("movie_genre").innerText = Suzumes_Door_Locking.genre;
        movie_video.src = 'https://cdn.pixabay.com/video/2022/05/24/117918.mp4';
        movie_video.load();
        movie_video.play();
    },
};

btnClick[0].addEventListener("click", Shinkai_Makoto.information);
btnClick[1].addEventListener("click", The_Garden_of_Words.information);
btnClick[2].addEventListener("click", Your_name.information);
btnClick[3].addEventListener("click", Weathering_With_You.information);
btnClick[4].addEventListener("click", Suzumes_Door_Locking.information);