class ApiController < ApplicationController 
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 


    def index 
        response = RestClient.get "https://api.yelp.com/v3/businesses/#{params[:brand]}-#{params[:city]}",headers={
          "Authorization" => "Bearer aiEIhPf7DsNWQLj4LeNKz1XAtXfPlYNeqzjUmJOasRxUmvXyH71wuZq0yRaEyRmbGwTnYEWX0wHtbfPNhvdQ-FpUnKokRyO8VlCMnAj3ttD2M9NnTi-NEHJoZ8MSYXYx"
        }
         result  = JSON.parse(response)
        render json:result
    end 
end