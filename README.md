## RESTful API using MongoDB & Mongoose & Express
VELOPERT 블로그에 작성한 강좌에 사용된 프로젝트 입니다.  
MongoDB, Mongoose 와 Express 를 사용하여 간단한 RESTful API 를 구현합니다.  


```
$ npm install
$ node app.js
```

### API 목록
| ROUTE                     | METHOD | DESCRIPTION               |
|---------------------------|--------|---------------------------|
| /api/books                | GET    | 모든 book 데이터 조회     |
| /api/books/:book_id       | GET    | _id 값으로 데이터 조회    |
| /api/books/author/:author | GET    | author 값으로 데이터 조회 |
| /api/books                | POST   | book 데이터 생성          |
| /api/books/:book_id       | PUT    | book 데이터 수정          |
| /api/books/:book_id       | DELETE | book 데이터 제거          |

push
실행순서
1. mongodb실행
	mongod
	mongo
2. app실행

0. 환경설정
- babel
npm i --save-dev babel-core babel-preset-es2015 babel-polyfill babel-plugin-transform-es3-member-expression-literals babel-plugin-transform-es3-property-literals
.babelrc파일생성
:{
	"presets": ["es2015"],
	"plugins": [
	"transform-es3-property-literals",
	"transform-es3-member-expression-literals"
	]
}