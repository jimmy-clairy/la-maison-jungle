import "../styles/Cart.css"

export default function Cart() {
    const plantes = [{name:"Monstera",price:8},{name:"Lierre",price:10},{name:"Fleurs",price:15}]
    
  return (<div className="lmj-cart">
  <h2>Panier</h2>
  <ul>
    {plantes.map((plante, index) => <li key={index}>{plante.name} : {plante.price} €</li>)}
  </ul>
  <p>Total : {plantes.reduce((a,b) => a + b.price,0)} €</p>
    </div>)
}
