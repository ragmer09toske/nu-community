import React from 'react'
const people = [
    {
      name: 'Retsepile Raymond Shao',
      role: 'Founder / CEO-Software Engineer',
      imageUrl:
        '/people/1.png',
    },
    {
        name: 'Kamahelo Khosana',
        role: 'COO-Economist',
        imageUrl:
          '/people/4.png',
      },
      {
        name: 'Tankiso Fuma',
        role: 'Senior Software Engineer',
        imageUrl:
          '/people/2.png',
      },
      {
        name: 'Batloung Masoabi',
        role: 'Senior Software Engineer',
        imageUrl:
          '/people/5.png',
      },
      {
        name: 'Lemohang Makintane',
        role: 'Senior Software Engineer',
        imageUrl:
          '/people/6.png',
      },
  ]
const People = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our leadership</h2>
          {/* <p className="mt-6 text-lg leading-8">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p> */}
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default People;