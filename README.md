# devcamper_api

## Custom Error Handling

## MAPQUEST Developer

```
$ yarn add node-geocoder
```

https://developer.mapquest.com/

## Mailtrap

```
$ yarn add nodemailer
```

https://mailtrap.io
<br>
https://nodemailer.com/about/

# API SECURITY

## mongo-sanitize

https://github.com/vkarpov15/mongo-sanitize#readme
<br>
https://github.com/fiznool/express-mongo-sanitize

```
$ yarn add exprss-mongo-sanitize
```

## helmet

여러 공격으로부터 보호해줌 아래사이트에서 확인

https://helmetjs.github.io/

```
$ yarn add helmet
```

## xss-clean

input 태그에 자바스크립트 입력하는 거방지

https://github.com/jsonmaur/xss-clean

```
$ yarn add xss-clean
```

## express-rate-limit

접속제한?

https://github.com/nfriedly/express-rate-limit

```
$ yarn add express-rate-limit
```

## hpp

동일한 파라메터를 배열로 받을 수 있다.

https://github.com/analog-nico/hpp

```
$ yarn add hpp
```

## cors

양방향통신가능하게..?

https://github.com/expressjs/cors

```
$ yarn add cors
```

# Documentation & Deploy

## docgen

https://github.com/thedevsaddam/docgen

- 백앤드 작업 시 postman쓸때
- 브라우저에서 http://localhost:5000/api/v1/bootcamps 와 같은 api에 접속할경우

1. install

   ```bash
   $ brew tap thedevsaddam/cli https://github.com/thedevsaddam/homebrew-cli.git

   $ brew install docgen
   ```

2. postman에서 export하기 (export된 파일은 json형식임)
3. 터미널 열고
   ```bash
   $ docgen build -i dc.postman_collection.json -o index.html
   ```
4. 생성된 index.html을 프로제트내 public폴더에 놓는다.
