import Airtable from 'airtable'


export default ({events}) =>(

  <div>
    test
    {events.map((event)=>(
      <div>
        <div>
          {event.description}
        </div>
        <div>
          {event.date}
        </div>
        <img style={{ maxWidth: 200 }} key={event.image} src={event.image} />
      </div>
    ))}
  </div>

)

export async function getStaticProps(){

  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
  })

  const records = await airtable.base('appoBATQSlYKfaEJy')('Social').select({
    fields:['Description','Date', 'Attachments']
  }).all()

  const events = records.map((event)=>{
    return {
      description: event.get('Description'),
      date: event.get('Date'),
      attatchments: event.get('Attachments'),
    }
  })

  return {
    props: {
      events
    }
  }

}