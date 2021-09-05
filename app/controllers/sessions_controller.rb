class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    def create
        #when a user login with username and pd, authenticate the info and find the id, 
        user = User.find_by(username: params[:user][:username])
        if user&.authenticate(params[:user][:password])
            session[:user_id] = user.id
            render json: user, include: [:events]
        else
            render json: { errors: ["Incorrect username and/or password"] }, status: :unauthorized
        end
        # byebug #=> session[:user_id] = 1 , created
    end

    def destroy
        session.delete :user_id
        head :no_content
    end 


end
