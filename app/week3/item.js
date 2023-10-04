export default function Items( {name, quantity, category }) {
    //Outputs items from Item list
    return (
        <div className="p-2 m-4 bg-slate-900 max-w-sm">
            <h2 class="text-xl font-bold">Item: {name}</h2> 
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}