class UserEventsController < ApplicationController
    def index
    user_events = UserEvent.all
    render json: user_events
    end
    def create 
        user_events = UserEvent.create(userevent_params)
        render json:user_events
       end
   private 
      def userevent_params 
        params.permit(:user_id,:event_id)
      end
end
