## HTML Living Standard
* HTML Living Standard(html.spec.whatwg.org) Multipage Version

## HTML 요약

* 시멘틱한 마크업으로 코딩한다? 사람이나 기계(검색엔진)가 해당 마크업을 읽고 그 의도를 파악할 수 있는 코드로 작성하라

* h1 ~ h6 : 익명 영역을 생성함으로서 문단이나 article에 넣기를 권함

* meta "og:title" :
    * Open Graph Protocol(Facebook...)
    * http://ogp.me/

```HTML
<html prefix="og: https://ogp.me/ns#">
<head>
<title>The Rock (1996)</title>
<meta property="og:title" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
...
</head>
...
</html>
```

* meta에 "twitter:description"
    * https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup


* Entity Code
    * http://entitycode.com/

* table : div만으로도 table을 만들 수도 있으나 요즘은 사용하지 않습니다.


