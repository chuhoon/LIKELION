# 7일차

> Don't forget to code your dream.

HTML Table에 대해 배우고 사진을 보고 코드를 짜보는 방법으로 학습했다. 기본적인 태그들을 배우고 HTML -> CSS 넘어갔다.

- 실습(Table)

  - 방법1
    ![표1](https://user-images.githubusercontent.com/68219145/161704256-f06210e5-1a40-409d-9e52-02180e5ff2bb.PNG)

  - 방법2
    ![표2](https://user-images.githubusercontent.com/68219145/161704270-679280e2-574a-4b61-8d10-c88e4cb78a8d.PNG)

## HTML Living Standard

- HTML Living Standard(https://html.spec.whatwg.org/) Multipage Version

## HTML 정리

- 시멘틱한 마크업으로 코딩한다? 사람이나 기계(특히 검색엔진)가 해당 마크업을 읽고 그 의도를 알 수 있는 코드로 작성하세요.

- h1 ~ h6은 익명 영역을 생성

- meta "og:title"
  - Open Graph Protocol(Facebook...)
  - https://ogp.me/

```html
<title>The Rock (1996)</title>
<meta property="og:title" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
...
</head>
...
```

- meta에 "twitter:description"

  - https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup

- Entity Code

  - https://entitycode.com/

- table : div만으로도 table을 만들 수도 있지만 요즘 사용하지 않는다.

## 인라인 vs 블럭

- 인라인방식 : 인라인은 높이와 넓이를 조절하지 못함 자기의 컨텐츠 넓이만큼을 차지한다.
- 블럭방식 : 높이와 넓이를 조절하는 것이 가능하다.
  - display : block; 높이와 넓이를 조절 가능한 것
  - display : inline; 높이와 넓이가 조절 불가능 자기 컨텐츠 넓이 만큼 차지
  - display : inline-block; 높이와 넓이 조절 가능, 텍스트와 같이 옆으로 넘어감
