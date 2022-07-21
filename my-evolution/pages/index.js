import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home(){
  const router = useRouter()

  const handleClick = () => {
    console.log('your order is placed!')
    router.push('/product')
  }

  return <div>
    <h1>Hola welcome to Haven</h1>
    <Link href="/blog/">
      <a>Goto blog</a>
    </Link> - || -  
    <Link href="/product">
      <a> Goto product</a>
    </Link>
    <button onClick={handleClick} >
      Place Order
    </button>
  </div>
}