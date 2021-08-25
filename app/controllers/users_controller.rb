class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        users = User.all
        render json:users, include: [:events]
    end
    def create 
        user = User.create!(user_params)
        render json:user
    end
    def update
        user = User.find(params[:id])
        user.update!(user_params)
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
 private 
   def user_params 
    params.require(:user).permit(:username,:first_name,:last_name,:email,:password)
   end
end