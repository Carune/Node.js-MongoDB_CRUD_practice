Node.js 와 MongoDB를 활용한 CRUD 게시판 프로젝트입니다.
해당 디렉토리로 이동 후 'npm start'로 서버를 시작합니다.
![image](https://user-images.githubusercontent.com/99489461/211261863-356bd5da-5033-453e-9f6d-1e7c5fd88f8b.png)

'npm i' 커맨드로 'express', 'morgan', 'nodemon', 'ejs', 'body-parser', 'dotenv', 'mongoose', 'axios' 패키지를 다운받아 사용하였습니다.

--------------------------------------------------------------------------------------------------------------

Structure
-assets(css 스타일 설정과 동적 기능을 수행하는 js 파일로 구성)
-server(model(DB 스키마 구성), controller(CRUD 로직 수행), services(렌더링을 사용한 서비스 로직), routes(HTTP 메소드에 따른 route 설정), db(MongoDB와 Node.js 연결))
-views(자바스크립트가 내장되어 있는 html 파일인 ejs 파일로 구성)
-server

![image](https://user-images.githubusercontent.com/99489461/211262791-88e70101-8fd6-4de3-af56-dfe160706bb7.png)


--------------------------------------------------------------------------------------------------------------

Main Page
![image](https://user-images.githubusercontent.com/99489461/211263835-eaca76ef-3afd-4140-9283-0916a5e1094b.png)

--------------------------------------------------------------------------------------------------------------

Add User
![image](https://user-images.githubusercontent.com/99489461/211263989-ad2ad3d1-29fe-4e9f-966b-f71f44c55ee9.png)

![image](https://user-images.githubusercontent.com/99489461/211264054-1efadcd3-4dc0-4121-abb9-ac60f4a23a26.png)

MongoDB에서도 확인 가능합니다.
![image](https://user-images.githubusercontent.com/99489461/211264122-f048fef4-3d41-495a-8269-c8db3e39210c.png)

--------------------------------------------------------------------------------------------------------------

메인페이지 Action의 연필 버튼을 클릭하면 Update User를 수행합니다.
![image](https://user-images.githubusercontent.com/99489461/211264268-63601878-cecb-4fb9-9ba6-ba6d15c726c4.png)
![image](https://user-images.githubusercontent.com/99489461/211264317-5619b978-ddcf-4fdc-a15c-f01314b31996.png)
![image](https://user-images.githubusercontent.com/99489461/211264418-03b3596d-252d-4d12-8c97-79ef039dac89.png)

--------------------------------------------------------------------------------------------------------------

메인페이지 Action의 X 버튼을 클릭하면 Delete User를 수행합니다.
![image](https://user-images.githubusercontent.com/99489461/211264593-5777c120-66aa-4ee7-87ef-e7d93928a00a.png)
![image](https://user-images.githubusercontent.com/99489461/211264619-ffd5c805-01b4-4532-a150-d897eb08e76d.png)
![image](https://user-images.githubusercontent.com/99489461/211264659-57dcd7c5-4727-484f-a5fb-74e46e163b25.png)

--------------------------------------------------------------------------------------------------------------

config.env에 포트와 MongoDB 연결을 위한 설정을 표기하였습니다.
![image](https://user-images.githubusercontent.com/99489461/211264792-3700c3d0-43a4-4079-bdc9-506c8f5fefd9.png)

Mongoose 의 StrictQuery 관련 deprecationwarning 으로 해당 코드 추가하였습니다.
![image](https://user-images.githubusercontent.com/99489461/211265241-fd040bc2-0ff5-4f4a-bafd-1270c222e6ba.png)
