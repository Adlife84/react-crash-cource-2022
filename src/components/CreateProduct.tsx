export function CreateProduct() {
  return (
    <form>
      <input 
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        />

        <button className="py-2 px-4 border bg-yellow-400 hover:bg-orange-400" type="submit">Submit</button>
    </form>
  );
}
