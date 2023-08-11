import Link from "next/link";
import router, {useRouter} from "next/router";

export default function routes() {
  const style = [
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }
  ];
  
  function simpleNavigation(url) {
    router.push(url);
  }

  function navigationWithParams() {
    router.push({
      pathname: '/routes/params',
      query: {
        id: 123,
        name: 'Ana',
      },
    });
  }

  return (
    <div>
      <h1>Routes index</h1>

      <ul>
        <Link href='/routes/params?id=12&name=Jose'>
          <li>Params</li>
        </Link>
        
        <Link href='/routes/123/search'>
          <li>Search</li>
        </Link>

        <Link href='/routes/123/Daniel'>
          <li>Daniel</li>
        </Link>
      </ul>

      <div style={style[0]}>
        <button onClick={navigationWithParams}>Params</button>
        <button onClick={() => router.push('/routes/123/search')}>Search</button>
        <button onClick={() => simpleNavigation('/routes/123/Daniel')}>Daniel</button>
      </div>
    </div>
  );
}