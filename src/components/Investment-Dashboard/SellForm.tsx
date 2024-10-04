import { Button } from "@/components/ui/button";

export default function SellForm({ stockName, stockPrice, onClose }:any) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{stockName}</h2>
      <p className="text-lg mb-4">Price: ₹{stockPrice}</p>

      <div className="flex gap-4 mt-4">
        <div className="w-full">
          <label>Quantity</label>
          <input type="number" className="w-full p-2 rounded border border-gray-300" placeholder="Enter quantity" />
        </div>

        <div className="w-full">
          <label>Order Type</label>
          <select className="w-full p-2 rounded border border-gray-300">
            <option>Market</option>
            <option>Limit</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Button className="bg-green-600 text-white">Review Order</Button>
        <Button className="bg-gray-500 text-white" onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
}
