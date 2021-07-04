## Asynchronous call

서버와 클라이언트와 통신은 모두 비동기 요청으로 이루어진다.
서버가 언제 응답을 줄지 알 수 없기 때문이다.

때문에 개발을 할때에서는 서버로 부터 응답이 온 후에(비동기) 다음 로직이 실행될 수 있도록 콜백, 프로미스 등 여러가지 처리를 한다.
가령 다음 코드처럼 말이다.

``` javascript
async getData() {
  const data = await api.fetchData() // await. 응답이 올때까지 기다려.
  console.log(data); // 응답이 오면 data를 표시해줘.
}
```

이러한 비동기 요청의 응답을 기다린 이후, 다음 코드를 실행하는 패턴이 나에게는 당연하다고 여겨지는 패턴이다.
이러한 http call 을 처리해주는 jQuery.ajax 에 대해 간단히 살펴보자.

## jQuery.ajax

블라블라

## jQuery.ajax.async = false

레거시 프로젝트에서 api 요청을 할때에는 jQuery.ajax 를 사용하곤 한다.

이 프로젝트는 fetch, axios 등을 사용하지않고 jQuery.ajax 를 통해 api 요청을 웹핑한다.\
사용부에서 이해가 안가는 부분을 발견하였는데 다음과 같다.

``` javascript
getData() {
  const data = api.fetchData() // 어..? 비동기 처리를 안하네..?
  console.log(data); // 아니 비동기 처리를 안했는데 어떻게 이 시점에 response 를 받을 수 있지??
}
```

이는 여태까지 써왔던 패턴과 사뭇 다른데, 이러한 패턴이 가능한 이유를 풀어보면 다음과 같았다.\
async 란 $.ajax 옵션을 사용하는것이다.

``` javascript
plainSyncCall() {
  const res =  $.ajax({
    method: 'GET',
    url: 'http://localhost:3004/posts/1',
    async: false // 이 녀석이 범인이다.
  })
  console.log(res.responseJSON)
}
```




