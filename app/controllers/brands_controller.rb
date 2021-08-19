class BrandsController < ApplicationController
   rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

   def index 
    brands = Brand.all
    render json:brands, include: [:events]
   end

   def show 
     brand = Brand.find_by(id:params[:id])
     if brand
      render json:brand, include: [:events]
     else render json{error:"Brand not found"},status:not_found 
   end
end
   def create 
    brand = Brand.create!(brand_params)
    render json:brand 
   end

end
