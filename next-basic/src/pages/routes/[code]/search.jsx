import { useRouter } from "next/router";
import Link from "next/link";

export default function search() {
  const router = useRouter();
  const code = router.query.code;

  return (
    <div>
      <h1>Routes / {code}& / Search!!!</h1>
      <Link href='/routes'>
          <button>back</button>
      </Link>
    </div>
  );
}