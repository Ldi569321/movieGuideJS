const btnClick = document.querySelectorAll("input");

const a = [The_Garden_of_Words, Your_name, Weathering_With_You, Suzumes_Door_Locking];

btnClick[i] = a[i];

function movieClick() {
    document.getElementById("movie_name").innerText = The_Garden_of_Words.name;
    document.getElementById("movie_release").innerText = The_Garden_of_Words.release;
    document.getElementById("movie_genre").innerText = The_Garden_of_Words.genre;
};

btnClick[0].addEventListener("click", movieClick);

const The_Garden_of_Words = {
    name: "언어의 정원",
    release: "2013",
    genre: "애니메이션, 로맨스"
};

const Your_name = {
    name: "너의 이름은",
    release: "2017",
    genre: "애니메이션, 로맨스, 판타지, 재난"
};

const Weathering_With_You = {
    name: "날씨의 아이",
    release: "2019",
    genre: "애니메이션, 로맨스, 판타지, 재난, 드라마, 세카이계"
};

const Suzumes_Door_Locking = {
    name: "스즈메의 문단속",
    release: "2022",
    genre: "애니메이션, 액션, 판타지, 포스트 아포칼립스"
};