<div align="center">

# ZZZY

### 패션 브랜드 웹사이트

**BE BOLD. BE YOU. BE ZZZY.**

[Live View](https://kimgsun.github.io/ZZZY/)

</div>

---

## 📌 프로젝트 소개

개성 있는 패션 브랜드 **ZZZY** 컨셉의 BI/BX 및 웹사이트입니다. BI/BX 디자인, UI 디자인, 퍼블리싱을 담당한 개인 프로젝트입니다.

다양성·자유·열정을 핵심 가치로 삼는 ZZZY의 브랜드 아이덴티티를 웹 UI와 인터랙션까지 일관되게 연결했습니다. FW26 컬렉션과 ZZZY × NOIRSPRAY 콜라보레이션을 중심으로 메인·브랜드·컬렉션·샵·이벤트·스토어 페이지를 구성했습니다.

| 항목     | 내용                                            |
| -------- | ----------------------------------------------- |
| **형태** | 개인 프로젝트                                   |
| **기간** | 2023.10 – 2024.02                               |
| **담당** | BI/BX 디자인 · UI 디자인 · 퍼블리싱 |

## ✨ 주요 기능

- 🧭 **사이드바 네비게이션** - CSS checkbox 기반 햄버거 메뉴, X 전환 애니메이션
- 📂 **Shop 서브메뉴** - jQuery slideToggle 아코디언 (NOIRSPRAY / New In / Outer 등)
- 📋 **컬렉션 아코디언** - col_nav slideToggle (FW26 · SS26 · FW25 · SS25 메뉴 UI), 활성 항목 `.on` 클래스
- 🎉 **이벤트 탭** - 진행중 / 종료 이벤트 필터, fadeIn 전환
- 📍 **Stockist 탭** - Flagship Store / Department Store / Online 매장·온라인 정보 전환
- ❄️ **눈 내리는 효과** - 메인 페이지 Vanilla JS snowflake 애니메이션
- ✨ **스크롤 애니메이션** - AOS(Animate On Scroll) zoom-in·flip-right 등 적용
- 🖱️ **Button Hover** - 브랜드 레드(#ff0000) 배경·테두리 라인 애니메이션
- 🛍️ **상품 Hover** - 앞/뒤 이미지 전환, 상품명·가격 레드 전환

## 🛠️ 기술 스택

### Frontend

<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery"/>
  <img src="https://img.shields.io/badge/AOS-111111?style=for-the-badge" alt="AOS"/>
</div>

### Design & Tools

<div>
  <img src="https://img.shields.io/badge/Adobe_XD-FF61F6?style=for-the-badge&logo=adobexd&logoColor=white" alt="Adobe XD"/>
  <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white" alt="Photoshop"/>
  <img src="https://img.shields.io/badge/Illustrator-FF9A00?style=for-the-badge&logo=adobeillustrator&logoColor=white" alt="Illustrator"/>
  <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="VS Code"/>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages"/>
</div>

## 📂 프로젝트 구조

```
ZZZY/
├── index.html                   # 메인 (Home) — 히어로 이미지·FW26·콜라보·셀럽
├── sub1.html                    # Brand — About · Logo · Core Value · Moodboard · Color
├── sub2.html                    # Collection — FW26 룩북 · 시즌 메뉴 아코디언
├── sub3.html                    # Shop — ZZZY × NOIRSPRAY 상품 목록·Hover
├── sub4.html                    # Event — 진행중/종료 이벤트 탭
├── sub5.html                    # Stockist — 오프라인·백화점·온라인 매장 정보
├── README.md
├── css/
│   └── style.css                # 전체 페이지 스타일
├── script/
│   └── js.js                    # jQuery 인터랙션 + 눈 효과
└── images/
    ├── main/                    # 홈 히어로·FW26·콜라보·셀럽·헤더·푸터
    ├── brandstory/              # Brand 페이지 이미지
    ├── collection/              # Collection 시즌 이미지
    ├── store/                   # Shop 상품 이미지
    ├── event/                   # Event 이미지
    └── stockist/                # Stockist 매장 이미지
```

## 📐 퍼블리싱 포인트

| 항목             | 내용                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Layout**       | Desktop 우선 (body min-width: 1320px, viewport=device-width). 고정 헤더 + 사이드바 메뉴 |
| **Key Function** | jQuery 탭·아코디언·서브메뉴, AOS 스크롤 애니메이션, CSS checkbox 햄버거, Vanilla JS snowflake, Button·상품 Hover |
| **Web Standard** | 시맨틱 태그(header, footer), alt 속성, Chrome/Firefox/Safari/Edge 최신 버전 대상                                          |

## 🎯 핵심 기능 상세

### 1️⃣ 사이드바 네비게이션 (전 페이지 공통)

```css
/* CSS checkbox + label로 햄버거 ↔ X 전환 */
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

### 2️⃣ Shop 서브메뉴 (js.js)

```javascript
// Shop 메뉴 클릭 시 slideToggle, 형제 메뉴 slideUp
$(".menu>li:nth-of-type(4)").click(function () {
  $(this).children(".menu_in").slideToggle();
  $(this).siblings().children(".menu_in").slideUp();
  $(this).toggleClass("on").siblings().removeClass("on");
});
```

### 3️⃣ 이벤트 탭 (js.js)

```javascript
// 탭 클릭 시 fadeIn 전환, active 클래스 토글
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

### 4️⃣ Stockist 매장 탭 (js.js)

```javascript
// Flagship / Department / Online 탭 전환
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

### 5️⃣ Button Hover (style.css)

```css
/* Hover 시 브랜드 레드 배경 + 테두리 라인 애니메이션 */
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

### 6️⃣ 스크롤 애니메이션 (AOS)

```javascript
AOS.init({ duration: 1500 });
```

```html
<img data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom" ... />
<img data-aos="flip-right" ... />
```

### 7️⃣ 눈 내리는 효과 (js.js — 메인 페이지)

```javascript
// crypto.randomUUID() 기반 snowflake 생성, CSS 변수로 크기·위치·낙하 속도 제어
const generatesnowFlake = (timeout = 0, init = false) => {
  /* ... */
};
```

## 🎨 디자인 시스템

### 브랜드 키워드

```
BE BOLD. BE YOU. BE ZZZY.

Diversity · Freedom · Passion
```

### 컬러 팔레트

```css
#000;      /* 배경 (Black) — 브랜드 고급스러움·현대적 느낌 */
#fff;      /* 텍스트·버튼 (White) — 깔끔하고 심플한 확장 */
#ff0000;   /* 포인트 (Red) — 열정·에너지, CTA·Hover·강조 */
#ffb7b7;   /* 서브 (Light Pink) — 스크롤바·Hover 오버레이 */
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

/* 섹션 타이틀 */
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
} /* 컬렉션 섹션 */
header {
  position: fixed;
  width: 100%;
  z-index: 99;
} /* 고정 헤더 */
```

## 📄 페이지 구성

| 페이지         | 파일       | 주요 콘텐츠                                                            |
| -------------- | ---------- | ---------------------------------------------------------------------- |
| **Home**       | index.html | 히어로 이미지·FW26 컬렉션·NOIRSPRAY 콜라보·셀럽 섹션                  |
| **Brand**      | sub1.html  | About Us · Brand Story · Logo Concept · Core Value · Design Strategy · Moodboard · Color |
| **Collection** | sub2.html  | FW26 컬렉션 룩북 · 시즌 메뉴 아코디언 (SS26 · FW25 · SS25)      |
| **Shop**       | sub3.html  | ZZZY × NOIRSPRAY 상품 그리드·앞/뒤 Hover                       |
| **Event**      | sub4.html  | 진행중(FW26 Season Off·인스타그램·셀럽샵) / 종료(black friday·popup)  |
| **Stockist**   | sub5.html  | 성수·홍대·전포 스토어 / 백화점·온라인 채널                             |

## 🌐 브라우저 지원

| Chrome    | Firefox   | Safari    | Edge      |
| --------- | --------- | --------- | --------- |
| ✅ Latest | ✅ Latest | ✅ Latest | ✅ Latest |

> Desktop 우선 설계 (min-width: 1320px). 개별 반응형 레이아웃은 미적용.

## 📋 코딩 컨벤션

### HTML

- 페이지별 단일 HTML 파일 구조 (index + sub1~5)
- header·footer 공통 레이아웃 반복
- 이미지 alt 속성 필수
- viewport `width=device-width, initial-scale=1` (Desktop 우선)

### CSS

- 단일 `style.css` 파일로 전 페이지 스타일 관리
- 클래스 기반 레이아웃 (`.fw`, `.collab`, `.tab`, `.stock` 등)
- `:hover` 전환에 `transition: all 500ms ease` 패턴
- 커스텀 스크롤바 (thumb `#ff0000`, track `#ffb7b7`)

### JavaScript

- jQuery 3.7.1 + Vanilla JS 혼용
- jQuery: 탭·아코디언·서브메뉴 slideToggle
- Vanilla JS: snowflake 애니메이션 (메인)
- AOS 2.3.1 CDN: 스크롤 진입 애니메이션

## 🔗 Live View / Repository

| 구분           | 링크                                                               |
| -------------- | ------------------------------------------------------------------ |
| **Live View**  | [https://kimgsun.github.io/ZZZY/](https://kimgsun.github.io/ZZZY/) |
| **Repository** | [https://github.com/kimgsun/ZZZY](https://github.com/kimgsun/ZZZY) |

## 📄 라이선스

© **ZZZY**. All rights reserved.

---

<div align="center">

**BI/BX Design · UI Design · Publishing** (Portfolio)

Built with HTML5, CSS, JavaScript, jQuery, AOS

</div>
