import Nav from './components/Nav'
import Card from './components/Card'
import data from './data'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.key}
        {...item}
      />
    )
  })

  return (
    <div>
      <Nav />
      <div className='flex flex-col gap-y-12 px-4 my-8 md:p-0 max-w-screen-md mx-auto'>{cards}</div>
    </div>
  )
}
