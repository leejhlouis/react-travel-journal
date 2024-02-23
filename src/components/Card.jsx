export default function Card(props) {
  return (
    <div className='flex sm:items-center flex-col sm:flex-row gap-8'>
      <div className='card__img-container max-w-80 sm:w-44 h-60 overflow-hidden rounded-lg'>
        <img
          className='w-full h-full object-cover hover:scale-125 duration-300 ease-in-out'
          src={props.imageUrl}
        />
      </div>
      <div className='sm:w-3/4'>
        <div className='flex items-center gap-x-4 mb-2'>
          <div className='flex items-center gap-x-1'>
            <i className='ri-map-pin-2-fill'></i>
            <p className='tracking-widest uppercase'>{props.location}</p>
          </div>
          {props.googleMapsUrl && (
            <a
              href={props.googleMapsUrl}
              className='underline text-gray-600'
            >
              View on Google Maps
            </a>
          )}
        </div>
        <h1 className='text-3xl font-bold mb-6'>{props.title}</h1>
        <p className='font-bold mb-3'>
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
