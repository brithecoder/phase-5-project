class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        users = User.all
        render json:users
    end
    def create 
        user = User.create!(user_params)
        render json:user
    end
    def update
        user = User.find(params[:id])
        user.update!(user_params)
    end
 private 
   def user_params 
    params.permit(:username,:first_name,:last_name,:email,:birthday,:password)
   end
end