#24일차

유용한 공부 사이트
:crescent_moon: [CS교육에서 누락된 내용](https://missing-semester-kr.github.io/)
:crescent_moon: [커밋 메세지에 관하여](https://gyuwon.github.io/blog/2021/04/04/commit-message-driven-development.html)
:crescent_moon: [커맨드라인 학습법](https://www.44bits.io/ko/post/linux-and-mac-command-line-survival-guide-for-beginner)
:crescent_moon: [깃허브에서 제공하는 깃 cheat sheet](https://github.com/github/training-kit/blob/master/downloads/github-git-cheat-sheet.pdf)
:crescent_moon: [gitignore](https://www.toptal.com/developers/gitignore)

유용한 실습 사이트
:sunny: [git-tutorial](https://github.com/Violet-Bora-Lee/git-tutorial)
:sunny: [git-branch](https://learngitbranching.js.org/?locale=ko)
:sunny: [git-명령어](https://git-school.github.io/visualizing-git/)

Git Extension 설치

- Git Graph
- Git History
- GitLens

<br>

> Git Bash 명령어

pwd : 현재 작업 위치
cd : 폴더 이동
ls : 리스트 보여준다.
ls -a : 숨김 파일까지 보여준다.
ls -l : 리스트 추가 정보까지 보여준다.
ls -al : 추가 정보 및 숨김 파일 보여준다.

<br>

> Vi 사용법

vim test.txt : test.txt가 없을 때 생성. 있으면 열기. vim 에디터를 처음 켰을 때는 명령 모드로 진입하는데 뭔가 입력하고 싶을 때는 i를 눌러서 INSERT 입력모드로 바꾼다. 입력하고 esc하고 :w는 저장까지 하는 것이고 :wq는 저장하고 나가기이다.

잘못해서 강제로 vim을 닫았을 때 문제해결 방법 swp파일 만들어졌을 때 문제 해결 방법
-> R(Recover) 입력 그리고 Enter 입력을 한다. 정상적으로 파일을 복구해도 swp 파일은 남는다. 복구하고 swp 파일까지 삭제해야지 오류가 안뜬다.

<br>

> 2개의 js 파일의 차이점 찾는 방법

diff : 특정 명령어를 사용해 두 파일의 차이점을 찾는다.
ex) diff game_old.js game_new.js

<br>

> 다양한 버전 관리 시스템

|                     | 에디터 자유도 | 오프라인 사용 | 수동저장   |
| ------------------- | ------------- | ------------- | ---------- |
| 수동저장(이름 변경) | 높음          | 가능          | 직접       |
| Dropbox             | 높음          | 불가능        | 불가능     |
| 구글드라이브        | 없음          | 불가능        | 불가능     |
| 위키백과            | 없음          | 불가능        | 직접       |
| Git                 | 높음          | 가능          | 직접(커밋) |
| SVN                 | 높음          | 줄가능        | 직접       |

<br>

> 커밋이란?

- git의 기본 단위
  -> 커밋은 하나의 독립적인 버전을 나타낸다. 커밋마다 설명이 담긴 Message가 있다.
- Git에서는 얼마나 자주 커밋을 만들어야 하는가?
  -> 커밋은 노리적 변경이 있을 때 하나 만든다. 커밋의 크기가 작을수록 좋다. (개발자가 저장해야겠다고 마음 먹었을 때)

<br>

> 리포지토리란?

- 여러 파일을 하나로 모은 저장소이다.
- 프로젝트 하나에 여러 리포지토리가 있을 수 있다.
- 작은 프로젝트는 프로젝트 하나 당 리포지토리가 하나인 경우도 많다.
- 리포지토리 클론 받기(다른 사람이 만든 저장소를 다운 받는 것)
  - 명령어 : git clone
  - ex) git clone https://github.com/udacity/asteroids.git
  - asteroids라는 폴더에 git clone 된다.
  - git log로 commit 이력 확인 가능
- 로그 보기
  - git log
  - git log --stat
- 커밋 간 변경된 사항 보기
  - git log로 커밋의 아이디를 확인 후에 git diff 커밋아이디1 커밋아이디2 를 사용해 2개의 커밋을 비교해서 변경도니 사항을 확인한다.
  - 참고 : diff 결과에 색 넣기
    - git config --global color.ui auto
  - 이렇게 보면 시각적으로 보기 불편하기에 vs code extension or source tree를 사용해 본다. vs code에서 graph extension을 사용해 커밋 ID를 검색해서 찾아 볼 수 있다.

<br>

> 체크아웃이란?

- index.html 파일 크롬에서 열었을 때 버그가 있을 시에
- 커밋 체크아웃해서 특정 시점의 코드 상태를 확인한다.
  - git checkout 커밋ID
  - 어느 시점에 버그가 있는 코드가 추가 되었는지 추적할 때 사용한다.
- 체크아웃을 사용해 트러블슈팅 하기 (버그 잡기)

  - 가장 최근 커밋 바로 전 커밋부터 하나씩 체크아웃 해보기
  - 커밋을 체크아웃 할 때마다 index.html 실행해, 버그가 사라졌는지 확인해보기
    ex) 예제 a couple missing ends... commit 아이디 확인 game.js에서 코드 손실 발견
  - HEAD 정의
    -> 현재 체크아웃 한 브랜치의 가장 최신 커밋을 가리키는 포인터이다.

- 깃 디렉터리 git init 명령어를 입력하면 자동으로 생성된다.
- git log 입력
  - HEAD 현재 체크아웃한 브랜치의 가장 최신 커밋을 가리킨다.
- git status 입력
  - 깃의 상태 확인하기(자세한 내용 구글링)

> 스테이징 영역이란?

![스테이징영역1](https://user-images.githubusercontent.com/68219145/165889531-1d983ffe-fb70-417e-ac78-8d095528b2b9.PNG)

![스테이징영역2](https://user-images.githubusercontent.com/68219145/165889532-5da62639-2a52-4ba4-a060-aabbd5175a15.PNG)

- git add
  - working directory에 있는 파일 중 원하는 파일을 staging area에 추가한다.
  - git add 파일명
  - git status로 상태 확인한다.
- 실수로 파일을 add한 경우
  - git reset으로 staging area에 있는 파일을 working directory로 옮길 수 있다.

Quiz

- Q) 리포지토리를 새로 만들면 어떤 일이 생기나요? 리포지토리는 왜 만들까요?
  A) .git 디렉터리가 생긴다. 해당 리포지토리 안에 있는 소스코드를 버전 관리하기 위해 한다.
- Q) 스테이징 영역과 워킹 디렉터리의 차이는 무엇인가요? 두 영역을 분리했을 때 어떤 이점이 있나요?
  A) staging영역에 있는 파일만 커밋의 대상이 된다. 두 영역을 분리 했을 때는 원하는 파일만 커밋에 포함되게끔 할 수 있다.
- Q) 어떤 식으로 staging area를 활용해야 한 커밋당 하나의 논리적 변화만 담을 수 있을까요?
  A) staging영역에는 내가 만들고자하는 커밋에 해당되는 파일만 올린다.
- Q) 언제 브런치를 새로 만들어야 할까요? 브랜치를 만드는게 커밋 이력 관리에 도움이 될까요?
  A) 특정한 목적을 가지고 작업을 할 때 만든다.

<br>

> 커밋 만들기

- git commit

  - git commit -m "커밋 메세지"
  - 커밋 메세지 : 해당 커밋에서 어떤 변경이 있었는지 설명하는 메세지이다.
  - ex) 원하는 디렉터리로 이동
    git commit -m "커밋 메세지"
    git log 입력해서 이력에 커밋 나타나는지 확인
    git status 입력해서 상태 확인하기

- git ignore
  - 보안상 위험, 프로젝트와 관계 없는, 용량이 큰 파일 등을 git add에 포함 시키기 싫을 때 .gitigonre이라는 디렉토리를 만들어 무시할 파일을 넣는다.

<br>

## 브랜치와 브랜치 병합

> 브랜치란?

- 브랜치는 어떤 특정한 목표를 가지고 코드를 수정하기 시작할 때 만든다. ex) 기능 추가, 버그 수정 등등

![깃브랜치](https://user-images.githubusercontent.com/68219145/165894629-cd809e9c-f474-490d-b5c3-7bc07f6e4f08.PNG)

- git branch

  - git branch 입력해서 현재 어던 브랜치가 있는지 확인한다.
  - git branch easy-mode 입력해서 easy-mode 브랜치를 만든다.
  - git branch를 다시 입력해서 새로운 브랜치가 잘 만들어졌는지 확인한다.
  - git checkout easy-mode 입력해서 easy-mode 브랜치 체크아웃한다. 즉 브랜치를 변경하는 것이다. git switch easy-mode로도 변경 가능하다.

- 코드 변경 후에 변경분 커밋하기

  - git status로 상태 확인
  - git add game.js
  - git commit -m "커밋메세지"
  - git status 입력해서 커밋 잘 되었는지 확인하기

- 다른 동료에 의해 새로운 기능이 추가될때
  - 원역에 이미 coins라는 branch가 있고 다른 동료에 의해 추가 되었을 때 사용한다.
  - 브랜치 이름이 coins일 때 git checkout coins로 체크아웃 한다.
  - coins 브랜치가 master 브랜치의 어떤 커밋에서 갈려져 나왔는지 확인한다. git log --graph --oneline master coins 또는 extension git graph를 통해 확인 가능하다.

## 오픈소스 기여를 통한 협업 맛보기

1. 알맞는 레포를 찾아 들어간다.
2. fork를 뜬다.
3. 내 폴더에 git을 clone해 가져온다.
   ex) git clone (깃코드)
4. branch를 만들고 알맞는 부분을 수정 및 번역한다.
5. add와 commit 한다.
6. 자신의 포크로 푸시한다.
7. git push --set-upstream origin docs/1311로 자신의 계정의 저장소로 푸시한다.
