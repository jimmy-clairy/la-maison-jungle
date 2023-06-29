export default function CareScale({careType,scaleValue}) {

    const scaleType = careType === 'light' ? '☀️':'💧'
    const range = [1,2,3]

    const quantityLabel = {
        1:'peu',
        2:'modérément',
        3:'beaucoup'
    }
    
  return (
        <div style={{cursor:'pointer'}} onClick={() => alert(
            `Cette plante requiert ${quantityLabel[scaleValue]} ${
                careType === 'light' ? 'de lumière' : "d'arrosage"
            }`
        )}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem && <span key={rangeElem.toString()}>{scaleType}</span>
            )}
        </div>
  )
}
