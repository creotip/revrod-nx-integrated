import { shuffle } from '@revrod-nx-integrated-monorepo/shared'

export default async function Index() {
  const shuffled = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])

  console.log(shuffled)
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1
              style={{
                color: 'blue',
              }}
            >
              <span> Hello there, </span>
              Welcome revrod-website 👋
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
