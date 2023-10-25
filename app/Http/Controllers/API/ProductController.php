<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Models\Product;
use App\Http\Resources\ProductResource;

class ProductController extends BaseController
{
    public function index(Request $request)
    {
        $user = auth()->guard()->user();

        $latest = $request->query('latest') === 'true';

        $productsQuery = Product::where('user_id', $user ? $user->id : null);

        if ($latest) {
            $productsQuery->latest();
        }

        $products = $productsQuery->get();
        return $this->sendResponse(ProductResource::collection($products), 'List Data Product');
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name_product' => 'required',
            'image_product' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'qty' => 'required|numeric',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $product = new Product;
        $product->name_product = $request->name_product;
        $product->description = $request->description;
        $product->qty = $request->qty;
        $product->user_id = Auth::user()->id;

      
            $image = $request->file('image_product');
            $imagePath = $image->store('product_images', 'public');
            $product->image_product = $imagePath;
       

        $product->save();

       return $this->sendResponse(new ProductResource($product), 'Product added successfully');
    }

    public function update(Request $request,  $product)
    {
        $products = Product::where('name_product', $product)->firstOrFail();
        $params = $request->except('_token');
        $images = $request->file('image_product');

        if ($images == null) {
            
        }else {
            Storage::disk('public')->delete($products->image_product);
            $image = $request->file('image_product');
            $imagePath = $image->store('product_images', 'public');
            $params['image_product'] = $imagePath;
               
        }
      
        $products->update($params);
        return $this->sendResponse(new ProductResource($products), 'The product has been successfully updated');
    }

    public function destroy($product)
    {
      
        $products = Product::where('name_product', $product)->firstOrFail();
        if (!$products) {
            return $this->sendError('Product not found.', [], 404);
        }

        if (!empty($products->image_product)) {
            Storage::delete('public/products/' . $products->image_product);
        }

        $products->delete();

        return $this->sendResponse([], 'Product has been successfully deleted');
    }
}
