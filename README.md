<div align="center">

# ZZZY

### 패션 브랜드 웹사이트

[Live View](https://kimgsun.github.io/ZZZY/)

</div>

---

## 프로젝트 소개

패션 브랜드 **ZZZY** 컨셉의 BI/BX 및 웹사이트입니다. BI/BX 디자인, UI 디자인, 퍼블리싱을 담당한 개인 프로젝트입니다.

FW26 컬렉션과 ZZZY × NOIRSPRAY 콜라보레이션을 중심으로 메인·브랜드·컬렉션·샵·이벤트·스토어 페이지를 구성했습니다.


| 항목     | 내용                        |
| ------ | ------------------------- |
| **형태** | 개인 프로젝트                   |
| **기간** | 2023.10 – 2024.02         |
| **담당** | BI/BX 디자인 · UI 디자인 · 퍼블리싱 |


## 주요 기능

- **사이드바 네비게이션** — CSS checkbox 기반 햄버거 메뉴, X 전환 애니메이션
- **Shop 서브메뉴** — jQuery slideToggle 아코디언
- **컬렉션 아코디언** — 시즌 메뉴(slideToggle), 활성 항목 `.on` 클래스
- **이벤트 탭** — 진행중 / 종료 이벤트 필터, fadeIn 전환
- **Stockist 탭** — Flagship / Department / Online 매장 정보 전환
- **눈 내리는 효과** — 메인 페이지 Vanilla JS snowflake
- **스크롤 애니메이션** — AOS CSS + zoom 호환 트리거(`aos-io.js`)
- **Button / 상품 Hover** — 브랜드 레드 강조, 앞·뒤 이미지 전환

## 기술 스택

### Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)![AOS](https://img.shields.io/badge/AOS-111111?style=for-the-badge)

### Design & Tools

![Adobe XD](https://img.shields.io/badge/Adobe_XD-FF61F6?style=for-the-badge&logo=adobexd&logoColor=white)![Photoshop](https://img.shields.io/badge/Photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white)![Illustrator](https://img.shields.io/badge/Illustrator-FF9A00?style=for-the-badge&logo=adobeillustrator&logoColor=white)![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

## 프로젝트 구조

```
ZZZY/
├── index.html                   # Home
├── sub1.html                    # Brand
├── sub2.html                    # Collection
├── sub3.html                    # Shop
├── sub4.html                    # Event
├── sub5.html                    # Stockist
├── README.md
├── css/
│   └── style.css
├── script/
│   ├── js.js                    # jQuery 인터랙션 + snowflake
│   ├── viewport-fit.js          # 디자인 폭 기준 zoom 스케일
│   └── aos-io.js                # AOS CSS용 zoom 호환 스크롤 트리거
└── images/
    ├── main/
    ├── brandstory/
    ├── collection/
    ├── store/
    ├── event/
    └── stockist/
```

## 퍼블리싱 포인트


| 항목               | 내용                                                                        |
| ---------------- | ------------------------------------------------------------------------- |
| **Layout**       | Desktop 우선 (`min-width: 1320px`). 고정 헤더 + 사이드바 메뉴                         |
| **Key Function** | jQuery 탭·아코디언, AOS 스크롤 애니메이션, CSS checkbox 햄버거, snowflake, Hover          |
| **Web Standard** | 시맨틱 태그(`header`, `footer`), `alt` 속성, Chrome/Firefox/Safari/Edge 최신 버전 대상 |


## 기능 상세

### 사이드바 네비게이션

```css
input[id="menuicon"]:checked + label span {
  /* X 모양 */
}
input[id="menuicon"]:hover + label span {
  background: #ff0000;
}
```

```html
<input type="checkbox" id="menuicon" />
<label for="menuicon"><span></span><span></span><span></span></label>
<div class="sidebar">
  <ul class="menu">
    <!-- Home · Brand · Collection · Shop · Event · Stockist -->
  </ul>
</div>
```

### Shop 서브메뉴

```javascript
$(".menu>li:nth-of-type(4)").click(function () {
  $(this).children(".menu_in").slideToggle();
  $(this).siblings().children(".menu_in").slideUp();
  $(this).toggleClass("on").siblings().removeClass("on");
});
```

### 이벤트 탭

```javascript
$(".tabnav a")
  .click(function () {
    $(".tab_in > div").hide().filter(this.hash).fadeIn();
    $(".tabnav a").removeClass("active");
    $(this).addClass("active");
    return false;
  })
  .filter(":eq(0)")
  .click();
```

### Stockist 매장 탭

```javascript
$(".stock a")
  .click(function () {
    $(".map_in > div").hide().filter(this.hash).fadeIn();
    $(".stock a").removeClass("on");
    $(this).addClass("on");
    return false;
  })
  .filter(":eq(0)")
  .click();
```

### Button Hover

```css
.button:hover {
  color: #fff;
  background: #ff0000;
}
.button:hover:before,
.button:hover:after {
  height: 100%;
}
.button:hover .button_t:before,
.button:hover .button_t:after {
  width: 100%;
}
```

### 스크롤 애니메이션

AOS CSS는 유지하고, `css zoom`과 좌표가 맞도록 `aos-io.js`에서 `getBoundingClientRect` 기준으로 `aos-animate`를 토글합니다.

```html
<img data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom" ... />
<img data-aos="flip-right" ... />
```

### 눈 내리는 효과 (메인)

```javascript
const generatesnowFlake = (timeout = 0, init = false) => {
  /* crypto.randomUUID() 기반 snowflake 생성 */
};
```

## 디자인 시스템

### 브랜드 키워드

```
BE BOLD. BE YOU. BE ZZZY.

Diversity · Freedom · Passion
```

### 컬러 팔레트

```css
#000;      /* 배경 */
#fff;      /* 텍스트·버튼 */
#ff0000;   /* 포인트 (CTA·Hover) */
#ffb7b7;   /* 서브 (스크롤바·Hover 오버레이) */
#646464;   /* 보조 텍스트 */
#8B8B8B;   /* 비활성·캡션 */
#D8D8D8;   /* 구분·배경 */
```

### 타이포그래피

```css
font-family: "Pretendard";
font-size: 18px;
line-height: 25px;
color: #fff;

.fw h1 {
  font-size: 35px;
  font-weight: 800;
}
```

### 레이아웃 기준

```css
body {
  min-width: 1320px;
  background-color: #000;
}
.fw {
  width: 1320px;
  margin: 50px auto;
}
header {
  position: fixed;
  width: 100%;
  z-index: 99;
}
```

## 페이지 구성


| 페이지            | 파일         | 주요 콘텐츠                                        |
| -------------- | ---------- | --------------------------------------------- |
| **Home**       | index.html | 히어로 · FW26 · NOIRSPRAY 콜라보 · 셀럽               |
| **Brand**      | sub1.html  | About · Logo · Core Value · Moodboard · Color |
| **Collection** | sub2.html  | FW26 룩북 · 시즌 메뉴 아코디언                          |
| **Shop**       | sub3.html  | ZZZY × NOIRSPRAY 상품 그리드 · Hover               |
| **Event**      | sub4.html  | 진행중 / 종료 이벤트 탭                                |
| **Stockist**   | sub5.html  | 성수·홍대·전포 / 백화점·온라인                            |


## 브라우저 지원


| Chrome | Firefox | Safari | Edge   |
| ------ | ------- | ------ | ------ |
| Latest | Latest  | Latest | Latest |


> Desktop 우선 (`min-width: 1320px`). 개별 반응형 레이아웃은 미적용.

## 코딩 컨벤션

### HTML

- 페이지별 단일 HTML 파일 (`index` + `sub1`~`5`)
- header·footer 공통 레이아웃 반복
- 이미지 `alt` 속성
- viewport `width=device-width, initial-scale=1` (Desktop 우선)

### CSS

- 단일 `style.css`로 전 페이지 스타일 관리
- 클래스 기반 레이아웃 (`.fw`, `.collab`, `.tab`, `.stock` 등)
- Hover에 `transition: all 500ms ease` 패턴

### JavaScript

- jQuery 3.7.1 + Vanilla JS
- jQuery: 탭·아코디언·서브메뉴
- Vanilla JS: snowflake, `viewport-fit.js`, `aos-io.js`

## Live View / Repository


| 구분             | 링크                                                                 |
| -------------- | ------------------------------------------------------------------ |
| **Live View**  | [https://kimgsun.github.io/ZZZY/](https://kimgsun.github.io/ZZZY/) |
| **Repository** | [https://github.com/kimgsun/ZZZY](https://github.com/kimgsun/ZZZY) |


## 라이선스

© **ZZZY**. All rights reserved.

---

<div align="center">

**BI/BX Design · UI Design · Publishing** (Portfolio)

Built with HTML5, CSS, JavaScript, jQuery, AOS

</div>