export default function Loading() {
  return <h2>Loading....</h2>;
}

// 해당 loading.tsx는 서버에서 데이터 fetch 등 작업에 시간이 소요되어
// 클라이언트에 ui가 보이지 않는 것을 방지함.

// 전체 ui에서 시간이 걸리는 부분은 일부분인데 페이지 전부를 보이지 않는 것은 사용하는데 불편함이 있음
// next js는 해당 파일로 그러한 과정을 방지함.

// 단순히 loading.tsx라는 이름의 파일을 만들면 서버에서 작업을 하는 동안 위 파일을 보여주고
// 서버에서 작업이 완료되면 콘텐츠를 교체함.

// next js는 streaming을 사용하면서
// 한 페이지를 작은 html 조각으로 나눠 준비된 부분을 브라우저에 줄 수 있다.
