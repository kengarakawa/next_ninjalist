import  ninjaStyles  from '../../styles/Ninjas.module.css'
import Link from 'next/link'


/// this method will be run in the BUILD TIME
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return {
        props : {
            ninjas : users 
        }
    }

}

const index = ({ninjas}) => {
    return (
        <div>
            <h1>List all Ninjas here</h1>            

            { ninjas.map( (ninja,index) => (
               
               <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
                   <a className={ninjaStyles.single}>
                       <h3>{ninja.name}</h3>
                   </a>
               </Link>

            ))}



        </div>
    )
}

export default index
