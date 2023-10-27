# toss slash22 - effective component 컨퍼런스

### example1
- 해당 예제에서 기본이 되는 compound pattern 으로 dropdown 구현한 내용

### example2
- dropdown 을 이용해서 Select 컴포넌트 구현

### example3
- dropdown 을 이용해서 MultiSelect 컴포넌트 구현 (w. checkbox)

### example4
- example3 에서 구현한 내용을 도메인을 분리해서 추상화한 예제

### example5
- 계좌 등록하기 예제로 보는 UI가 다르더라도 데이터 흐름이 동일하기 때문에 dropdown 을 개선해서 Select 느낌으로 계좌 등록하기 기능

### example6
- example5 에서 1차 구현했다면 toss 컨퍼런스 interface 에 맞춰서 작업한 내용
- select 에 children 으로 넘기는데 함수로 넘겨서 처리하고 @toss/react 에서 SwitchCase 컴포넌트를 이용해서 개선
